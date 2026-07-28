// Stacked Out — the studio's factual universe.
//
// Same discipline as the client builds: every value is labelled, and nothing
// here is invented. The brand guide is explicit — "Fake testimonials, invented
// client counts, inflated numbers. Ever. Not once."
//
// VERIFIED  — stated by the founder or checkable on a live page
// NEEDED    — must render as a visible placeholder until supplied

export const studio = {
  name: 'Stacked Out',                       // VERIFIED. Two words. Never "Stackedout", never hyphenated.
  parent: 'A Stacked Out company',           // VERIFIED — brand guide cover line
  proposition: 'Websites for trades',        // VERIFIED — brand guide cover line

  // Who it is for. Narrowed by the founder to two trades, deliberately.
  audience: ['electricians', 'solar installers'],

  founder: {
    // VERIFIED — stated directly by the founder.
    yearsOnTools: 25,
    yearsSelfEmployed: 13,
    trade: 'electrician',
    name: '',                                // NEEDED
    photo: '',                               // NEEDED — real photo, not stock. Guide §6.

    // The frustration the whole business is built on. Founder's own framing.
    origin: 'marketing companies that did not understand the trade',
  },

  // PROOF. The founder has restricted this to two things, and I hold to it.
  proof: {
    // VERIFIED — the founder's own electrical business, live and ranking.
    ownSite: {
      url: 'https://wyelectrical.co.uk',
      label: 'WY Electrical',
      trade: 'Electrical contractor, West Yorkshire',
      // The claim states only what is checkable: he built it and it is his own
      // business. It deliberately does NOT say "ranked" — that needs the evidence
      // below, and until that arrives a ranking claim would be invented.
      claim: 'Built and run by me',
      // NEEDED — a checkable position, e.g. "map pack, top 3 for electrician Wakefield".
      rankingEvidence: '',
    },
    clientSites: [],                         // NEEDED — none yet. Do not invent one.
    testimonials: [],                        // NEEDED — none. The guide forbids inventing these.
  },

  // Commercials. The guide calls a real number the single biggest differentiator
  // against agencies who hide it — but the founder has not committed to one yet.
  pricing: {
    from: null,                              // NEEDED
    turnaround: null,                        // NEEDED — e.g. "live in a week"
  },

  contact: {
    email: 'enquiries@wyelectrical.co.uk',   // VERIFIED — founder's working address
    phone: '',                               // NEEDED
  },
};
