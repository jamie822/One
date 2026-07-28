import { defineConfig } from 'astro/config';
// 'always': compiled CSS inlines into each page, removing the render-blocking
// round trip Lighthouse charges on slow 4G (proved on ES Elec v2).
export default defineConfig({ build: { inlineStylesheets: 'always' } });
