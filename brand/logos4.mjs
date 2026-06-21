// Bespoke geometric modern-luxury marks (solid/negative-space) -> brand-assets/logos4/
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const OUT = new URL('../brand-assets/logos4/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Inter:wght@500;600&display=swap">`;
const CSS = `
*{margin:0;box-sizing:border-box}body{background:#0b0b0c}
.gold{background:linear-gradient(135deg,#e9cf86,#c9a24b 48%,#9d7b34);-webkit-background-clip:text;background-clip:text;color:transparent}
.stage{width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:34px;
  background:radial-gradient(120% 90% at 50% 0%,#15120b,#0b0b0c 62%,#070708);position:relative}
.wm{font-family:'Cinzel',serif;font-weight:600;font-size:21px;letter-spacing:.36em;color:#f4f1ea;text-align:center}
.sub{font-family:'Inter';text-transform:uppercase;letter-spacing:.42em;font-size:11px;color:#9a937f;text-align:center;margin-top:6px}
.cap{position:absolute;bottom:28px;left:0;right:0;text-align:center;font-family:Inter;color:#807a6c;font-size:15px}
`;
const defs = `<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9cf86"/><stop offset=".5" stop-color="#c9a24b"/><stop offset="1" stop-color="#9d7b34"/></linearGradient>
  <linearGradient id="gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b9923f"/><stop offset="1" stop-color="#7c6128"/></linearGradient>
</defs>`;
const svg = (inner, s = 132) => `<svg width="${s}" height="${s}" viewBox="0 0 100 100">${defs}${inner}</svg>`;
const wm = `<div><div class="wm"><span style="color:#f4f1ea">GET OFF THE </span><span class="gold">TOOLS</span></div><div class="sub">For Electricians</div></div>`;
const page = (mark, cap) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS}</style></head><body><div class="stage">${mark}${wm}<div class="cap">${cap}</div></div></body></html>`;

const concepts = [
  // A — Power-Rise: power symbol (ring + top gap) whose stem is an up-arrow
  page(svg(`
    <mask id="ring"><rect width="100" height="100" fill="#fff"/><rect x="39" y="0" width="22" height="24" fill="#000"/></mask>
    <circle cx="50" cy="54" r="33" fill="none" stroke="url(#g)" stroke-width="9" mask="url(#ring)"/>
    <path d="M50 9 L36 28 L45 28 L45 50 L55 50 L55 28 L64 28 Z" fill="url(#g)"/>`),
    'A — Power-Rise · switch on & rise off the tools'),

  // B — Negative-space G, solid maison tile
  page(svg(`
    <mask id="gm"><rect x="12" y="12" width="76" height="76" rx="20" fill="#fff"/>
      <text x="51" y="53" fill="#000" font-family="Cinzel" font-weight="700" font-size="56" text-anchor="middle" dominant-baseline="central">G</text></mask>
    <rect x="12" y="12" width="76" height="76" rx="20" fill="url(#g)" mask="url(#gm)"/>`),
    'B — Negative-space G · the maison mark'),

  // C — Ascending bars (growth / performance) in a precise frame
  page(svg(`
    <rect x="14" y="14" width="72" height="72" rx="16" fill="none" stroke="url(#g)" stroke-width="2.4"/>
    <rect x="28" y="56" width="11" height="20" rx="2" fill="url(#g)"/>
    <rect x="44.5" y="42" width="11" height="34" rx="2" fill="url(#g)"/>
    <rect x="61" y="28" width="11" height="48" rx="2" fill="url(#g)"/>`),
    'C — Ascent · growth & performance'),

  // D — Negative-space up-arrow in a solid disc (freedom / rise)
  page(svg(`
    <mask id="am"><circle cx="50" cy="50" r="40" fill="#fff"/>
      <path d="M50 26 L68 50 L58 50 L58 72 L42 72 L42 50 L32 50 Z" fill="#000"/></mask>
    <circle cx="50" cy="50" r="40" fill="url(#g)" mask="url(#am)"/>`),
    'D — Rise · freedom, minimal'),

  // E — Isometric monolith (a business you've built / architectural)
  page(svg(`
    <polygon points="50,16 80,33 50,50 20,33" fill="url(#g)"/>
    <polygon points="20,33 50,50 50,84 20,67" fill="url(#gd)" opacity="0.75"/>
    <polygon points="80,33 50,50 50,84 80,67" fill="url(#gd)" opacity="0.45"/>
    <polygon points="50,16 80,33 50,50 20,33 50,16 50,84" fill="none" stroke="#1a1408" stroke-width="1.2" opacity="0.5"/>`),
    'E — The Build · the business you build'),

  // F — Aperture/seal: precise notched ring (modern signet, exclusive)
  page(svg(`
    <circle cx="50" cy="50" r="36" fill="none" stroke="url(#g)" stroke-width="8"/>
    <rect x="46" y="2" width="8" height="24" fill="#0b0b0c"/>
    <rect x="46" y="74" width="8" height="24" fill="#0b0b0c"/>
    <rect x="2" y="46" width="24" height="8" fill="#0b0b0c"/>
    <rect x="74" y="46" width="24" height="8" fill="#0b0b0c"/>
    <circle cx="50" cy="50" r="11" fill="url(#g)"/>`),
    'F — Aperture seal · precise, exclusive'),
];

const browser = await chromium.launch();
let i = 0; const L = ['A', 'B', 'C', 'D', 'E', 'F'];
for (const html of concepts) {
  const pg = await (await browser.newContext({ viewport: { width: 1000, height: 720 }, deviceScaleFactor: 2 })).newPage();
  await pg.setContent(html, { waitUntil: 'load' });
  try { await pg.evaluate(() => document.fonts.ready); } catch {}
  await pg.waitForTimeout(450);
  await pg.screenshot({ path: `${OUT}mark-${L[i]}.png` });
  console.log('rendered', L[i]); i++; await pg.close();
}
await browser.close();
