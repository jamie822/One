import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { client } from './src/data/client.js';

// Set client.url to the real domain before launch — canonicals and the
// sitemap both derive from it.
//
// `site` must be the ORIGIN only. client.url is "https://…/One/" because the
// preview is a GitHub Pages project site, and handing Astro a site with a path
// while `base` separately carries that same path made the sitemap emit
// https://host/areas/… for pages actually served at https://host/One/areas/… —
// 22 URLs, every one of them wrong. Origin here, path via `base`, joined once.
const { origin } = new URL(client.url);

export default defineConfig({
  site: origin,
  base: process.env.BASE_PATH || '/',
  // No lastmod, changefreq or priority, on purpose. Google ignores the last two
  // outright, and only honours lastmod when it is verifiably accurate — a build
  // timestamp stamped identically across all 22 URLs is exactly the uniform,
  // unverifiable value that gets the signal discounted. Better absent.
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
