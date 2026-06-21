import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.js';

// `base` lets the site live at a sub-path (GitHub Pages project site, e.g.
// "/One") or at the domain root ("/"). Set via the BASE_PATH env var — the
// Pages workflow sets it automatically; locally it defaults to "/".
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: set this to the live domain so canonical URLs + sitemap are correct.
  site: site.url,
  base,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
