# Finding & Reaching Electricians With No Website

Research July 2026. An operational playbook, not a summary.

Companion to `RESEARCH.md` (market), `COMMERCIALS.md` (pricing) and
`MASTER_PROMPT.md` (build).

> **This is research, not legal advice.** §2 shapes your entire operating model
> and is worth an hour of a data-protection solicitor's time before you launch.

---

## 1. The finding that shapes everything

**You cannot lawfully cold-email a sole trader. You can cold-email a limited
company.**

Under PECR Regulation 22, unsolicited marketing by electronic mail requires
consent for **individual subscribers** but not **corporate subscribers**. The
ICO's own guidance splits them like this:

| Corporate subscriber — **email is lawful** | Individual subscriber — **email needs consent** |
|---|---|
| Limited companies | Consumers |
| LLPs | **Sole traders** |
| Public bodies | Partnerships in England, Wales & NI |
| **Scottish partnerships** (separate legal personality) | |

The ICO is explicit: *"You can only email or text sole traders if they have
specifically consented, or if they bought a similar product from you in the past
and didn't opt out."*

### Why this hurts

Your single best prospect — the one-man-band with 43 five-star reviews and no
website — is very often a sole trader. **That exact person is off-limits to
email.**

This isn't a technicality to paper over. It's a hard fork in your process.

### The fix: segment before you contact

Join your prospect list to Companies House SIC 43210 on business name +
postcode, then route:

- **Matched (Ltd / LLP / Scottish partnership)** → email is lawful
- **No match (sole trader / English partnership)** → **phone, post, or in
  person only**

### And the awkward one: DMs count as email

The ICO's definition of electronic mail includes *"direct messages on social
media platforms."* So a Facebook Messenger DM, Instagram DM, WhatsApp or
LinkedIn InMail is legally identical to a cold email. **DMing a sole trader's
Facebook page is a breach.**

The one legitimate social route to sole traders is **paid ads in their feed** —
those aren't direct marketing messages under PECR.

### The channels that are actually open to sole traders

- **Phone** — lawful without consent, subject to TPS/CTPS screening (§2.2)
- **Post** — entirely outside PECR
- **In person** — entirely outside PECR

Which is a useful accident: **phone and face-to-face are the compliant channels
for exactly the segment email can't reach, and they're also what works best on
trades anyway.** Don't fight it.

---

## 2. The rest of the legal position

### 2.1 What every marketing message must carry

Regulation 23 applies to **everyone** — corporate and individual, solicited and
unsolicited:

- Don't disguise your identity. Real from-name, real business name. Never
  `no-reply@`.
- A valid opt-out address. One-click unsubscribe is best practice.
- A postal address in the footer.
- **Honour opt-outs from corporate subscribers too**, even though their consent
  wasn't needed.

Add one line on where you got their details — that discharges UK GDPR Article 14
(see §2.4) and reads as more honest than the average cold email anyway.

### 2.2 Cold calling

Lawful without consent, but:

- **Screen against TPS *and* CTPS before every call.** Legal requirement, not
  guidance.
- **Re-screen every 28 days.** Regulation 21 gives a statutory defence only
  where the number has been registered fewer than 28 days. Older screen, no
  defence. Log every screening date.
- **TPS covers mobiles.** Critical here — most sparks' business number *is* a
  mobile.
- **Present your caller ID.** Withholding it on a marketing call breaches
  Regulation 24; one firm was fined £150,000 partly for this.
- Stop calling anyone who asks you to, registered or not.

Sources conflict on whether sole traders sit under TPS or CTPS. **Screen both.**
It costs nothing and removes the ambiguity.

### 2.3 Soft opt-in — build it in from day one

Regulation 22(3) permits email without separate consent where all four hold:
details collected **directly from the person**, during **a sale or negotiations
for a sale**, marketing **similar** products, with a **free opt-out offered at
collection and every message**.

The ICO reads "negotiations for a sale" broadly — **requesting a quote counts**,
with no purchase required.

