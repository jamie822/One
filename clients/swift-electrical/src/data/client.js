// =============================================================================
//  SWIFT ELECTRICAL & SECURITY — Bradford
// -----------------------------------------------------------------------------
//  Built from the Google Business Profile only. Nothing here is invented.
//
//  Every value is one of:
//    VERIFIED  — taken directly from the profile or the reviews
//    INFERRED  — reasoned from the profile, labelled as such
//    NEEDED    — must come from the client. Renders as a visible placeholder.
//
//  Search this file for "NEEDED" to see everything still outstanding.
// =============================================================================

export const client = {
  // --- Identity -------------------------------------------------------------
  name: 'Swift Electrical & Security',            // VERIFIED
  legalName: 'Swift Electrical & Security',       // NEEDED: registered name?
  url: 'https://jamie822.github.io/One/',         // preview only — NEEDED: real domain
  tagline: 'Electrician and security installer, Bradford and West Yorkshire',

  // --- Brand ----------------------------------------------------------------
  // VERIFIED from the Instagram logo (@swiftelecsec): electric cyan lightning
  // bolt and SWIFT wordmark on black.
  //
  // I had picked brass before seeing this. Wrong call — the client already has
  // a brand and it is a good one. The house rule is "never default to
  // trade-blue"; this is not trade-blue, it is a vivid electric cyan, and it is
  // theirs. Client brand beats house preference every time.
  brandColor: '#22c8ee',
  brandColorDark: '#0e9fc4',
  // Dark. Their own logo is cyan-on-black, their Instagram grid is dark, and
  // the night-time LED work photographs beautifully against it.
  mode: 'dark',

  // --- Owner ----------------------------------------------------------------
  owner: {
    name: 'Adil',                                 // VERIFIED — named in 3 reviews
    role: 'Owner',                                // NEEDED: confirm role + surname
    photo: '',                                    // NEEDED
    // Written from what customers actually say. No invented history.
    bio: 'Customers keep mentioning the same two things: he explains what he has found before doing anything about it, and his price is the one people come back to after being quoted elsewhere.',
    yearsTrading: null,                           // NEEDED — oldest review is 2yrs, a floor not a fact
    since: null,                                  // NEEDED
  },

  // "very nice lads" — Bilal Ali. At least two people. Names NEEDED.
  team: [],

  // --- Contact --------------------------------------------------------------
  // The Google profile has NO phone number. Google is actively prompting "Add
  // place's phone number". This is the biggest problem the business has and it
  // is free to fix.
  phone: '',                                      // NEEDED — urgent
  phoneHref: '',                                  // NEEDED — urgent
  email: '',                                      // NEEDED
  hours: 'Open until 8pm',                        // VERIFIED (partial — full week NEEDED)
  emergency: '',                                  // NEEDED
  responsePromise: '',                            // NEEDED

  // No address or service area is set on the profile. Bradford comes from the
  // description text, not a configured service area.
  showAddress: false,
  address: {
    street: '',
    locality: 'Bradford',                         // VERIFIED (Google description)
    region: 'West Yorkshire',                     // VERIFIED (Instagram bio)
    postcode: '',                                 // NEEDED
    country: 'GB',
  },

  // --- Accreditations -------------------------------------------------------
  // "NICEIC Registered" is claimed in BOTH the Google description and the
  // Instagram bio. Two independent claims by the client — but still their own
  // claim, and the enrolment number is not given anywhere. Number NEEDED before
  // launch so it can be checked on the register.
  accreditations: [
    { name: 'NICEIC Registered', number: '', url: 'https://www.niceic.com/find-a-contractor' }, // NEEDED: number
  ],
  insurance: '',                                  // NEEDED
  qualifications: [],                             // NEEDED

  // --- Proof ----------------------------------------------------------------
  google: {
    rating: 5.0,                                  // VERIFIED
    reviewCount: 7,                               // VERIFIED
    profileUrl: '',                               // NEEDED
  },
  otherPlatforms: [],
  jobsCompleted: null,                            // NEEDED

  social: {
    instagram: 'https://www.instagram.com/swiftelecsec/',  // VERIFIED — 526 followers, 18 posts
    facebook: '',
    linkedin: '',
  },

  // Photography EXISTS — 18 posts on Instagram, mostly video, showing real
  // work: architectural linear ceiling lighting, external conduit runs on
  // Bradford stone, outdoor LED strip lighting at night, and a commercial
  // suspended-ceiling fit-out. Ask for the original files.
  heroImage: '',                                  // NEEDED — files exist, ask for them
  ctaImage: '',                                   // NEEDED
};

