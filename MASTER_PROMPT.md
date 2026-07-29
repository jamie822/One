# MASTER PROMPT — the standing build order

This file is the studio's memory. It encodes the founder's answers from the
2026-07-28 planning session, verbatim in policy if not in wording. Every client
build starts by reading this file and obeying it. When a policy here conflicts
with an older document in this repo, this file wins.

---

## Part 0 — Who we are and the bar

We are a premium studio building websites exclusively for UK electricians and
solar installers. We only ship highly interactive, well built, high performing,
extremely well converting websites. The site should take the client's breath
away the first time they see it.

**The quality floor is the ES Elec template** (`clients/live-template`): live
canvas hero, physical motion, count-ups, real trust architecture, one-line
reskin. Every build must beat that floor, and the founder's stated test is
that beating it takes real work.

**The knowledge base is `research/`**: `conversion-psychology.md` (evidence
rules for CTAs, colour, trust, pricing) and `design-benchmarks.md` (the
direction menu). Apply them; do not re-derive them per build.

---

## Part 1 — Client intake

Intake varies client to client. Some arrive with everything (brand, photos,
accreditations, reviews); new starters arrive with nothing. **Neither blocks a
build.** Collect what exists of:

- Trading name, owner name, town/base, service area
- Phone, email, hours, emergency availability
- Accreditations (NICEIC / NAPIT / MCS / ECA) and numbers
- Insurance (public liability figure), years trading
- Google Business Profile link, review rating and count
- Photos: owner, van, work. Logo and brand colours if they exist
- Services offered and the ones they WANT more of (that ranking shapes the page)
- Their conversion preference (see Part 5)

Whatever is missing is filled per Part 6 and the build proceeds at full speed.

---

## Part 2 — Operating policies (the founder's twelve answers)

1. **Intake varies.** Full pack or nothing, we build either way.
2. **No two websites the same.** Every design is different and unique. Same
   high quality, never the same site. Uniqueness is enforced by Part 4.
3. **Every client gets their own brand and colours.** Similar is tolerable,
   identical is not.
4. **No blanks, ever.** Missing facts get plausible industry-average temporary
   values. See Part 6 for the go-live swap rule.
5. **Base package = 4 pages**: Home, Services, About, Blog. Wider scope is a
   wider price point (location pages, individual service pages, calculators).
6. **Conversion pack, not a fixed CTA.** Each client picks from the pack
   (Part 5); defaults come from the research doc when they have no preference.
7. **Full auto.** No mid-build approval gates. The founder reviews the finished
   preview link.
8. **Templates first, then speed.** The studio builds a small number of 2-day
   flagship templates. Client builds derive from a template in about an hour:
   rebrand, recopy, repopulate, verify. Never ship a derivation that still
   looks like its template (Part 4).
9. **Imagery budget**: about £20 of generation credit per base-package client.
   Bigger package, bigger budget. Spend it where photography is missing.
10. **Definition of done: Lighthouse 100 in all four categories, minimum.**
    Plus the verification gates in Part 7.
11. **Delivery**: finished build goes to a temporary live shared link first.
    Once the client pays, we host it (we own hosting).
12. **The Stacked Out studio site is parked** until the flagship templates are
    done.

---

## Part 3 — The build pipeline (managed, full auto)

The agent acts as project manager and design director: it runs the installed
skills as a team, routes work between them, and makes the calls. The skill
order in CLAUDE.md remains the reference sequence; the agent compresses or
parallelises it for derivations but never drops the non-negotiables.

**Non-negotiable on every build, template or derivation:**
- `impeccable` governs design (with `ui-ux-pro-max` dials set before visual work)
- All four de-slop passes on every page of copy
  (`stop-slop` → `avoid-ai-writing` → `humanizer` → `structural-humanizer`)
- `seo-local` + `seo-page` before copy is drafted; `seo-schema` before ship
  (`Electrician` type, GEO/AI-citability per `seo-geo`)