**This is genuinely valuable.** A sole trader who asks you for a price and goes
quiet has entered negotiations. Put an opt-out line in your quote template from
the first day and you unlock a lawful nurture list on the side of the market
email otherwise can't reach.

### 2.4 UK GDPR sits on top

PECR governs the channel; GDPR governs the data. Both apply.

- **Lawful basis:** legitimate interests. Write a one-page LIA — purpose,
  necessity, balancing. Proportionate for a two-person firm and it's the best
  evidence you'd have if a complaint landed.
- **Public availability is not permission.** Scraped Google data is still
  personal data.
- **Article 14** applies because you got the data from a third party. Tell them
  who you are, why you're contacting them, **where you got their details**, and
  how to object — at first contact. One line does it: *"I found your business on
  Google Maps."*
- **Article 21** gives an absolute right to object to marketing. No balancing
  test. Keep a suppression list and never re-contact.

### 2.5 Penalties changed this year

The Data (Use and Access) Act 2025 raised the PECR maximum from **£500,000 to
£17.5m or 4% of global turnover**, effective **5 February 2026**. A 35-fold
increase, bringing PECR in line with UK GDPR.

Perspective: the ICO has issued 49 PECR fines totalling £4.63m since March 2022,
and recent actions targeted 4 million unlawful texts and 67 million emails. A
two-person firm sending 25 personalised emails a day is not the enforcement
profile. But the rules bind regardless, and **the sole-trader restriction is the
one place where "it's B2B, it's fine" is straightforwardly wrong.**

### 2.6 Two things to avoid

- **Don't scrape the trade-body registers.** NICEIC, NAPIT and TrustMark
  scraping is very likely a terms-of-use breach. In an industry this small,
  being named for harvesting NICEIC's register would be commercially fatal.
- **Don't door-knock.** A sole trader's registered address is very often their
  home. No clear guidance exists on B2B canvassing at a home-based business
  address. Stick to merchants, sites and vans.

---

## 3. Where to find them

### 3.1 Google Business Profile — the only machine-readable source

The GBP `website` field is structured. Empty means empty — a verified negative,
not an inference. And the same record carries **review count, star rating, phone
and town**. Nothing else gives you all four in one row.

**How:** Outscraper's Google Maps scraper has an explicit filter — field `Site`,
operator `is blank` — returning businesses without websites plus phone numbers,
with a free tier. Or the Places API directly ($3 CPM for contact data on top of
$17 CPM base).

**Three traps:**

1. **A populated website field is often a Facebook page, Checkatrade profile or
   Linktree.** Those are among your *best* prospects — they've tried to solve
   the problem and failed. Filter for non-site domains, not just blanks.
2. **Most sparks are service-area businesses with hidden addresses.** You keep
   name, phone, rating, reviews and service-area towns; you lose the street
   address, so match to Companies House on name + town instead.
3. **Coverage is by search grid, not national list.** Scrape "electrician"
   across towns. Budget a weekend for 40–60.

### 3.2 Companies House — a legal filter and a timing trigger

Not a discovery source. It exposes no website field, and the registered email
introduced by ECCTA is **not public**.

Two real uses:

**Legal segmentation** (§1) — the authoritative answer on Ltd vs sole trader.

**Buying triggers** — advanced search filters by SIC code, incorporation date,
status and location (5,000-row CSV cap; free monthly bulk product). **A firm
incorporated in the last 3–18 months is a spark who has just gone from "Dave the
electrician" to "Dave Smith Electrical Ltd."** New name, new van, no website.
The sharpest timing signal in public data — and conveniently, newly incorporated
means emailable.

### 3.3 Lead platforms — the "will they spend?" signal

| Platform | Scale | What it costs them |
|---|---|---|
| Checkatrade | 44,000+ members (2021) | ~£60/mo basic, £120–180 in competitive areas, + £5–40/lead |
| MyBuilder | 257,000+ trades | £15–40 per lead |
| Rated People | — | £5–10 small, £20–30+ large |
| Bark | 10,000 job requests/day | few pounds to £40+ |

