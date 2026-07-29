import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { client } from './src/data/client.js';

// Set client.url to the real domain before launch — canonicals and the
// sitemap both derive from it.
export default defineConfig({
  site: client.url,
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
