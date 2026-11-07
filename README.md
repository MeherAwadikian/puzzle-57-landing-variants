# puzzle-57-landing-variants

Puzzle #57 (2026-03-13) of the Task Forge series: **deploy three landing-page
versions as separate Next.js routes** (an A/B/C test for one product).

One Next.js App Router app exposes three genuinely distinct landing pages for
the same product (**Forge Studio**), each at its own route. Same product facts,
different headline, layout, and call to action, the way a real A/B/C test
varies only the pitch.

| Route | Variant | Treatment | Headline | CTA |
| ----- | ------- | --------- | -------- | --- |
| `/a` | bold | Centered, violet gradient hero, single CTA, three feature cards (light) | "Ship a landing page before your coffee gets cold." | Start building free |
| `/b` | benefit-led | Split two-column, emerald, benefit checklist + dark results panel, dual CTA (light) | "Stop guessing which page converts. Test all three." | See it split traffic |
| `/c` | editorial | Narrow left column, dark theme, serif headline, pulled testimonial, amber ghost CTA | "The marketing team that never files a ticket." | Read the manifesto |

`/` is an overview that links to all three. A sticky switcher on every page
lets you jump between the variants.

## Architecture

- `app/product.ts` — single source of truth. The shared product facts (metrics,
  features) and the per-variant positioning (headline/subhead/CTA/accent) live
  here, so the three pages are provably the same product with a different pitch.
- `app/a/`, `app/b/`, `app/c/` — one route segment per variant, each with its
  own `page.tsx` + CSS Module and its own `metadata` export (distinct `<title>`
  and description per variant, server-rendered).
- `app/page.tsx` — the overview/index.
- `app/VariantSwitch.tsx` — shared A/B/C switcher.

All four routes prerender to static HTML at build time (`○ (Static)`).

## Run locally

```bash
npm install
npm run build     # next build (Turbopack) — passes clean
npm run start     # serves the production build
# open http://localhost:3000/a  /b  /c  and  /
```

## Verification (done live, not asserted)

- `next build` compiles clean; all of `/`, `/a`, `/b`, `/c` prerender static.
- `next start` serves the production build; each route returns HTTP 200 with a
  distinct `<title>`, `<h1>`, `data-variant`, and CTA.
- Real Chromium (Playwright) loaded each route and confirmed the rendered
  variants are visually distinct: center vs left alignment, violet vs emerald
  vs amber CTA colours, light vs dark backgrounds, sans vs serif headline on
  `/c`, and different column widths (980 / 1120 / 720px). Screenshots captured
  per route.

## Deploy

Target platform is **Vercel**. This repo is Vercel-ready as-is (Next.js App
Router, default server output): `vercel --prod` deploys it once the Vercel CLI
is authenticated.

A static-export mode is also included for a GitHub Pages fallback deploy:

```bash
PAGES_EXPORT=1 npm run build    # emits ./out with basePath /puzzle-57-landing-variants
```

See the series tracker for the live deploy status of this specific run.
