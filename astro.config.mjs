import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.js';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: set this to the live domain so canonical URLs + sitemap are correct.
  site: site.url,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
