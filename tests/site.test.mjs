/**
 * Black-box checks of the built site: the one-page structure, hash navigation
 * targets, redirects, metadata and the sitemap. No dependencies; uses Node's
 * built-in test runner and fetch.
 *
 *   npm run build && npm run start      # in one terminal
 *   BASE_URL=http://localhost:3000 npm test
 *
 * These test the HTML the server sends. Scrolling, focus, animation and layout
 * need a browser and are checked separately (see README, "Checks").
 */
import assert from "node:assert/strict";
import { before, describe, it } from "node:test";

const BASE = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const CANONICAL = "https://liftiq.in";

/** Section ids that navigation and calls to action point at. */
const NAV_IDS = ["platform", "ai", "benefits", "security"];
const CTA_ID = "contact";

/** Addresses that briefly existed as separate pages and must now redirect. */
const MOVED = {
  "/platform": "/#platform",
  "/ai-insights": "/#ai",
  "/features": "/#platform",
  "/security": "/#security",
};

const get = (path, init) => fetch(BASE + path, { redirect: "manual", ...init });

describe("homepage", () => {
  let html;

  before(async () => {
    const res = await get("/");
    assert.equal(res.status, 200);
    html = await res.text();
  });

  it("has exactly one h1", () => {
    assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
  });

  it("has a title, description and canonical URL on the primary domain", () => {
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]{40,}"/);
    assert.match(html, new RegExp(`<link rel="canonical" href="${CANONICAL}/?"`));
    assert.match(html, new RegExp(`<meta property="og:url" content="${CANONICAL}/?"`));
    assert.match(html, /<meta property="og:image" content="[^"]+"/);
  });

  it("has an element for every section the navigation points at", () => {
    for (const id of [...NAV_IDS, CTA_ID, "top", "main"]) {
      assert.match(html, new RegExp(` id="${id}"`), `missing #${id}`);
    }
  });

  it("links the navigation to those sections as plain anchors", () => {
    for (const id of NAV_IDS) {
      assert.match(html, new RegExp(`<a[^>]*href="/#${id}"`), `no link to /#${id}`);
    }
  });

  it("never links to a fragment that does not exist", () => {
    const ids = new Set([...html.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]));
    const targets = [...html.matchAll(/href="(?:\/)?#([^"]+)"/g)].map((m) => m[1]);
    assert.ok(targets.length > 10, "expected many in-page links");
    const broken = [...new Set(targets)].filter((t) => !ids.has(t));
    assert.deepEqual(broken, []);
  });

  it("keeps the demo call to action on the working mechanisms", () => {
    assert.match(
      html,
      /href="\/#contact"[^>]*data-cta="hero-demo"|data-cta="hero-demo"[^>]*href="\/#contact"/,
    );
    assert.match(html, /href="mailto:[^"?]+\?subject=/);
    assert.match(html, /href="tel:\+?\d+"/);
  });

  it("spells the brand consistently and shows the agreed location", () => {
    assert.doesNotMatch(html, /Lift IQ/);
    assert.match(html, /Tamil Nadu, India/);
    assert.doesNotMatch(html, /Sholinganallur|Chennai/);
  });

  it("keeps the content of the former pages in short form", () => {
    // Headings are split into word spans, so compare against the text content.
    const text = html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&#x27;|&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ");
    const expected = [
      "One workspace for the whole gym", // platform
      "Less admin. A clearer picture. Members who stay", // benefits
      "Start the day knowing what matters", // AI insights
      "Every control, in detail", // security
    ];
    for (const phrase of expected) assert.ok(text.includes(phrase), `missing: ${phrase}`);
  });
});

describe("routes", () => {
  for (const [from, to] of Object.entries(MOVED)) {
    it(`${from} redirects to ${to} instead of serving a page`, async () => {
      const res = await get(from);
      assert.ok([301, 302, 307, 308].includes(res.status), `status ${res.status}`);
      const location = res.headers.get("location") ?? "";
      assert.ok(location.endsWith(to), `location ${location}`);
    });
  }

  it("returns 404 for routes that do not exist", async () => {
    for (const path of ["/does-not-exist", "/product", "/benefits", "/platform/extra"]) {
      assert.equal((await get(path)).status, 404, path);
    }
  });

  it("marks the 404 page noindex", async () => {
    const html = await (await get("/does-not-exist")).text();
    assert.match(html, /<meta name="robots" content="noindex/);
  });
});

describe("crawlers", () => {
  it("lists only the homepage in the sitemap", async () => {
    const xml = await (await get("/sitemap.xml")).text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/\/$/, ""));
    assert.deepEqual(urls, [CANONICAL]);
  });

  it("allows indexing and points at the sitemap", async () => {
    const txt = await (await get("/robots.txt")).text();
    assert.match(txt, /Allow: \//);
    assert.match(txt, /Sitemap: https:\/\/liftiq\.in\/sitemap\.xml/);
  });

  it("serves the social preview image", async () => {
    const res = await get("/opengraph-image");
    assert.equal(res.status, 200);
    assert.match(res.headers.get("content-type") ?? "", /image\/png/);
  });
});
