# LiftIQ — Marketing Site

Premium marketing website for **LiftIQ**, an AI-powered gym management platform.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and
`motion` for interaction design.

## Commands

```bash
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Architecture

```
src/
  app/
    layout.tsx        # fonts, metadata, JSON-LD
    page.tsx          # composes the landing sections
    globals.css       # design tokens + primitives + reduced-motion
    sitemap.ts / robots.ts
  components/
    layout/           # Container, Section
    navigation/       # Navbar, MobileMenu
    hero/             # Hero + supporting motion pieces
    sections/         # one file per landing section (03–12)
    features/         # FeatureCard
    product/          # marketing UI mockups (dashboard, AI chat, charts)
    contact/          # ContactSection
    footer/           # Footer
    ui/               # Button, Badge, Marquee, AnimatedCounter, Reveal, Logo, icons, Backdrop
  data/               # copy + config, kept out of components
  hooks/              # useScrolled, useReducedMotion, useInViewOnce
  lib/                # cn(), shared motion variants
  types/              # shared TS types
```

## Design system

Tokens live in `src/app/globals.css` under `@theme` (colors, radius, shadow,
motion, container widths) and are consumed as Tailwind utilities
(`bg-surface`, `text-text-muted`, `border-border`, …).

## Motion

- Scroll reveals are CSS-animation driven (`Reveal` + `useInViewOnce`) — no JS
  animation on the critical path.
- Richer sequences (hero, tabs, ecosystem, AI copilot) use `motion`.
- Everything collapses to a static experience under
  `prefers-reduced-motion: reduce`.

## Content

All contact details, nav, features, and product-tab copy are data files in
`src/data/`. Demo data shown in product mockups is clearly labelled and contains
no real personal information.
