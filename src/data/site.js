// =============================================================================
//  OFF THE TOOLS  —  BRAND + SITE CONFIG  (single source of truth)
// -----------------------------------------------------------------------------
//  Premium "Dark Luxe" brand for electricians who want to get OFF the tools.
//  We sell premium websites + online presence (CRM/automation under the hood,
//  never named publicly), then upsell coaching + systems/automation builds.
//
//  Edit business details here. Items marked  // TODO  need Jamie's real info.
// =============================================================================

export const site = {
  // --- Brand -----------------------------------------------------------------
  name: 'Off The Tools',
  legalName: 'Off The Tools',             // TODO: registered trading name
  // The hook + the promise.
  tagline: 'Stop being the business. Start owning one.',
  // One-line descriptor of who it's for.
  descriptor: 'Premium websites & online presence for electricians.',
  url: 'https://jamie822.github.io/One',  // live (GitHub Pages); swap for real domain
  logoText: 'OTT',                        // monogram

  // --- Brand colour (Dark Luxe: brushed gold on near-black) ------------------
  brandColor: '#c9a24b',                  // brushed gold
  brandColorDark: '#a8853a',              // deep gold (hover)

  // --- Founder ---------------------------------------------------------------
  founder: {
    name: 'Jamie',                        // TODO: full name
    role: 'Founder',
    // Jamie's real-world credibility: he runs an electrical company himself.
    background: 'Founder of a successful Leeds electrical company',
    photo: '',                            // /images/jamie.jpg (cut-out headshot)
  },

  // --- Contact ---------------------------------------------------------------
  phone: '07300 000 000',                 // TODO
  phoneHref: '+447300000000',             // TODO
  email: 'hello@offthetools.co.uk',       // TODO
  bookingUrl: '/contact',                 // TODO: Calendly/booking link if you have one
  hoursShort: 'Mon – Fri: 9:00 – 5:30',

  // --- Social ----------------------------------------------------------------
  instagram: 'https://www.instagram.com/',   // TODO
  facebook: '',                              // TODO
  youtube: '',                               // TODO
  linkedin: '',                              // TODO
  tiktok: '',                                // TODO

  // --- Imagery (drop files in /public/images and point here) -----------------
  heroImage: '',                          // cinematic hero bg (you, on a job, graded dark)
  storyImage: '',                         // you / your van / portrait for the story
  ctaImage: '',                           // background for the closing CTA band

  // --- Proof / numbers (use real ones) ---------------------------------------
  stats: [
    { num: '15+', label: 'Years in the trade' },          // TODO
    { num: '£1m+', label: 'Turnover built, first-hand' },  // TODO
    { num: '100%', label: 'Built by an electrician' },
    { num: '7-day', label: 'Website turnaround' },         // TODO
  ],
};

// =============================================================================
//  PAIN POINTS  (the heart of the marketing — what they're actually feeling)
// =============================================================================
export const pains = [
  {
    title: 'You ARE the business',
    text: 'Quoting at 9pm, invoicing at the weekend, every job depends on you. Take a week off and the money stops.',
  },
  {
    title: 'Your website is embarrassing',
    text: 'A free builder you knocked up years ago — or nothing at all. Meanwhile worse sparks with slick sites are winning the work.',
  },
  {
    title: 'Feast or famine leads',
    text: 'Rushed off your feet one month, dead quiet the next. No predictable pipeline, just word of mouth and hope.',
  },
  {
    title: 'You undercharge and overdeliver',
    text: 'You know your work is top quality, but you compete on price because nothing about your brand says premium.',
  },
  {
    title: 'Drowning in admin',
    text: 'Missed calls, chasing reviews, forgotten follow-ups. Leads leak out of a system held together with notes and memory.',
  },
  {
    title: 'No way out',
    text: 'You started this for freedom and more money. Instead you bought yourself a job you can never clock off from.',
  },
];

