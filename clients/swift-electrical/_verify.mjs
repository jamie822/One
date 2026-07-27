import { chromium } from 'playwright';
const BASE = 'http://localhost:4321';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });

for (const mode of ['normal', 'reduced']) {
  const ctx = await b.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: mode === 'reduced' ? 'reduce' : 'no-preference',
  });
  const p = await ctx.newPage();
  await p.goto(BASE + '/', { waitUntil: 'load' });
  await p.waitForTimeout(1200);
  // Scroll so mid-page scrubbed effects have a timeline position.
  await p.evaluate(() => window.scrollTo(0, 1800));
  await p.waitForTimeout(900);

  const report = await p.evaluate(() => {
    const q = (s) => document.querySelector(s);
    const anim = (el) => {
      if (!el) return 'MISSING';
      const a = el.getAnimations ? el.getAnimations() : [];
      if (!a.length) return 'none';
      return a.map((x) => {
        const name = x.animationName || (x.effect && x.effect.getKeyframes && 'kf') || '?';
        const tl = x.timeline && x.timeline.constructor ? x.timeline.constructor.name : '?';
        return `${name}[${tl}]`;
      }).join(',');
    };
    const pseudoAnim = (sel, pseudo) => {
      const el = q(sel);
      if (!el) return 'MISSING';
      const a = el.getAnimations({ subtree: false }) || [];
      const all = document.getAnimations().filter((x) => {
        const t = x.effect && x.effect.target;
        return t === el && x.effect.pseudoElement === pseudo;
      });
      return all.length ? all.map((x) => `${x.animationName}[${x.timeline?.constructor?.name}]`).join(',') : 'none';
    };
    return {
      heroGrid: anim(q('.hero__grid')),
      heroWash: anim(q('.hero__wash')),
      heroCircuit: anim(q('.hero__circuit')),
      heroBolt: anim(q('.hero__bolt')),
      blobA: anim(q('.ambient__blob--a')),
      blobB: anim(q('.ambient__blob--b')),
      spineHead: anim(q('.spine__head')),
      bandRailPath: anim(q('.band__rails path')),
      bandBoltEdge: anim(q('.band__bolt-edge')),
      svcListBefore: pseudoAnim('.svc-list', '::before'),
      svcHeadAfter: pseudoAnim('.svc__head', '::after'),
      ctaAfter: pseudoAnim('.cta', '::after'),
      btnActBefore: pseudoAnim('.btn--act', '::before'),
      // Geometry sanity: did anything create horizontal overflow?
      docW: document.documentElement.scrollWidth,
      winW: window.innerWidth,
      // Are the new pseudo rules actually visible (not stuck at scale 0)?
      svcRuleWidth: (() => {
        const el = q('.svc__head');
        if (!el) return 'n/a';
        const cs = getComputedStyle(el, '::after');
        return cs.content + ' | ' + cs.transform + ' | op=' + cs.opacity;
      })(),
    };
  });
  console.log('\n===== ' + mode.toUpperCase() + ' =====');
  for (const [k, v] of Object.entries(report)) console.log(String(k).padEnd(16), v);
  await ctx.close();
}
await b.close();
