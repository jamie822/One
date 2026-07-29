# DESIGN.md — ES Elec visual world: TUNGSTEN

Documented from the incumbent implementation (src/styles/tokens.css,
base.css, site.css) plus the v3 direction contract in PLAN.md Phase 2.
Founder-approved world; v3 evolves it, nothing replaces it.

## Thesis
A filament-lit workshop at night. Warm charcoal grounds, tungsten-amber
light that behaves like light (glows, pulses, ignites), paper middles like
a written quote on the bench. The site should feel like standing next to
the one competent bloke whose van is always stocked.

## Tokens (primitives — the incumbent values, do not drift)
- Grounds: ground #16130f · surface #211d17 · edge #2d2820
- Ink: ink #f4efe6 · ink-soft #b5aa97
- Amber: amber-300 #ffb24d (highlights only) · amber-500 #ff9e1f
  (CONVERSION ONLY, on-action text #171001) · amber-700 #a05f00 (AA on paper)
- Paper: paper #f7f2e9 (+ paper-ink #221c12)
- No #000, no #fff, anywhere.

## Type
Clash Display (display, tight tracking, clamp() ceiling ~6rem) + Satoshi
(text). Figures in instruments and tables: tabular-nums.

## The colour law
Amber-500 is spent on one thing: the action the page wants. If a decor
element uses amber-500, the CTA has lost the loudest-element contest and
the page fails Audit 5. Highlights use amber-300 sparingly; paper sections
use amber-700 for accents (5.0:1 on paper).

## Motion signature
- Hero: the Power Core, evolved — boot-up choreography once on arrival
  (~2.4s ease-out: grid in → current pulse → orb ignition bloom → rings
  spin up → chips arrive), then the steady idle state.
- Sitewide live aspects: count-ups, rail draw-ins, filament flickers on
  reveal — compositor-only (transform/opacity), fire-once IO pattern.
- WCAG 2.2.2: pause control on any loop >5s (hero gets the styled pause,
  bottom-right). Reduced-motion serves the DESIGNED still: core lit,
  rings at composed angles — never a blank.
- Demo previews force motion on (bundler rewrite); live site honours OS
  settings. Never animate the LCP element.

## Layout rhythm
Dark bookends (hero, solar band, contact) with paper middles. Sections
alternate ground/paper deliberately; trust shelf overlaps the hero edge.
CTA cadence at most 2 viewports apart (COPY.md carries the map).

## Components of record
Nav, Footer, Mark, QuoteForm (endpoint-configurable, demo mailto mode),
inline CTA band, trust shelf counts, Reckoner instrument (v3), counter
rail. Eight interaction states on anything interactive.

## Anti-reference (banned in this world)
Trade-blue anything · aurora-on-dark defaults · dot grids · cyan/neon ·
glassmorphism as decor · stock hero photography (the founder's
"Coronation Street" rejection) · badge-wall credential strips.
