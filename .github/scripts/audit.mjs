// Competitor audit — runs on a GitHub Actions runner (unrestricted network).
// Screenshots each site, extracts design/SEO signals, optionally runs Lighthouse,
// and writes everything to research-output/.

import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import * as cheerio from 'cheerio';

const DEFAULT_URLS = [
  'https://wyelectrical.co.uk/',                      // benchmark (ours)
  'https://www.quantum-electrical.co.uk/',            // London
  'https://certifiedelectricians.london/',            // London
  'https://www.khlelectricalcontractors.co.uk/',      // Manchester
  'https://www.amaraelectrical.co.uk/',               // Manchester
  'https://www.scott-electrical.com/',                // Leeds
  'https://www.sselectricalleeds.co.uk/',             // Leeds
  'https://gallagherelectricalltd.co.uk/',            // Birmingham
  'https://bainselectrical.co.uk/',                   // Glasgow
  'https://www.pwsglasgow.com/',                      // Glasgow
];

const urls = (process.env.INPUT_URLS || '').trim()
  ? process.env.INPUT_URLS.split(',').map((u) => u.trim()).filter(Boolean)
  : DEFAULT_URLS;

const RUN_LH = process.env.RUN_LH === 'true';
const OUT = 'research-output';
const SHOTS = path.join(OUT, 'screenshots');
await fs.mkdir(SHOTS, { recursive: true });

const slug = (u) => new URL(u).hostname.replace(/^www\./, '').replace(/[^a-z0-9]+/gi, '-');

// Animation libraries worth detecting — tells us whether anyone is actually
// doing motion, which is the thing search-index research couldn't confirm.
const ANIM_LIBS = [
  ['GSAP', /gsap|greensock/i],
  ['AOS', /\baos\b|aos\.js|aos\.css/i],
  ['Animate.css', /animate\.css|animate\.min\.css/i],
  ['Framer Motion', /framer-motion/i],
  ['Lottie', /lottie/i],
  ['Swiper', /swiper/i],
  ['Slick', /slick-carousel|slick\.js/i],
  ['WOW.js', /wow\.min\.js|\bwow\.js/i],
  ['ScrollMagic', /scrollmagic/i],
  ['Locomotive', /locomotive-scroll/i],
  ['Lenis', /@studio-freight|lenis/i],
  ['Three.js', /three\.min\.js|three\.module/i],
  ['Elementor Motion', /elementor.*motion|motion-fx/i],
];

const PLATFORMS = [
  ['WordPress', /wp-content|wp-includes|wp-json/i],
  ['Elementor', /elementor/i],
  ['Divi', /et_pb_|divi/i],
  ['WPBakery', /js_composer|vc_row/i],
  ['Wix', /wix\.com|wixstatic/i],
  ['Squarespace', /squarespace/i],
  ['Duda', /duda|dudamobile/i],
  ['GoDaddy', /godaddy|websitebuilder/i],
  ['Shopify', /cdn\.shopify/i],
  ['Webflow', /webflow/i],
  ['Astro', /astro-island|data-astro/i],
  ['Next.js', /__NEXT_DATA__|_next\/static/i],
];

const REVIEW_WIDGETS = [
  ['Trustindex', /trustindex/i],
  ['Elfsight', /elfsight/i],
  ['Trustpilot', /trustpilot/i],
  ['Google Reviews embed', /google.*review|reviews.*google/i],
  ['Checkatrade badge', /checkatrade/i],
  ['TrustATrader', /trustatrader/i],
  ['Which? Trusted', /which\?.*trusted|trustedtraders/i],
  ['Yotpo', /yotpo/i],
  ['Birdeye', /birdeye/i],
];

const ACCREDITATIONS = ['NICEIC', 'NAPIT', 'TrustMark', 'Part P', 'ECA', 'SELECT', 'CHAS', 'MCS', 'OZEV', 'SafeContractor', 'SMAS', 'CSCS'];

function detect(list, html) {
  return list.filter(([, re]) => re.test(html)).map(([n]) => n);
}

