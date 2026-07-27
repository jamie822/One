# Master Build Prompt — Electrician Client Website

Fill in **Part 1** with the client's details, then paste the whole file as the
opening prompt of a fresh Claude Code session. Parts 2 to 9 stay the same on
every build.

Anything left as `[ASK]` means: stop and ask the client before building. Do not
invent it. Inventing a review count, an accreditation number or a case study is
the one failure mode that damages the client and the reputation of the business.

---

# PART 1 — CLIENT BRIEF (fill this in)

## Business
- **Trading name (exact, canonical):** `[e.g. Hartley Electrical Ltd]`
- **Companies House name if different:** `[...]`
- **Owner's full name:** `[...]`
- **Years trading:** `[...]`
- **Year founded:** `[...]`
- **Team size and names:** `[e.g. owner + 2 electricians: Dave, Sam]`
- **Base town/city:** `[...]`
- **Full address:** `[...]` (or "service area business, no public premises")
- **Phone:** `[...]`
- **Email:** `[...]`
- **Opening hours:** `[...]`
- **Emergency/out-of-hours?** `[yes/no + terms]`

## Accreditations and insurance
- **Scheme:** `[NICEIC Approved Contractor / NAPIT / SELECT (Scotland) / ECA]`
- **Enrolment or membership number:** `[ASK — do not guess]`
- **Part P registered since:** `[...]`
- **Other:** `[TrustMark / CHAS / MCS / OZEV / Which? Trusted Traders / SafeContractor]`
- **Public liability cover:** `[e.g. £2m]`
- **Qualifications:** `[e.g. City & Guilds 2391, 18th Edition, ECS Gold Card]`

## Existing proof (use real figures only)
- **Google Business Profile:** `[exists / does not exist / unclaimed]`
- **Google rating and review count:** `[e.g. 4.9 from 63]` or `[none yet]`
- **Other platforms:** `[Checkatrade 9.8/10 from 41, Facebook, Trustpilot...]`
- **Three real customer quotes, with first name and town:** `[ASK]`
- **Named repeat/commercial clients happy to be cited:** `[ASK]`
- **Jobs completed (approx, honest):** `[...]`

## Services (tick what they actually do)
- [ ] Full and partial rewires
- [ ] EICR / periodic inspection
- [ ] Consumer unit upgrades
- [ ] Fault finding
- [ ] EV charger installation `[brands: e.g. Zappi, Pod Point, Ohme]`
- [ ] Solar PV and battery storage
- [ ] Smart lighting / home automation `[e.g. Rako, Lutron]`
- [ ] Landlord certificates
- [ ] PAT testing
- [ ] Commercial / industrial
- [ ] Fire alarms and emergency lighting
- [ ] Outdoor and garden electrics
- [ ] Other: `[...]`

**Highest-margin service they want more of:** `[...]`
**Work they want less of:** `[...]`

## Locations (the ranking engine — get this right)
List **8 to 15** towns, suburbs or districts, taken from where they have
**actually worked**, not a radius on a map. Order by how much they want that
work.

1. `[primary town — the main target]`
2. `[...]`
3. `[...]`
...

**Named streets, estates, landmarks or developments they've worked on:** `[ASK]`
These make location pages specific instead of templated. Get at least two per
priority town.

## Commercial verticals (skip if purely domestic)
`[garages & dealerships / factories & warehouses / care homes & surgeries /
schools / offices / retail / hospitality / letting agents & landlords]`

## Brand
- **Existing logo?** `[yes — attach / no — design one]`
- **Van livery colours:** `[...]`
- **Colour preference:** `[...]`  ← **never default to trade-blue**
- **Sites they like:** `[...]`
- **Sites they hate:** `[...]`

## Photography (be honest about what exists)
- **Owner headshot:** `[yes / no / phone photo only]`
- **Team photo:** `[...]`
- **Van:** `[...]`
- **Completed work:** `[how many, what quality]`
- **Before/after pairs:** `[...]`
- **Professional shoot planned?** `[yes / no]`

If photography is thin, say so here. The build adapts — see §5.3.

## Domain and hosting
- **Domain:** `[owned / needs registering: suggestions]`
- **Existing website:** `[none / social only / old site to replace]`
- **Email setup:** `[...]`
- **Who owns the accounts?** `[client must own domain + GBP; agency gets delegated access]`

## Commercials
- **Package:** `[...]`
- **Deadline:** `[...]`
- **Ongoing SEO/maintenance?** `[yes / no]`

---

# PART 2 — THE STANDING BRIEF

You are building a website for a UK electrician who currently has **no web
presence**. It is produced by a two-person partnership: an electrician of 13
years and a web designer. The price point is reasonable, not bespoke-agency, so
the build must be **efficient and repeatable** as well as excellent.

## What we know about this market

