# Off The Tools — Brand & Website

> **Stop being the business. Start owning one.**
> Premium "Dark Luxe" brand + website for **Off The Tools** — websites & online
> presence for electricians who want to get off the tools.

Built with [Astro](https://astro.build) (fast static output). Auto-deploys to
GitHub Pages on every push.

- 🎨 **Brand system:** [BRAND.md](BRAND.md) — palette, type, logo, voice, photography
- 🧰 **Reusable template:** [TEMPLATE.md](TEMPLATE.md) — spin up future client sites
- 🖼️ **Platform image kit:** `/brand-assets/` (regenerate: `node brand/render.mjs`)

## ✏️ Edit everything in one place

**`src/data/site.js`** holds the brand, contact, social links, pain points,
services, packages, story and FAQs. Brand colour is one value (`brandColor`),
injected onto `<html>` so it recolours the whole site instantly.

## 🌐 Live site

Auto-deploys via `.github/workflows/deploy.yml` →
`https://jamie822.github.io/One/`. Base-path aware, so it also works on a custom
domain at the root (set `site.url` + leave `BASE_PATH` unset).

## 🖥️ Pages

Home (animated hero) · My Story · What We Do · Packages · Book a Call (+ 404).

## 🛠️ Commands

```bash
npm install      # install
npm run dev      # local dev (http://localhost:4321)
npm run build    # production build -> ./dist
npm run preview  # preview the build
node brand/render.mjs   # regenerate /brand-assets/*.png
```

## 🖼️ Photography

This is a personal brand — real photos of the founder are central (see
[BRAND.md §6](BRAND.md)). Drop graded images into `public/images/` and point
`heroImage`, `storyImage`, `ctaImage`, `founder.photo` at them in `site.js`.
Placeholders show until then.