A Checkatrade member spends **£720–£2,160/year on membership alone**. That's
documented, recurring, proven willingness to pay — and roughly one year of it
buys a website outright.

**Caveat:** these platforms suppress outbound links deliberately. **No website
link on a Checkatrade profile is not evidence of no website.** Always
cross-check Google.

### 3.4 Facebook — where sparks actually are, unlike LinkedIn

A business page with no website in the About block is very common. The
high-value signal isn't the missing website — it's an **actively posted page**.
Someone uploading job photos weekly is marketing-minded, has the photography a
good site needs, and already knows the problem exists.

Remember §1: DMs are email. Segment by legal form first.

### 3.5 Vans and trade counters — lowest scale, highest conversion

A van with a phone number and no web address is a self-advertising prospect.

**CEF runs ~393 branches and Rexel ~394**, plus Edmundson. At 7–8am they're full
of one-man-bands collecting materials. This channel is completely outside PECR,
converts best, and is **structurally uncopyable by a competing web agency**.
It's where thirteen years on the tools is worth the most.

### 3.6 Directories — cross-check only

Yell (3m+ listings, visible website field), FreeIndex (650,000+), Thomson Local,
192.com. Poor data quality, stale records. Use to confirm a Google finding or
find an email address. Never as the primary list.

---

## 4. Who's worth approaching

Score before contact.

**Tier 1 — predicts a sale**

- **20+ Google reviews at 4.7+, no website.** The strongest single indicator.
  Demand, proof, and nothing to convert it with. Someone with 100+ reviews and
  no site is a phone call today, not an email.
- **Already paying a lead platform.** Removes the "I've never paid for
  marketing" objection before it appears.
- **Limited company.** Budget signal, and the legal gate for email.

**Tier 2 — value and readiness**

- **Higher-value specialisms:** EV charging, solar and battery, smart lighting,
  commercial, landlord EICR compliance.
- **OZEV authorised.** Live timing angle: **OZEV residential and commercial
  chargepoint grants closed to new applications on 31 March 2026.** An installer
  who built volume on grant-funded work has just lost a lead channel and needs a
  replacement. Worth testing as a segment.
- **NICEIC Approved Contractor** rather than Domestic Installer — commercial
  capability, higher job values.
- **Incorporated 3 months–3 years** (formalisation trigger) or **5+ years with
  strong reviews** (has cash).
- **Active GBP or Facebook** in the last 90 days.
- **Branded van and uniform.** Already believes presentation matters.

**Deprioritise**

- Zero reviews anywhere — there may be no real business there
- No trade-body registration
- **Any existing website, however bad** — that's a redesign sale, different
  objections, different anchor, not your offer
- ECA members and 10+ van firms — they have an agency

**Only spend a mockup on the top 15–20%.**

---

## 5. Outreach

### 5.1 Channel ranking for this audience

**1. Phone, at the right hour.** Generic sales advice says 8–11am Tuesday to
Thursday. **That data comes from office workers and is wrong for trades.** A
contractor who isn't working isn't earning.

**Call 7:00–8:00am** (in the van, before the first job) and **4:30–6:30pm**
(paperwork and quoting). Friday afternoon works. **Avoid 9am–3pm entirely.**

**2. In person at the merchant.** No PECR, highest trust, uncopyable.

**3. Facebook DM** — segment by legal form first.

**4. Email** — lawful for limited companies. You'll have to find the address:
the van, the Facebook page, the Yell listing. Rarely on the GBP.

**5. Post** — a printed mockup to the registered office. Cheap, tangible,
legally the simplest channel available. Underrated.

### 5.2 Benchmarks — with a health warning

Every figure below is vendor-published with undisclosed methodology, and they
contradict each other. The same year's "average cold email reply rate" appears
as 3.43%, 5%, and 7–10% depending on who's selling. **Planning ranges only.**