async function auditOne(browser, url) {
  const rec = { url, ok: false };
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const requests = [];
  page.on('request', (r) => requests.push(r.url()));

  try {
    const t0 = Date.now();
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    rec.status = resp?.status() ?? null;
    rec.loadMs = Date.now() - t0;

    // Let above-the-fold settle so the screenshot reflects what a visitor sees.
    await page.waitForTimeout(3500);

    const html = await page.content();
    const $ = cheerio.load(html);
    const s = slug(url);

    rec.ok = true;
    rec.title = $('title').first().text().trim();
    rec.titleLength = rec.title.length;
    rec.metaDescription = $('meta[name="description"]').attr('content') || '';
    rec.metaDescriptionLength = rec.metaDescription.length;
    rec.canonical = $('link[rel="canonical"]').attr('href') || null;
    rec.h1 = $('h1').map((_, el) => $(el).text().replace(/\s+/g, ' ').trim()).get();
    rec.h1Count = rec.h1.length;
    rec.h2 = $('h2').map((_, el) => $(el).text().replace(/\s+/g, ' ').trim()).get().slice(0, 15);

    // Structured data
    rec.schemaTypes = [];
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const walk = (o) => {
          if (!o || typeof o !== 'object') return;
          if (Array.isArray(o)) return o.forEach(walk);
          if (o['@type']) rec.schemaTypes.push(...[].concat(o['@type']));
          Object.values(o).forEach(walk);
        };
        walk(JSON.parse($(el).contents().text()));
      } catch {}
    });
    rec.schemaTypes = [...new Set(rec.schemaTypes)];

    // Hero / motion — the thing we could not confirm from the search index.
    rec.heroVideo = $('video').length;
    rec.heroCanvas = $('canvas').length;
    rec.animationLibraries = detect(ANIM_LIBS, html);
    rec.platform = detect(PLATFORMS, html);
    rec.reviewWidgets = detect(REVIEW_WIDGETS, html);

    rec.cssAnimationRules = await page.evaluate(() => {
      let keyframes = 0, animated = 0;
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          for (const rule of Array.from(sheet.cssRules || [])) {
            if (rule.type === CSSRule.KEYFRAMES_RULE) keyframes++;
            if (rule.style && (rule.style.animationName || rule.style.transition)) animated++;
          }
        } catch {}
      }
      return { keyframes, animatedRules: animated };
    });

    // Does anything above the fold actually move? Screenshot twice, 2s apart.
    const a = await page.screenshot({ clip: { x: 0, y: 0, width: 1440, height: 900 } });
    await page.waitForTimeout(2000);
    const b = await page.screenshot({ clip: { x: 0, y: 0, width: 1440, height: 900 } });
    rec.heroAnimatesLive = Buffer.compare(a, b) !== 0;

    // Images and people
    const imgs = $('img');
    rec.imageCount = imgs.length;
    rec.imagesMissingAlt = imgs.filter((_, el) => !($(el).attr('alt') || '').trim()).length;
    rec.modernImageFormats = /\.(webp|avif)/i.test(html);
    rec.lazyLoadedImages = imgs.filter((_, el) => $(el).attr('loading') === 'lazy').length;

    const bodyText = $('body').text().replace(/\s+/g, ' ');
    rec.wordCount = bodyText.split(' ').filter(Boolean).length;
    rec.accreditationsMentioned = ACCREDITATIONS.filter((a2) => new RegExp(a2.replace('?', '\\?'), 'i').test(bodyText));

    // Review/rating claims in visible copy
    rec.ratingClaims = [...new Set(
      (bodyText.match(/\b\d(?:\.\d)?\s*(?:\/\s*5|stars?|★)/gi) || []).slice(0, 8)
    )];
    rec.reviewCountClaims = [...new Set(
      (bodyText.match(/\b\d{2,4}\+?\s*(?:google\s*)?reviews?\b/gi) || []).slice(0, 8)
    )];

    // Team/owner signals
    rec.mentionsTeamPage = /meet the team|our team|about us|meet our/i.test(html);
    rec.teamImagesGuess = imgs.filter((_, el) =>
      /team|staff|owner|founder|director|engineer|electrician|portrait|headshot/i.test(
        ($(el).attr('src') || '') + ' ' + ($(el).attr('alt') || '')
      )
    ).length;

    // Internal architecture — location and service page counts
    const links = $('a[href]').map((_, el) => $(el).attr('href')).get();
    const host = new URL(url).hostname;
    const internal = links
      .map((h) => { try { return new URL(h, url); } catch { return null; } })
      .filter((u) => u && u.hostname === host)
      .map((u) => u.pathname.toLowerCase());
    rec.internalLinkCount = internal.length;
    rec.uniqueInternalPaths = [...new Set(internal)].length;
    rec.locationPathsSample = [...new Set(internal.filter((p) =>
      /(area|location|electrician-in|electricians-in|-electrician|serving|towns|cities)/.test(p)
    ))].slice(0, 25);
    rec.servicePathsSample = [...new Set(internal.filter((p) =>
      /(service|rewir|eicr|consumer-unit|ev-charg|solar|fault|landlord|pat-test|lighting)/.test(p)
    ))].slice(0, 25);
    rec.hasCaseStudies = internal.some((p) => /(case-stud|project|portfolio|our-work|gallery)/.test(p));
    rec.hasReviewsPage = internal.some((p) => /(review|testimonial|feedback)/.test(p));
    rec.hasBlog = internal.some((p) => /(blog|news|advice|guide)/.test(p));

    rec.requestCount = requests.length;
    rec.thirdPartyRequests = requests.filter((r) => { try { return new URL(r).hostname !== host; } catch { return false; } }).length;

    // Fonts actually rendered
    rec.fonts = await page.evaluate(() => {
      const out = new Set();
      for (const el of Array.from(document.querySelectorAll('h1, h2, body, p')).slice(0, 40)) {
        out.add(getComputedStyle(el).fontFamily.split(',')[0].replace(/["']/g, '').trim());
      }
      return [...out].filter(Boolean).slice(0, 8);
    });

    // Dominant colours from the hero region
    rec.heroColors = await page.evaluate(() => {
      const counts = {};
      for (const el of Array.from(document.querySelectorAll('*')).slice(0, 400)) {
        const r = el.getBoundingClientRect();
        if (r.top > 900 || r.width < 60 || r.height < 30) continue;
        const bg = getComputedStyle(el).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') counts[bg] = (counts[bg] || 0) + 1;
      }
      return Object.entries(counts).sort((a2, b2) => b2[1] - a2[1]).slice(0, 6).map(([c, n]) => `${c} (${n})`);
    });

    await page.screenshot({ path: path.join(SHOTS, `${s}-desktop.png`), fullPage: false });
    await page.screenshot({ path: path.join(SHOTS, `${s}-desktop-full.png`), fullPage: true });

    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await mobile.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await mobile.waitForTimeout(2500);
    await mobile.screenshot({ path: path.join(SHOTS, `${s}-mobile.png`), fullPage: false });
    await mobile.close();

    rec.heroHtmlSample = ($('header').first().html() || $('body').html() || '').slice(0, 2500);
  } catch (err) {
    rec.error = String(err).slice(0, 400);
  } finally {
    await page.close();
  }
  return rec;
}

async function lighthouse(url) {
  try {
    const lh = (await import('lighthouse')).default;
    const cl = await import('chrome-launcher');
    const chrome = await cl.launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });
    const r = await lh(url, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      formFactor: 'mobile',
      screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 2, disabled: false },
    });
    await chrome.kill();
    const c = r.lhr.categories, a = r.lhr.audits;
    return {
      performance: Math.round((c.performance?.score ?? 0) * 100),
      accessibility: Math.round((c.accessibility?.score ?? 0) * 100),
      bestPractices: Math.round((c['best-practices']?.score ?? 0) * 100),
      seo: Math.round((c.seo?.score ?? 0) * 100),
      LCP: a['largest-contentful-paint']?.displayValue ?? null,
      CLS: a['cumulative-layout-shift']?.displayValue ?? null,
      TBT: a['total-blocking-time']?.displayValue ?? null,
      speedIndex: a['speed-index']?.displayValue ?? null,
      pageWeight: a['total-byte-weight']?.displayValue ?? null,
    };
  } catch (e) {
    return { error: String(e).slice(0, 200) };
  }
}