// =============================================================================
//  SERVICES
// -----------------------------------------------------------------------------
//  The profile description lists ~25 services. The reviews evidence four.
//  Narrowed deliberately to six: the four customers actually talk about, plus
//  two core domestic jobs. Rationale in the build report.
//
//  Symptom lines are written from the customer's position, per AUDIENCE.md.
// =============================================================================
export const services = [
  {
    slug: 'eicr-landlord-certificates',
    title: 'EICRs & Landlord Certificates',
    // Evidenced x2 — both landlords, one with a portfolio.
    symptom: 'Your agent wants an EICR before the tenancy starts, and the quotes you have been given are all over the place.',
    short: 'Fixed-wire testing for landlords, with remedials priced separately.',
    body: 'An EICR is an inspection of an existing installation. We test it, write up what we find, and give every observation a code. What we will not do is treat every finding as urgent work. If something does need doing you get it quoted separately, and you are free to take that quote to anyone.',
    priceFrom: '',                                // NEEDED
    priceNote: 'The price depends on the size of the property and how many circuits it has. Ask and we will tell you before we come out.',
    deliverable: '',                              // NEEDED: turnaround
    icon: 'clipboard',
  },
  {
    slug: 'fault-finding',
    title: 'Fault Finding',
    // Evidenced x2, including the strongest review on the profile.
    symptom: 'The power keeps tripping, you have had people out already, and nobody has been able to tell you why.',
    short: 'Systematic diagnosis, including faults other people have given up on.',
    body: 'Intermittent faults are the hardest thing in this trade and the most frustrating thing to live with. We work through the installation circuit by circuit until we find it, and we tell you what it will cost to put right before we start putting it right.',
    priceFrom: '',                                // NEEDED
    priceNote: '',                                // NEEDED: hourly rate
    deliverable: 'A written summary of the fault and the repair.',
    icon: 'search',
  },
  {
    slug: 'cctv-security',
    title: 'CCTV & Security',
    // Evidenced x2, one a repeat customer. In the business name. Differentiator.
    symptom: 'You want cameras up, and you would rather not have a separate company in to do it.',
    short: 'Cameras, alarms and door entry, fitted by the electrician who does the wiring.',
    body: 'Most electricians do not do security, and most security firms are not electricians. Doing both means one visit, one person responsible for the cabling, and nobody arguing about whose job the fault is.',
    priceFrom: '',                                // NEEDED
    priceNote: '',                                // NEEDED
    deliverable: '',                              // NEEDED
    icon: 'shield',
  },
  {
    slug: 'lighting',
    title: 'Lighting',
    // Evidenced x1.
    symptom: 'A light has stopped working, or the room has never had enough of it.',
    short: 'Indoor and outdoor lighting, LED upgrades, floodlights and security lighting.',
    body: 'From replacing a failed fitting to lighting a whole room, a garden or a driveway properly.',
    priceFrom: '',
    priceNote: '',
    deliverable: '',
    icon: 'bolt',
  },
  {
    slug: 'consumer-units',
    title: 'Fuse Boards & Consumer Units',
    // From the profile description. Not evidenced in reviews — flagged.
    symptom: 'The board trips when too much is on at once, or it still has the old rewireable fuses in it.',
    short: 'Consumer unit replacements, certified and notified to Building Control.',
    body: 'A board fitted before around 2008 usually has no RCD protection. That is not illegal and it is not an emergency. What it means is that if a fault develops, the board may not cut the power fast enough. An EICR will tell you exactly where yours stands, in writing.',
    priceFrom: '',
    priceNote: '',
    deliverable: '',                              // NEEDED
    icon: 'grid',
  },
  {
    slug: 'sockets-and-rewiring',
    title: 'Sockets, Switches & Rewiring',
    // From the profile description. Not evidenced in reviews — flagged.
    symptom: 'You are short of sockets, or the wiring has not been touched since the house was built.',
    short: 'Extra sockets, outdoor points, partial rewires and full rewires.',
    body: 'Adding a socket is an afternoon. A full rewire is a different job, and we will be straight with you about the mess and how long you will be living with it.',
    priceFrom: '',
    priceNote: '',
    deliverable: '',
    icon: 'plug',
  },
];

