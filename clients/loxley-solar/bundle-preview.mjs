// Bundle dist/ into one self-contained preview HTML for the temp share link.
// Each route ships byte-faithful inside an iframe (own CSS/JS intact); fonts
// and images are deduped into one token map so the file stays small.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const DIST = resolve('dist');
const OUT = process.argv[2] || '/tmp/es-elec-preview.html';

const ROUTES = [
  { key: 'home', label: 'Home', path: '/', file: 'index.html' },
  { key: 'services', label: 'Services', path: '/services/', file: 'services/index.html' },
  { key: 'about', label: 'About', path: '/about/', file: 'about/index.html' },
  { key: 'blog', label: 'Blog', path: '/blog/', file: 'blog/index.html' },
  { key: 'post', label: 'Solar costs', path: '/blog/solar-panel-cost-sheffield/', file: 'blog/solar-panel-cost-sheffield/index.html' },
  { key: 'notfound', label: '404', path: '/404.html', file: '404.html' },
];

const MIME = { woff2: 'font/woff2', webp: 'image/webp', svg: 'image/svg+xml', png: 'image/png' };
const assets = {}; // token -> data URI
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

const LINK_SHIM = `<script>
(function(){
  document.addEventListener('click', function(e){
    var a = e.target.closest('a'); if(!a) return;
    var href = a.getAttribute('href') || '';
    if (href.startsWith('/')) {
      e.preventDefault();
      parent.postMessage({ preview: href }, '*');
    }
  }, true);
})();
<\/script>`;

const pages = {};
for (const r of ROUTES) {
  let html = readFileSync(resolve(DIST, r.file), 'utf8');
  // strip preloads (paths would 404 inside the shell)
  html = html.replace(/<link rel="preload"[^>]*\/?>/g, '');
  // collapse srcset imgs to their largest candidate
  html = html.replace(/srcset="([^"]+)"\s*sizes="[^"]*"/g, (m, set) => {
    const last = set.split(',').pop().trim().split(/\s+/)[0];
    return `data-collapsed-src="${last}"`;
  });
  html = html.replace(/src="(\/[^"]+\.(?:webp|svg|png))"/g, (m, p) => `src="${assetToken(p)}"`);
  html = html.replace(/data-collapsed-src="(\/[^"]+)"/g, (m, p) => { assetToken(p); return `src="${tokenFor[p]}"`; });
  html = html.replace(/url\('?(\/fonts\/[^')]+)'?\)/g, (m, p) => `url('${assetToken(p)}')`);
  html = html.replace(/<link rel="icon"[^>]*\/?>/g, '');
  html = html.replace('</body>', LINK_SHIM + '</body>');
  pages[r.path] = html;
}

const shell = `<title>Loxley Solar — temp preview</title>
<style>
  :root {
    --ground: #0f3b2e; --surface: #14462f; --edge: #275940;
    --ink: #f2f7f1; --ink-soft: #b9ccbe; --accent: #f5b301;
  }
  html, body { height: 100%; }
  body { margin: 0; background: var(--ground); color: var(--ink);
    font: 500 14px/1.4 system-ui, sans-serif; display: flex; flex-direction: column; }
  header { display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
    padding: 10px 16px; border-bottom: 1px solid var(--edge); background: var(--ground); }
  .brand { font-weight: 700; letter-spacing: -.01em; }
  .brand small { color: var(--ink-soft); font-weight: 500; margin-left: 8px; }
  nav { display: flex; gap: 4px; flex-wrap: wrap; margin-left: auto; }
  nav button { font: 600 13px system-ui, sans-serif; color: var(--ink-soft);
    background: transparent; border: 1px solid transparent; border-radius: 999px;
    padding: 7px 14px; cursor: pointer; }
  nav button:hover { color: var(--ink); border-color: var(--edge); }
  nav button[aria-current="true"] { color: #1a2420; background: var(--accent); }
  nav button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  iframe { flex: 1; width: 100%; border: 0; background: #fbfaf7; }
  .note { color: var(--ink-soft); font-size: 12px; width: 100%; }
  @media (min-width: 900px) { .note { width: auto; } }
</style>
<header>
  <span class="brand">Loxley Solar<small>temp preview · Stacked Out</small></span>
  <nav id="tabs" aria-label="Preview pages"></nav>
  <span class="note">Demo data marked TEMP swaps before go-live. Estimator maths uncalibrated; form runs in email mode.</span>
</header>
<iframe id="frame" title="Loxley Solar site preview"></iframe>
<script>
  var ASSETS = ${JSON.stringify(assets).replace(/</g, '\\u003c')};
  var PAGES = ${JSON.stringify(pages).replace(/</g, '\\u003c')};
  var ROUTES = ${JSON.stringify(ROUTES.map(({ key, label, path }) => ({ key, label, path })))};
  var frame = document.getElementById('frame');
  var tabs = document.getElementById('tabs');

  function hydrate(html) {
    return html.replace(/@@A\\d+@@/g, function (t) { return ASSETS[t]; });
  }
  function show(path) {
    var route = ROUTES.find(function (r) { return r.path === path; }) || ROUTES[0];
    var anchor = '';
    if (path.indexOf('#') !== -1) {
      anchor = path.slice(path.indexOf('#'));
      path = path.slice(0, path.indexOf('#')) || '/';
      route = ROUTES.find(function (r) { return r.path === path; }) || ROUTES[0];
    }
    frame.srcdoc = hydrate(PAGES[route.path]);
    if (anchor) frame.addEventListener('load', function go() {
      frame.removeEventListener('load', go);
      try { frame.contentWindow.location.hash = anchor; } catch (e) {}
    });
    tabs.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-current', String(b.dataset.path === route.path));
    });
  }
  ROUTES.forEach(function (r) {
    var b = document.createElement('button');
    b.textContent = r.label; b.dataset.path = r.path;
    b.addEventListener('click', function () { show(r.path); });
    tabs.appendChild(b);
  });
  window.addEventListener('message', function (e) {
    if (e.data && e.data.preview) show(e.data.preview);
  });
  show('/');
</script>`;

writeFileSync(OUT, shell);
console.log('wrote', OUT, Math.round(shell.length / 1024) + 'KB,', Object.keys(assets).length, 'assets');
