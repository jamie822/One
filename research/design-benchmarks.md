# Design benchmarks: beating the live-template baseline
Research date: 2026-07-28. Scope: visual direction for the studio's next electrician/solar Astro template.
Baseline studied: `/home/user/One/clients/live-template` (index.astro, live.css, client.js).

---

## DIRECTION MENU

Four complete, named directions. Any client gets exactly one. No two look alike, and none looks like the baseline.

### 1. CIRCUIT PAPER (light, engineering-document)
- **Palette:** ground `#F6F4EF` warm paper / surface `#FFFFFF` / ink `#17191E` / accent `#454B57` graphite / action `#E8490F` safety orange
- **Type:** Archivo Expanded Black (display) + Archivo (body) + IBM Plex Mono (annotations, prices, cert numbers). All Google Fonts.
- **Hero:** schematic hero. A line-drawn SVG house cutaway with circuits that draw themselves (stroke-dashoffset on CSS view-timeline), dimension-line callouts labelling real services. Headline set like a drawing title block: job number, revision, "Approved".
- **Motion signature:** line-draw everywhere. Underlines draw, borders trace, the SVG spine draws on scroll. Mono annotations type in. Nothing floats, nothing glows.
- **Why it converts:** it reads like the engineer's own paperwork, so the quote feels calculated rather than guessed, which is the exact anxiety an EICR or fuse-board customer has.