- `cro` sets the page skeleton before design starts
- `performance-audit` + `lighthouse-100` + `responsive-check` + `a11y-test`
  as the exit gate

**Template builds (2 days):** full pipeline, no compression, deep research
applied, every phase rendered and looked at before moving on.

**Client derivations (1 hour):** start from the chosen template, then:
brief → direction pick (Part 4) → rebrand tokens → recopy with client facts
and area (de-slop all of it) → repopulate imagery within budget → verify
(Part 7) → temp link. Anything that would push past the hour gets logged and
done in the follow-up pass, not silently skipped.

**Render and look.** No build phase is judged from source. Screenshot desktop
and mobile at every gate.

---

## Part 4 — The uniqueness engine (no two sites the same)

Every build locks a **direction** before any code: one entry from the
direction menu in `research/design-benchmarks.md`, adjusted by the
`ui-ux-pro-max` dials (variance, motion, density).

A direction is: palette + type pairing + hero concept + motion signature +
layout rhythm. Two clients may share at most ONE of those five axes.

Keep the ledger honest: append every shipped build to
`research/direction-ledger.md` (client, date, the five axes). Before starting
a build, read the ledger and pick a direction that clears the rule above.
Similar is tolerable, identical is failure.

---

## Part 5 — The conversion pack

The client chooses; when they have no preference, defaults follow
`research/conversion-psychology.md`. The pack:

- **Call-first**: tel: links, sticky mobile call bar, callback widget
- **WhatsApp-first**: wa.me deep links with prefilled message
- **Form-first**: short form (name, phone, postcode, job), multi-step for solar
- **Quote-first**: photo-upload quote request ("send us a photo of your fusebox")
- **Booking**: calendar embed where the client runs one
- **Emergency split**: separate urgent path (call now) and considered path
  (survey/quote) on the same page

Domestic electrical leans call-first and urgent. Solar leans considered:
form/booking with longer nurture copy. Both paths exist on every site; the
pack choice decides which one leads.

---

## Part 6 — Temp data policy (no blanks, no lies at go-live)

- Missing facts render as **plausible industry-average temporary values**, not
  placeholders, not blanks. Examples: £2m public liability, "NICEIC registered",
  round years-trading figures, from-prices at market rate for the region.
- Every temp value is tagged in the data file with `// TEMP` so the swap list
  is greppable in one command. The preview link may carry temps.
- **Before paid go-live, all `// TEMP` values are swapped for the client's real
  facts.** The go-live checklist is `grep -rn "TEMP" src/data/` returning zero.
- **Reviews and testimonials are the one hard exception**: never publish
  invented reviews, star ratings, or testimonials on a client's live site.
  Fake consumer reviews are illegal in the UK (DMCC Act 2025) and carry real
  liability for the client. Template demos may carry clearly-illustrative
  review content; a paying client's live site carries their real reviews or a
  reviews section that switches on later.

---

## Part 7 — Verification gates (definition of done)

A build is done when ALL of these pass, in this order:

1. `impeccable critique` on the finished build scores ≥ 28/32 applicable
   (Persuade surface) with zero P0s
2. `responsive-check`: 360, 390, 768, 1024, 1440, 1920 clean
3. `a11y-test`: axe-core zero critical/serious; WCAG 2.2 AA contrast
4. `performance-audit` then `lighthouse-100`: **100/100/100/100** on Home,
   and every other page ≥ 95 with no CWV failure
5. The four de-slop passes confirmed run on every page
6. Schema validates (`Electrician` / `Solar` types, correct NAP)
7. Temp-data grep list generated and attached to the delivery note
8. Rendered screenshots (desktop + mobile, every page) reviewed before the
   link is sent

---

## Part 8 — Delivery

1. Build ships to a **temporary live shared link** (preview artifact or
   staging URL) with the delivery note: what was built, direction used,
   temp-data swap list, conversion pack fitted.
2. Client pays → site moves to studio hosting, temps swapped (Part 6),
   analytics + Search Console connected, go-live checklist run.
