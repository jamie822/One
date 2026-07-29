# SKILL ROSTER — every installed skill, its job, its audit

The full audit of the toolkit. Every skill is either assigned a specific
task inside the build pipeline (phase-numbered per BUILD_CHECKLIST.md),
held in reserve with a stated trigger, or explicitly out of the standard
pipeline. No skill is silently unused; skips on a live build are declared
in chat. Lead = Claude, who audits every output before it moves forward.

## Phase 1 — Strategy

| Skill | Task assignment | Lead's audit of its output |
|---|---|---|
| `prospect-audit` | Audit the client's existing site + 3 local competitors; produce the beat-list | Findings are specific and screenshot-backed, not generic |
| `seo-local` | GBP plan, NAP, service-area strategy, review plan, registry citations | Cross-check against doctrine/local-seo.md launch checklist |
| `seo-page` | Per-page primary term, title, H1, meta | Titles ≤600px, one intent per page, no doorway patterns |
| `seo-maps` | Geo-grid / local pack baseline for the client's town | Baseline recorded in PLAN.md so go-live movement is measurable |

## Phase 2 — Direction

| Skill | Task assignment | Lead's audit |
|---|---|---|
| **`impeccable`** | THE FLAGSHIP. Run `context.mjs`, load the matching playbook + `craft-floor.md` BEFORE any visual decision; its rules govern the whole build; its critique protocol runs Phase 8 | Confirm playbook + craft floor actually loaded and named in the direction contract |
| `ui-ux-pro-max` | `--design-system` with variance/motion/density dials → palette/type/style candidates | Output may be overridden by founder-taste/ledger — override recorded in writing |
| `design-taste` | Second opinion on the chosen direction (Design Read + dials) | Its objections addressed or rebutted in the contract |
| `taste` | Anti-slop check: category-reflex test, banned-cluster scan | Zero unacknowledged AI-slop patterns |
| `aesthetic-anchors` | Verify the direction is a committed anchor with token fidelity, not a hybrid | Anchor named; token drift = fail |
| `design-system` | Three-layer token architecture (primitives → semantic → component) | Rebrand test: changing primitives restyles the site |
| `brandkit` / `graphic-design` / `design` / `brand` | Only when the client lacks identity: brand board, logo, mark | Founder sees the board before it enters the build |

## Phase 3 — IA and depth (lead + doctrine; no single skill owns depth)

Lead assembles the architecture from doctrine/trade-market.md canonical
orders + founder-taste rule 11. `cro` (Phase 4) and `impeccable` playbooks
sanity-check the section order. Audit 3 tabulates depth per page.

## Phase 4 — Copy

| Skill | Task assignment | Lead's audit |
|---|---|---|
| `copywriting` | Draft every section from the Phase 3 architecture | Every PLAN.md section has copy; no orphan sections |
| `ogilvy` | Headlines: brand+promise+specifics; positioning; long-copy discipline | Each H1/H2 passes the diagnostic questions |
| `copy-editing` | Seven sweeps over the full deck | Sweep log kept; proof gaps -> TEMP or cut |
| `stop-slop` | De-slop pass 1 (surface tells) | Scan script clean |
| `avoid-ai-writing` | De-slop pass 2 (voice profile, iterate to convergence) | Converged, voice = the tradesperson |
| `humanizer` | De-slop pass 3 (word/phrase, em-dash zero) | grep '—' returns nothing customer-facing |
| `structural-humanizer` | De-slop pass 4 (discourse level: no tidy arcs/stated lessons) | Structural tells list clean |
| `cro` | CTA cadence (1.5-2 viewports), intent-matching, risk-reducers, form spec | CTA map drawn page by page; form = canonical 7-field |
| `seo-geo` | Direct-answer leads, quotable passages for AI Overviews | Each money page opens with an extractable answer |
| `seo-content` | E-E-A-T: named human, credentials, first-hand markers | E-E-A-T inventory listed per page |

## Phase 5 — Build