### 2. TUNGSTEN (dark, filament-warm, emergency-native)
- **Palette:** ground `#16130F` warm charcoal / surface `#211D17` / ink `#F4EFE6` / accent `#FFB24D` amber / action `#FF9E1F` filament orange with a warm glow. No cyan, no green, no purple anywhere.
- **Type:** Clash Display (display) + Satoshi (body), both Fontshare, free commercial. Alt display for a heavier trade feel: Big Shoulders (Google).
- **Hero:** kinetic type masthead. Giant condensed headline, one word cycles through the services ("Rewires. EICRs. Fuse boards. CCTV.") with a filament-settle flicker (steps() keyframes, borrowed and upgraded from the baseline's one good trick). A single amber "live conductor" line runs from the hero down the entire page, progressing with scroll, wiring every section together.
- **Motion signature:** the conductor spine plus tungsten flicker on hover states. Warm glow used once, on the primary CTA only.
- **Why it converts:** dark plus warm light is the visual grammar of "we answer at 9pm", so it sells the callout and the phone number without a single stock photo.

### 3. DAYLIGHT YIELD (light, Nordic-solar, money-first)
- **Palette:** ground `#FBF8F2` cream / surface `#FFFFFF` / ink `#1E2B23` deep moss / accent `#2E5940` forest / action `#F4A340` sun amber
- **Type:** Bricolage Grotesque (display, Google, variable) + General Sans (body, Fontshare). Warm, workshop-grade, zero corporate stiffness.
- **Hero:** number-first hero. The biggest object on screen is a worked payback figure ("A 10-panel roof in Bradford: about £14xx/yr back") counting up beside a minimal sun-arc that tracks scroll position. House diagram below with energy-flow dots running panel to battery to home to grid via CSS offset-path.
- **Motion signature:** flow. Dots travel along paths, numbers settle, a before/after roof slider (input range plus clip-path, zero JS). Soft shadows, no glow.
- **Why it converts:** solar buyers convert on payback maths, not on planet copy, and this puts a credible worked example in the first viewport.

### 4. THE LEDGER (light, editorial, establishment trust)
- **Palette:** ground `#F2EFE9` stone / surface `#FFFFFF` / ink `#101211` / accent `#1D3A2F` racing green (oxblood `#5E1F1F` variant) / action same accent, filled, high contrast
- **Type:** Zodiak (serif display, Fontshare) + Supreme or Satoshi (body, Fontshare). A serif masthead is the single fastest way to stop looking like a template farm.
- **Hero:** proof-object hero. No product render, no orb: the hero object is a full-size five-star review set as an editorial pull quote, or the client's best real job photo run through a unifying duotone. Sections are numbered like a contents page (01 Services, 02 Recent work, 03 Word for word).
- **Motion signature:** restraint. Clip-path photo reveals, drawing underlines, a sticky chapter index that highlights as you pass. Everything else is still.
- **Why it converts:** it reads like a firm that has been trading thirty years and charges accordingly, and it makes the reviews, the highest-trust content on any trade site, the design itself.

Rotation rule: Circuit Paper and The Ledger for established or paperwork-heavy firms, Tungsten for emergency/security-led sparkies, Daylight Yield for anyone selling solar, EV or battery. Palette accents can swap within a direction for a further per-client shift.

---

## 0. Baseline audit (what the new template must beat)

**Genuinely strong, keep:**
- Light-ground structure with dark bookends (hero, contact, footer). The founder's instinct here is right and it is rarer than all-dark.
- Honesty layer: visible NEEDED markers, verbatim reviews with typos, no invented figures. This is a real differentiator, keep it in every direction.
- Reduced-motion and pointer-fine gating, canvas paused offscreen, SVG-not-emoji icons, mobile call bar, form guard. Craft floor is solid.
- The bolt flicker in steps() is the one motion idea with trade character. Tungsten promotes it to the signature.
- One-variable reskin architecture. Extend it: the new template should swap a whole direction, not just one hue.

**2024-generic, every AI site has it (confirmed by AI-slop pattern write-ups: vibecodekit.dev, 925studios.co, prg.sh, impeccable.style/slop):**
- Aurora blur blobs, particle/constellation canvas, dot grid overlay, glassmorphism header, gradient text, magnetic buttons, 3D tilt cards, orbiting "power core" with rings, floating chips, reveal-up on literally everything, three-icon-box service grid. The baseline contains all of these at once. Individually fine in 2023, collectively they are now the tell.

**A design director would:**
- Cut: aurora, canvas grid, power core, tilt, magnetic buttons, gradient text.
- Elevate: the flicker (make it the brand motion), the marquee (accreditation strip only, with mask fade, slower), the count-ups (only on money and response time, never "6 services offered"), the section alternation rhythm.
- Add: one deliberate signature per direction instead of ten borrowed ones. Space Grotesk + Manrope is also now near-default AI output, retire the pairing.

---

## 1. Award-level references (2024-2026)

Named sites, all Awwwards-recognised, energy/industrial adjacent:
- **Virya Energy** (Honorable Mention, Aug 2025, built by Studio Ruelle): wind/solar/hydrogen group. Impactful oversized typography, expressive Lottie motion, a disciplined system that still feels bold. awwwards.com/sites/virya-energy
- **Volta Solar** (Nominee, by studio&more): big background imagery, data visualisation as decoration, integrated rooftop product story. awwwards.com/sites/volta-solar
- **Enecom** (Honorable Mention): thin-film solar. Hardware macro photography, spec-sheet minimalism.
- **Better Energy** (Honorable Mention, Danish): colour-led, optimistic, editorial.
- **Rune** (Honorable Mention): DC data centres for solar/wind. Technical-diagram language, mono type accents.
- **Younergy** (Honorable Mention): solar fintech, dashboard-real UI shown as proof.
- **Vista Energy, Energy Upgrades** (Honorable Mentions, Nov 2025): recent confirmation the category rewards restraint plus one strong motion idea.

**The moves that define the winners:** one accent colour against a neutral field; display type at genuinely huge sizes doing the visual work; real hardware or real photography, never stock lifestyle; data visualisation used as ornament (yield curves, grid maps); editorial layout with numbered sections and index navigation; motion tied to scroll narrative rather than ambient loops. None of them uses a particle field.

## 2. Motion vocabulary: 2026-crafted vs 2023-template

**Reads 2026 (and ships zero-JS in Astro):**
- CSS scroll-driven animations: `animation-timeline: scroll()` and `view()`. Support: Chrome/Edge 115+, Safari 18+, Firefox 132+, roughly 84% global mid-2026. Gate with `@supports (animation-timeline: view())`, static fallback. Replaces IntersectionObserver reveals, scroll progress bars, parallax, image reveals, the Tungsten conductor spine, the Daylight sun arc.
- View Transitions API for page/anchor transitions: native in Astro via `<ClientRouter />`, no framework.
- `linear()` easing for real spring curves in pure CSS. Kills the need for JS spring libraries on hovers.
- Variable-font kinetic type: animate weight/width on scroll or hover (Bricolage, Archivo, Big Shoulders are variable). The 2026 trend press (Envato, line25, studiomeyer.io) is unanimous that type-in-motion is the defining move.
- SVG line-draw via stroke-dashoffset keyframes on a view timeline.
- `offset-path` motion for energy-flow dots.
- Scroll-snap chapters, `:has()` driven form feedback, `details` accordions with `interpolate-size`.
- Micro-interactions that pay rent: input focus rings that breathe once, checkmark draw on valid fields, button press-down states, sticky CTA (a sticky checkout CTA measured +4.17% conversion, VWO/booking-UX write-ups).

**Reads 2023-template, avoid:** aurora blobs, particle canvas, dot grids, tilt cards, magnetic cursors and buttons, glassmorphism stacks, gradient text, blanket fade-up reveals, bouncing icons, marquee overuse, cyan-on-black glow. Every AI-slop tell list independently converges on these.

**Needs tiny JS (acceptable, progressive):** count-ups (keep), form async submit, one optional canvas moment if a direction earns it. GSAP only if a client pays for a scroll story that CSS genuinely cannot do.

## 3. Solar and energy visual language worth stealing

- **Octopus Energy:** dark space-navy with magenta/pink highlights, Constantine the mascot, brand treated as the operating system of the company (HSTalks case study). Steal: personality in microcopy and one ownable brand character or motif, not the palette.
- **Tesla Energy:** white minimalism, giant product photography, single CTA, an embedded savings calculator with live figures per postcode. Steal: the spec-sheet aesthetic and calculator-as-hero credibility.
- **Enphase:** the system diagram is the product. App screenshots showing energy flowing panel to battery to home. Steal: the flow diagram, redrawn as brand-coloured SVG.
- **Sunrun:** environmental storytelling plus customer stories with named savings data. Steal: savings stated on real customers, not abstract percentages.
- **Aira (UK/SE, identity by Kurppa Hosk):** Nordic cream neutrals, soft edges, premium industrial product design language, warmth to de-anxietise heat tech. The strongest analogue for Daylight Yield.
- **Heat Geek (UK):** credibility through published engineering education; the engineer standard IS the brand. Steal: a "how we size a job" explainer section, it converts the sceptical.
- **For a small UK installer, adapt:** honest worked payback example with current SEG rates instead of a fake calculator; energy-flow diagram; before/after roof slider; MCS/HIES/NICEIC badges near the CTA; name the actual kit brands fitted (GivEnergy, SolarEdge, Enphase) only when true.

## 4. Electrician-specific ceiling and adjacent trades

The niche ceiling is low: template farms ship trade-blue, a van photo, three icon boxes and "quality you can trust". Curated lists (Nesta Sites, mycodelesswebsite, Starter Story, Hook Agency) show the "best" UK electrician sites win on basics, not craft:
- Real photography of the owner and the work (highest-trust image on the site, baseline already knows this).
- Named owner, direct phone, visible pricing posture.
- Verbatim Google reviews, district-level local pages, sub-2s mobile load, sticky call bar.
- **Green Electrical (UK):** soft green/grey calm palette, proof that non-blue reads premium in this trade.
- **Artisan Electrics (Cambridge):** the UK premium benchmark. NICEIC + MCS, EV/solar/smart-home led, and 300k+ YouTube subscribers. Their design lesson: proof-of-work content outconverts decoration; a job-diary section (photos, problem, fix, price band) is the transferable pattern.
- **US high-end HVAC (Hook Agency, onthemap, sitebuilderreport examples):** benefit-led headlines ("Stay cool, cut energy bills"), review count and Google Guarantee badges in the header, financing block, owner headshot, sticky booking CTA, a "changed generic headline to same-day service headline, calls doubled" case.
- **Boutique construction:** Nordic-minimal layouts, full-bleed architectural photography, editorial serif type, numbered project index (Colorlib/sitebuilderreport 2026 roundups). This is The Ledger's source DNA and nobody in the electrician niche has touched it.

## 5. Typography: four pairings that read premium-industrial

All free for commercial use (Google Fonts or Fontshare/ITF licence). Retire Space Grotesk + Manrope and never default to Inter/Poppins.
1. **Archivo Expanded Black + Archivo + IBM Plex Mono** (Google). Grotesque with signage DNA; expanded caps read like equipment labelling; the mono carries cert numbers and prices. Single-superfamily discipline. For Circuit Paper.
2. **Clash Display + Satoshi** (Fontshare). Sharp, confident display over a neutral geometric body; the premium tech-trade voice without touching Inter. For Tungsten. Alt display: Big Shoulders (Google), a genuinely industrial condensed built for Chicago's flag, superb at 120px.
3. **Bricolage Grotesque + General Sans** (Google + Fontshare). Bricolage carries Antique Olive warmth and workshop character (fontsinuse and a1.gallery show it on craft-led sites); General Sans keeps body text rational. For Daylight Yield.
4. **Zodiak + Supreme (or Satoshi)** (Fontshare). High-contrast serif display over a plainspoken sans body; editorial trust, reads established and expensive. For The Ledger.

## 6. Hero patterns that outperform headline + two buttons + stock photo

Ranked for a trade with usually no photography:
1. **Kinetic type masthead:** giant display type is the visual; one word cycles services. Zero assets needed. (2026 trend consensus: type-first heroes, asymmetric editorial grids.)
2. **Schematic hero:** line-drawn house/system with animated circuits and annotations. Sells competence without photos.
3. **Proof-object hero:** the five-star review, the NICEIC cert, the real quote doc as the hero artefact. Converts because the proof is above the fold.
4. **Number-first hero:** the payback figure or response time at 96px does the persuading (solar and emergency work respectively).
5. **Live-demo hero (solar):** energy-flow diagram animating in place. The Enphase move, brand-drawn.
6. **Photographic editorial hero:** only when the client supplies photos; duotone treatment rescues mixed phone-photo quality and unifies the set.
CTA discipline: one primary action, phone as a plain text link beside it, sticky mobile call bar. Single-CTA heroes outconvert competing buttons (LogRocket, hero-pattern roundups). Never animate the LCP element.

## 7. Colour systems (ground / surface / ink / accent / action)

Five complete palettes, none trade-blue, none neon-cyan-on-black.
1. **Circuit Paper (light):** `#F6F4EF` / `#FFFFFF` / `#17191E` / `#454B57` / `#E8490F`. Psychology: engineering paperwork, safety-orange as a regulated industrial signal. Analogue: spec-sheet minimalism of Tesla Energy and Enecom, technical editorial Awwwards winners.
2. **Tungsten (dark, warm):** `#16130F` / `#211D17` / `#F4EFE6` / `#FFB24D` / `#FF9E1F`. Psychology: filament light in darkness, the callout at 9pm; warm glow signals help, cyan signals crypto. Analogue: premium tool branding (Milwaukee's red-black discipline, DeWalt's hazard contrast) transposed to amber.
3. **Daylight Yield (light):** `#FBF8F2` / `#FFFFFF` / `#1E2B23` / `#2E5940` / `#F4A340`. Psychology: cream plus moss reads Scandinavian-premium and de-anxietises tech; amber is literally the product (sunlight). Analogue: Aira's Kurppa Hosk identity, Sunrun's lifestyle warmth.
4. **The Ledger (light):** `#F2EFE9` / `#FFFFFF` / `#101211` / `#1D3A2F` / `#1D3A2F`. Psychology: stone and racing green is old-money establishment, the firm your surveyor recommends. Analogue: boutique construction and heritage UK brands. Oxblood `#5E1F1F` variant for a second client in the same town.
5. **Slate & Signal (dark alt, no glow):** `#14161A` / `#1C1F24` / `#EDEEF0` / `#8A919C` / `#F5C518` with black text on the action. Psychology: hazard-tape yellow-black is the most electrician-native contrast that exists, high visibility, zero neon. Analogue: JCB and site-safety equipment livery, National Grid warning graphics.

---

## Sources
- Awwwards energy category and site pages: awwwards.com/inspiration_search/energy/, /sites/virya-energy, /sites/volta-solar, /sites/enecom, /sites/better-energy, /sites/rune, /sites/younergy-1
- Studio Ruelle, Virya Energy case study: ruelle.studio/projects/virya-energy
- Scroll-driven animation support and guides: developer.mozilla.org (Scroll-driven animations), dev.to and cssawwwards.com 2026 guides, devtoolbox scroll() and view() guide
- 2026 trend press: elements.envato.com/learn/web-design-trends, line25.com/articles/web-design-trends-2026, studiomeyer.io/en/blog/webdesign-trends-2026, lexingtonthemes.com/blog/stunning-hero-sections-2026, itamde.com kinetic typography
- AI-slop pattern documentation: vibecodekit.dev/ai-slop-design, 925studios.co/blog/ai-slop-design-tells, prg.sh purple-gradient essay, impeccable.style/slop
- Electrician site roundups: nestasites.com/blog/11-best-electrician-websites, mycodelesswebsite.com/electrician-websites, starterstory.com/electrician-business-web-designs, hookagency.com/blog/electrician-website-design-inspiration
- HVAC and construction: hookagency.com/blog/hvac-websites, onthemap.com HVAC examples, sitebuilderreport.com/inspiration/hvac-websites and /construction-websites, colorlib.com construction examples
- Solar and energy brands: comradeweb.com/blog/best-solar-websites (Tesla, Sunrun analysis), hstalks.com Octopus Energy brand case study, ironeko.com Octopus branding analysis, octopus.energy/blog/spotlight-design-team, kurppahosk.com/work/aira, heatgeek.com, artisanelectrics.co.uk
- Type: fontshare.com/pairs, inspotype.com Fontshare pairings, fonts.google.com (Bricolage Grotesque, Archivo, Big Shoulders, IBM Plex Mono), fontsinuse.com Bricolage Grotesque, a1.gallery/font/bricolage-grotesque
- Micro-interaction conversion data: vwo.com/blog/website-form-examples, ralabs.org booking UX, digidrub.com micro-interactions

Note: direct WebFetch of awwwards.com, heatgeek.com, artisanelectrics.co.uk, octopus.energy was blocked by the research proxy (HTTP 403), so per-site visual detail for those relies on search-index summaries, case-study pages and prior knowledge rather than a live render. Verify palettes against the live sites before borrowing any exact value.