3. Post-launch: GBP link-up and review pipeline are part of the base package
   conversation.

---

## Part 9 — Budgets and cadence

- **Template build**: 2 days, full pipeline, generation credits as needed
  (flagships are marketing assets).
- **Client base package**: ~1 hour build + verification, ~£20 generation
  credit, 4 pages.
- **Bigger packages**: more pages, more credit, more bespoke motion; still
  one direction, still the same gates.

---

*Written 2026-07-28 from the founder's planning answers. Change it only when
the founder changes the policy.*

---

## Part 10 — Doctrine bindings (added 2026-07-28, from the six-file research corpus)

The studio textbook lives in `research/doctrine/`. These are the rules from
it that CHANGE how builds are done; the files themselves carry the full
evidence and sources.

1. **The live-hero floor is also the performance play.** A built scene's
   headline is the LCP element (canvas is not an LCP candidate — web.dev),
   which is why code heroes hold 100 where photo heroes cost points. Keep
   heroes built, keep the H1 the largest early paint.
2. **Looping heroes MUST carry a pause control.** WCAG 2.2.2 (Level A):
   any auto-playing motion lasting >5s needs pause/stop/hide. Our suns,
   cores and marquees loop. Every production build ships a small, styled
   pause affordance in the hero; verification gates check for it.
   (Known gap in both flagships as of this note — fix on next touch.)
3. **Reduced motion is a designed still frame,** never a blank or broken
   scene (WCAG 2.3.3 / C39). Demo/preview links force motion on; live
   sites honour the setting with a composed static hero.
4. **Kill self-serving star markup.** Google never shows LocalBusiness
   rich-result stars from reviews the business controls; aggregateRating
   on our own sites is dead weight and against guidelines. Remove it from
   the schema at go-live; reviews earn stars on the Google Business
   Profile instead. (Both flagships carry TEMP aggregateRating — strip at
   go-live, added to their swap lists by this rule.)
5. **Location pages only where genuinely distinct.** Google's doorway
   policy explicitly names per-town pages funnelling to one contact page.
   One town, one genuinely local page (jobs done there, area specifics) or
   no page.
6. **The quote form is 7 fields, 5 required, phone explained inline**
   (Baymard evidence, canonical spec in doctrine/ux-evidence.md). No
   CAPTCHAs, no multi-column fields.
7. **Ratings display in the 4.2–4.7 zone converts best; perfect 5.0
   underperforms** (Spiegel). TEMP demo ratings follow this; real ratings
   display as they are.
8. **Round prices for installs, precise figures for savings** (Wadhwa &
   Zhang): "£6,300 installed" but "£785 off your bills a year".
9. **Speed-to-lead is the client's biggest off-site lever**: 5-minute
   response is ~21x more effective than 30 minutes (Oldroyd/HBR). The
   response promise on the site must match what the client can keep —
   intake question 18 exists for this.
10. **GEO needs no special markup** (Google's own generative-AI guidance):
    AI Overviews draw from the normal index via query fan-out. Direct-
    answer leads, quotable passages and real E-E-A-T are the levers; skip
    llms.txt folklore.
11. **CWV budgets are p75 field numbers**: LCP ≤2.5s, INP ≤200ms, CLS
    ≤0.1. Canvas work is main-thread work and counts against INP — one
    rAF loop per page, paused when hidden, OffscreenCanvas if it grows.
12. **The market gap to claim in copy**: only 37% of homeowners get
    itemised quotes (Checkatrade/Focaldata) — "priced before it starts,
    itemised" is a differentiator with survey evidence behind it, and
    guarantees are the #1 solar incentive (BEIS) — lead with them.

Hero recipes: `kit/hero-recipes.md` holds the menu (2 shipped, 6 studio
concepts) and `research/doctrine/design-craft.md` §"Live hero recipes"
adds 8 more researched concepts — 16 total, one per client, ledger rules
apply.
