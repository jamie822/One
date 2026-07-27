# Skills library

Third-party Claude Code skills vendored for building electrician client websites.
Each folder is an independent skill with its own `SKILL.md`; Claude loads them
automatically when a task matches the skill's description.

## What's here, and when it fires

### Copy & voice
| Skill | Use it for |
|---|---|
| `stop-slop` | **Run on every page before publishing.** Strips AI writing tells — filler openers, adverbs, binary contrasts, rule-of-three lists, em dashes, pull-quote sentences. |
| `copywriting` | Writing hero, service, location and about page copy from scratch. |
| `copy-editing` | Tightening copy that already exists (including the client's own words). |
| `ogilvy` | Headline and positioning work — David Ogilvy's advertising principles. |
| `cro` | Conversion structure: page flow, form design, CTA placement. |

### Design & appearance
| Skill | Use it for |
|---|---|
| `frontend-design` | General frontend design judgement and layout decisions. |
| `aesthetic-anchors` | Picking a *distinctive* visual direction per client instead of defaulting to trade-blue. Eight named anchors, each with locked palette/type/texture tokens. |
| `web-design-guidelines` | Quick checks against general web design best practice. |
| `design-engineering` | UI polish — spacing, hierarchy, the small details that read as premium. |
| `graphic-design` | Logo and brand identity work: briefing frameworks, vectorisation, mockups. |

### Animation & code
| Skill | Use it for |
|---|---|
| `css-animations` | Lightweight CSS-only motion. Prefer this first — zero JS payload. |
| `gsap` | Heavier scroll-driven or timeline animation, when CSS genuinely can't do it. |

### Google & SEO
| Skill | Use it for |
|---|---|
| `seo-local` | **The important one.** Google Business Profile, NAP consistency, citations, review signals, map pack ranking. |
| `seo-technical` | Core Web Vitals, crawlability, indexing, redirects. |
| `seo-schema` | JSON-LD structured data — `Electrician`, `Service`, `FAQPage`, `BreadcrumbList`. |
| `seo-page` | On-page work: titles, meta descriptions, headings, internal links. |
| `programmatic-seo` | Generating the location-page and industry-page clusters at scale without producing duplicate content. |

## Licences and attribution

All vendored skills are MIT or Apache-2.0. Original authors retain copyright.

| Skill(s) | Source | Licence |
|---|---|---|
| `stop-slop`, `ogilvy`, `frontend-design`, `web-design-guidelines`, `design-engineering`, `gsap`, `css-animations`, `programmatic-seo` | [boraoztunc/skills](https://github.com/boraoztunc/skills) | Apache-2.0 |
| `copywriting`, `copy-editing`, `cro` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | MIT |
| `seo-local`, `seo-technical`, `seo-schema`, `seo-page` | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | MIT |
| `graphic-design` | [designrique/ai-graphic-design-skill](https://github.com/designrique/ai-graphic-design-skill) | MIT |
| `aesthetic-anchors` | [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design) | MIT |

`stop-slop` originates with Hardik Pandya ([hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop), MIT) and is redistributed via the boraoztunc collection.

### Deliberately not vendored

[southwellmedia/seo-audit](https://github.com/southwellmedia/seo-audit) is a good
local-service-business SEO audit skill, but it ships **no licence file**, so it is
not included here. Read it directly if useful; don't redistribute it in client work.

## Updating

These are vendored copies, not submodules. To refresh one:

```bash
git clone --depth 1 https://github.com/<owner>/<repo>.git /tmp/skill-update
rm -rf .claude/skills/<name> && cp -r /tmp/skill-update/<path> .claude/skills/<name>
rm -rf .claude/skills/<name>/.git
```
