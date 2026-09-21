# LiftIQ Website

Marketing site for [LiftIQ](https://liftiq.in), a gym management platform for memberships,
attendance, billing, CRM, communication, and analytics.

## Stack

- [Next.js](https://nextjs.org) (App Router) and React 19
- TypeScript (strict)
- [Tailwind CSS](https://tailwindcss.com) v4, with design tokens in CSS
- [Motion](https://motion.dev) for interaction animations
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
    layout/             Container, Section, MotionProvider
    navigation/         Header and mobile menu
    footer/             Site footer
    sections/           One folder per landing-page section
    product/            Product UI mockups (dashboard, AI chat, charts)
    ui/                 Reusable primitives (Button, Logo, Reveal, ...)
  data/                 Site config, navigation, and section content
  hooks/                Reusable React hooks
  lib/                  Helpers (class names, motion presets, SEO)
  styles/               Design tokens and shared CSS
  types/                Shared TypeScript types
```

## Conventions

- **Content lives in `src/data`.** Components render data; edit copy, navigation, features,
  and contact details there. Sample figures shown in the product mockups (`data/demo.ts`) are
  placeholders, not customer data.
- **Design tokens** (colors, radii, shadows, motion) are defined in `src/styles/tokens.css`
  and used through Tailwind utilities such as `bg-surface` and `text-text-muted`.
- **Motion** respects `prefers-reduced-motion`. Scroll reveals are gated on a `js` class on
  `<html>` (set in the root layout), so content stays visible without JavaScript.
- **Sections** are exported through `src/components/sections/index.ts` and composed in
  `src/app/page.tsx`.

## Deployment

The site is a static Next.js app and deploys to any Next.js host, including Vercel.
Contact details and the production domain are configured in `src/data/site.ts`.
