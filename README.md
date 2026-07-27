# Electrician Web Design — research, system and template

Everything needed to sell and build websites for UK electricians: the market
research, the pricing, the outreach playbook, the build prompt, the code
template, and 36 vendored skills.

---

## Start here

| If you want to… | Read |
|---|---|
| **Build a client site** | [`MASTER_PROMPT.md`](MASTER_PROMPT.md) — fill in Part 1, paste the whole file into a fresh session |
| Understand the market | [`RESEARCH.md`](RESEARCH.md) |
| Set a price or handle an objection | [`COMMERCIALS.md`](COMMERCIALS.md) |
| Find and contact prospects | [`OUTREACH.md`](OUTREACH.md) |
| Know which skill does what | [`.claude/skills/README.md`](.claude/skills/README.md) |
| See the code | [`client-template/`](client-template/) |

---

## The four findings that drive all of this

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

**4. You cannot lawfully cold-email a sole trader.** Under PECR, sole traders
are individual subscribers and need consent; limited companies don't. Your best
prospect is often a sole trader. Phone, post and in-person are the compliant
routes, and they're also what works best on trades.

---

## Repo contents

```
MASTER_PROMPT.md     The build brief. Fill in Part 1 per client.
RESEARCH.md          Market study: competitors, anti-patterns, SEO, GBP.
COMMERCIALS.md       Pricing, packaging, objection handling, payment terms.
OUTREACH.md          Finding prospects, PECR/GDPR compliance, cadence.

client-template/     Brand-neutral Astro starter. One config file drives it.
research-output/     Live competitor audit — screenshots, Lighthouse, signals.
.claude/skills/      36 vendored skills: design, copy, graphics, SEO, audit.
.github/             Pages deploy + the competitor-audit workflow.

src/ brand/ brand-assets/   The "Off The Tools" agency brand site (separate
                            from client work; see BRAND.md).
```

---

## Building a client site

```bash
cp -r client-template ../clientname && cd ../clientname
npm install && npm run dev
```

Then fill in `src/data/client.js` from Part 1 of `MASTER_PROMPT.md`.

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
