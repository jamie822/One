# Electrician Web Design — research, system and template

Everything needed to sell and build websites for UK electricians: the market
research, the pricing, the outreach playbook, the build prompt, the code
template, and 41 vendored skills.

---

## Start here

| If you want to… | Read |
|---|---|
| **Build a client site** | [`BUILD.md`](BUILD.md) — **the prompt.** Paste it with a Google Business Profile and go |
| See the full spec for a finished site | [`MASTER_PROMPT.md`](MASTER_PROMPT.md) |
| Understand the market | [`RESEARCH.md`](RESEARCH.md) |
| Set a price or handle an objection | [`COMMERCIALS.md`](COMMERCIALS.md) |
| Find and contact prospects | [`OUTREACH.md`](OUTREACH.md) |
| **Follow the build process** | [`BUILD_PROCESS.md`](BUILD_PROCESS.md) — phases, skill order, gates |
| Understand the end customer | [`AUDIENCE.md`](AUDIENCE.md) — what makes someone ring an electrician |
| Know which skill does what | [`.claude/skills/README.md`](.claude/skills/README.md) |
| See the code | [`client-template/`](client-template/) |

---

## The six findings that drive all of this

**1. Nobody is competing on design.** Research across 21 competitor electricians
in London, Manchester, Leeds, Birmingham and Glasgow found no design-led
electrician website ranking in any major UK city. Some have serious
reputations — one Glasgow firm has 500+ five-star reviews and runs on `.php`
URLs.

**2. But design alone won't rank a client.** The firms that win local search win
on review volume and hyperlocal page coverage. A beautiful one-page site loses
to an ugly forty-page one with 300 reviews. You have to deliver both.

**3. The trade niche is already commoditised at £299–£799.** A £1–2k price is
the *top third* of this market, not the cheap end. It's defensible — market rate
for website copywriting alone is £1,200–£2,600 — but it has to be justified, not
assumed.

**4. Not one competitor passes Core Web Vitals.** The best LCP in the set is
2.9s against a 2.5s threshold; six sites are over 7 seconds. The one competitor
with a genuinely ambitious animated hero scores 15/100 with a 23.7s LCP — they
hung a video on the LCP element. A static build with CSS motion gets both.

**5. The site is a verification channel, not a discovery channel.** 69% of hires
come from word-of-mouth; people Google the name they were given. The job is to
survive scrutiny, not to pitch.

**6. You cannot lawfully cold-email a sole trader.** Under PECR, sole traders
are individual subscribers and need consent; limited companies don't. Your best
prospect is often a sole trader. Phone, post and in-person are the compliant
routes, and they're also what works best on trades.

---

## Repo contents

```
BUILD.md             THE PROMPT. Paste with a Google profile to start a build.
MASTER_PROMPT.md     Full spec for a finished site.
RESEARCH.md          Market study: competitors, anti-patterns, SEO, GBP.
COMMERCIALS.md       Pricing, packaging, objection handling, payment terms.
OUTREACH.md          Finding prospects, PECR/GDPR compliance, cadence.
BUILD_PROCESS.md     The delivery SOP: 8 phases, skill order, quality gates.
AUDIENCE.md          The end customer: decision process, fears, trust signals.

client-template/     Brand-neutral Astro starter. One config file drives it.
research-output/     Live competitor audit — screenshots, Lighthouse, signals.
.claude/skills/      41 vendored skills: design, copy, graphics, SEO, audit.
.github/             Pages deploy + the competitor-audit workflow.

src/ brand/ brand-assets/   The "Off The Tools" agency brand site (separate
                            from client work; see BRAND.md).
```

---

## Building a client site

Open a fresh session in this repo, paste [`BUILD.md`](BUILD.md), and drop the
client's Google Business Profile into the marked slot. It mines the profile —
especially the reviews, which carry named staff, real job types, verified towns
and the customer's own language — then comes back with a list of what it needs
from the client before it builds anything.

Adding a town to the `areas` array generates its page, adds it to the footer,
home page, service pages and sitemap. Nothing else to edit.

Three guardrails are built in deliberately:

- A **location page without real street names and local housing detail** renders
  a visible "not ready to publish" warning instead of shipping thin content.
  Templated location pages are the single most common failure across every
  competitor studied.
- **`google.rating` starts as `null`.** Until you set a genuine figure, the
  trust bar and page titles omit it entirely.
- **The reviews array starts empty** and renders a warning rather than
  placeholder testimonials, which have a habit of going live by accident.

---

## Auditing competitors

`.github/workflows/competitor-audit.yml` runs on a GitHub Actions runner, which
has unrestricted internet. It screenshots each site desktop and mobile,
**detects whether the hero actually moves** by diffing two screenshots two
seconds apart, fingerprints the platform and animation libraries, runs
Lighthouse, and extracts schema, review widgets, accreditations and page
architecture.

Results land in `research-output/`.

To run it: touch `.github/audit.trigger` and push, or use Actions → Competitor
audit → Run workflow once the file reaches the default branch.

---

## Commands

```bash
# client template
cd client-template && npm install && npm run dev

# agency brand site (root)
npm install && npm run dev
node brand/render.mjs        # regenerate /brand-assets/*.png
```