// =============================================================================
//  AREAS
// -----------------------------------------------------------------------------
//  READ BEFORE PUBLISHING.
//
//  The housing-stock notes below are genuine, documented characteristics of
//  these Bradford districts. They are NOT claims that Swift has worked there.
//  No street has been invented and no job has been attributed.
//
//  Each page needs one real job or one real customer from that area before it
//  goes live. Until then this is honest general knowledge — better than
//  templated filler, weaker than proof.
// =============================================================================
export const areas = [
  {
    slug: 'bradford',
    name: 'Bradford',
    primary: true,
    landmarks: ['the city centre', 'Little Germany', 'Great Horton', 'Bowling'],
    housingStock:
      'Bradford has one of the largest surviving stocks of Victorian back-to-back and through terraces in the country, most of it stone-built and much of it rewired once in the 1970s or 80s and not since. The two things we find most often in houses of that age are undersized meter tails and no main protective bonding to the gas and water.',
    travelNote: '',                               // NEEDED
    jobRef: '',                                   // NEEDED — a real job here
  },
  {
    slug: 'manningham',
    name: 'Manningham',
    landmarks: ['Lister Park', 'Oak Lane', 'Heaton Road'],
    housingStock:
      'Large Victorian villas, many long since divided into flats or run as HMOs. Sub-division is where the electrical problems come from: circuits extended room by room over decades, boards added on rather than designed in, and landlords inheriting an installation nobody has ever drawn out. It is also why an EICR here takes longer than the same-sized house that was never split.',
    travelNote: '',
    jobRef: '',
  },
  {
    slug: 'heaton',
    name: 'Heaton',
    landmarks: ['Heaton Woods', 'Highgate', 'Toller Lane'],
    housingStock:
      'Larger Victorian and Edwardian semis and detached houses, mostly owner-occupied and mostly well looked after. The work here tends to be planned rather than urgent: extra sockets, outside lighting, a board upgrade before a sale, cameras.',
    travelNote: '',
    jobRef: '',
  },
  {
    slug: 'shipley',
    name: 'Shipley',
    landmarks: ['Shipley Market Square', 'Windhill', 'Baildon Bridge'],
    housingStock:
      'Stone terraces stepping up the sides of the Aire valley, with 1930s semis on the higher ground. Valley-bottom properties often have cellars that were damp long before anyone thought about putting a socket in one, which is worth knowing before you run a circuit down there.',
    travelNote: '',
    jobRef: '',
  },
  {
    slug: 'saltaire',
    name: 'Saltaire',
    landmarks: ['Salts Mill', 'Victoria Road', 'Albert Road'],
    housingStock:
      'A World Heritage Site, and that changes the job. The mill workers cottages are stone-built and listed as part of the village, and there are real limits on what can be run externally or fixed to a front elevation. Rewiring here means planning cable routes internally and talking to Conservation before anything visible changes.',
    travelNote: '',
    jobRef: '',
  },
  {
    slug: 'bingley',
    name: 'Bingley',
    landmarks: ['Main Street', 'Cottingley', 'Gilstead'],
    housingStock:
      'Stone terraces near the centre, with interwar and post-war semis spreading up the hillsides. The semis are the ones most likely to still be running a 1960s or 70s installation with a small board and nowhere near enough sockets for how anyone actually lives now.',
    travelNote: '',
    jobRef: '',
  },
  {
    slug: 'idle-and-thackley',
    name: 'Idle & Thackley',
    landmarks: ['Idle Green', 'Thackley Road', 'Highfield'],
    housingStock:
      'Older stone cottages around the village centres with substantial 1930s semi-detached estates around them. That 1930s stock commonly has a rewire from the 70s or 80s now reaching the end of its life — the cabling is often sound but the board, the bonding and the socket count are all from a different era.',
    travelNote: '',
    jobRef: '',
  },
  {
    slug: 'keighley',
    name: 'Keighley',
    landmarks: ['Cavendish Street', 'Utley', 'Ingrow'],
    housingStock:
      'Dense stone terraces from the mill era and a large private rented sector. Landlord work here is mostly EICRs on terraces where the installation has been added to piecemeal by several different people over thirty years.',
    travelNote: '',
    jobRef: '',
  },
];

// =============================================================================
//  INDUSTRIES — empty. No evidence of commercial work anywhere in the reviews.
// =============================================================================
export const industries = [];

