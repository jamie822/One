import { defineConfig } from 'astro/config';
// 'always': the compiled CSS is ~16KB, and inlining it removes the one
// render-blocking round trip Lighthouse charges us for on slow 4G.
export default defineConfig({ build: { inlineStylesheets: 'always' } });