// ---- run ----------------------------------------------------------------
const browser = await chromium.launch({ args: ['--no-sandbox'] });
const results = [];

for (const url of urls) {
  console.log(`→ ${url}`);
  const rec = await auditOne(browser, url);
  if (RUN_LH && rec.ok) {
    console.log(`  lighthouse…`);
    rec.lighthouse = await lighthouse(url);
  }
  results.push(rec);
}
await browser.close();

await fs.writeFile(path.join(OUT, 'audit.json'), JSON.stringify(results, null, 2));

// ---- markdown summary ---------------------------------------------------
const yes = (b) => (b ? 'yes' : 'no');
const L = [];
L.push('# Competitor audit — live site inspection\n');
L.push(`Run ${new Date().toISOString().slice(0, 10)} on a GitHub Actions runner.`);
L.push(`${results.filter((r) => r.ok).length} of ${results.length} sites loaded successfully.\n`);
L.push('Screenshots are in `screenshots/`. Full extracted data in `audit.json`.\n');

L.push('## Does anyone have an animated hero?\n');
L.push('| Site | Hero moves | `<video>` | `<canvas>` | Animation libraries | CSS keyframes |');
L.push('|---|---|---|---|---|---|');
for (const r of results.filter((x) => x.ok)) {
  L.push(`| ${slug(r.url)} | **${yes(r.heroAnimatesLive)}** | ${r.heroVideo} | ${r.heroCanvas} | ${r.animationLibraries.join(', ') || '—'} | ${r.cssAnimationRules?.keyframes ?? '?'} |`);
}

