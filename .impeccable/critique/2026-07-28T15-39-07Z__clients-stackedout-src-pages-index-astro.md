---
target: stackedout homepage hero
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
timestamp: 2026-07-28T15-39-07Z
slug: clients-stackedout-src-pages-index-astro
---
Method: dual-agent (A: design review agent · B: detector/browser agent)

# Critique: Stacked Out homepage (clients/stackedout/src/pages/index.astro)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Autoplay-failure fallback well handled; no current-section state in nav |
| 2 | Match System / Real World | 2 | June and July 2026 print one weekday late; dev-speak leaks ("real markup", "1600 by 1000") |
| 3 | User Control and Freedom | 2 | Looping hero video has no pause once playing (WCAG 2.2.2); reduced-motion honoured |
| 4 | Consistency and Standards | 2 | Underline = link in footer but decoration x21 in calendar; three lockups; three labels for one mailto |
| 5 | Error Prevention | 3 | mailto-only; address printed as copyable text |
| 6 | Recognition Rather Than Recall | 3 | Hero's meaning (full diary = good news) only stated a viewport later |
| 7 | Flexibility and Efficiency | n/a | Persuade surface, single action |
| 8 | Aesthetic and Minimalist Design | 2 | Hero is murky wash, ghost double-printing mid-turn, duplicate calendars, three NEEDED chips |
| 9 | Error Recovery | 3 | Video failure, no-JS, no-view() fallbacks all degrade correctly |
| 10 | Help and Documentation | n/a | Persuade surface |
| **Total** | | **20/32 (62.5%)** | **Acceptable — significant improvement needed** |

## Design Specificity Verdict
Not category-interchangeable: diary metaphor, trade-true jobs, honesty chips are authored. But the flagship hero is where craft collapses — the DOM printing reads as a website header and a table of hyperlinks stamped onto a photo. "Stuck on" is measurably true.
Deterministic scan: hero markup itself CLEAN (0 findings) — the failure is purely visual/compositional. Site-wide CLI: 5 warnings (single-font Shell.astro:101; gradient-text x4 in brand.css:263, hero-calendar.css:319, hero-timeline.css:281, wall-calendar.css:86). In-page detector on homepage: 27 anti-patterns — ai-color-palette x14 (cyan neon on dark x10, cyan gradient x4), line-length x7 (89–107 chars), gradient-text x4, dark-glow x1 (#ffe0a0 box shadow), all-caps-body x1. False positives noted: overlay-induced overflow (2184px) is a detector artifact; 404 was the detector's own image probe.

## Priority Issues
- [P0] Hero composite does not fuse. Registration drift 19→28px accumulating left to right; DOM grid overhangs the physical paper edge (1218 vs 1211); rigid screen-aligned grid over a bowed sheet; tack-sharp hinted text over soft grainy photo; multiply-only ink stays dense in blown highlights; brand mark renders as an opaque app icon; signature yellow→cyan rule multiplies to yellow→GREEN; 21 identical mustard underlines read as hyperlinks; perfect ellipse ring reads drawn-by-machine; masthead is the site nav lockup repeated 100px below itself, outweighing the month 2:1.
- [P0] June and July 2026 are factually wrong (startDow 1 should be 0; 3 should be 2). June 1 2026 is a Monday, printed Tuesday. Moves the ringed free day to the wrong weekday. Brand contract is "never invent a fact"; product is a diary. PaperHero.astro:38,48.
- [P1] The grade fights the footage and loses: brightness 1.42/contrast .84 produces fog, not daylight; 35% of the hero card is dead hazy wall; detector corroborates palette drift (cyan-neon-on-dark x10, dark-glow).
- [P1] NEEDED chips address the founder, not the visitor: "SCREENSHOT NEEDED", "PRICE NEEDED", "NAME NEEDED" + "1600 by 1000" read as a half-built template — self-inflicted disproof for a web design studio.
- [P1] The turn ghosts (both months' ink semi-transparent in the 4–9% mask feather) and loops forever with no pause (WCAG 2.2.2). .ph__free renders at 7.78px.
- [P2] Redundancy stack: three Stacked Out lockups in two viewports; two full calendars back to back; copy measure 89–107 chars vs <80.

## Persona Red Flags
- Jordan (first-timer): logo-on-photo with no stated meaning; key arrives a viewport later; NEEDED chips read as unfinished; will not email a site that looks under construction.
- Casey (mobile): CTA ~1,240px down; 5/4 crop hides job words (concept invisible on phones); preload="auto" pulls mp4 on cellular; crop cuts off the corner where the turn originates.
- Bradford electrician (credibility): copy wins him; loses him on (1) checkably wrong June sheet, (2) NAME NEEDED where a bloke's name should be, (3) unexplained wyelectrical.co.uk email address — silence reads as something to hide.

## Minor Observations
- Footer renders "Websites for trades for electricians and solar installers." (Site.astro:67 concatenation).
- "The diary underneath it is real markup" — insider talk at the conversion moment.
- Source comments disagree on where the one signature gradient lives; what ships displays green.
- view()-timeline reveals flatten to black voids in print/PDF/reader contexts.
- Empty SAT/SUN columns unremarked in the two darkest columns of the photo.
- Mobile: May 2026 nearly collides with SAT/SUN labels; paper wordmark near H1-sized.

## Questions to Consider
1. If the film can't convincingly carry readable printing, why must it carry printing at all? A full diary with one huge ringed free day might sell harder than 21 entries nobody can read — the WallCalendar band already does the readable version in the site's own idiom.
2. What would the hero look like if the MONTH were the masthead and the brand never appeared on the paper?
3. The core claim is that a full diary is good news. Where on this page does anything feel bright, busy, or winning?