| Skill | Task assignment | Lead's audit |
|---|---|---|
| `frontend-design` | Page layout implementation to the direction contract | Matches contract; no default drift |
| `design-engineering` | Polish details: spacing, hierarchy, states, the invisible correctness | Eight states exist on interactive elements |
| `web-design-guidelines` | Interface compliance review of built pages | Violations fixed or justified |
| `apple-design` | Motion physics on interactions: springs, interruptibility, reduced-motion | No ease-in on UI; <300ms interactions |
| `modern-web-design` | Scene/scroll patterns, native CSS first | Zero JS where CSS can do it |
| `scroll-reveal-libraries` | Simple reveal tier (before any library) | Only if native insufficient — reason stated |
| `gsap-core`→`timeline`→`scrolltrigger`→`performance` (+`plugins`/`utils`/`react`/`frameworks` as stack demands) | ONLY when native CSS genuinely cannot: complex hero choreography, scroll scenes | Written justification; compositor-only props; perf re-verified |
| `motion-framer` / `animejs` / `lottie-animations` / `locomotive-scroll` / `animated-component-libraries` | Reserve bench — a stated reason required to reach for any | Reason logged; bundle cost accounted |
| `find-animation-opportunities` | Sweep the built site for dead spots that should move (live-aspects-throughout rule) | Its list actioned or rejected item by item |
| `improve-animations` | Raise the motion bar on what exists | Plan applied |
| `review-animations` | Audit all motion against the craft bar | Flags fixed |
| `ui-styling` | Component patterns where shadcn/Tailwind idioms help (forms, dialogs) | Consistent with token system |
| `dataviz` | Any chart/meter/estimator visual (Reckoner, payback curves) | Readable both themes, honest scales |
| `seo-images` | Alt text, formats, dimensions, lazy strategy | Zero unexplained images; CLS-safe |

## Phase 5b — Assets (Higgsfield family — REQUIRES connection; currently
offline this session, fallback = built scenes/SVG until back)

| Skill | Task assignment | Lead's audit |
|---|---|---|
| `higgsfield-generate` | Section photography (graded to the direction), HERO VIDEO LOOPS for the scrim slot when video-grade is ordered | Grade matches palette; weight budget ≤ LCP rules; TEMP-tagged as generated |
| `higgsfield-product-photoshoot` | Kit/van/board "product" shots when real photos are missing | Reads real, not stocky; swap-listed for client photos |
| `higgsfield-video-explainer` | Optional service explainer for high-ticket pages (solar) | Only on founder request; captions on |
| `higgsfield-soul-id` | Owner likeness consistency IF the client wants a generated presence | Never without client consent; real photos preferred (doctrine: real beats stock) |
| `higgsfield-websites` / `higgsfield-game-generation` / `higgsfield-marketplace-cards` | OUT of the site pipeline (different product lines) | — |
| `banner-design` / `slides` | Sales collateral for the studio (proposals, social), not client sites | On demand |

## Phase 6 — Technical

| Skill | Task assignment | Lead's audit |
|---|---|---|
| `seo-schema` | JSON-LD suite; NO self-serving aggregateRating at go-live | Parser-validated, types listed per page |
| `seo-technical` | Crawlability, meta, security headers note for hosting | Checklist output in DELIVERY.md |
| `seo-sitemap` | Sitemap generate + validate | Routes complete |
| `programmatic-seo` | RESERVE: only for multi-location clients where pages can be genuinely distinct (doorway rule) | Distinctness proven per page before build |

## Phase 7 — Verification

| Skill | Task assignment | Lead's audit |
|---|---|---|
| `performance-audit` | CWV pass against doctrine budgets (LCP 2.5s/INP 200ms/CLS 0.1 p75) | Numbers pasted, not summarised |
| `lighthouse-100` | Audit-fix-verify loop to 100×4 every route | The table, every route |
| `responsive-check` | 360→1920 sweep with screenshots | Zero overflow, breaks fixed |
| `a11y-critic` | WCAG 2.2 design review incl. 2.2.2 pause control, motion rules | Findings fixed or rebutted |
| `a11y-test` | Real axe-core + keyboard runs incl. menu-open/sticky/paused states | Zero critical/serious |

## Phase 8 — Critique

`impeccable` critique protocol: two independent agents on the RENDERED
site (craft lens + end-customer lens), /32 scoring, ≥28 both, zero P0.
Lead relays verdicts honestly, fixes P1s, re-verifies.

## Studio ops (not client-facing)

`update-config`, `fewer-permission-prompts`, `session-start-hook` (restart
resilience), `skill-creator` (when we mint our own skills), artifact/
preview tooling, `docx`/`pdf`/`xlsx`/`pptx` (client documents), `loop`,
`review`/`code-review`/`security-review` (repo hygiene).

## Roster rule

If a new skill is installed, it gets a row here with a phase, a task and
an audit before it is used on a client build. If a listed skill is
unavailable mid-build (like Higgsfield today), the fallback is named in
chat and in DELIVERY.md.
