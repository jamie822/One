#!/usr/bin/env python3
"""
Bundle a built client site into ONE self-contained HTML page for preview.

Why: a client (or you) needs to click round the real thing before launch, and
hosting a 20+ page static site just to show someone is friction. This inlines
every page, hoists the CSS once, and swaps internal links for hash routing, so
the whole site travels as a single file you can publish or email.

It is a PREVIEW harness, not the deliverable. Page <script> blocks are stripped
and replaced with minimal routing, so JS behaviour is approximated, not real.
Always test the actual build before launch.

Usage:
    cd clients/<name> && npm run build
    python3 ../../tools/bundle-preview.py            # -> /tmp/<name>-preview.html
    python3 ../../tools/bundle-preview.py out.html
"""
import re
import sys
import json
import html
import base64
import pathlib

# An optional landing route. Without this a multi-route preview always opens on
# "/", which sent a client to an old page and made finished work look unchanged.
argv = [a for a in sys.argv[1:]]


def norm_route(r):
    if not r.startswith('/'):
        r = '/' + r
    if not r.endswith('/'):
        r += '/'
    return r


default_route = '/'
only = []
keep_scripts = False
for a in list(argv):
    if a.startswith('--default='):
        default_route = norm_route(a.split('=', 1)[1])
        argv.remove(a)
    elif a.startswith('--only='):
        only.append(norm_route(a.split('=', 1)[1]))
        argv.remove(a)
    elif a == '--scripts':
        keep_scripts = True
        argv.remove(a)

dist = pathlib.Path('dist')
css  = "\n".join(p.read_text() for p in sorted((dist/'_astro').glob('*.css')))

# Map every built page to a route
pages = {}
for f in sorted(dist.rglob('index.html')):
    route = '/' + str(f.parent.relative_to(dist)).replace('.', '').strip('/')
    route = '/' if route in ('/', '') else route.rstrip('/') + '/'
    pages[route] = f.read_text()

if not pages:
    sys.exit("No built pages found. Run `npm run build` first.")

if only:
    missing = [r for r in only if r not in pages]
    if missing:
        sys.exit(f"No such route(s): {', '.join(missing)}. Built: {', '.join(pages)}")
    pages = {r: pages[r] for r in only}
    if default_route not in pages:
        default_route = only[0]

# -----------------------------------------------------------------------------
# Scripts are stripped by default and that is the right default: the routing
# below is hash based, so keeping every route's scripts in one document runs all
# of them at once against a DOM where only one route is visible.
#
# It is also how a finished animated hero came out looking static. The Stacked
# Out calendar is a GSAP timeline over a canvas, so with scripts gone the preview
# showed the settled sheet and the page turn was simply absent — the preview was
# lying about the build in the direction that matters most.
#
# So --scripts keeps them, and it requires exactly one route, because that is the
# only case where "run the page's scripts" means what it says.
# -----------------------------------------------------------------------------
if keep_scripts and len(pages) != 1:
    sys.exit(
        "--scripts needs exactly one route, or every route's scripts run at once.\n"
        f"Add --only=<route>. Built: {', '.join(pages)}"
    )

# -----------------------------------------------------------------------------
# CRITICAL: the design tokens live on the <html> element, not in the stylesheet.
#   <html data-mode="dark" style="--brand:#22c8ee;...">
# The wrapper page supplies its own <html>, so those are lost unless they are
# lifted out explicitly. Miss this and the site renders with no palette and a
# fallback accent colour — which looks like a completely different, broken site.
# -----------------------------------------------------------------------------
home = pages.get('/') or next(iter(pages.values()))
html_tag = re.search(r'<html([^>]*)>', home)
attrs = html_tag.group(1) if html_tag else ''

inline_vars = ''
m = re.search(r'style="([^"]*)"', attrs)
if m:
    inline_vars = html.unescape(m.group(1))

mode = ''
m = re.search(r'data-mode="([^"]*)"', attrs)
if m:
    mode = m.group(1)

