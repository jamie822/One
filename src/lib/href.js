// Base-path-aware link helper.
// Lets the site work both at the domain root (custom domain, base "/") and at a
// sub-path (GitHub Pages project site, e.g. "/One"). The base is set by Astro
// from `base` in astro.config.mjs (driven by the BASE_PATH env var).
//
// Usage in .astro files:  import { href } from '../lib/href.js';  href('/services')

export function href(path = '/') {
  // Pass through anything that isn't an internal absolute path.
  if (
    /^(https?:|mailto:|tel:|#)/.test(path) ||
    path.startsWith('//')
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const b = base.endsWith('/') ? base.slice(0, -1) : base; // strip trailing slash
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}` || '/';
}
