# BUILD_CHECKLIST — every site, every time, first time right

The execution contract for one client build. Each phase names WHO does the
work (a skill invoked via the Skill tool, a delegated agent, or the lead),
the exact OUTPUT, and the AUDIT the lead runs before the phase may close.
A failed audit loops inside the phase — work never moves forward broken.
Nothing here is optional; skips are declared in chat before any work shows.

Binding context read before Phase 1: `research/founder-taste.md` (all 13
hard rules — depth is the standard, live-hero floor, unmissable CTAs),
all six files in `research/doctrine/`, `research/direction-ledger.md`,
`MASTER_PROMPT.md` Part 10, and `kit/SKILL_ROSTER.md` — the per-skill
task assignments and audits this checklist's phases execute. Every
installed skill has a row there; unavailable skills (e.g. Higgsfield
offline) get their fallback named in chat and in DELIVERY.md.

---

## Phase 0 — Intake and scaffold (lead, 30 min)

- [ ] Intake answers (`kit/INTAKE.md`) transcribed into `src/data/client.js`;
      every gap filled with a plausible `// TEMP` industry value (doctrine:
      trade-market price anchors) — zero blanks
- [ ] Scaffold from the current best flagship: package.json, astro.config
      (`inlineStylesheets: 'always'`), fonts, gates.mjs, bundle-preview.mjs
- [ ] Repo hygiene: commit + push immediately (containers restart without
      warning)

**AUDIT 0 (lead):** client.js reads as a complete business; every TEMP
tagged; pricing model internally consistent (from-prices, estimator maths
and any cost tables derive from ONE model).

## Phase 1 — Strategy (skills: `prospect-audit`, `seo-local`, `seo-page`)

- [ ] `prospect-audit` → competitor and existing-site findings
- [ ] `seo-local` → GBP plan, NAP, service-area strategy per
      doctrine/local-seo.md (categories, review plan, registry citations)
- [ ] `seo-page` → per-page title/H1/keyword targets
- [ ] Output: `PLAN.md` — page map with head terms, plus the go-live
      local-SEO checklist split studio/client

**AUDIT 1 (lead):** every page has one primary term and an intent; no
doorway-page patterns (doctrine/google.md rule on per-town funnels);
titles ≤600px rendered; PLAN cites which doctrine rules it applies.

## Phase 2 — Direction (skills: `impeccable`, `ui-ux-pro-max`,
`design-taste`, `taste`, `aesthetic-anchors`; inputs: founder-taste,
ledger, hero recipes)

- [ ] `impeccable` context + craft-floor loaded
- [ ] `ui-ux-pro-max --design-system` with dials; output may be OVERRIDDEN
      by founder-taste/ledger — record any override
- [ ] Claim ONE unused hero recipe from `kit/hero-recipes.md` (16 total);
      design the signature moment (doctrine/design-craft.md: one signature
      moment per hero, not many effects)
- [ ] `design-taste` + `taste` + `aesthetic-anchors` second opinions
- [ ] Output: DIRECTION CONTRACT (in the home page header comment):
      thesis, own-world palette/type, hero recipe, motion signature,
      layout rhythm, CTA colour system

**AUDIT 2 (lead):** ≤1 axis shared with EVERY ledger row; hero passes the
live-hero floor ON PAPER (built scene, majority of hero, movement on
arrival); no AI-slop cluster (aurora-on-dark default, dot grid, tilt,
cyan-on-black — unless the recipe deliberately reclaims one); CTA system
gives the primary action the page's highest visual energy (taste rule 12).

## Phase 3 — Information architecture: DEPTH (lead + doctrine)

- [ ] Home follows the canonical order in doctrine/trade-market.md,
      FULLY POPULATED — target 10-14 real sections, not 6 sketches
- [ ] Every service gets: symptom-led intro, what happens on the job,
      what it costs (table or from-price with what moves it), duration,
      credentials that apply, FAQ block (3-5 real questions), intent-
      matched CTA
- [ ] FAQ bank written per page (real questions from doctrine/trade-market
      + intake answer 17); FAQPage schema where genuine
- [ ] Proof inventory mapped: reviews (with job type + area + date),
      credentials (explained, register-linked), guarantee, insurance,
      response promise, jobs-done counts
- [ ] Areas section with substance (real place names, coverage logic),
      NO thin town pages

**AUDIT 3 (lead):** section count and content depth per page tabulated
against the canonical order; any page under depth is returned to this
phase. This audit exists because the founder's verdict was "no depth at
all" — it is the one we never fail again.

## Phase 4 — Copy (skills: `copywriting`, `ogilvy`, `copy-editing`,
`stop-slop`, `avoid-ai-writing`, `humanizer`, `structural-humanizer`,
`cro`, `seo-geo`, `seo-content`)

