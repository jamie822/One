// =============================================================================
//  H H ELECTRICAL  —  CENTRAL SITE CONFIG
// -----------------------------------------------------------------------------
//  ⚠️  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR BUSINESS DETAILS.
//  Every page, the SEO meta tags, and the schema.org data pull from here.
//
//  Values marked  // TODO  are PLACEHOLDERS — replace them with the real
//  details. Local SEO depends heavily on the accuracy of `areaServed`,
//  `address`, `phone` and `email`, so get those right.
// =============================================================================

export const site = {
  // --- Brand -----------------------------------------------------------------
  name: 'H H Electrical',
  legalName: 'H H Electrical',            // TODO: full registered/trading name
  tagline: 'Trusted Local Electricians',
  // The live domain (used for canonical URLs + sitemap). No trailing slash.
  url: 'https://www.hhelectrical.co.uk', // TODO: confirm real domain
  logoText: 'H H',                        // shown in the header lockup

  // --- Contact ---------------------------------------------------------------
  phone: '01234 567 890',                 // TODO: real number
  phoneHref: '+441234567890',             // TODO: same number, international format
  email: 'info@hhelectrical.co.uk',       // TODO: real email
  instagram: 'https://www.instagram.com/hhelectrical',

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
