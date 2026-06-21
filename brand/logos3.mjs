// Diamond-based logo concepts with meaning -> ./brand-assets/logos3/*.png
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const OUT = new URL('../brand-assets/logos3/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Inter:wght@500;600&display=swap">`;
const CSS = `
*{margin:0;box-sizing:border-box}body{background:#0b0b0c}
.gold{background:linear-gradient(135deg,#e9cf86,#c9a24b 48%,#9d7b34);-webkit-background-clip:text;background-clip:text;color:transparent}
.stage{width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px;
  background:radial-gradient(120% 90% at 50% 0%,#16130c,#0b0b0c 62%,#070708);position:relative}
.wm{font-family:'Cinzel',serif;font-weight:600;font-size:21px;letter-spacing:.36em;color:#f4f1ea;text-align:center}
.sub{font-family:'Inter';text-transform:uppercase;letter-spacing:.42em;font-size:11px;color:#9a937f;text-align:center;margin-top:6px}
.cap{position:absolute;bottom:28px;left:0;right:0;text-align:center;font-family:Inter;color:#807a6c;font-size:15px;letter-spacing:.04em}
.emblem{position:relative;display:grid;place-items:center}
.mono{position:absolute;font-family:'Cinzel',serif;font-weight:700;color:transparent;background:linear-gradient(135deg,#e9cf86,#c9a24b 48%,#9d7b34);-webkit-background-clip:text;background-clip:text}
`;
const G = `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9cf86"/><stop offset=".5" stop-color="#c9a24b"/><stop offset="1" stop-color="#9d7b34"/></linearGradient></defs>`;
const svg = (inner, s = 150) => `<svg width="${s}" height="${s}" viewBox="0 0 100 105">${G}${inner}</svg>`;

// Shared brilliant-cut diamond (outline + facets), optional subtle fill.
const outline = `<path d="M30 26 L70 26 L90 44 L50 96 L10 44 Z" fill="url(#g)" fill-opacity="0.07" stroke="url(#g)" stroke-width="2.3" stroke-linejoin="round"/><path d="M10 44 H90" stroke="url(#g)" stroke-width="1.4"/>`;
const facets = (op = 0.5) => `<path d="M30 26 L22 44 M70 26 L78 44 M30 26 L42 44 M70 26 L58 44 M22 44 L50 96 M42 44 L50 96 M58 44 L50 96 M78 44 L50 96" fill="none" stroke="url(#g)" stroke-width="1" opacity="${op}"/>`;

const wm = `<div><div class="wm"><span style="color:#f4f1ea">GET OFF THE </span><span class="gold">TOOLS</span></div><div class="sub">For Electricians</div></div>`;
const page = (mark, cap) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS}</style></head><body><div class="stage">${mark}${wm}<div class="cap">${cap}</div></div></body></html>`;

const concepts = [
  // 1 — Diamond + spark glint  (wealth + the electrician's spark)
  page(svg(`${outline}${facets()}<path d="M76 10 L79 20 L76 30 L73 20 Z M66 20 L76 17 L86 20 L76 23 Z" fill="#fff7e6"/><circle cx="76" cy="20" r="1.3" fill="#fff"/>`),
    'Concept A — Diamond + spark · wealth, premium + the spark of the trade'),

  // 2 — Ascending diamond  (growth, freedom, success)
  page(svg(`${outline}${facets(0.35)}<path d="M33 52 L50 33 L67 52" fill="none" stroke="#fff7e6" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 66 L50 55 L60 66" fill="none" stroke="#fff7e6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/>`),
    'Concept B — Ascending diamond · growth, freedom + success rising'),

  // 3 — Charged diamond  (the electrical current within)
  page(svg(`${outline}${facets(0.4)}<path d="M18 44 q 6 -7 11 0 t 11 0 t 11 0 t 11 0 t 11 0" fill="none" stroke="#fff7e6" stroke-width="2.2" stroke-linecap="round"/><circle cx="18" cy="44" r="2.4" fill="#fff7e6"/><circle cx="84" cy="44" r="2.4" fill="#fff7e6"/>`),
    'Concept C — Charged diamond · the electrical current within'),

  // 4 — Signet diamond  (GT monogram set in the gem)
  page(`<div class="emblem">${svg(`${outline}${facets(0.45)}`)}<span class="mono" style="font-size:30px;transform:translateY(6px)">GT</span></div>`,
    'Concept D — Signet diamond · your mark, set in the stone'),

  // 5 — Crowned diamond  (king of your trade / performance)
  page(svg(`<path d="M30 26 L36 14 L43 22 L50 10 L57 22 L64 14 L70 26" fill="none" stroke="url(#g)" stroke-width="2" stroke-linejoin="round"/><circle cx="36" cy="14" r="2" fill="url(#g)"/><circle cx="50" cy="10" r="2.4" fill="url(#g)"/><circle cx="64" cy="14" r="2" fill="url(#g)"/>${outline}${facets()}`),
    'Concept E — Crowned diamond · the best in the trade'),
];

const browser = await chromium.launch();
let i = 0; const letters = ['A', 'B', 'C', 'D', 'E'];
for (const html of concepts) {
  const pg = await (await browser.newContext({ viewport: { width: 1000, height: 720 }, deviceScaleFactor: 2 })).newPage();
  await pg.setContent(html, { waitUntil: 'load' });
  try { await pg.evaluate(() => document.fonts.ready); } catch {}
  await pg.waitForTimeout(450);
  await pg.screenshot({ path: `${OUT}diamond-${letters[i]}.png` });
  console.log('rendered', letters[i]); i++; await pg.close();
}
await browser.close();
