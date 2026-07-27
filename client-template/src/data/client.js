// =============================================================================
//  CLIENT CONFIG — the single source of truth for this site.
// -----------------------------------------------------------------------------
//  Everything below is filled in from PART 1 of /MASTER_PROMPT.md.
//
//  Values marked  [ASK]  must come from the client. Never invent an
//  accreditation number, a review count or a customer quote.
//
//  The example data is a FICTIONAL business (Hartley Electrical, York) shown so
//  the shape is obvious. Replace all of it.
// =============================================================================

export const client = {
  // --- Identity ------------------------------------------------------------
  // ONE canonical name. Use this exact string on the site, Google Business
  // Profile, and every directory. Inconsistency costs local ranking.
  name: 'Hartley Electrical',
  legalName: 'Hartley Electrical Ltd',
  url: 'https://hartleyelectrical.co.uk',
  tagline: 'Electricians in York, trusted since 2011',

  // --- Brand ---------------------------------------------------------------
  // Pick something ownable. Do NOT default to trade-blue: research found
  // nearly every UK electrician site uses it. See .claude/skills/aesthetic-anchors
  brandColor: '#c2410c',
  brandColorDark: '#9a3412',
  // 'dark' suits cinematic photography; 'light' suits clean editorial layouts.
  mode: 'dark',

  // --- Owner ---------------------------------------------------------------
  owner: {
    name: 'Dave Hartley',
    role: 'Owner & Qualifying Supervisor',
    photo: '',                       // /images/owner.jpg — real photo, never stock
    // First person, specific, in the owner's own words. See MASTER_PROMPT §7.
    bio: 'I served my apprenticeship at a firm in Acomb and went out on my own in 2011 with a Transit and a set of ladders. I still price every job myself.',
    yearsTrading: 14,
    since: 2011,
  },

  team: [
    // { name: 'Sam Whitaker', role: 'Approved Electrician', photo: '', specialism: 'EV charge points' },
  ],

  // --- Contact -------------------------------------------------------------
  phone: '01904 000000',
  phoneHref: '+441904000000',
  email: 'hello@hartleyelectrical.co.uk',
  hours: 'Mon–Fri 8am–6pm, Sat 9am–1pm',
  emergency: '24hr callout for existing customers',
  responsePromise: 'Enquiries answered same working day.',

  // Service-area business with no public premises? Set showAddress false —
  // the address is then omitted from schema, matching a hidden GBP address.
  showAddress: false,
  address: {
    street: '',
    locality: 'York',
    region: 'North Yorkshire',
    postcode: 'YO24 0AA',
    country: 'GB',
  },

  // --- Accreditations ------------------------------------------------------
  // [ASK] Every number must be real and verifiable. Link to the register.
  accreditations: [
    { name: 'NICEIC Approved Contractor', number: '', url: 'https://www.niceic.com/find-a-contractor' },
    { name: 'Part P Registered', number: '', url: '' },
    { name: 'TrustMark', number: '', url: 'https://www.trustmark.org.uk/' },
  ],
  insurance: '£2m public liability',
  qualifications: ['City & Guilds 2391 Inspection & Testing', '18th Edition Wiring Regulations'],

  // --- Proof ---------------------------------------------------------------
  // [ASK] Real figures only. Leave rating null until the client has reviews;
  // the trust bar and schema both adapt automatically.
  google: {
    rating: null,                    // e.g. 4.9
    reviewCount: null,               // e.g. 63
    profileUrl: '',
  },
  otherPlatforms: [
    // { name: 'Checkatrade', score: '9.8/10', count: 41, url: '' },
  ],
  jobsCompleted: null,               // honest approximation, or null

  // --- Social --------------------------------------------------------------
  social: { facebook: '', instagram: '', linkedin: '' },

  // --- Imagery -------------------------------------------------------------
  // Empty strings render a clearly-marked placeholder rather than breaking.
  heroImage: '',
  ctaImage: '',
};

