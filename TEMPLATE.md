# 🧰 Electrician Website — Reusable Starter Template

This repo doubles as the **house template** for all client websites. The design,
layout, sections, SEO and conversion flow are fixed (modelled on
[wyelectrical.co.uk](https://wyelectrical.co.uk)); only the **content and brand
colour** change per client.

## 🏠 House rules

1. **Layout is the template — colour is per-client.** Reuse the structure, CTAs,
   sections and components on every build. **Never** reuse one client's brand
   colour on another site.
2. **One config file.** Almost everything a client needs lives in
   [`src/data/site.js`](src/data/site.js). Avoid hard-coding business details
   into pages.
3. **Photos make or break it.** The dark hero/van bands and gallery are designed
   for real photography. Add the client's own images as early as possible.

## 🚀 Spin up a new client site

1. **Copy the repo** (new repo, or `Use this template` on GitHub).
2. **Edit `src/data/site.js`** — every `// TODO` is a placeholder:
   - `name`, `legalName`, `tagline`, `brandStatement`
   - **`brandColor` + `brandColorDark`** ← the client's own colour (recolours the
     whole site instantly; it's injected onto `<html>`)
   - `phone`, `email`, `hoursShort`, socials
   - `address` + `areaServed` ← **most important for local SEO**
   - `accreditations`, `googleRating`, `reviewCount`
   - `services`, `process`, `testimonials`, `faqs`
3. **Add images** to `public/images/` and point `heroImage`, `vanImage`,
   `owner.photo` (and gallery `<img>`s) at them. Slots show a clear placeholder
   until you do.
4. **Wire the contact form** in `src/pages/contact.astro` to Formspree or
   Netlify Forms (replace the `action`).
5. **Set the real domain** in `site.url` (used for canonical URLs + sitemap).

## 🎨 Rebranding colour — the only visual change

```js
// src/data/site.js
brandColor: '#1668ff',      // ← client's primary colour
brandColorDark: '#0b4fd1',  // ← a slightly darker shade for hovers
```

That's it. Pills, links, icons, the reviews band, highlights and accents all
follow `--brand` automatically.

## 🧱 What's in the box

- **Pages:** Home, Services, About, Contact (+ styled 404)
- **Components:** `TopBar`, `Header`, `Footer`, `Hero`, `Placeholder`,
  `CtaBand`, `Icon` (inline SVG set — no icon library)
- **Sections:** photo hero w/ Google rating, trust-chip row, service cards,
  why-us split, dark numbered booking steps, brand-colour reviews band, gallery,
  FAQ accordion, owner/van CTA band
- **SEO:** per-page meta, Open Graph + Twitter, schema.org
  `Electrician` / `FAQPage` / service `ItemList`, sitemap, robots.txt
- **Base-path aware** links/assets (works on a domain root *or* a GitHub Pages
  sub-path) via [`src/lib/href.js`](src/lib/href.js)

## 🌐 Deploy

- **GitHub Pages (built-in):** push to the working branch — the workflow in
  `.github/workflows/deploy.yml` builds and publishes automatically. One-time:
  repo **Settings → Pages → Source: GitHub Actions**. URL:
  `https://<owner>.github.io/<repo>/`.
- **Netlify / Cloudflare Pages / Vercel:** build `npm run build`, publish `dist`.
  These serve at the domain root, so leave `BASE_PATH` unset (defaults to `/`).

## 🛠️ Commands

```bash
npm install      # install
npm run dev      # local dev (http://localhost:4321)
npm run build    # production build -> ./dist
npm run preview  # preview the build
```