# Re-point the mode-scoped token blocks at :root so they apply without <html>.
# Minified CSS drops the attribute quotes ([data-mode=dark]), so match all forms.
if mode:
    css = re.sub(r"\[data-mode=['\"]?" + re.escape(mode) + r"['\"]?\]", ':root', css)
    # Drop the other mode's block entirely so it can't win on source order —
    # otherwise dark-mode text keeps the light-mode colour and vanishes.
    other = 'light' if mode == 'dark' else 'dark'
    css = re.sub(r"\[data-mode=['\"]?" + other + r"['\"]?\]\s*\{[^}]*\}", '', css)
    # Any remaining rules scoped to the other mode (e.g. `[data-mode=light] .hero`)
    # are dead weight in a single-mode preview.
    css = re.sub(r"\[data-mode=['\"]?" + other + r"['\"]?\][^{]*\{[^}]*\}", '', css)

# Fonts are same-origin files in the real build; inline them so the single file
# is genuinely self-contained (the artifact CSP blocks external font hosts too).
def inline_fonts(sheet):
    def sub(m):
        url = m.group(1).strip('\'"')
        f = dist / url.lstrip('/')
        if not f.exists():
            return m.group(0)
        b64 = base64.b64encode(f.read_bytes()).decode()
        return f"url('data:font/woff2;base64,{b64}')"
    return re.sub(r"url\((['\"]?[^)]+\.woff2['\"]?)\)", sub, sheet)

css = inline_fonts(css)

# Same problem as the fonts, and it was silently shipping broken previews: an
# <img src="/img/…"> is same-origin in the real build, but in a single published
# file that root-relative path resolves against the artifact host and 404s, so
# every photograph on the page came out as an empty box. The site looked worse in
# preview than it does in the build, which is the one thing a preview must never
# do. Raster and SVG both, keyed off the real extension so the data URI carries
# the right MIME type.
MIME = {
    '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.avif': 'image/avif',
    '.gif': 'image/gif', '.ico': 'image/x-icon',
}

def inline_images(markup):
    def sub(m):
        attr, quote, url = m.group(1), m.group(2), m.group(3)
        f = dist / url.lstrip('/')
        mime = MIME.get(f.suffix.lower())
        if not mime or not f.exists():
            return m.group(0)
        b64 = base64.b64encode(f.read_bytes()).decode()
        return f'{attr}={quote}data:{mime};base64,{b64}{quote}'
    # src and href, and the leading slash is required: a data: or https: URL is
    # already self-contained and must be left alone.
    return re.sub(r'\b(src|href)=(["\'])(/[^"\']+)\2', sub, markup)

def inline_scripts(markup):
    """Turn <script src="/vendor/gsap.min.js"> into the code itself.

    Same reason as the fonts and the images: a root relative src 404s out of a
    single published file, and a hero whose animation library failed to load is
    worse than one with no animation at all, because the markup is then sitting
    in whatever state the timeline was meant to move it out of. defer is dropped
    deliberately — these end up inline at the point they already occupied, in
    document order, and the calendar's own script runs after them.
    """
    def sub(m):
        url = m.group(1)
        f = dist / url.lstrip('/')
        if not f.exists():
            return m.group(0)
        return '<script>' + f.read_text() + '</script>'
    return re.sub(r'<script[^>]*\bsrc=["\'](/[^"\']+\.js)["\'][^>]*>\s*</script>', sub, markup)


def body_of(doc):
    m = re.search(r'<body[^>]*>(.*)</body>', doc, re.S)
    inner = m.group(1) if m else doc
    if keep_scripts:
        inner = inline_scripts(inner)
    else:
        inner = re.sub(r'<script(?![^>]*application/ld\+json).*?</script>', '', inner, flags=re.S)
    inner = re.sub(r'<script type="application/ld\+json".*?</script>', '', inner, flags=re.S)
    inner = inline_images(inner)
    return inner

# Per-page <style> blocks (Astro scoped styles) get hoisted once
scoped = set()
for doc in pages.values():
    for m in re.finditer(r'<style>(.*?)</style>', doc, re.S):
        scoped.add(m.group(1))

