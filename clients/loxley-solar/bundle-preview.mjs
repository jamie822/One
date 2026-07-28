// Bundle dist/ into one self-contained preview HTML for the temp share link.
// No iframes: the artifact host sizes pages by content height, so the site
// pages are swapped directly into the document flow and their inline scripts
// re-executed on each switch. Fonts/images are deduped data-URI tokens.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const DIST = resolve('dist');
const OUT = process.argv[2] || '/tmp/preview.html';

const SITE = {
  title: 'Loxley Solar — temp preview',
  brand: 'Loxley Solar',
  note: 'Demo data marked TEMP swaps before go-live. Estimator maths uncalibrated; form runs in email mode.',
  bar: { ground: '#0f3b2e', surface: '#14462f', edge: '#275940', ink: '#f2f7f1', soft: '#b9ccbe', accent: '#f5b301', onAccent: '#1a2420' },
};
const ROUTES = [
  { key: 'home', label: 'Home', path: '/', file: 'index.html' },
  { key: 'services', label: 'Services', path: '/services/', file: 'services/index.html' },
  { key: 'about', label: 'About', path: '/about/', file: 'about/index.html' },
  { key: 'blog', label: 'Blog', path: '/blog/', file: 'blog/index.html' },
  { key: 'post', label: 'Solar costs', path: '/blog/solar-panel-cost-sheffield/', file: 'blog/solar-panel-cost-sheffield/index.html' },
  { key: 'notfound', label: '404', path: '/404.html', file: '404.html' },
];

const MIME = { woff2: 'font/woff2', webp: 'image/webp', svg: 'image/svg+xml', png: 'image/png' };
const assets = {};
let tokenN = 0;
const tokenFor = {};
function assetToken(path) {
  if (tokenFor[path]) return tokenFor[path];
  const f = resolve(DIST, '.' + path);
  if (!existsSync(f)) throw new Error('asset missing: ' + path);
  const ext = path.split('.').pop();
  const tok = `@@A${tokenN++}@@`;
  assets[tok] = `data:${MIME[ext]};base64,${readFileSync(f).toString('base64')}`;
  tokenFor[path] = tok;
  return tok;
}

const pages = {};
for (const r of ROUTES) {
  let html = readFileSync(resolve(DIST, r.file), 'utf8');
  html = html.replace(/<link rel="preload"[^>]*\/?>/g, '');
  html = html.replace(/srcset="([^"]+)"\s*sizes="[^"]*"/g, (m, set) => {
    const last = set.split(',').pop().trim().split(/\s+/)[0];
    return `data-collapsed-src="${last}"`;
  });
  html = html.replace(/src="(\/[^"]+\.(?:webp|svg|png))"/g, (m, p) => `src="${assetToken(p)}"`);
  html = html.replace(/data-collapsed-src="(\/[^"]+)"/g, (m, p) => { assetToken(p); return `src="${tokenFor[p]}"`; });
  html = html.replace(/url\('?(\/fonts\/[^')]+)'?\)/g, (m, p) => `url('${assetToken(p)}')`);
  // head styles carry the page CSS (inlineStylesheets: always)
  const head = html.slice(0, html.indexOf('</head>'));
  const css = [...head.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('\n');
  const body = html.slice(html.indexOf('<body>') + 6, html.lastIndexOf('</body>'));
  pages[r.path] = { css, body };
}

const shell = `<title>${SITE.title}</title>
<style>
  body { margin: 0; padding: 0; }
  .pv-bar {
    display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
    padding: 10px 16px;
    background: ${SITE.bar.ground}; color: ${SITE.bar.ink};
    border-bottom: 1px solid ${SITE.bar.edge};
    font: 500 14px/1.4 system-ui, sans-serif;
  }
  .pv-bar .brand { font-weight: 700; letter-spacing: -.01em; }
  .pv-bar .brand small { color: ${SITE.bar.soft}; font-weight: 500; margin-left: 8px; }
  .pv-bar nav { display: flex; gap: 4px; flex-wrap: wrap; margin-left: auto; }
  .pv-bar button {
    font: 600 13px system-ui, sans-serif; color: ${SITE.bar.soft};
    background: transparent; border: 1px solid transparent; border-radius: 999px;
    padding: 7px 14px; cursor: pointer;
  }
  .pv-bar button:hover { color: ${SITE.bar.ink}; border-color: ${SITE.bar.edge}; }
  .pv-bar button[aria-current="true"] { color: ${SITE.bar.onAccent}; background: ${SITE.bar.accent}; }
  .pv-bar button:focus-visible { outline: 2px solid ${SITE.bar.accent}; outline-offset: 2px; }
  .pv-bar .note { color: ${SITE.bar.soft}; font-size: 12px; width: 100%; }
  @media (min-width: 900px) { .pv-bar .note { width: auto; } }
</style>
<style id="pv-page-css"></style>
<div class="pv-bar">
  <span class="brand">${SITE.brand}<small>temp preview · Stacked Out</small></span>
  <nav id="pv-tabs" aria-label="Preview pages"></nav>
  <span class="note">${SITE.note}</span>
</div>
<div id="pv-stage"></div>
<script>
  var ASSETS = ${JSON.stringify(assets).replace(/</g, '\\u003c')};
  var PAGES = ${JSON.stringify(pages).replace(/</g, '\\u003c')};
  var ROUTES = ${JSON.stringify(ROUTES.map(({ key, label, path }) => ({ key, label, path })))};
  var stage = document.getElementById('pv-stage');
  var pageCss = document.getElementById('pv-page-css');
  var tabs = document.getElementById('pv-tabs');

  function hydrate(s) { return s.replace(/@@A\\d+@@/g, function (t) { return ASSETS[t]; }); }

  function show(path) {
    var anchor = '';
    if (path.indexOf('#') !== -1) {
      anchor = path.slice(path.indexOf('#') + 1);
      path = path.slice(0, path.indexOf('#')) || '/';
    }
    var route = ROUTES.find(function (r) { return r.path === path; }) || ROUTES[0];
    var page = PAGES[route.path];
    pageCss.textContent = hydrate(page.css);
    stage.innerHTML = hydrate(page.body);
    // innerHTML never runs scripts: recreate them so the page behaves.
    stage.querySelectorAll('script').forEach(function (old) {
      var s = document.createElement('script');
      s.textContent = old.textContent;
      old.replaceWith(s);
    });
    tabs.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-current', String(b.dataset.path === route.path));
    });
    if (anchor) {
      var t = document.getElementById(anchor);
      if (t) t.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }

  ROUTES.forEach(function (r) {
    var b = document.createElement('button');
    b.textContent = r.label; b.dataset.path = r.path;
    b.addEventListener('click', function () { show(r.path); });
    tabs.appendChild(b);
  });

  // Internal site links switch pages; anchors, tel: and mailto: stay native.
  stage.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.charAt(0) === '/') { e.preventDefault(); show(href); }
  }, true);

  show('/');
</script>`;

writeFileSync(OUT, shell);
console.log('wrote', OUT, Math.round(shell.length / 1024) + 'KB,', Object.keys(assets).length, 'assets');