Research across twenty-one competitor electricians in London, Manchester, Leeds,
Birmingham and Glasgow found that **no genuinely premium, design-led electrician
website is ranking in any major UK city**. Every top competitor is a
conventional trade build with keyword-stuffed titles, stock or absent
photography, no case studies and no motion. Several have excellent
reputations — one Glasgow firm has 500+ five-star reviews and runs on `.php`
URLs.

**But design alone does not rank.** The firms winning local search win on review
volume and hyperlocal page coverage. A beautiful one-page site loses to an ugly
forty-page one with 300 reviews.

So: **design wins the sale and converts the visitor; local SEO architecture gets
them found.** Deliver both, every time.

See `RESEARCH.md` for the full study.

## Non-negotiables

1. Every claim carries a name, number, date or place.
2. No two pages share a sentence.
3. Real photography of the owner. If none exists, design around the gap
   honestly — never use stock photos of models in hard hats.
4. One canonical business name and NAP everywhere.
5. One URL pattern. No near-duplicate pages.
6. Mobile-first. LCP under 2.5s, INP under 200ms, CLS under 0.1.
7. `prefers-reduced-motion` respected throughout.
8. Never invent proof.

---

# PART 3 — SKILLS TO USE

Vendored in `.claude/skills/`. Use them deliberately:

| Stage | Skill |
|---|---|
| Choosing the visual direction | `aesthetic-anchors` — pick a distinctive anchor, never default trade-blue |
| Layout and UI polish | `frontend-design`, `design-engineering`, `web-design-guidelines` |
| Logo / brand assets | `graphic-design` |
| Writing page copy | `copywriting`, `ogilvy` |
| **Editing every page before publish** | **`stop-slop`** — mandatory pass |
| Tightening existing copy | `copy-editing` |
| Page flow, forms, CTAs | `cro` |
| Motion | `css-animations` first, `gsap` only if CSS can't do it |
| Location/industry page clusters | `programmatic-seo` |
| GBP, NAP, citations | `seo-local` |
| Titles, meta, headings, links | `seo-page` |
| JSON-LD | `seo-schema` |
| Core Web Vitals, indexing | `seo-technical` |

---

# PART 4 — SITE ARCHITECTURE

Build exactly this structure. It mirrors what ranks, with the duplication
problems stripped out.

```
/                             Home
/about/                       Owner story, team, credentials
/services/                    Hub
  /services/<service>/        One page per service from Part 1
/areas/                       Hub
  /areas/<town>/              One page per town from Part 1 (8-15)
/industries/                  Hub (only if commercial work)
  /industries/<vertical>/     One page per vertical
/case-studies/                Index
  /case-studies/<slug>/       One page per real job (min 3)
/reviews/                     All reviews, one place
/contact/                     Form, phone, map, hours
/privacy/ /terms/
404
```

**URL rules**
- Lowercase, hyphenated, trailing slash, consistent forever.
- Never create two pages for the same intent. No `electrician-leeds` *and*
  `electricians-leeds`. No `best-`, `cheap-` or numbered variants.
- Location pages live only under `/areas/`. Services only under `/services/`.

---

# PART 5 — PAGE SPECIFICATIONS

## 5.1 Home

Order matters. This sequence is what converts.

1. **Hero** — live animation (see §6). Above the fold: what they do, where they
   work, the Google rating with review count, a phone CTA and a quote CTA.
   Headline names the town.
2. **Trust bar** — accreditation badges linking to verifying registers, years
   trading, insurance figure, review count.
3. **Problem-led intro** — name the customer's actual problem before mentioning
   the business. See §7.
4. **Services grid** — real photography per card, not icons, if photos allow.
5. **The owner** — photograph, name, years trading, one specific first-person
   paragraph. This is the single biggest differentiator in the market.
6. **Case studies** — three, with before/after, location and a real quote.
7. **Reviews** — real ones, named electrician where the review names them.
8. **Areas served** — links to every location page.
9. **FAQ** — genuine questions the client actually gets asked.
10. **Closing CTA** — phone, form, hours, response-time promise.

## 5.2 Service pages (one per service)

