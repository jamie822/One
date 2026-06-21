# H H Electrical — Website

A fast, SEO-optimised 4-page brochure website (Home, Services, About, Contact)
built with [Astro](https://astro.build). Static output — cheap and easy to host
on Netlify, Cloudflare Pages, GitHub Pages, Vercel or any static host.

Built in the agency **house style** (layout modelled on wyelectrical.co.uk) and
recoloured per client. To reuse this for another client, see **[TEMPLATE.md](TEMPLATE.md)**.

## 🌐 Live deploy (GitHub Pages)

Pushing to the working branch auto-builds and publishes via
`.github/workflows/deploy.yml`. **One-time setup:** repo **Settings → Pages →
Source: "GitHub Actions"**. The site then goes live at
`https://<owner>.github.io/<repo>/`. (Links/assets are base-path aware, so it
works at a sub-path *and* on a custom domain at the root.)

## ✏️ Edit business details in ONE place

Open **`src/data/site.js`** — business name, phone, email, location, service
area, accreditations, opening hours, owner info and the full service list all
live there. Everything marked `// TODO` is a placeholder to replace with the
real details.

> 🔑 **For local SEO**, the most important fields to get right are
> `address.locality`, `areaServed`, `phone`, `email` and `url`.

## 🖼️ Adding photos

The site ships with clearly-marked placeholder image slots (owner photo, job
gallery, hero image). To use real photos:

1. Save the image into `public/images/` (e.g. `public/images/owner.jpg`).
2. Point to it — e.g. set `owner.photo: '/images/owner.jpg'` in `src/data/site.js`,
   or swap the relevant `<Placeholder>` for an `<img>` in the page.

## 📨 Contact form

The contact form (`src/pages/contact.astro`) needs a backend to send messages.
Easiest no-code options:
- **Formspree** — set the form `action` to your Formspree endpoint.
- **Netlify Forms** — add the `netlify` attribute if hosting on Netlify.

## 🚀 Develop & build

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:4321)
npm run build    # production build -> ./dist
npm run preview  # preview the production build
```

## 🔍 SEO features baked in

- Per-page `<title>`, meta description, canonical URLs
- Open Graph + Twitter card tags
- schema.org `Electrician` / `LocalBusiness` structured data + service `ItemList`
- Auto-generated `sitemap-index.xml` (`@astrojs/sitemap`)
- `robots.txt`, semantic HTML, mobile-first responsive, fast static pages

> After deploying, set the real domain in **`src/data/site.js` (`url`)** and in
> `public/robots.txt`, then submit the sitemap in Google Search Console.
