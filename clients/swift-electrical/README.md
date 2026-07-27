# Electrician Client Website — Starter

The brand-neutral Astro starter every client site is built from. Nothing in here
is tied to any one client or to the Off The Tools brand: colour, content,
services, areas and proof all come from **one config file**.

Use it alongside [`/MASTER_PROMPT.md`](../MASTER_PROMPT.md) (the build brief)
and [`/RESEARCH.md`](../RESEARCH.md) (why it's built this way).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Spinning up a client

1. Copy this folder to a new repo.
2. Fill in Part 1 of `MASTER_PROMPT.md` with the client's details.
3. Work through **`src/data/client.js`** — it drives the entire site.
4. Drop photos into `public/images/` and point the config at them.
5. Point the contact form at Formspree or Netlify Forms.
6. Set `client.url` to the real domain, and update `public/robots.txt`.
7. Run through the Definition of Done in `MASTER_PROMPT.md` Part 10.

## What's generated

| Route | Source | Notes |
|---|---|---|
| `/` | `pages/index.astro` | Live hero, trust bar, services, owner, case studies, reviews, areas, FAQ |
| `/services/` + `/services/<slug>/` | `services` array | One page per service |
| `/areas/` + `/areas/<slug>/` | `areas` array | **The ranking engine** — one page per town |
| `/industries/` + `/industries/<slug>/` | `industries` array | Commercial verticals. Leave empty to skip |
| `/case-studies/` + `/case-studies/<slug>/` | `caseStudies` array | Before/after, named client, real quote |
| `/reviews/` `/about/` `/contact/` `/privacy/` `/404` | individual files | |

Adding a town to `areas` creates its page, adds it to the footer, the home page,
the services pages and the sitemap. No other edits needed.

## The three things that make this different from competitors

Research across 21 UK electrician sites (see `RESEARCH.md`) found the same gaps
everywhere. The template closes them by default.

**1. Location pages that aren't templated.** Every competitor produces
near-identical location pages — one Leeds firm runs five keyword variants of the
same page. Here, each area needs `landmarks` (real streets) and `housingStock`
(the actual electrical characteristics of local property). If those are missing,
the page renders a visible "not ready to publish" warning instead of shipping
thin content.

**2. The owner, by name and face.** Almost no UK electrician site does this.
The home page and About page both have a dedicated owner section with `Person`
schema. A missing photo renders an obvious placeholder rather than quietly
shipping.

**3. Proof that's real or absent.** `google.rating` starts as `null`. Until you
set a genuine figure, the trust bar and titles simply omit it. The reviews array
starts empty and renders a warning rather than placeholder testimonials — those
have a habit of going live by accident.

## Performance and SEO, built in

- **`Electrician` schema**, not generic `LocalBusiness`. Plus `Service` per
  service page, `BreadcrumbList` on nested pages, `FAQPage` on home, `Person`
  on about.
- **No `aggregateRating` markup.** Marking up self-collected reviews against
  your own entity is a Google penalty risk. Only add it when the rating is
  genuinely third-party sourced.
- **Service-area aware.** Set `showAddress: false` and the street address is
  omitted from schema, matching a hidden Google Business Profile address.
- **Rating in every page title** when genuine — a trick borrowed from the
  best-performing London competitor.
- Unique title and meta per page, self-referencing canonicals, auto sitemap.

### Motion without breaking Core Web Vitals

The hero animates, but nothing that animates is on the critical path.

- The `<h1>` is the LCP element. Never animated, never delayed.
- Hero photo is `loading="eager"` + `fetchpriority="high"`.
- Ken Burns is a CSS `transform` — GPU composited, zero layout cost.
- The circuit trace is an SVG `stroke-dashoffset` animation. No JS at all.
- Scroll reveals use `IntersectionObserver`, never a scroll handler, so they
  can't hurt INP.
- `prefers-reduced-motion: reduce` disables everything and shows the static
  end state.

Total JS shipped: roughly 40 lines, inline. No framework, no animation library.

## Brand

```js
brandColor: '#c2410c',   // pick something ownable
mode: 'dark',            // or 'light'
```

Both cascade through the entire site. **Don't default to trade-blue** — research
found nearly every UK electrician site uses it. See
`.claude/skills/aesthetic-anchors` for picking a direction deliberately.

## When photography is thin

Most clients supply phone photos or nothing. The hero degrades in layers:
gradient wash → client photo with slow drift → animated circuit trace →
staggered text. With no photo at all the gradient and trace carry it, and
typography does the work. Every missing image renders a labelled placeholder so
gaps are visible in review rather than shipping silently.

## Deploy

Netlify, Cloudflare Pages or Vercel: build `npm run build`, publish `dist`.
Leave `BASE_PATH` unset for a domain root. For a GitHub Pages project sub-path,
set `BASE_PATH=/repo-name/`.