// =============================================================================
//  SERVICES — one page each at /services/<slug>/
// =============================================================================
export const services = [
  {
    slug: 'rewires',
    title: 'House Rewires',
    // The SYMPTOM, not the service. This is the page's opening line.
    symptom: 'Round-pin sockets, a fuse board with rewireable fuses, and no earth on the lighting circuit.',
    short: 'Full and partial rewires, room by room or whole house.',
    body: 'A full rewire on a three-bed terrace usually takes 5–8 days. We lift boards rather than chase every wall where the floor allows it, which keeps the mess down.',
    priceFrom: '',                   // honest figure, or '' with a reason below
    priceNote: 'Every house is different — we quote after a look round, not over the phone.',
    deliverable: 'Electrical Installation Certificate and Building Control notification within 48 hours.',
    icon: 'bolt',
  },
  {
    slug: 'eicr',
    title: 'EICR & Landlord Certificates',
    symptom: 'Your letting agent wants an EICR before the tenancy starts on the 1st.',
    short: 'Fixed-wire testing for landlords, buyers and businesses.',
    body: 'A domestic EICR on a standard three-bed takes around three hours. You get the report the same day, with any C1 or C2 items priced separately so there is no pressure to use us for the remedials.',
    priceFrom: '',
    priceNote: '',
    deliverable: 'Full EICR report, same day.',
    icon: 'clipboard',
  },
  {
    slug: 'consumer-units',
    title: 'Consumer Unit Upgrades',
    symptom: 'The board trips whenever the kettle and the toaster are on together, and your insurer has started asking questions.',
    short: 'Modern RCBO boards, certified and Building Control notified.',
    body: 'We fit RCBO boards as standard rather than dual-RCD, so one faulty appliance takes out one circuit instead of half the house.',
    priceFrom: '',
    priceNote: '',
    deliverable: 'EIC and Building Control notification.',
    icon: 'grid',
  },
  {
    slug: 'ev-chargers',
    title: 'EV Charger Installation',
    symptom: 'New car arrives in three weeks and the granny cable will not reach the drive.',
    short: 'OZEV-approved home and workplace charge points.',
    body: 'We install [BRANDS]. Most single-phase installs are done in half a day, including the load assessment your DNO needs.',
    priceFrom: '',
    priceNote: '',
    deliverable: 'Installation certificate and DNO notification.',
    icon: 'plug',
  },
  {
    slug: 'fault-finding',
    title: 'Fault Finding',
    symptom: 'Half the upstairs sockets are dead and nobody can tell you why.',
    short: 'Systematic diagnosis, not guesswork.',
    body: 'Charged by the hour, and we tell you what it will cost to fix before we start fixing it.',
    priceFrom: '',
    priceNote: '',
    deliverable: 'Written summary of the fault and the repair.',
    icon: 'search',
  },
];

// =============================================================================
//  AREAS — one page each at /areas/<slug>/
// -----------------------------------------------------------------------------
//  THIS IS THE RANKING ENGINE. 8–15 towns the client has ACTUALLY worked in.
//
//  Every field below exists to make the page genuinely different from the
//  others. If you cannot fill in `housingStock` and `landmarks` for a town,
//  do not create the page. Ten real pages beat thirty templated ones.
// =============================================================================
export const areas = [
  {
    slug: 'york',
    name: 'York',
    primary: true,
    // Named streets, estates, developments. [ASK the client.]
    landmarks: ['Bishopthorpe Road', 'Fulford', 'Heworth', 'Clifton'],
    // The real electrical characteristics of the local housing stock. This is
    // what makes each page distinct AND demonstrates genuine expertise.
    housingStock: 'A lot of pre-1919 terraces inside the walls, many rewired once in the 1980s and now due again. Conservation area rules limit external cable runs on a fair few of them.',
    travelNote: 'Based in York — usually with you the same day.',
    jobRef: '',                      // slug of a case study done here
  },
  {
    slug: 'acomb',
    name: 'Acomb',
    landmarks: ['Front Street', 'Chapelfields'],
    housingStock: 'Mostly interwar semis with 1960s and 70s rewires. Undersized meter tails and no main bonding are the two things we find most often.',
    travelNote: '10 minutes from the workshop.',
    jobRef: '',
  },
  // Add 6–13 more. Each needs its own landmarks and housingStock.
];

// =============================================================================
//  INDUSTRIES — /industries/<slug>/  (delete entirely if purely domestic)
// =============================================================================
export const industries = [
  // {
  //   slug: 'letting-agents',
  //   name: 'Letting Agents & Landlords',
  //   obligation: 'Every rented property in England needs a valid EICR every five years.',
  //   scope: 'Portfolio testing, remedials, and certificates filed straight to your system.',
  //   accreditation: 'NICEIC Approved Contractor',
  // },
];

// =============================================================================
//  CASE STUDIES — /case-studies/<slug>/   Minimum three. Real jobs only.
// =============================================================================
export const caseStudies = [
  // {
  //   slug: 'victorian-rewire-bishopthorpe-road',
  //   title: 'Full rewire, Victorian terrace, Bishopthorpe Road',
  //   area: 'york',
  //   service: 'rewires',
  //   date: 'March 2025',
  //   clientName: 'The Hodgsons',        // or an honest anonymisation
  //   problem: '1970s rewireable fuse board, no RCD protection, and the insurer refused to renew.',
  //   work: 'Full rewire over six days, RCBO board, main bonding to gas and water.',
  //   outcome: 'Certified and notified in a week. Insurance renewed.',
  //   duration: '6 days',
  //   quote: 'They covered every floor before they started and I never once had to chase them.',
  //   quoteAuthor: 'Linda H., Fulford',
  //   imageBefore: '',
  //   imageAfter: '',
  // },
];

// =============================================================================
//  REVIEWS — real ones only, ideally synced from a third-party platform.
//  Name the electrician where the review does: research found this is the
//  single most under-used trust signal in the market.
// =============================================================================
export const reviews = [
  // { quote: '', author: '', location: '', platform: 'Google', date: '', electrician: '' },
];

// =============================================================================
//  FAQ — questions the client actually gets asked. Not invented ones.
// =============================================================================
export const faqs = [
  { q: 'Do you charge for quotes?', a: 'No. We come out, look at the job and give you a written price.' },
  { q: 'Are you insured?', a: 'Yes — [INSURANCE]. Happy to send the certificate before we start.' },
  { q: 'How quickly can you come out?', a: '[RESPONSE TIME]' },
];