- H1: service + primary town.
- Open with the symptom, not the service. ("The lights flicker when the shower
  starts" beats "We offer fault-finding services".)
- What's actually involved, step by step, in plain language.
- What it typically costs, or an honest reason why it varies.
- What certificate or paperwork they get, and when.
- Photos of that specific work.
- One case study of that job type.
- FAQ specific to this service.
- Links to the top three location pages.
- `Service` JSON-LD.

## 5.3 Location pages (one per town, 8-15)

**These rank. They are also where every competitor produces slop.** Elite
Electrical in Leeds runs five near-duplicate variants. KHL Manchester uses one
title template across every suburb. Do not copy that.

Each page needs, genuinely different per town:
- H1: service + that town.
- **A real reference to the place** — a named street, estate, development,
  landmark or housing stock type. "Victorian terraces off Bishopthorpe Road"
  beats "properties in the local area". Get these from the client.
- **The housing stock and its actual electrical problems.** 1930s semis have
  different issues from new-builds. This is the natural way to make each page
  distinct, and it demonstrates real expertise.
- A job actually done there, if there is one.
- A review from that town, if there is one.
- Travel time or coverage note.
- Links to relevant services and neighbouring areas.

**If you cannot write a genuinely distinct page for a town, do not create it.**
Ten real pages beat thirty templated ones.

## 5.4 Industry pages (commercial only)

Per vertical: the compliance obligations that vertical actually has, typical
scope, downtime and out-of-hours handling, relevant accreditations (CHAS,
SafeContractor), a case study if one exists.

## 5.5 Case studies (minimum three)

Real jobs only. Each needs: a named client or an honest anonymisation
("a landlord in Chapel Allerton"), the location, the date, the problem, what was
done, what it cost or how long it took, before and after photos, and a direct
customer quote.

## 5.6 About

The trust page. Owner's real name and photograph. First-person. How they got
into the trade, what they were doing before, why they went out on their own.
Named team members with photos and their specialisms. Qualifications with
numbers. Insurance. What they refuse to do and why — a genuine opinion is worth
more than a page of adjectives.

## 5.7 Reviews

Every review in one place, synced from third-party platforms where possible.
Rating and count at the top. Name the electrician where the review does.

## 5.8 Contact

Phone as a tap-to-call link. Form with minimal fields. Hours including
emergency terms. Google Map embed tied to the real GBP listing. Full NAP as
text. A stated response-time promise the client can actually keep.

---

# PART 6 — MOTION AND THE LIVE HERO

Every site ships with a live hero. It must not cost the client their rankings.

## Hard rules

- **Never animate, lazy-load or delay the LCP element.** Hero image gets
  `loading="eager"` and `fetchpriority="high"`.
- **CSS before JavaScript.** Reach for `css-animations` first. Only use `gsap`
  when CSS genuinely cannot do it.
- **Defer everything non-critical** — analytics, chat, review widgets. These are
  the usual cause of INP failure.
- **`prefers-reduced-motion: reduce` disables all motion** and shows the static
  end state.
- Reserve dimensions on everything so CLS stays at zero.

## The house hero recipe

Layered, and each layer degrades gracefully:

1. A dark cinematic gradient base, tinted with the client's brand colour. Works
   with no photography at all.
2. The client's best photograph, if one exists, with a slow Ken Burns drift.
   Pure CSS `transform`, GPU-composited, no layout cost.
3. A subtle animated accent tied to the trade — a slow current pulse along a
   circuit trace, drifting particles, or an SVG line-draw. Canvas or CSS, capped
   in element count, paused when off-screen.
4. Staggered text reveal on the headline and subhead. CSS only.
5. A trust row that fades in last: rating, review count, accreditation marks.

**Below the fold:** scroll reveals on section entry via `IntersectionObserver`.
Nothing heavier.

## Adapting to bad photography

Most clients will supply phone photos or nothing.

- **No usable photos:** gradient plus animated accent carries the hero.
  Typography does the work. Book a shoot before launch if the budget allows.
- **One decent owner photo:** cut it out, place it against the gradient, add
  motion behind it.
- **Phone photos of work:** grade them consistently — same treatment across all
  — and use them small, in a grid, rather than large and full-bleed.
- **Good photography:** let it lead. Full-bleed, minimal overlay, restrained
  type.

---

# PART 7 — COPY

Read `.claude/skills/stop-slop/SKILL.md` before writing a word, and run it over
every page before publishing.

## Banned

- "A family-owned business with over X years of experience providing quality
  service" and every variant.
- leverage, unlock, elevate, seamless, cutting-edge, best-in-class, delve.
- "In today's fast-paced world", "Have you ever wondered".
- Rule-of-three adjective lists. "Reliable, professional and affordable."
- "Fully qualified and insured", "hundreds of happy customers", "we pride
  ourselves on".

## Required

Every claim carries a name, number, date or place.

| Slop | What to write instead |
|---|---|
| "Quality service you can trust." | "Full EIC certificate within 48 hours and a photo log of the board before we leave." |
| "We leave a neat, professional job." | "Circuits labelled by room, cables run square along the joists, nothing held together with black tape." |
| "Fully qualified and insured." | "NICEIC Approved Contractor #123456, Part P since 2011, £2m public liability." |
| "Serving the local area." | "Victorian rewires off Bishopthorpe Road, EV chargers from Fulford to Haxby." |
| "Hundreds of happy customers." | "1,240 jobs across North Yorkshire since 2011." |
| "Same-day quotes available." | "Ask at 9am, know the price by lunchtime." |

## Structure

Lead with the customer's problem. Then the fix. Then the proof.

**Voice:** the owner's, first person, as they would actually speak to a customer
in their kitchen. Interview the client and use their real phrases. Read every
page aloud — anything they would never say out loud gets cut.

**Titles:** unique, front-loaded, 50-60 characters, service + location early.
Put the rating in the title across the site where it is genuine
("4.9★ from 63 reviews") — Quantum London does this sitewide and it lifts
click-through everywhere.

**Meta descriptions:** unique, 150-160 characters, written as ad copy.

---

# PART 8 — TECHNICAL AND SEO

## Core Web Vitals
LCP under 2.5s · INP under 200ms · CLS under 0.1. Field data at the 75th
percentile, not a lab score. Test on mobile.

## Structured data
- `Electrician` (not generic `LocalBusiness`) on home and contact.
- `Service` on every service page.
- `BreadcrumbList` on service, location and industry pages.
- **`AggregateRating` only against genuine third-party reviews.** Never mark up
  self-collected testimonials against the client's own entity. Penalty risk.
- `FAQPage` is fine, but Google removed FAQ rich results in 2025 — do not build
  strategy around it.
- Validate everything before launch.

## On-page
One H1 per page, non-skipping heading hierarchy, self-referencing canonicals,
descriptive internal anchor text, real alt text on every photograph, WebP/AVIF
with responsive `srcset`, HTTPS with no mixed content.

## Images
Correct rendered dimensions, compressed, lazy-loaded below the fold only.

---

# PART 9 — GOOGLE SETUP

Often worth more than the website in the first ninety days. GBP signals carry
roughly 32% of local pack ranking weight.

## Know this before you start

**Google now auto-assigns the verification method.** Roughly eight in ten new
trades profiles get **video verification**, and trades face extra spam scrutiny.
Prepare the client for one continuous unedited take showing premises or vehicle,
signage, tools, and proof they manage the business.

## Sequence

1. Search for an existing profile first. Duplicates cause suspensions.
2. Register the **exact trading name only**. No keywords in the name field.
3. Answer the business-model question correctly.
4. Real verifiable address, hidden if service-area.
5. Service areas by **town or postcode district**, not radius. Mirror the
   location pages exactly.
6. Primary category **Electrician**, then 2-4 accurate secondaries.
7. Lock NAP format. Match the website character for character.
8. Gather documents first: utility bill, insurance certificate, van livery
   photos, scheme registration.
9. **Verify the site in Search Console before GBP** — improves instant-verification odds.
10. No edits during or immediately after verification.

## Search Console
DNS TXT verification where possible. Submit the sitemap. Add the agency as a
delegated user, not a shared login. Request indexing on priority pages. Check
coverage weekly for the first month.

## Citations, in order
1. Google Business Profile, Bing Places, Apple Business Connect, Facebook, Yell.
2. Checkatrade, TrustATrader, Which? Trusted Traders.
3. NICEIC Find a Contractor, NAPIT, TrustMark, ECA.
4. Thomson Local, Foursquare, 192.com, FreeIndex, Yelp UK, Trustpilot.

## Hand over to the client
- How to post to GBP weekly, using the native CTA button.
- How to ask for reviews after every job — and that **gating reviews is a
  suspension trigger**.
- To reply to every review within 48 hours.
- To drip-feed photos rather than bulk-uploading.

---

# PART 10 — DEFINITION OF DONE

**Content**
- [ ] Every page written, `stop-slop` passed, read aloud
- [ ] No two pages share a sentence
- [ ] Every claim has a name, number, date or place
- [ ] Owner photographed and named on home and about
- [ ] Three or more real case studies with photos
- [ ] Real reviews, named electrician where applicable
- [ ] Accreditation numbers verified with the client, not invented

**Build**
- [ ] All pages from §4 exist, no near-duplicates
- [ ] Live hero, reduced-motion honoured
- [ ] Mobile checked on a real device
- [ ] LCP/INP/CLS pass on mobile
- [ ] Forms tested end to end
- [ ] Tap-to-call works
- [ ] 404 styled

**SEO**
- [ ] Unique title and meta per page
- [ ] `Electrician`, `Service`, `BreadcrumbList` validated
- [ ] Sitemap live and submitted
- [ ] Canonicals, HTTPS, consistent NAP

**Google**
- [ ] GBP verified and fully populated
- [ ] Service areas mirror location pages
- [ ] Search Console verified, sitemap submitted, agency delegated
- [ ] Big-five citations live
- [ ] Trade body citations claimed

**Handover**
- [ ] Client owns domain and GBP
- [ ] Review request process explained
- [ ] GBP posting explained
- [ ] Who to call when something breaks
