# Skills library

36 Claude Code skills vendored for building electrician client websites. Each
folder has its own `SKILL.md`; Claude loads them automatically when a task
matches, or you can invoke one by name.

Total size ~4.7MB. All MIT or Apache-2.0. Attribution at the bottom.

---

## The build pipeline

Roughly the order you'd use them on a client job.

| Stage | Skill | What it's for |
|---|---|---|
| **1. Prospecting** | `prospect-audit` | Audit a prospect's existing site (or a competitor's) and produce a business-language brief. Turns cold outreach into "here are three specific things costing you work." |
| **2. Direction** | `impeccable` | **The flagship.** Design, redesign, critique, polish. Refuses safe, timid work. Load this before you touch a layout. |
| | `design-taste` · `taste` | Second and third opinions on visual direction. Anti-slop, anti-templated. |
| | `aesthetic-anchors` | Pick a deliberate visual direction instead of defaulting to trade-blue. |
| **3. Brand** | `brandkit` | Brand-guideline boards, logo systems, identity decks. |
| | `graphic-design` | Logo creation: briefing frameworks, vectorisation, mockups. |
| | `imagegen-web` | Generate per-section design references before writing code. |
| | `image-to-code` | Turn a design image into an accurate build. |
| **4. Copy** | `copywriting` · `ogilvy` | Write hero, service, location and about copy. |
| | `copy-editing` | Tighten copy that already exists, including the client's own words. |
| | `cro` | Page flow, form design, CTA placement. |
| **5. De-slop** | `stop-slop` → `avoid-ai-writing` → `humanizer` → `structural-humanizer` | **Run these on every page.** See below. |
| **6. Build** | `frontend-design` · `design-engineering` · `web-design-guidelines` | Layout, UI polish, interface guidelines. |
| | `apple-design` | Fluid, physical motion and depth. |
| **7. Motion** | `css-animations` | CSS-only motion. Always try this first — zero JS payload. |
| | `gsap` | Timeline and scroll-driven animation when CSS genuinely can't. |
| | `find-animation-opportunities` | Find places that should animate but don't. |
| | `improve-animations` · `review-animations` | Audit and raise the craft bar on existing motion. |
| **8. SEO** | `seo-local` | **The important one.** Google Business Profile, NAP, citations, map pack. |
| | `programmatic-seo` | Location and industry page clusters without duplicate content. |
| | `seo-page` · `seo-schema` · `seo-technical` | On-page, JSON-LD, crawlability and Core Web Vitals. |
| **9. Verify** | `performance-audit` | PageSpeed / Lighthouse / Core Web Vitals before deploy. |
| | `lighthouse-100` | Audit-fix-verify loop until Accessibility, Best Practices and SEO all hit 100. |
| | `responsive-check` | Screenshot every breakpoint, report layout breaks. |
| | `a11y-critic` · `a11y-test` | WCAG 2.2 review and real axe-core/Playwright testing. |

---

## The anti-slop stack

Four skills, four different passes. The client requirement is "no AI slop", and
one pass doesn't get there — each catches what the others miss.

1. **`stop-slop`** — cuts filler, adverbs, passive voice, rule-of-three lists,
   em dashes, pull-quote sentences. Fast surface pass.
2. **`avoid-ai-writing`** — detect-only or edit-in-place, with a voice profile
   (casual / professional / technical / warm / blunt) and an
   iterate-to-convergence mode. Set the profile to match the client's actual
   speech.
3. **`humanizer`** — word and phrase level, built on Wikipedia's "Signs of AI
   writing": inflated symbolism, promotional language, vague attribution,
   negative parallelisms.
4. **`structural-humanizer`** — the one most people skip. Removes
   *discourse-level* tells that survive surface editing: moral-of-the-story
   closers, tidy single-track arcs, unbroken linear structure. Grounded in the
   StoryScope study, which found narrative structure alone identifies AI text at
   93.2% F1 and that professional stylistic rewriting moved detection by only
   1.6 points.

That last finding is the argument for running all four: rewording alone does not
work.

---

## Notes on a few

**`impeccable`** is the heaviest and the best. Apache-2.0, v4.0.2, ships
reference playbooks and scripts. It expects `PRODUCT.md` and `DESIGN.md` in the
project and will look for them. Worth reading its SKILL.md once before first
use.

**`prospect-audit`, `responsive-check`, `a11y-test`, `lighthouse-100`** need a
browser. Chromium is pre-installed here (`PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`)
but this container's network policy blocks outbound HTTPS, so they can only
reach `localhost`. They work fine against a local `npm run dev`; auditing a live
prospect site needs a session with unrestricted network access.

**`css-animations` and `gsap`** come from a HyperFrames collection and mention
that harness in places. The underlying technique reference is still sound.

---

## Licences

All MIT or Apache-2.0. Original authors retain copyright.

| Skills | Source | Licence |
|---|---|---|
| `impeccable` | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache-2.0 |
| `apple-design`, `design-engineering`, `improve-animations`, `review-animations`, `find-animation-opportunities` | [emilkowalski/skill](https://github.com/emilkowalski/skill) | MIT |
| `taste`, `brandkit`, `imagegen-web`, `image-to-code` | [leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill) | MIT |
| `design-taste` | [h3nryprod01/design-taste](https://github.com/h3nryprod01/design-taste) | MIT |
| `avoid-ai-writing` | [conorbronsdon/avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing) | MIT |
| `humanizer`, `structural-humanizer` | [NulightJens/humanizer-stack](https://github.com/NulightJens/humanizer-stack) (orig. [blader/humanizer](https://github.com/blader/humanizer)) | MIT |
| `stop-slop`, `ogilvy`, `frontend-design`, `web-design-guidelines`, `gsap`, `css-animations`, `programmatic-seo` | [boraoztunc/skills](https://github.com/boraoztunc/skills) (stop-slop orig. [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop)) | Apache-2.0 / MIT |
| `copywriting`, `copy-editing`, `cro` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | MIT |
| `seo-local`, `seo-technical`, `seo-schema`, `seo-page` | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | MIT |
| `prospect-audit`, `lighthouse-100`, `responsive-check` | [peterhadorn/webdesign-agency-skills](https://github.com/peterhadorn/webdesign-agency-skills) | Apache-2.0 |
| `performance-audit` | [brunnocarpena/performance-audit-skill](https://github.com/brunnocarpena/performance-audit-skill) | MIT |
| `a11y-critic`, `a11y-test` | [zivtech/accessibility-skills](https://github.com/zivtech/accessibility-skills) | MIT |
| `graphic-design` | [designrique/ai-graphic-design-skill](https://github.com/designrique/ai-graphic-design-skill) | MIT |
| `aesthetic-anchors` | [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design) | MIT |

### Evaluated and deliberately not installed

- [southwellmedia/seo-audit](https://github.com/southwellmedia/seo-audit) — good
  local-service SEO audit, but **no licence file**.
- [jalaalrd/anti-ai-slop-writing](https://github.com/jalaalrd/anti-ai-slop-writing)
  — 223 stars, but **no licence file**, and the four-skill anti-slop stack
  already covers it.

Neither is safe to redistribute in commercial client work. Read them if useful;
don't ship them.

## Updating

Vendored copies, not submodules:

```bash
git clone --depth 1 https://github.com/<owner>/<repo>.git /tmp/u
rm -rf .claude/skills/<name> && cp -r /tmp/u/<path> .claude/skills/<name>
rm -rf .claude/skills/<name>/.git
```
