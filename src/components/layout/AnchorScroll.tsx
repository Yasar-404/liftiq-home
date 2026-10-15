"use client";

import { useEffect } from "react";

/**
 * The section id a link points at when it targets the current page, or null.
 * Handles `#trust` and `/#trust` (the form that also works from other routes).
 */
function sameDocumentTarget(link: HTMLAnchorElement): string | null {
  const href = link.getAttribute("href");
  if (!href || href.length < 2 || link.target === "_blank") return null;

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }
  const samePage =
    url.origin === window.location.origin && url.pathname === window.location.pathname;
  return samePage && url.hash.length > 1 ? decodeURIComponent(url.hash.slice(1)) : null;
}

function scrollToSection(id: string, smooth: boolean) {
  const behavior: ScrollBehavior = smooth ? "smooth" : "auto";

  if (id === "top") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  // Honours each section's scroll-margin, so it lands below the fixed header.
  target.scrollIntoView({ behavior, block: "start" });

  // Move keyboard and screen-reader focus to the section, as a real anchor jump would.
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}

/**
 * Keeps the address bar clean: same-page links scroll to their section without
 * adding `#section` to the URL, and a URL that arrives with a hash is tidied
 * once the page has scrolled to it. The hrefs stay in the markup, so links
 * still work without JavaScript. Renders nothing.
 */
export function AnchorScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.("a");
      if (!link) return;
      const id = sameDocumentTarget(link);
      if (!id) return;

      event.preventDefault();
      // Let other click handlers (such as closing the mobile menu and restoring
      // focus) finish first, so focus ends on the section.
      window.setTimeout(() => scrollToSection(id, !reducedMotion.matches), 0);
    };

    document.addEventListener("click", onClick);

    // A URL with a hash (an old or shared link, or one typed into the address
    // bar): re-align the section, since content above it may have shifted since
    // the browser's own jump, then drop the hash. Deferred so it runs after
    // Next.js has synced the URL on start-up.
    let tidy: number | undefined;
    const tidyHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      window.clearTimeout(tidy);
      tidy = window.setTimeout(() => {
        scrollToSection(decodeURIComponent(hash), false);
        const { pathname, search } = window.location;
        window.history.replaceState(window.history.state, "", pathname + search);
      }, 0);
    };

    tidyHash();
    window.addEventListener("hashchange", tidyHash);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", tidyHash);
      window.clearTimeout(tidy);
    };
  }, []);

  return null;
}