L.push('\n## Platform and page speed\n');
L.push('| Site | Platform | Perf | A11y | BP | SEO | LCP | CLS |');
L.push('|---|---|---|---|---|---|---|---|');
for (const r of results.filter((x) => x.ok)) {
  const lh = r.lighthouse || {};
  L.push(`| ${slug(r.url)} | ${r.platform.join(', ') || '?'} | ${lh.performance ?? '—'} | ${lh.accessibility ?? '—'} | ${lh.bestPractices ?? '—'} | ${lh.seo ?? '—'} | ${lh.LCP ?? '—'} | ${lh.CLS ?? '—'} |`);
}

L.push('\n## Social proof and trust\n');
L.push('| Site | Review widgets | Rating claims | Review-count claims | Accreditations | Reviews page | Case studies |');
L.push('|---|---|---|---|---|---|---|');
for (const r of results.filter((x) => x.ok)) {
  L.push(`| ${slug(r.url)} | ${r.reviewWidgets.join(', ') || '—'} | ${r.ratingClaims.join(', ') || '—'} | ${r.reviewCountClaims.join(', ') || '—'} | ${r.accreditationsMentioned.join(', ') || '—'} | ${yes(r.hasReviewsPage)} | ${yes(r.hasCaseStudies)} |`);
}

L.push('\n## SEO fundamentals\n');
L.push('| Site | Title len | Meta len | H1s | Schema types | Location paths | Service paths | Blog |');
L.push('|---|---|---|---|---|---|---|---|');
for (const r of results.filter((x) => x.ok)) {
  L.push(`| ${slug(r.url)} | ${r.titleLength} | ${r.metaDescriptionLength} | ${r.h1Count} | ${r.schemaTypes.join(', ') || '**none**'} | ${r.locationPathsSample.length} | ${r.servicePathsSample.length} | ${yes(r.hasBlog)} |`);
}

L.push('\n## Design signals\n');
L.push('| Site | Fonts | Images | Missing alt | WebP/AVIF | Words | Team imgs |');
L.push('|---|---|---|---|---|---|---|');
for (const r of results.filter((x) => x.ok)) {
  L.push(`| ${slug(r.url)} | ${r.fonts.slice(0, 3).join(', ')} | ${r.imageCount} | ${r.imagesMissingAlt} | ${yes(r.modernImageFormats)} | ${r.wordCount} | ${r.teamImagesGuess} |`);
}

L.push('\n## Per-site detail\n');
for (const r of results) {
  L.push(`### ${r.url}\n`);
  if (!r.ok) { L.push(`Failed: \`${r.error}\`\n`); continue; }
  L.push(`- **Title:** ${r.title}`);
  L.push(`- **Meta:** ${r.metaDescription || '_none_'}`);
  L.push(`- **H1:** ${r.h1.join(' | ') || '_none_'}`);
  L.push(`- **H2s:** ${r.h2.slice(0, 8).join(' | ')}`);
  L.push(`- **Schema:** ${r.schemaTypes.join(', ') || '_none_'}`);
  L.push(`- **Hero colours:** ${r.heroColors.join(', ')}`);
  L.push(`- **Fonts:** ${r.fonts.join(', ')}`);
  L.push(`- **Internal paths:** ${r.uniqueInternalPaths} unique`);
  if (r.locationPathsSample.length) L.push(`- **Location pages:** ${r.locationPathsSample.join(', ')}`);
  if (r.servicePathsSample.length) L.push(`- **Service pages:** ${r.servicePathsSample.join(', ')}`);
  L.push(`- **Requests:** ${r.requestCount} (${r.thirdPartyRequests} third-party)`);
  L.push('');
}

await fs.writeFile(path.join(OUT, 'AUDIT.md'), L.join('\n'));
console.log(`\nDone. ${results.filter((r) => r.ok).length}/${results.length} sites audited.`);
