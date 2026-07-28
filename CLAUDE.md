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

### If you skip a skill

Say so explicitly, in the message, before showing any work. "I did not run X
because Y." Silent omission is the failure mode being prevented here.

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

## Reference docs

`BUILD.md` (the prompt) · `BUILD_PROCESS.md` (phases and gates) ·
`AUDIENCE.md` (the end customer) · `RESEARCH.md` (market) ·
`COMMERCIALS.md` (pricing) · `OUTREACH.md` (prospecting)
