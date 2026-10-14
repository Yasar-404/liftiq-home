# LiftIQ Website

Marketing site for [LiftIQ](https://liftiq.in), gym management software for memberships, payments,
attendance, leads and renewals.

## Stack

- [Next.js](https://nextjs.org) (App Router) and React 19
- TypeScript (strict)
- [Tailwind CSS](https://tailwindcss.com) v4, with design tokens in CSS
- ESLint and Prettier

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Command                | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start the development server      |
| `npm run build`        | Create a production build         |
| `npm run start`        | Serve the production build        |
| `npm run lint`         | Lint with ESLint                  |
| `npm run typecheck`    | Type-check with `tsc`             |
| `npm run format`       | Format the codebase with Prettier |
| `npm run format:check` | Check formatting without changing |

## Project structure

```
src/
  app/                  Routes, root layout, fonts, icons, robots and sitemap
  components/
    layout/             Container, Section, RevealObserver
    navigation/         Header and mobile menu
    footer/             Site footer
    sections/           One folder per landing-page section
    product/            Product previews built from the sample data in data/demo.ts
    ui/                 Reusable primitives (Button, Logo, Reveal, ...)
  data/                 Site config, navigation, and section content
  hooks/                Reusable React hooks
  lib/                  Helpers (class names, formatting, SEO)
  styles/               Design tokens and shared CSS
  types/                Shared TypeScript types
```

## Conventions

- **Content lives in `src/data`.** Components render data; edit copy, navigation, features,
  and contact details there. Brand name, contact details, calls to action and the sign-in URL
  have one source of truth: `data/site.ts`.
- **Only describe what the product does today.** Copy is checked against the LiftIQ app.
  Anything not generally available is labelled (`status` on a feature, or the roadmap list in
  `data/intelligence.ts`). No testimonials, customer logos or performance figures unless they
  are real and verifiable.
- **Product previews use one sample workspace.** `data/demo.ts` holds a fictional gym. Totals,
  counts and percentages are derived from its rows rather than typed in, so every preview
  agrees, and dates are relative ("in 3 days") so nothing looks stale. Change a row and the
  dashboard, the brief and the product tabs update together.
- **Sign-in link.** `site.signInUrl` is empty until the central sign-in is live. Set it and the
  header and mobile menu show a Sign in link.
- **Calls to action** carry a `data-cta` attribute (`hero-demo`, `nav-demo`, `demo-email`, ...)
  so a tag manager can measure clicks without code changes. The site loads no analytics.
- **Design tokens** (colors, radii, shadows, motion) are defined in `src/styles/tokens.css`
  and used through Tailwind utilities such as `bg-surface` and `text-text-muted`. Text colors
  meet WCAG AA; use `text-accent-text` (not `text-accent`) for small accent text and
  `bg-accent-strong` behind white text.
- **CSS layers.** `styles/base.css` is in `@layer base` and shared classes are in
  `@layer components`, so Tailwind utilities always win. Keep new shared CSS inside a layer.
- **Surfaces.** `.band` gives a section a contrasting background to vary the page rhythm;
  `.frame-lit` frames a product visual with a top-lit hairline; `.text-sheen` and
  `.text-gradient-soft` are gradient text for headings. Gradient text is clipped to the
  element's own glyphs, so on word-animated headings pass it to `AnimatedText` as
  `wordClassName`, not `className`.
- **Motion** is CSS only and respects `prefers-reduced-motion`. Scroll reveals (`Reveal`,
  `AnimatedText`) are server components revealed by one `RevealObserver` in the root layout, and
  are gated on a `js` class on `<html>`, so content stays visible without JavaScript. The hero
  text is never animated, so it is readable on first paint.
- **Sections** are exported through `src/components/sections/index.ts` and composed in
  `src/app/page.tsx`, ordered by the questions a gym owner asks while deciding.
- **In-page links** keep the address bar clean. Write them as normal `href="#section-id"`
  links; `AnchorScroll` in the root layout scrolls to the section and moves focus there
  without adding the hash to the URL, and removes a hash a visitor arrives with. Without
  JavaScript they behave as ordinary anchors.

## Deployment

The site is a static Next.js app and deploys to any Next.js host, including Vercel.
Contact details and the production domain are configured in `src/data/site.ts`.