sections = []
for route, doc in pages.items():
    b = body_of(doc)
    b = re.sub(r'<style>.*?</style>', '', b, flags=re.S)
    sections.append(f'<div class="rt" data-route="{html.escape(route)}" hidden>{b}</div>')

# Site title, taken from the real build rather than hard-coded.
tm = re.search(r'<title>(.*?)</title>', home, re.S)
title = html.escape(re.sub(r'\s+', ' ', tm.group(1)).strip()) if tm else 'Site preview'

out = f"""<title>{title} — preview</title>
<style>
{css}
{"".join(scoped)}
/* Tokens lifted off the built <html> element. MUST come after the stylesheet:
   global.css declares its own :root defaults, and at equal specificity the
   later rule wins. Emit these first and the client's accent silently loses to
   the template default. */
:root {{ {inline_vars} }}
/* preview shell.
   The background falls through several token names because different client
   projects name their ground differently (--bg on one, --ground on another).
   Hardcoding one project's fallback here silently repaints another brand's
   page in the wrong colour, which is exactly what it did once. */
html,body{{margin:0;background:var(--bg,var(--ground,var(--surface,#0c0d10)))}}
.rt[hidden]{{display:none}}
.pv-note{{position:fixed;left:0;right:0;bottom:0;z-index:999;background:#111318;color:#a1a5ad;
  border-top:1px solid rgba(255,255,255,.12);font:500 12px/1.45 system-ui,sans-serif;
  padding:9px 16px;text-align:center}}
.pv-note b{{color:var(--brand,var(--incoming,#22c8ee))}}
body{{padding-bottom:42px}}
</style>

{''.join(sections)}

<div class="pv-note">
  Preview of a real {len(pages)}-route build. Dashed boxes are <b>facts still needed from the client</b>. Nothing has been invented.
</div>

<script>
(function(){{
  var routes = {json.dumps(list(pages.keys()))};
  var LANDING = {json.dumps(default_route)};
  var HOME = routes.indexOf(LANDING) >= 0 ? LANDING : routes[0];
  function norm(h){{
    h = (h || '').replace(/^#/, '');
    if (!h) return HOME;
    if (!h.startsWith('/')) h = '/' + h;
    if (h !== '/' && !h.endsWith('/')) h += '/';
    return routes.indexOf(h) >= 0 ? h : HOME;
  }}
  function show(r){{
    document.querySelectorAll('.rt').forEach(function(el){{
      el.hidden = el.getAttribute('data-route') !== r;
    }});
    document.querySelectorAll('.rt:not([hidden]) [aria-current]').forEach(function(el){{
      el.removeAttribute('aria-current');
    }});
    window.scrollTo(0,0);
    reveal();
  }}
  function reveal(){{
    document.querySelectorAll('.rt:not([hidden]) .reveal').forEach(function(el){{
      el.classList.add('is-in');
    }});
  }}
  // Rewrite internal links to hash routes
  document.addEventListener('click', function(e){{
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (/^(https?:|tel:|mailto:|#)/.test(href)) return;
    e.preventDefault();
    location.hash = href;
  }});
  window.addEventListener('hashchange', function(){{ show(norm(location.hash)); }});
  // Mobile nav
  document.addEventListener('click', function(e){{
    var t = e.target.closest && e.target.closest('.nav-toggle');
    if (!t) return;
    var nav = t.parentElement.querySelector('.nav');
    if (nav) nav.classList.toggle('is-open');
  }});
  var hdr = document.querySelectorAll('.header');
  window.addEventListener('scroll', function(){{
    hdr.forEach(function(h){{ h.classList.toggle('is-scrolled', window.scrollY > 8); }});
  }}, {{passive:true}});
  show(norm(location.hash));
}})();
</script>
"""
dest = pathlib.Path(argv[0]) if argv else pathlib.Path(f"/tmp/{pathlib.Path.cwd().name}-preview.html")
dest.write_text(out)
print("written to", dest)
print(f"{len(pages)} routes bundled -> {len(out)//1024} KB")
print("routes:", ", ".join(list(pages.keys())[:8]), "...")
