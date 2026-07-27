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
import pathlib

dist = pathlib.Path('dist')
css  = "\n".join(p.read_text() for p in sorted((dist/'_astro').glob('*.css')))

# Map every built page to a route
pages = {}
for f in sorted(dist.rglob('index.html')):
    route = '/' + str(f.parent.relative_to(dist)).replace('.', '').strip('/')
    route = '/' if route in ('/', '') else route.rstrip('/') + '/'
    pages[route] = f.read_text()

def body_of(doc):
    m = re.search(r'<body[^>]*>(.*)</body>', doc, re.S)
    inner = m.group(1) if m else doc
    inner = re.sub(r'<script(?![^>]*application/ld\+json).*?</script>', '', inner, flags=re.S)  # drop page scripts
    inner = re.sub(r'<script type="application/ld\+json".*?</script>', '', inner, flags=re.S)
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

title = 'Swift Electrical &amp; Security — preview'
out = f"""<title>{title}</title>
<style>
{css}
{"".join(scoped)}
/* preview shell */
html,body{{margin:0}}
.rt[hidden]{{display:none}}
.pv-note{{position:fixed;left:0;right:0;bottom:0;z-index:999;background:#111318;color:#a1a5ad;
  border-top:1px solid rgba(255,255,255,.12);font:500 12px/1.45 system-ui,sans-serif;
  padding:9px 16px;text-align:center}}
.pv-note b{{color:#22c8ee}}
body{{padding-bottom:42px}}
</style>

{''.join(sections)}

<div class="pv-note">
  Preview of a real 23-page build. Cyan dashed boxes are <b>facts still needed from the client</b> — nothing has been invented.
</div>

<script>
(function(){{
  var routes = {json.dumps(list(pages.keys()))};
  function norm(h){{
    h = (h || '').replace(/^#/, '');
    if (!h) return '/';
    if (!h.startsWith('/')) h = '/' + h;
    if (h !== '/' && !h.endsWith('/')) h += '/';
    return routes.indexOf(h) >= 0 ? h : '/';
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
dest = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(f"/tmp/{pathlib.Path.cwd().name}-preview.html")
dest.write_text(out)
print("written to", dest)
print(f"{len(pages)} routes bundled -> {len(out)//1024} KB")
print("routes:", ", ".join(list(pages.keys())[:8]), "...")