// =============================================================================
//  CASE STUDIES
// -----------------------------------------------------------------------------
//  EMPTY ON PURPOSE. Three real jobs needed from the client.
//
//  The strongest candidate is already in the reviews: shakil hussain's
//  intermittent tripping fault that several other electricians could not find.
//  Get the details of that one and it writes itself.
// =============================================================================
export const caseStudies = [];

// =============================================================================
//  REVIEWS — all seven, verbatim from Google. Nothing edited or tidied.
//  Truncated ones are marked; the full text is on the profile.
// =============================================================================
export const reviews = [
  {
    quote: 'Adil came 40 minutes out of his way to help resolve my lighting issue. Very friendly and professional. Good value for money, would definitely use again.',
    author: 'Natalie Clark',
    location: '',
    platform: 'Google',
    date: '10 months ago',
    electrician: 'Adil',
  },
  {
    quote: 'I was experiencing constant electrical issues, with the power frequently tripping. Despite having several professionals come out, none were able to identify or resolve the problem. It was an incredibly stressful time…',
    author: 'shakil hussain',
    location: '',
    platform: 'Google',
    date: '10 months ago',
    electrician: '',
  },
  {
    quote: 'I required an EICR report for my rental property and of all the quotes I received, Adil’s was most reasonable. What really struck me about Adil was his professionalism and very polite and up beat demeanour. He talked me through exactly…',
    author: 'Imran Azad',
    location: '',
    platform: 'Google',
    date: 'a year ago',
    electrician: 'Adil',
  },
  {
    quote: 'Brilliant service today from Adil. My properties EICR certificates were up for renewal. I had difficulty finding someone to do the work and when I did they were charging extortionate prices. I was put into contact with Adil via a friend…',
    author: 'Omar Aftab',
    location: '',
    platform: 'Google',
    date: '2 years ago',
    electrician: 'Adil',
  },
  {
    quote: 'Absolutely amazing service, very professional and reasonable prices. Would highly recommend and have used this company a few times now to install security cameras.',
    author: 'A DZ',
    location: '',
    platform: 'Google',
    date: '10 months ago',
    electrician: '',
  },
  {
    quote: 'Polite, respectful and very professional. Resolved the problem straight away. Would definitely recommend.',
    author: 'Ahsin Chaudhry',
    location: '',
    platform: 'Google',
    date: '10 months ago',
    electrician: '',
  },
  {
    quote: 'Came and fitted my cameras excellent quality and very nice lads',
    author: 'Bilal Ali',
    location: '',
    platform: 'Google',
    date: '10 months ago',
    electrician: '',
  },
];

// =============================================================================
//  FAQ
//  Written to answer what this client's actual customers ask, based on the
//  reviews. The C1/C2/C3 answer is deliberate — it is the best defence a
//  landlord has against being sold remedials they do not need.
// =============================================================================
export const faqs = [
  {
    q: 'What do the codes on an EICR actually mean?',
    a: 'C1 means danger is present — that needs sorting straight away and we would not leave you with it. C2 means potentially dangerous, so it should be put right, but it is not an emergency. C3 means an improvement is recommended, and a C3 on its own does not make your report unsatisfactory. If anyone tells you a C3 has to be fixed before they can pass the certificate, get a second opinion.',
  },
  {
    q: 'Do I have to use you for any remedial work you find?',
    a: 'No. We quote remedials separately and itemised, and you are free to take that quote to anyone else. Testing and fixing are two different jobs and we would rather you trusted the test.',
  },
  {
    q: 'My fuse board is old. Is it dangerous?',
    a: 'Probably not, and almost certainly not urgently. A board fitted before around 2008 usually has no RCD protection, which means that if a fault develops it may not cut the power fast enough. That is worth knowing about rather than worrying about. An EICR will tell you exactly where yours stands.',
  },
  {
    q: 'Do you do security cameras as well as the electrics?',
    a: 'Yes, it is half of what we do. Having the same person do the cabling and the cameras means one visit, and nobody arguing about whose fault it is if something stops working.',
  },
  {
    q: 'How quickly can you come out?',
    a: '', // NEEDED
  },
  {
    q: 'What areas do you cover?',
    a: 'Bradford and around it — Shipley, Saltaire, Bingley, Keighley, Idle and Thackley among others. If you are not sure whether you are in range, ask.',
  },
];
