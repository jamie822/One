# CLAUDE.md — binding rules for this repo

## THE RULE (non-negotiable)

**When building or changing any website in this repo, you MUST invoke the
installed skills, in the order below, using the `Skill` tool. Not read about
them. Not reference them in documentation. Invoke them.**

You are the project manager. The skills do the work. You do not substitute your
own judgement for a skill that exists for that job, and you do not skip a phase
because you think you already know the answer.

This rule exists because it was broken: a full client site was built without
invoking `impeccable`, `design-taste`, `cro`, or any of the four copy skills.
The result was flat, generic, and the client rejected it. Every criticism made
was something the skipped skills would have caught.

### THE PROCESS MANDATE (founder, 2026-07-29 — every build, verbatim)

"We do not skip any section, we do not substitute any aspect, if the
skill/agent doesn't work, we find a way for it to work and do not move on
until it has been completed fully by its assigned skill."

Operationally:
1. Every phase of `kit/BUILD_CHECKLIST.md` runs in full on every build. No
   phase closes until its assigned skills have RUN (Skill tool invocation,
   real output, contribution logged in the build's
   `design-system/SKILL_LOG.md`).
2. No substitution: the lead never does by hand what a roster skill exists
   to do. Carrying a previous cycle's output forward counts as a skip
   unless the skill is re-run or the founder approves the reuse in chat.
3. A broken or blocked skill is a blocker to FIX (reinstall, re-auth,
   re-route, retry), not to route around. Only when the blocker is outside
   the session's power (e.g. a dead connector like Higgsfield today) is it
   surfaced to the founder immediately, and only a founder-approved, named
   fallback in chat lets the phase close — recorded in SKILL_LOG.md and
   DELIVERY.md, with the skill queued to re-run the moment it works.
4. MCP status check at the start of every build: GitHub, Claude Code
   Remote, Higgsfield, magic (21st.dev). Anything down gets flagged in
   chat before Phase 0 closes, every build, until it is back.

### If a skill cannot run

Say so explicitly, in the message, before showing any work, with the fix
attempted and the founder decision needed. Silent omission is the failure
mode being prevented here.

---

## MANDATORY ORDER

Invoke with `Skill(skill_name)`. Follow what each returns.

### Phase 1 — Strategy
| # | Skill | For |
|---|---|---|
| 1 | `prospect-audit` | Audit the prospect's / competitors' existing sites first |
| 2 | `seo-local` | Local pack, GBP, NAP, service areas |
| 3 | `seo-page` | Keyword and title targets per page |

### Phase 2 — Design direction (BEFORE any layout code)
| # | Skill | For |
|---|---|---|
| 4 | **`impeccable`** | **The flagship. Load first, always. Run its `context.mjs`, load the playbook that matches the request, then load `craft-floor.md` before editing any UI.** |
| 4b | **`ui-ux-pro-max`** | **Run `--design-system` with the `--variance` / `--motion` / `--density` dials before any visual decision. Local database, works offline: 84 styles, 192 palettes, 74 font pairings, 98 UX guidelines, 16 GSAP motion presets, Astro stack rules.** |
| 4c | `ui-styling` | Component and layout patterns |
| 4d | `design-system` | Three-layer token architecture |
| 4e | `design` · `brand` · `banner-design` · `slides` | Identity, assets and decks when the job calls for them |
| 5 | `design-taste` | Second opinion on direction |
| 6 | `taste` | Anti-slop check on the direction |
| 7 | `aesthetic-anchors` | Pick a deliberate visual direction — never default trade-blue |
| 8 | `brandkit` | Brand board, if the client has no identity |
| 9 | `graphic-design` | Logo work, if needed |
| 10 | `imagegen-web` | Per-section design references before coding |
| 11 | `image-to-code` | Build against those references |

### Phase 3 — Copy
| # | Skill | For |
|---|---|---|
| 12 | `copywriting` | Draft every page |
| 13 | `ogilvy` | Headlines and positioning |
| 14 | `copy-editing` | Tighten, including the client's own words |
| 15 | **`stop-slop`** | De-slop pass 1 — surface |
| 16 | **`avoid-ai-writing`** | De-slop pass 2 — voice profile, iterate to convergence |
| 17 | **`humanizer`** | De-slop pass 3 — word and phrase |
| 18 | **`structural-humanizer`** | De-slop pass 4 — discourse level |
| 19 | `cro` | Conversion structure, CTA placement, form design |
| 20 | `seo-geo` | AI-search citability |
| 21 | `seo-content` | E-E-A-T |

**All four de-slop passes. Every page. Rewording alone does not beat structural
AI detection.**