**Cold email:** 3–5% average reply, 10–15% excellent. Trending down (8.5% in
2019 → ~3.4% in 2026). **Advanced personalisation roughly doubles it — 18% vs
9%.** Subject lines of 2–4 words get 46% open, falling to 34% at ten words. Body
of 50–125 words gives 8.2% reply.

**Cold calling:** ~2.3–2.5% dial-to-meeting, about 1 meeting per 40–45 dials.
Per-dial connect is 9.9%, but **per-prospect connect rises to 24.5% across
multiple attempts** — persistence, not volume per prospect. 25–35 dials per
booked meeting for SMB.

**Combined:** calls plus email follow-up reportedly lift conversion ~70% over
either alone.

### 5.3 Deploying "I'm a spark like you"

This is the whole moat, and it evaporates if stated rather than demonstrated.

**Demonstrate with a job, not a claim.** *"Thirteen years on the tools, mostly
domestic rewires and EICRs round Leeds"* beats *"As a fellow tradesman…"* by a
mile.

**Use the vocabulary correctly.** EICR, C2, CU change, RCBO, first fix,
notifiable work, Part P, 18th. Used right, you're in within a sentence. Used
wrong, you're a marketer in a hi-vis and the call's over.

**Name the pain in their language.** *"You're paying £40 a lead on Checkatrade
and half of them don't answer the phone."*

**Ban the words they hate:** digital presence, leverage, online visibility, SEO
strategy, brand. Say: a website, get found on Google, stop paying for leads,
your reviews on the front page.

**Lead with the partnership, not your trade.** *"I'm a spark, my mate builds the
sites"* answers the obvious objection — *what does an electrician know about
websites?* — before it's raised.

### 5.4 The free mockup — tier it

Mockup-first is widely described as the highest-converting hook for web
designers, and it should work unusually well here: your differentiator is
**design quality**, which cannot be described in an email, only shown. A
prospect with no website has no comparison point, so a mockup with their name,
their van, their 43 reviews and their town is the complete product demo.

**But the economics break at scale.** Even templated, a mockup is 45–90 minutes.

- **First touch: plain, short, personalised.** No mockup.
- **Mockup: the reward for a reply**, and a touch-4 asset for the top 15–20%
  only.
- **The middle option, and probably the best value in this whole document:** a
  60–90 second phone-shot screen recording of the electrician scrolling a
  competitor's site in their town — *"this fella's got 30 reviews to your 60 and
  he's above you because he's got this, and you've got nothing."* Five minutes
  to make, feels completely bespoke, and it puts a face and a voice on the
  "I'm a spark" claim in a way text cannot.

Conversion claims for mockups come from agency self-published case studies. **Test
against a plain pitch on 100 prospects each before committing build time.**

### 5.5 Message spec

**Subject:** 2–4 words, lowercase, reads like a text from another trade.
`quick one` · `your google listing` · `no website?` · `sparks in otley`

**Body:** 50–125 words. One observation, one question. **No links or attachments
in email one** — both depress replies and raise spam signals. Sign off with a
mobile number, never a Calendly link.

**Ask for a reply, not a meeting.** *"Worth me sending you a mock-up? Yes or no
is fine"* beats *"do you have 15 minutes Thursday?"*

**Footer:** business name, postal address, where you got their details, opt-out.
Three lines discharges Reg 23 and Article 14.

**Phone script (7:20am):** identify as a spark in 5 seconds → name their town →
name the specific thing *("you've got 43 five-stars and no website")* → one
question *("deliberate, or just never got round to it?")* → offer the mockup →
off in 90 seconds. **The goal of call one is permission to send something, not a
sale.**

---

## 6. Cadence and scale

### 6.1 Working backwards from 2 builds a month

**Email path (Ltd only):** 5% reply × 30% to a call × 30% close ≈ 0.45%
prospect-to-sale. Two sales ≈ **450 emailed prospects/month**, ~22/day.

**Phone path (everyone):** ~30 dials per conversation × ~30% close on a warm
trade-to-trade call ≈ **~100 dials per sale**. Two sales ≈ **200 dials/month**,
~10/day across the two windows.

