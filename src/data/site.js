// =============================================================================
//  H H ELECTRICAL  —  CENTRAL SITE CONFIG
// -----------------------------------------------------------------------------
//  ⚠️  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR BUSINESS DETAILS.
//  Every page, the SEO meta tags, and the schema.org data pull from here.
//
//  Values marked  // TODO  are PLACEHOLDERS — replace them with the real
//  details. Local SEO depends heavily on the accuracy of `areaServed`,
//  `address`, `phone` and `email`, so get those right.
//
//  HOUSE RULE: the LAYOUT/structure is the reusable template; the COLOUR is
//  unique to each client. Never reuse one client's brand colour on another
//  site — set `brandColor` below to the client's own colour every build.
// =============================================================================

export const site = {
  // --- Brand -----------------------------------------------------------------
  name: 'H H Electrical',
  legalName: 'H H Electrical',            // TODO: full registered/trading name
  tagline: 'Your source for all things electrical',  // from their Instagram bio
  // A short brand statement (from their Instagram): used in the hero.
  brandStatement: 'Experienced electricians — from installations to maintenance.',
  // The live domain (used for canonical URLs + sitemap). No trailing slash.
  url: 'https://www.hhelectrical.co.uk', // TODO: confirm real domain
  logoText: 'HH',                         // shown in the header lockup

  // --- Brand colour (the whole site recolours from these two values) --------
  // The design/layout is the reusable house style; the COLOUR is per-client.
  // Change these two values to rebrand the entire site instantly.
  // (H H Electrical: electric blue — confident, trustworthy, fits "electrical".)
  brandColor: '#1668ff',                  // primary accent (pills, highlights)
  brandColorDark: '#0b4fd1',              // darker hover shade

  // --- Social proof ----------------------------------------------------------
  googleRating: '5.0',                    // TODO: real Google rating
  reviewCount: '60+',                     // TODO: real review/follower count

  // --- Contact ---------------------------------------------------------------
  phone: '01234 567 890',                 // TODO: real number
  phoneHref: '+441234567890',             // TODO: same number, international format
  email: 'info@hhelectrical.co.uk',       // TODO: real email
  hoursShort: 'Mon – Sat: 8:00 – 18:00',  // shown in the top bar
  instagram: 'https://www.instagram.com/hhelectrical',
  facebook: '',                           // TODO: optional
  whatsapp: '',                           // TODO: optional (full intl number, no +)

  // --- Imagery (drop real files into /public/images and update these) --------
  heroImage: '',                          // e.g. '/images/hero.jpg' (full-bleed)
  vanImage: '',                           // e.g. '/images/van.jpg' (owner + van band)

  // --- Location / Service area (CRITICAL for local SEO) ----------------------
  // The town you're based in + the towns/areas you cover.
  address: {
    street: '',                           // TODO: optional street (leave '' to hide)
    locality: 'Your Town',                // TODO: main town/city
    region: 'Your County',                // TODO: county
    postcode: 'AB1 2CD',                  // TODO: postcode (or postcode area)
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  // Towns / areas you serve — these become real, indexable SEO content.
  areaServed: [
    'Your Town',                          // TODO: replace this whole list
    'Neighbouring Town 1',
    'Neighbouring Town 2',
    'Neighbouring Town 3',
    'the surrounding areas',
  ],

  // --- Credentials / trust ---------------------------------------------------
  // TODO: confirm real accreditations (NICEIC, NAPIT, Part P, etc.)
  accreditations: ['NICEIC Approved', 'Part P Registered', 'Fully Insured'],
  yearsExperience: '15+',                 // TODO
  foundedYear: 2015,                      // TODO

  // --- Owner (About page) ----------------------------------------------------
  owner: {
    name: 'The Owner',                    // TODO: owner's name
    role: 'Founder & Lead Electrician',
    // Photo: drop a file into /public/images/ and point to it here.
    photo: '/images/owner-placeholder.svg',
  },

  // --- Opening hours (used in schema.org + Contact page) ---------------------
  hours: [
    { days: 'Monday – Friday', time: '8:00am – 6:00pm' },
    { days: 'Saturday', time: '9:00am – 1:00pm' },
    { days: 'Sunday', time: 'Emergency call-outs only' },
  ],
};

// =============================================================================
//  SERVICES
//  Edit, add or remove freely. `slug` is used as an anchor id on /services.
// =============================================================================
export const services = [
  {
    slug: 'rewires',
    title: 'Full & Partial Rewires',
    short: 'Safe, tidy rewiring for older properties and renovations.',
    long:
      'Whether your property needs a complete rewire or just a few circuits brought up to standard, we deliver clean, code-compliant work with minimal disruption — and certify everything on completion.',
    icon: 'rewire',
  },
  {
    slug: 'consumer-units',
    title: 'Fuse Board / Consumer Unit Upgrades',
    short: 'Modern RCD-protected boards that keep your home safe.',
    long:
      'Old fuse boards are a common cause of nuisance trips and safety failures. We supply and fit modern consumer units with RCD/RCBO protection to the latest 18th Edition wiring regulations.',
    icon: 'board',
  },
  {
    slug: 'ev-chargers',
    title: 'EV Charger Installation',
    short: 'Home and workplace electric vehicle charge points.',
    long:
      'Approved installation of smart EV charge points for home and business, including load management and full electrical sign-off. We help you pick the right charger for your vehicle and supply.',
    icon: 'ev',
  },
  {
    slug: 'eicr-testing',
    title: 'EICR & Electrical Safety Testing',
    short: 'Inspection reports for homeowners, landlords & businesses.',
    long:
      'Electrical Installation Condition Reports (EICR), landlord safety certificates and periodic testing. We identify faults, document them clearly, and put together a no-nonsense plan to fix anything that fails.',
    icon: 'test',
  },
  {
    slug: 'lighting',
    title: 'Lighting Design & Installation',
    short: 'Indoor, outdoor and energy-efficient LED lighting.',
    long:
      'From a single downlight to a full lighting design for a kitchen extension, garden or commercial space — energy-efficient LED solutions that look great and cut running costs.',
    icon: 'light',
  },
  {
    slug: 'sockets-switches',
    title: 'Sockets, Switches & Extra Power',
    short: 'Additional points, USB sockets and outdoor power.',
    long:
      'Extra sockets where you actually need them, USB and smart switches, outdoor weatherproof power for garden offices and hot tubs — all installed safely and neatly.',
    icon: 'socket',
  },
  {
    slug: 'fault-finding',
    title: 'Fault Finding & Repairs',
    short: 'Fast, methodical diagnosis when something stops working.',
    long:
      'Tripping circuits, dead sockets or flickering lights? We track down electrical faults methodically and fix them right the first time, explaining what went wrong in plain English.',
    icon: 'fault',
  },
  {
    slug: 'commercial',
    title: 'Commercial & Landlord Services',
    short: 'Maintenance, testing and fit-outs for businesses.',
    long:
      'Planned maintenance, emergency lighting, periodic testing and full fit-outs for offices, shops and rental properties — reliable contractors you can build a long-term relationship with.',
    icon: 'commercial',
  },
];

// =============================================================================
//  HOW WE WORK  (process steps shown on the homepage)
// =============================================================================
export const process = [
  { n: '01', title: 'Get in touch', text: 'Call or message us with what you need. We listen and offer honest, jargon-free advice.' },
  { n: '02', title: 'Free quote', text: 'We assess the job and give you a clear, fixed quote with no hidden extras.' },
  { n: '03', title: 'Expert work', text: 'We carry out the work safely, cleanly and to the latest wiring regulations.' },
  { n: '04', title: 'Certified & done', text: 'Everything is tested, certified and tidied up — leaving you completely happy.' },
];

// =============================================================================
//  TESTIMONIALS
//  TODO: replace with real reviews (Google, Facebook, Instagram comments).
// =============================================================================
export const testimonials = [
  {
    quote:
      'Turned up on time, did a brilliant clean job on our rewire and left the place spotless. Couldn’t recommend them more highly.',
    author: 'Placeholder review',
    location: 'Add real reviews in src/data/site.js',
  },
  {
    quote:
      'Sorted our fuse board and added EV charger in a day. Friendly, professional and fairly priced — exactly what you want from an electrician.',
    author: 'Placeholder review',
    location: 'Add real reviews in src/data/site.js',
  },
  {
    quote:
      'Quick to respond, explained everything clearly and the work was faultless. Our go-to electricians from now on.',
    author: 'Placeholder review',
    location: 'Add real reviews in src/data/site.js',
  },
];

// =============================================================================
//  FAQs  (great for SEO — rendered with FAQPage schema)
// =============================================================================
export const faqs = [
  {
    q: 'Are you qualified and insured?',
    a: 'Yes. We’re fully qualified, accredited and insured, and all work is carried out to the latest 18th Edition wiring regulations and certified on completion.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Absolutely — we provide free, no-obligation quotes with clear, fixed pricing and no hidden extras.',
  },
  {
    q: 'Do you cover both domestic and commercial work?',
    a: 'We do. From a single socket in your home to full commercial fit-outs and landlord testing, we handle jobs of every size.',
  },
  {
    q: 'How quickly can you come out?',
    a: 'We aim to respond the same working day and can usually arrange a visit quickly. For urgent issues, get in touch and we’ll do our best to help straight away.',
  },
];