### Phase 4 — Build
| # | Skill | For |
|---|---|---|
| 22 | `frontend-design` | Layout |
| 23 | `design-engineering` | UI polish, spacing, hierarchy |
| 24 | `web-design-guidelines` | Interface best practice |
| 25 | `apple-design` | Fluid, physical motion |
| 26 | `modern-web-design` | Motion, micro-interaction and scrollytelling patterns. Native CSS first, zero JS |
| 26b | `scroll-reveal-libraries` | The simple end of scroll motion, before reaching for a library |
| 27 | `gsap-core` → `gsap-scrolltrigger` → `gsap-timeline` → `gsap-performance` | Only when native CSS genuinely cannot do it. `gsap-plugins` for Flip/SplitText, `gsap-react` / `gsap-frameworks` per stack, `gsap-utils` for helpers |
| 27b | `motion-framer` · `animejs` · `lottie-animations` · `locomotive-scroll` · `animated-component-libraries` | Reach for these only with a stated reason |
| 28 | `find-animation-opportunities` | Find what should move and doesn't |
| 29 | `improve-animations` | Raise the motion bar |
| 30 | `review-animations` | Audit the motion |
| 31 | `seo-images` | Alt text, formats, sizing |

### Phase 5 — Optimise
| # | Skill | For |
|---|---|---|
| 32 | `seo-schema` | JSON-LD — `Electrician`, not `LocalBusiness` |
| 33 | `seo-technical` | Crawlability, CWV, indexing |
| 34 | `seo-sitemap` | Sitemap validation |
| 35 | `programmatic-seo` | Location/industry page clusters |
| 36 | `seo-maps` | Geo-grid, GBP audit |

### Phase 6 — Verify
| # | Skill | For |
|---|---|---|
| 37 | `performance-audit` | Core Web Vitals |
| 38 | `lighthouse-100` | Audit-fix-verify to 100 |
| 39 | `responsive-check` | Every breakpoint |
| 40 | `a11y-critic` | WCAG 2.2 review |
| 41 | `a11y-test` | Real axe-core / Playwright testing |

---

## The four that are never optional, at any price

`impeccable` · the four de-slop passes · `seo-local` · `performance-audit`

---

## Other standing rules

- **THE LIVE-HERO FLOOR (founder-mandated, 2026-07-28).** Every client site
  opens with a BUILT, MOVING, immersive hero scene — code, not photography —
  at minimum the level of ES Elec's spinning core or Loxley's rising sun.
  The moving scene occupies the majority of the hero. Read
  `research/founder-taste.md` BEFORE any design decision: it records the
  founder's approvals and rejections as hard rules and outranks generic
  craft guidance wherever they conflict.
- **No blanks.** Missing client facts render as plausible industry-average
  temporary values tagged `// TEMP` in the data file, per MASTER_PROMPT.md
  Part 6. All temps are swapped for real facts before paid go-live. The one
  hard exception: never publish invented reviews, ratings or testimonials on
  a client's live site (illegal under the UK DMCC Act 2025).
- **Never animate the LCP element.**
- **Client brand beats house preference.** If they have a logo and colours, use
  theirs.
- **Only build a location page you can make genuinely distinct.**
- **No fear-selling.** See `AUDIENCE.md` §6 — it is a legal line as well as an
  ethical one.
- **Render and look at the result before showing it to anyone.** Do not judge a
  build by grepping the source.
- **Report status before long-running work.** The founder watches the session;
  before any stretch of background agents or multi-minute silence, say in
  chat exactly what is running and how long it should take.

## The studio's memory (read at the start of every engagement)

- `research/founder-taste.md` — the founder's recorded taste. Binding.
- `research/doctrine/` — distilled operating doctrine researched from the
  primary authorities: `google.md`, `ux-evidence.md`, `sales-psychology.md`,
  `local-seo.md`, `design-craft.md`, `trade-market.md`. These are the
  studio's textbook; new builds apply them, and new evidence gets appended
  with sources, never pasted as link dumps.
- `research/conversion-psychology.md` · `research/design-benchmarks.md` —
  first-generation research, still valid where doctrine doesn't supersede.
- `research/direction-ledger.md` — every shipped design direction; a new
  client may share at most ONE of the five design axes with any row (the
  standing shared axis is the live-hero floor itself).
- `kit/` — the starter kit: intake questionnaire, hero recipes, shared
  tools, and the new-client checklist. Start every build from here.

## Reference docs

`MASTER_PROMPT.md` (the build order) · `BUILD_PROCESS.md` (phases and gates) ·
`AUDIENCE.md` (the end customer) · `RESEARCH.md` (market) ·
`COMMERCIALS.md` (pricing) · `OUTREACH.md` (prospecting)