| Activity | Volume/month | Time |
|---|---|---|
| Emails to Ltd prospects | ~450 | ~1 hr/day |
| Dials (all segments) | ~200 | ~1.5 hrs/day, split shifts |
| Merchant / on-site | ~20 | 2 mornings/week |
| Mockups (top-scored only) | 10–15 | ~15 hrs designer |

Expect **2–4 sales/month**, with phone and merchant producing most of them.

**Pipeline depth:** ~2,500–3,000 scored prospects covers six months. That's a
weekend of scraping. Discovery is not the bottleneck — scoring discipline and
follow-up are.

### 6.2 Own 3–5 towns, not the country

1. Merchant and van channels only work locally.
2. Referrals compound *within* a town's spark network — they use the same
   wholesaler and half of them subcontract to each other.
3. *"I did Dave's site over in Guiseley, have a look"* beats every statistic
   here.

Review-count norms vary sharply by city (Glasgow firms routinely clear 100+;
Birmingham firms researched were far thinner). **Set the qualifying review
threshold per town, not nationally.**

### 6.3 Five touches over 21 days, multichannel

Sequences of 4–7 steps produce roughly triple the responses of 1–3, and
follow-ups account for ~42% of replies. But **four or more email follow-ups
measurably increases spam complaints** — so keep email count low and push extra
touches into other channels.

| Day | Touch | Channel |
|---|---|---|
| 0 | Opening observation | Call 7:20am *or* email, by segment |
| 2 | Short follow-up, different angle | Email / DM |
| 5 | Second call, **different time of day** | Call 5:15pm |
| 9 | Mockup or walkthrough video | Email / post — top-scored only |
| 16 | One-line breakup | Email or text |

Then a **90-day dormant list** with one seasonal re-touch. January (filling the
year's book) and September (post-summer reset) are the natural windows.

**Cap at three emails per prospect. Vary the call time** — per-prospect connect
more than doubles across attempts precisely because you catch them in a
different part of their day.

### 6.4 Deliverability — set up before touch one

- **Separate sending domain**, never the main brand domain. A burnt reputation
  outlives the campaign.
- **SPF, DKIM, DMARC** all passing and aligned. Google, Yahoo and Microsoft now
  enforce this.
- **Warm up 4–6 weeks**, from 5–10/day.
- **Spam complaints under 0.30%, bounces under 2%.** At 0.30% Gmail makes your
  domain ineligible for delivery mitigation until you're under for seven
  consecutive days.
- **One-click unsubscribe** — required, and doubles as the Reg 23 opt-out.
- **Two mailboxes at 25–30/day** comfortably covers 450/month.

### 6.5 Measure properly

Track reply rate **by town, by score band, by channel**. **Kill an
underperforming segment at 200 touches, not 20** — at 20, a 5% reply rate and a
0% rate are statistically indistinguishable, and most people quit a working
channel on noise.

---

## 7. Unverified — read before acting

- **No published count exists** of UK electricians without websites. The pool is
  inferred: 32–35% of UK businesses have no website (rising to 35% for sole
  traders), against ~54,306 active Companies House firms under SIC 43210, plus a
  much larger sole-trader tail. Roughly 17,000–19,000 incorporated firms with no
  site, order-of-magnitude only. **Measure it yourself** across 10 towns first.
- **NICEIC membership is unresolved** — sources gave 26,000, ~38,000 and "over
  40,000". Confirm directly.
- **Checkatrade's 44,000 members is a 2021 figure.**
- **All outreach benchmarks are vendor-published.** Planning ranges only.
- **Mockup conversion claims are agency self-published.** A/B test.
- **TPS vs CTPS coverage of sole traders** — sources conflict. Screen both.
- **B2B door-knocking** — no clear guidance found. Avoid residential addresses.
- **Check whether Outscraper's "site is blank" filter** distinguishes a truly
  empty field from one pointing at Facebook or Checkatrade. That distinction
  decides whether your best segment lands in your list or gets filtered out.