- [ ] `copywriting` drafts every section from the Phase 3 architecture
- [ ] `ogilvy` on every headline: brand+promise+specifics, 8-12 words
- [ ] Claim the market gap: itemised written pricing (only 37% get one —
      doctrine/trade-market); guarantees lead solar copy (BEIS #1 incentive)
- [ ] Prices: round for installs, precise for savings (doctrine/sales-psych)
- [ ] `copy-editing` seven sweeps, then ALL FOUR de-slop passes
- [ ] `cro`: CTA every 1.5-2 viewports, intent-matched (call for distress,
      form for considered), risk-reducing microcopy at every action
- [ ] `seo-geo` + `seo-content`: direct-answer leads, quotable passages,
      E-E-A-T signals (named human, checkable registers)
- [ ] Output: `COPY.md`, the single copy source

**AUDIT 4 (lead):** layer-cake scan (headings alone carry the argument);
CTA label lock (exactly two intents, consistent labels); zero em dashes;
zero negative-parallelism/rule-of-three tells; every claim has proof or a
TEMP tag; reading the deck aloud sounds like the tradesperson, not a brochure.

## Phase 5 — Build (skills: `frontend-design`, `design-engineering`,
`web-design-guidelines`, `apple-design`, `modern-web-design`, gsap family
only if native CSS cannot; `find/improve/review-animations`, `seo-images`)

- [ ] Hero FIRST, to the recipe: built scene, signature moment, pause
      control (WCAG 2.2.2 — required on every loop >5s), reduced-motion
      still frame that is DESIGNED, demo-forced motion in preview bundle
- [ ] Three-layer tokens; fluid clamp() type; OKLCH-informed palette;
      no #000/#fff
- [ ] Canonical 7-field-max quote form (doctrine/ux-evidence spec),
      endpoint-configurable with honest demo mailto mode
- [ ] Live aspects THROUGHOUT, not just the hero: count-ups, draw-ins,
      hover states with intent, one rAF canvas max, paused when hidden
- [ ] `seo-images`: dimensions, lazy below fold, srcset, alt text
- [ ] Commit + push after every page

**AUDIT 5 (lead — the LOOK audit):** render and READ full screenshots of
every section, desktop AND mobile, before any claim of done. Checklist per
screenshot: does it move, is the CTA the loudest element, is there depth,
would the founder screenshot it proudly. Fix batches happen here, inside
the phase.

## Phase 6 — Technical optimisation (skills: `seo-schema`,
`seo-technical`, `seo-sitemap`)

- [ ] JSON-LD: Electrician (or HomeAndConstructionBusiness for solar),
      PostalAddress, OfferCatalog, Article, BreadcrumbList, Person,
      FAQPage where genuine; NO self-serving aggregateRating for go-live
- [ ] Canonicals, sitemap, robots, meta descriptions to budget
- [ ] 404 page, on-brand, converting

**AUDIT 6 (lead):** schema validates by parser; every page's JSON-LD
types listed and correct; TEMP grep produces the complete swap list.

## Phase 7 — Verification (skills: `performance-audit`, `lighthouse-100`,
`responsive-check`, `a11y-critic`, `a11y-test`; tools: gates.mjs)

- [ ] `node gates.mjs`: zero overflow 360→1920, zero console errors,
      axe zero critical/serious on every route INCLUDING menu-open,
      sticky-bar and paused-hero states
- [ ] Lighthouse ALL routes: 100/100/100/100 (99 perf tolerated only with
      a stated founder-visible reason)
- [ ] Hero pause control works; reduced-motion still frame verified
- [ ] Estimator/calculator maths verified live against the model

**AUDIT 7 (lead):** the numbers, pasted in chat. No summary words like
"passes" without the table.

## Phase 8 — Independent critique (agents)

- [ ] TWO independent critique agents on the RENDERED site (one craft
      lens, one end-customer conversion lens), scoring /32
- [ ] Gate: ≥28/32 from both, zero P0s; every P1 fixed same session,
      re-verified (Phase 7 re-run on changed routes)

**AUDIT 8 (lead):** verdicts summarised honestly to the founder, including
what was NOT fixed and why.

## Phase 9 — Package and hand-off (lead)

- [ ] Preview bundle (motion force-enabled) published to the client's
      stable artifact URL
- [ ] `DELIVERY.md`: verification record, complete TEMP swap list, form
      wiring note, go-live local-SEO checklist, hosting notes
- [ ] `design-system/SKILL_LOG.md` complete: one line per roster skill —
      invoked (with its contribution) or the stated reason it was not.
      Empty reasons fail this audit
- [ ] Everything committed and pushed
- [ ] Hand-off message to the founder: link, what to look at, known
      trade-offs, the TEMP list — then STOP and wait for design sign-off
- [ ] Founder verdict appended to `research/founder-taste.md`, dated

---

## Status discipline (all phases)

Before any background agents or multi-minute silence: say in chat what is
running and how long it takes. After every phase: one-line progress note.
Commit + push at every phase boundary minimum.
