# Build Process — Electrician Website

The production SOP. Paste this whole file into a fresh session, attach the
completed client brief, and follow it phase by phase.

**This is the *how*.** [`MASTER_PROMPT.md`](MASTER_PROMPT.md) is the *what* — the
spec for the finished site. This file is the order of operations, the skill
sequence, the quality gates, and the rules for running agents.

Evidence behind the decisions: [`RESEARCH.md`](RESEARCH.md).

---

## Contents

- [Operating rules](#operating-rules) — read before starting
- [Who you are actually writing for](#who-you-are-actually-writing-for)
- [The ethics line](#the-ethics-line-no-fear-selling)
- [Phase 0 — Intake](#phase-0--intake-and-verification)
- [Phase 1 — Strategy](#phase-1--strategy-and-architecture)
- [Phase 2 — Design direction](#phase-2--design-direction)
- [Phase 3 — Copy](#phase-3--copy)
- [Phase 4 — Build](#phase-4--build)
- [Phase 5 — Optimise](#phase-5--optimise)
- [Phase 6 — Verify](#phase-6--verify-the-gates)
- [Phase 7 — Launch and index](#phase-7--launch-and-index)
- [Phase 8 — Handover](#phase-8--handover)
- [Skill order, at a glance](#skill-order-at-a-glance)

---

## Operating rules

### You are the CEO, not a dispatcher

Agents are staff. You brief them, you review their work, and **you are
accountable for what ships.** Anything an agent hands back that you have not
personally checked does not go in the site.

**Hard limits:**

1. **Never run more than 3 agents at once.** You must be able to genuinely read
   and judge everything that comes back. Four reports you skim is worse than two
   you actually use.
2. **Every brief names one deliverable and its format.** "Research X" is not a
   brief. "Return the five service pages as markdown, each 300–450 words, symptom
   first" is a brief.
3. **Review before use, every time.** Check it against the brief, against
   `RESEARCH.md`, and against the client's real facts. Agents produce confident
   nonsense — one returned a test stub during the market research and it would
   have shipped if nobody looked.
4. **Reject and re-brief rather than patch.** If output is wrong, work out
   whether the brief was ambiguous, fix the brief, run it again. Silently fixing
   bad output teaches you nothing and hides a broken process.
5. **Never let an agent invent a fact.** No accreditation numbers, review counts,
   testimonials, case studies or prices unless they came from the client. This is
   the one failure that damages the client and your name at the same time.
6. **Do the small things yourself.** Spawning an agent to write one meta
   description is slower than writing it.

### When to use an agent at all

| Use one | Do it yourself |
|---|---|
| Drafting 8–15 location pages in parallel | Any single page |
| Independent review of finished copy | Applying an edit you already decided on |
| Checking the build against a spec | Running a build |
| Researching something genuinely unknown | Anything already in the four research docs |

### Don't skip phases

Every phase feeds the next. Copy written before the design direction is set gets
rewritten to fit. Optimisation before the copy is final gets undone. The order
below exists because doing it out of order costs more time than it saves.

---

## Who you are actually writing for

Full research in [`AUDIENCE.md`](AUDIENCE.md). Read it before writing copy.

### The finding that shapes every page

**For most visitors the site is a verification channel, not a discovery
channel.** 69% of UK hires come from word-of-mouth. Someone has already been
given a name and is Googling it to check the person is real, local, registered
and not a disaster.

**The job is to survive scrutiny, not to make a cold pitch.** Verifiable
specifics beat persuasive language, and anything that looks evasive costs more
than anything that looks unpolished.

### Three numbers worth memorising

- **85% rank contact details and opening hours as important — above price,
  proximity and reviews.** 35% leave for a competitor over wrong information.
  The dullest finding in the research is also the best evidenced.
- **73% only trust reviews written in the last month.** Ten recent detailed
  reviews beat two hundred undated ones.
- **Purchase likelihood peaks at 4.2–4.5 stars.** Products rated 4.7–5.0 are
  *less* likely to be bought than those rated 4.2–4.7 (Northwestern). Don't
  chase a spotless 5.0 — a few 4-stars with a good reply underneath are more
  persuasive.

### The anxiety nobody addresses

**Only 22% of women say having a tradesperson alone in their home has never made
them feel unsafe, against 59% of men** (YouGov). Four in five women have felt
unsafe at least sometimes, and almost no electrician's site acknowledges it.

For that reader, a real photograph, a first name, "we'll text you a photo of the
engineer before he arrives", ID cards and a marked van aren't decoration — they
decide it. **This is the biggest untapped trust opportunity in the market.**

### The four buyers

| Buyer | Trigger | What they're afraid of | What lands |
|---|---|---|---|
| **Emergency homeowner** | No power, burning smell, tripping board | Nobody turning up; being ripped off in a panic | Phone number instantly visible, response time, "no call-out fee" |
| **Planned homeowner** | Rewire, extension, EV charger | Overpaying, mess, a stranger in the house for days | Photos of finished work, named people, a clear process, realistic timescales |
| **Landlord** | EICR due, agent chasing | Missing a legal deadline; a report that fails and costs them | Turnaround time, what the certificate covers, remedials priced separately |
| **Small business** | Compliance, fit-out, fault | Downtime, insurance, being let down | Accreditations, out-of-hours working, commercial references |

**Write each page for one of these four.** A page that speaks to all of them
speaks to none.

### Two things that are not website problems, but are your problem

**Answering the phone beats anything on the site.** Responding within 5 minutes
makes a firm 21x more likely to qualify a lead than waiting 30 minutes
(MIT/InsideSales); HBR found 23% of businesses never respond at all. A site that
generates calls into an unanswered mobile is a wasted build. Every proposal needs
either a call-answering arrangement or an honest promise the client can keep.

**Accreditation badges do almost nothing on their own.** Consumer awareness of
Part P has been measured at 14%, and NAPIT conceded to Parliament that awareness
of Competent Person schemes is low. A row of logos reads as "some official-looking
badges". Each one needs a sentence translating it:

> **NICEIC Approved Contractor.** An independent assessor inspects our work every
> year. It also means we can self-certify to Building Control — so you get the
> compliance certificate your solicitor will ask for when you sell.

The site is a stranger's first impression of someone who will be inside their
home. Everything below serves that.

---

## The ethics line — no fear-selling

Full argument and evidence in [`AUDIENCE.md`](AUDIENCE.md) §6.

### Get the argument right

**Do not tell a client that fear-selling doesn't work.** It does. The best
evidence available — Tannenbaum et al. (2015), a meta-analysis of 248 samples,
N≈27,372 — found fear appeals produce a real positive effect (d = 0.29) and
that there are *"no identified circumstances under which they backfire."*

Any electrician using scare tactics has probably watched them work. A pitch built
on a false premise gets dismissed by the people you most need to convince. The
honest case has three legs:

1. **That evidence doesn't transfer.** Its samples are health campaigns, where
   the threat is genuine and the communicator has no financial interest in the
   recommended action. Neither holds when someone in your hallway says a working
   installation will burn your house down and he can fix it today for £900.
2. **Reactance, amplified by context.** Coerced people resolve the discomfort by
   deciding the messenger isn't credible. And **only 52% of consumers trust the
   tradesperson they already hired** — so a fear pitch lands on existing
   suspicion, not a neutral prior. The same message that persuades a stranger in
   a public health campaign confirms a suspicion in a kitchen.
3. **Several common forms are illegal.** CPRs 2008 regs 5, 6 and 7 plus the
   Schedule 1 banned practices; and since April 2025 the DMCC Act lets the CMA
   **fine up to 10% of global turnover directly, without going to court.** Drip
   pricing and fake reviews are explicitly prohibited.

### The test

**Would this sentence still be true and useful if the reader decided not to
buy?**

If yes, it's information. If no, it's manipulation.

### Banned

- Manufactured urgency: "act now", "before it's too late", countdown timers on a
  quote.
- Unqualified danger claims: "old fuse boards cause house fires."
- Implying illegality that doesn't exist: "you must upgrade to an RCD board" —
  you don't, unless you're doing notifiable work.
- Fake scarcity: "only 2 slots left this month" unless it's literally true.
- Invented review counts, ratings, accreditations or case studies.
- Prices that omit VAT or call-out charges until later. Drip pricing is
  specifically targeted by the Digital Markets, Competition and Consumers Act
  2024.

### The honest version of the same message

| Fear-selling | Honest |
|---|---|
| "Your old fuse board is a fire risk — replace it today." | "Boards fitted before about 2008 usually have no RCD protection. That's not illegal and it isn't an emergency, but it does mean a fault won't cut the power before someone gets a shock. We'll tell you what yours has when we look at it." |
| "You could be fined £30,000 without an EICR!" | "Rented homes in England need a valid EICR every five years. If yours is due, we can usually test within a week and you get the report the same day." |
| "Don't risk cowboy electricians!" | "Ask whoever you use for their scheme registration number. Ours is NICEIC #123456 — you can check it on their register in about a minute." |

Notice the honest versions are **longer, more specific, and more persuasive**.
Specificity is what builds trust; fear just raises defences.

### Where genuine urgency exists, state it plainly

Burning smells, scorch marks around a socket, repeated tripping under load —
these are real and should be described plainly, with what to do, **including
"turn it off at the board and call anyone" rather than "call us".** Being
willing to send someone elsewhere in an emergency is the strongest trust signal
on the whole site.

---

## Phase 0 — Intake and verification

**Do not start building until this phase is complete.** Every hour spent here
saves three later.

### 0.1 Collect

Work through Part 1 of `MASTER_PROMPT.md` with the client. Record the interview —
you need their actual phrasing for Phase 3.

### 0.2 Verify, don't trust

| Claim | How to check |
|---|---|
| NICEIC / NAPIT / SELECT number | The scheme's public register |
| Company name and number | Companies House |
| Google rating and review count | Their live GBP |
| Insurance figure | Ask for the certificate |
| Years trading | Companies House, or ask directly for sole traders |

**Anything you cannot verify does not go on the site.** No exceptions.

### 0.3 Photography triage

Score honestly, because it changes the design in Phase 2:

- **A** — professional shoot exists or is booked
- **B** — decent phone photos of the owner, van and finished work
- **C** — a handful of poor photos
- **D** — nothing

At C or D, either book a shoot or design around the gap. **Never buy stock
photos of models in hard hats.** Customers recognise them instantly and it
destroys exactly the trust the site is meant to build.

### 0.4 Gate

- [ ] Every `[ASK]` in the brief answered
- [ ] Every accreditation number verified against a register
- [ ] Rating and review count match the live GBP
- [ ] 8–15 towns listed, each with real streets or estates named
- [ ] Three or more real jobs available for case studies
- [ ] Photography scored, and a plan for C/D
- [ ] Domain decided, and in the client's name

---

## Phase 1 — Strategy and architecture

### 1.1 Understand the local competition

Run the competitor audit against the **client's own town**, not our research set:

```bash
# edit DEFAULT_URLS in .github/scripts/audit.mjs, then:
echo "run $(date -u +%FT%TZ)" > .github/audit.trigger && git add -A && git commit && git push
```

Pull the top 5 for their main service + town. You are looking for: how many
reviews the leaders have, whether they run location pages, what their titles
say, and where the ceiling is. **The client has to beat their town, not London.**

If the workflow isn't available, use `prospect-audit` on each competitor.

### 1.2 Decide the page set

From `MASTER_PROMPT.md` §4. Then apply judgement:

- **Only build a location page you can make genuinely distinct.** Ten real pages
  beat thirty templated ones, and templated location pages are the single most
  common failure across every competitor studied.
- **Drop services the client doesn't want more of.** The brief asks what work
  they want less of. Honour it.
- **Skip `/industries/` entirely** for a purely domestic client.

### 1.3 Keyword reality check

`Skill(seo-local)` for the local pack; `Skill(seo-page)` for on-page targets.

One page per intent. Never two pages for the same term — the cannibalisation
anti-patterns in `RESEARCH.md` §3 are all real sites currently doing this.

### 1.4 Gate

- [ ] Page list agreed, every location page has real local detail behind it
- [ ] One intent per page, no duplicates
- [ ] Primary keyword and title assigned per page
- [ ] Competitor review counts recorded, so we know the target

---

## Phase 2 — Design direction

**Set the direction before writing a word of copy or code.**

### 2.1 Pick a direction

`Skill(impeccable)` — the flagship. Load it before touching any layout. Then
`Skill(aesthetic-anchors)` to choose a deliberate visual direction.

**Never default to trade-blue.** The audit found every competitor on WordPress
with interchangeable styling. The benchmark uses magenta and it is instantly
distinctive. Pick something ownable, ideally pulled from the client's van.

Cross-check with `Skill(design-taste)` or `Skill(taste)` if unsure.

### 2.2 Set the tokens

In `client-template/src/data/client.js`: `brandColor`, `brandColorDark`, `mode`.
That is the whole visual system — everything else cascades.

### 2.3 Plan the hero around the photography score

| Score | Hero |
|---|---|
| **A** | Photo leads. Full-bleed, minimal overlay, slow Ken Burns. |
| **B** | Best single photo, graded, with the gradient and circuit trace behind it. |
| **C** | Photos small and in a grid lower down. Gradient plus motion carries the hero. |
| **D** | Gradient and animated trace only. Typography does the work. |

Optional: `Skill(imagegen-web)` to generate per-section design references first,
then `Skill(image-to-code)` to build against them. Worth it on a Tier 3 build.

### 2.4 Gate

- [ ] Colour chosen, ownable, not trade-blue
- [ ] Light or dark mode decided
- [ ] Hero approach matches the photography score
- [ ] Rating and review count planned **above the headline** — the single most
      copyable pattern in the study

---

## Phase 3 — Copy

**Copy before code.** Writing copy to fit a built page produces worse copy.

### 3.1 Draft

`Skill(copywriting)` and `Skill(ogilvy)`.

**Rules, from `MASTER_PROMPT.md` §7:**

- Open every page with the customer's **symptom**, not the service.
- Every claim carries a name, number, date or place.
- Write in the owner's voice, from the interview recording. Use their phrases.
- One buyer per page (see [Who you are actually writing for](#who-you-are-actually-writing-for)).
- No two pages share a sentence.

**Location pages** are where this is won or lost. Each needs the real housing
stock and its actual electrical characteristics — 1930s semis have different
problems from new-builds. That is what makes each page distinct *and*
demonstrates genuine expertise. If you can't write it, don't build the page.

**Parallel work:** location pages are the one place to use agents. Brief up to
three at a time, one town each, each with that town's landmarks and housing
stock. Read every one before it goes near the repo.

### 3.2 The de-slop pass — all four, in order

Run on **every page**. One pass is not enough.

1. `Skill(stop-slop)` — filler, adverbs, passive voice, rule-of-three, em dashes
2. `Skill(avoid-ai-writing)` — set the voice profile to match the owner (usually
   `blunt` or `casual`), then iterate to convergence
3. `Skill(humanizer)` — word and phrase level
4. `Skill(structural-humanizer)` — discourse level: moral-of-the-story closers,
   tidy arcs, unbroken linear structure

Why all four: the StoryScope study found narrative **structure** alone identifies
AI text at 93.2% F1, and professional stylistic rewriting moved detection by only
1.6 points. Rewording doesn't beat it — you have to change the shape.

### 3.3 Ethics review

Read every page against [The ethics line](#the-ethics-line-no-fear-selling).
Then `Skill(cro)` for flow and CTAs — **conversion structure, not pressure
tactics.**

### 3.4 Write for AI search while you're here

GEO is not a separate phase. Google's own position is that optimising for
generative AI search *is* SEO. Build it into the copy now:

- **Front-load the answer.** ~44% of AI citations come from the first 30% of a
  page. Put the direct answer in the first 40–60 words of a section.
- **Self-contained passages of 134–167 words** are the optimal citation length.
  Each should make sense lifted out of context.
- **Question-based headings** — "How much does a rewire cost in York?" matches
  how people actually query.
- **Specific facts over adjectives.** AI cites checkable claims, not "quality
  service".
- **Date the content.** Pages under three months old are ~3x more likely to be
  cited; past six months, citation eligibility drops away. Plan a refresh
  cycle — this is also a legitimate reason for the monthly plan.

`Skill(seo-geo)` to audit, `Skill(seo-content)` for E-E-A-T and citation
readiness.

### 3.5 Gate

- [ ] Every page written, symptom-first, one buyer each
- [ ] All four de-slop passes run
- [ ] Read aloud — anything the owner wouldn't say out loud is cut
- [ ] No fear-selling, no manufactured urgency, no invented facts
- [ ] Every claim has a name, number, date or place
- [ ] Answers front-loaded, headings question-shaped

---

## Phase 4 — Build

### 4.1 Scaffold

```bash
cp -r client-template ../clientname && cd ../clientname && npm install
```

Fill in `src/data/client.js` completely. Adding a town to `areas` generates its
page, footer link, home-page chip and sitemap entry automatically.

Three guardrails are deliberate — **do not work around them**:

- A location page without `landmarks` and `housingStock` renders a visible "not
  ready to publish" warning. That is the template refusing to ship thin content.
- `google.rating` starts `null`. Until you set a real figure, the trust bar and
  titles omit it.
- `reviews` starts empty and renders a warning instead of placeholder
  testimonials.

### 4.2 Layout and polish

`Skill(frontend-design)` and `Skill(design-engineering)` for spacing and
hierarchy. `Skill(web-design-guidelines)` to check against interface best
practice.

### 4.3 Motion

`Skill(css-animations)` **first** — zero JS payload. Only reach for
`Skill(gsap)` if CSS genuinely cannot do it. `Skill(find-animation-opportunities)`
to spot gaps, `Skill(review-animations)` to raise the bar,
`Skill(apple-design)` for physical, fluid motion.

**Non-negotiable:** never animate the LCP element. Hero image is
`loading="eager"` + `fetchpriority="high"`. `prefers-reduced-motion` disables
everything. Details in `MASTER_PROMPT.md` §6.

### 4.4 Images

`Skill(seo-images)`. WebP or AVIF, correct rendered dimensions, responsive
`srcset`, lazy-load below the fold only, real descriptive alt text on every
photo of a person, van or job.

Alt text is also an accessibility and trust issue, not just SEO — the audit found
one competitor shipping 41 images with no alt text at all.

### 4.5 Gate

- [ ] Every page from Phase 1 built
- [ ] No placeholder warnings left visible
- [ ] Motion respects reduced-motion
- [ ] LCP element unanimated, eager, high priority
- [ ] `npm run build` clean

---

## Phase 5 — Optimise

### 5.1 Structured data

`Skill(seo-schema)`.

- `Electrician` — the specific type, not generic `LocalBusiness`
- `Service` on every service page
- `BreadcrumbList` on nested pages
- `Person` on About
- `FAQPage` where FAQs are genuine (fine to use, but Google removed FAQ rich
  results in 2025 — don't build strategy on it)
- **`AggregateRating` only against genuinely third-party reviews.** Marking up
  self-collected testimonials against the client's own entity is a penalty risk.

Validate everything before launch.

### 5.2 On-page

`Skill(seo-page)`. Unique front-loaded titles 50–60 chars, service + location
early. Unique meta descriptions 150–160 chars written as ad copy. One `<h1>`,
non-skipping hierarchy. Descriptive internal anchors.

**Put the rating in every page title where it's genuine** — the best-performing
London competitor stamps it sitewide and it lifts click-through on every listing
the client owns.

### 5.3 Technical

`Skill(seo-technical)`. Canonicals, HTTPS, consistent URL form, robots.txt in
agreement with the sitemap. `Skill(seo-sitemap)` to validate.

**Allow the AI crawlers in `robots.txt`:**

```
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
```

Our Astro build ships static HTML, which matters more than it looks: **AI
crawlers do not execute JavaScript.** Every competitor found runs
WordPress with Elementor or Divi, much of it JS-dependent. Static output is a
real structural advantage for AI-search visibility.

**Don't bother with `llms.txt` as a Google play.** Google's own AI optimisation
guide states it ignores them entirely and they neither help nor harm. Add one
for non-Google AI services if you like; never sell it as a ranking lever.

### 5.4 Local

`Skill(seo-local)` and `Skill(seo-maps)`. NAP identical everywhere, character for
character. Service areas mirrored exactly between GBP and location pages.

### 5.5 Gate

- [ ] Schema validated, no self-serving `AggregateRating`
- [ ] Unique title and meta per page
- [ ] Sitemap valid, robots.txt agrees with it
- [ ] AI crawlers allowed
- [ ] NAP consistent, GBP and location pages mirrored

---

## Phase 6 — Verify (the gates)

**Nothing here is optional and nothing here is self-assessed.** Run the tools.

| Check | Skill | Pass |
|---|---|---|
| Core Web Vitals | `performance-audit` | LCP <2.5s, INP <200ms, CLS <0.1 **on mobile** |
| Lighthouse | `lighthouse-100` | 100 on Accessibility, Best Practices, SEO |
| Breakpoints | `responsive-check` | No layout break 320px → 1920px |
| Accessibility | `a11y-critic`, `a11y-test` | WCAG 2.2 AA, keyboard navigable |
| AI search readiness | `seo-geo` | Front-loaded answers, question headings, crawlers allowed |

Then a **manual pass you do yourself, on a real phone**:

- [ ] Tap-to-call works and dials the right number
- [ ] Form submits and the email actually arrives
- [ ] Nothing covers the primary CTA — the benchmark's own cookie banner and
      chat widget obscure a third of its hero and hide the phone number. Don't
      repeat it.
- [ ] Read the homepage as a nervous homeowner. Would you ring them?

### Independent review

Brief **one** agent — not three — to review the finished site against
`MASTER_PROMPT.md` Part 10, with fresh eyes and no knowledge of the decisions
made. Read its findings; fix what's real; ignore what isn't.

---

## Phase 7 — Launch and index

Order matters.

1. **Deploy** to the real domain. HTTPS, no mixed content.
2. **Search Console** — verify by DNS TXT. Add yourselves as delegated users,
   never share the client's login.
3. **Submit the sitemap.**
4. **Request indexing** on the homepage and top 5 pages.
5. **Google Business Profile** — see `MASTER_PROMPT.md` §9. Verify the site in
   Search Console *first*; it improves the odds of instant verification. Expect
   **video verification** — roughly eight in ten new trades profiles get it, and
   trades face extra spam scrutiny. Prepare the client for one continuous
   unedited take.
6. **Mirror service areas** between GBP and the location pages exactly.
7. **Bing Webmaster Tools** — free, two minutes, and it feeds ChatGPT search.
8. **Citations**, in order: the big five (GBP, Bing Places, Apple Business
   Connect, Facebook, Yell), then Checkatrade / TrustATrader / Which? Trusted
   Traders, then the trade body registers.

### Brand mentions matter more than backlinks for AI

An Ahrefs study of 75,000 brands found brand mentions correlate roughly **3x more
strongly with AI citation than backlinks do** — YouTube mentions strongest, then
Reddit, Wikipedia, LinkedIn. For an electrician that means: a YouTube channel
with job walkthroughs, genuine participation in local Facebook and Reddit groups,
and a complete LinkedIn company page. Cheap, slow, compounding. Put it in the
handover.

### Post-launch checks

- **Week 1:** Search Console coverage — are pages indexed? Any errors?
- **Week 2:** Core Web Vitals field data starting to populate
- **Week 4:** First rankings. Set expectations: local pack movement usually takes
  6–12 weeks, not days.

---

## Phase 8 — Handover

The site is not the product. A client who can't feed it will be back in a year
saying it didn't work.

### Hand over ownership

- [ ] Domain in the client's name, with their registrar login
- [ ] They own the GBP; you are a manager, not the owner
- [ ] Search Console access
- [ ] Written confirmation the site is theirs (IP assigns on final payment)

### Train them on four things

1. **Asking for reviews after every job.** Reviews are what win the local pack.
   Give them a QR card for the van. **Never gate reviews** — routing happy
   customers to Google and unhappy ones elsewhere is a suspension trigger.
2. **Replying to every review within 48 hours**, good and bad.
3. **Posting to GBP weekly**, using the native CTA button, never a phone number
   typed into the body.
4. **Drip-feeding photos**, not bulk-uploading.

### Set expectations honestly

- Local pack movement: 6–12 weeks
- Organic rankings for competitive terms: 3–6 months
- The site converts traffic; **GBP and reviews generate most of it early on**

Say this out loud at handover. A client who expects leads in week one will be
disappointed by a site that is working exactly as intended.

---

## Skill order, at a glance

```
PHASE 0  Intake          (no skills — verification is manual)
PHASE 1  Strategy        prospect-audit → seo-local → seo-page
PHASE 2  Design          impeccable → aesthetic-anchors → design-taste
                         [optional: imagegen-web → image-to-code, brandkit,
                          graphic-design if a logo is needed]
PHASE 3  Copy            copywriting + ogilvy
                         → stop-slop → avoid-ai-writing → humanizer
                           → structural-humanizer
                         → cro → seo-geo → seo-content
PHASE 4  Build           frontend-design → design-engineering
                         → web-design-guidelines
                         → css-animations [→ gsap only if needed]
                         → find-animation-opportunities → review-animations
                         → apple-design → seo-images
PHASE 5  Optimise        seo-schema → seo-page → seo-technical
                         → seo-sitemap → seo-local → seo-maps
PHASE 6  Verify          performance-audit → lighthouse-100
                         → responsive-check → a11y-critic → a11y-test
                         → seo-geo (re-check)
PHASE 7  Launch          seo-technical (indexing) → seo-local (GBP)
PHASE 8  Handover        (no skills — this is a conversation)
```

**The four that are not optional on any build, at any price:**
`impeccable` · the four-part de-slop stack · `seo-local` · `performance-audit`

---

## If you only remember five things

1. **Verify every fact before it goes on the page.** One invented accreditation
   number is worse than a plain-looking site.
2. **Ten real location pages beat thirty templated ones.** This is the failure
   that defines the entire competitor set.
3. **Run all four de-slop passes.** Rewording alone does not beat structural
   detection.
4. **Never animate the LCP element.** The whole speed budget hangs on it.
5. **Information, not fear.** If a sentence would be untrue or useless to
   someone who decides not to buy, cut it.
