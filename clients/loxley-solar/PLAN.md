# Loxley Solar — build plan (flagship template #2)

Direction: **Daylight Yield** (locked in research/direction-ledger.md).
Shared-axis audit: zero axes shared with ES Elec v2 (Tungsten) or Swift v1.
No photography anywhere by design: charts, drawn SVG and numbers carry the
visual weight, which also removes the AI-image trust problem critic B flagged
on ES Elec.

## Business shape

SAB solar installer, Sheffield. Considered purchases only (no emergency path):
the FORM leads, phone is the human fallback. Schema type: `Electrician` with
`knowsAbout` solar? No — use `LocalBusiness` subtype `Electrician` only for
electricians; here the correct specific type is `Solar` none exists, so use
`HomeAndConstructionBusiness` with `makesOffer` OfferCatalog, plus
`EnergyEfficiencyEnhancementService`? Overreach. DECISION: `Electrician` is
wrong; `HomeAndConstructionBusiness` is the most specific valid schema.org
type for a solar installer. Keep MCS number in `hasCredential` text.

## Pages and SEO targets

| Page | Title (~58ch) | H1 | Head terms |
|---|---|---|---|
| / | Solar Panel Installation Sheffield \| MCS \| Loxley Solar | Solar panels for Sheffield roofs, sized on your bills. | solar panels sheffield, solar panel installation sheffield |
| /services/ | Solar, Battery & EV Services Sheffield \| Loxley Solar | Solar, battery and EV charging in Sheffield | battery storage sheffield, ev charger installation sheffield |
| /about/ | About Loxley Solar \| MCS Installer in Sheffield | The installer who shows you the maths first. | mcs installer sheffield |
| /blog/ | Solar Advice for Sheffield Homes \| Loxley Solar | Advice, with the workings shown | — |
| /blog/solar-panel-cost-sheffield/ | How Much Do Solar Panels Cost in Sheffield? 2026 Prices | How much do solar panels cost in Sheffield? 2026 prices | solar panel cost sheffield (GEO direct-answer lead + table) |

Services hub anchors: #solar #battery #solarplus #ev #diverter #health.

## The estimator hero

Roof size (panel count slider 6-16) + facing (S / SE-SW / E-W) →
- Annual generation: panels × kwhPerPanelYear × facingFactor
- Annual value: gen × (selfUseShare × importRate + (1−selfUseShare) × exportRate)
- Guide price: panels × costPerPanel
- Payback: price ÷ value, one decimal
Rendered as three big Sora figures + a drawn SVG yield arc that redraws on
input. Every figure marked "estimate"; quote CTA sits directly under the
result. All maths TEMP until calibrated. No-JS fallback: the static default
(10 panels, south) with the same figures server-rendered.

## Signature moves (from the ledger row)

- Count-up numerals on stats, fired once via IO (reuse the .rise pattern,
  values animate with requestAnimationFrame, reduced-motion = instant)
- SVG line draw-ins (stroke-dashoffset) for the yield arc and payback chart
- Pine-dark closing contact band is the ONE dark moment on the page
- Sun yellow appears only as data marks (chart fills, slider thumb, dots),
  never as text or button colour; buttons are pine ink filled
- Plex Mono for every figure, unit and axis label

## Reuse from ES Elec v2 (process, not design)

- QuoteForm pattern (endpoint-configurable, demo mailto mode, [data-bad] errors)
- gates.mjs verification harness (adjust routes)
- bundle-preview.mjs for the temp share link
- inlineStylesheets 'always', gzip serving assumption, srcset discipline (n/a: no photos)
- Fire-once IO reveals with html.js gate, print-safe
- Sticky mobile bar (labels: "Get a quote" primary + "Call Dan")
- Footer NAP with street address; unique aside labels; 404 page from day one

## Gates (same as template #1)

Dual critique ≥28/32 zero P0 · axe zero critical/serious (incl. slider) ·
360-1920 no overflow · Lighthouse 100×4 all routes · schema valid · TEMP grep
list into DELIVERY.md.