// =============================================================================
//  SERVICES  (what we actually do)
// =============================================================================
export const services = [
  {
    slug: 'websites',
    title: 'Premium Websites',
    short: 'A website that makes you look like the best spark in town — because you are.',
    long:
      'A fast, premium website designed to win higher-value work and make you the obvious choice. Built to convert visitors into booked jobs, optimised to be found on Google, and a brand you’re finally proud to send people to.',
    icon: 'globe',
  },
  {
    slug: 'branding',
    title: 'Branding & Identity',
    short: 'Look established, trusted and premium across everything.',
    long:
      'Logo, colours, van livery direction, social templates and a consistent identity that signals quality before you’ve said a word — so you can charge what you’re worth without flinching.',
    icon: 'spark',
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    short: 'A predictable flow of the right jobs — not price-shoppers.',
    long:
      'Google and social campaigns plus local SEO that put you in front of homeowners and businesses actively looking to hire. We turn feast-or-famine into a steady, qualified pipeline.',
    icon: 'target',
  },
  {
    slug: 'systems',
    title: 'Systems & Automation',
    short: 'Capture every lead and follow up automatically.',
    long:
      'A done-for-you system that catches missed calls, replies to enquiries instantly, books jobs, chases reviews and keeps your pipeline moving — without you touching your phone after 6pm.',
    icon: 'gears',
  },
  {
    slug: 'reviews',
    title: 'Reputation Engine',
    short: 'Turn happy customers into a stream of 5-star reviews.',
    long:
      'Automated review requests at the perfect moment, so your Google profile fills with the social proof that wins the next ten jobs. Your reputation working for you on autopilot.',
    icon: 'star',
  },
  {
    slug: 'coaching',
    title: 'Coaching & Mentorship',
    short: 'The roadmap to actually step off the tools.',
    long:
      'Once the foundations are in, I help you price properly, hire your first (or next) electrician, build the systems and finally work ON the business — from someone who’s done it in the real world.',
    icon: 'compass',
  },
];

// =============================================================================
//  PACKAGES  (named tiers, NO public prices — "Book a call")
// =============================================================================
export const packages = [
  {
    name: 'The Foundation',
    tagline: 'Look the part. Get found.',
    best: false,
    summary: 'For the spark who needs to look established and start winning better work.',
    features: [
      'Premium 4–5 page website',
      'Brand & logo essentials',
      'Google Business Profile setup',
      'Local SEO foundations',
      'Mobile-perfect & lightning fast',
      'Click-to-call & enquiry forms',
    ],
    cta: 'Book a call',
  },
  {
    name: 'The Lead Engine',
    tagline: 'Look the part. Get the calls.',
    best: true,
    summary: 'Our core offer: everything you need to generate and capture a steady flow of jobs.',
    features: [
      'Everything in The Foundation',
      'Lead generation (Google & social)',
      'Missed-call text-back & instant reply',
      'Booking & follow-up automation',
      'Automated 5-star review engine',
      'Lead dashboard & reporting',
    ],
    cta: 'Book a call',
  },
  {
    name: 'Off The Tools',
    tagline: 'Build a business that runs without you.',
    best: false,
    summary: 'The flagship: done-for-you online presence plus coaching and systems to step back.',
    features: [
      'Everything in The Lead Engine',
      '1:1 coaching & mentorship',
      'Pricing & profit overhaul',
      'Hiring & team roadmap',
      'Full back-office automation',
      'Priority support & quarterly reviews',
    ],
    cta: 'Book a call',
  },
];

// =============================================================================
//  STORY MILESTONES  (Jamie's journey — confirm/replace specifics)
// =============================================================================
export const story = [
  { year: 'Then', title: 'On the tools', text: 'Started as an apprentice, grafting long days and learning the trade inside out.' }, // TODO
  { year: 'The grind', title: 'Built a real business', text: 'Grew a successful electrical company in Leeds — and felt every pain point on this page first-hand.' }, // TODO
  { year: 'The shift', title: 'Cracked the systems', text: 'Learned marketing, websites and automation the hard (and expensive) way — and watched the business transform.' }, // TODO
  { year: 'Now', title: 'Helping other sparks', text: 'Off The Tools exists to give other electricians the unfair advantage I had to build from scratch.' },
];

// =============================================================================
//  FAQ  (rendered with FAQPage schema)
// =============================================================================
export const faqs = [
  { q: 'I’m an electrician, not a marketer — is this for me?', a: 'Exactly why it exists. Off The Tools is built by an electrician, for electricians. You stay on the tools (for now); we handle the website, online presence and systems.' },
  { q: 'How is this different from a normal web designer?', a: 'A web designer hands you a pretty website and disappears. We build the whole engine — brand, site, lead generation, follow-up and reviews — and we actually understand the electrical trade.' },
  { q: 'Why don’t you show prices?', a: 'Every electrician is at a different stage, so we tailor the package to where you are and where you want to be. Book a quick call and we’ll give you a straight, no-pressure number.' },
  { q: 'How quickly can I be live?', a: 'A premium website can typically be live within around 7 days once we have your details and photos. Lead generation and systems follow straight after.' },
  { q: 'Do I have to commit to coaching?', a: 'No. Most start with a website and online presence. Coaching and systems are there when you’re ready to genuinely step off the tools — never forced.' },
];
