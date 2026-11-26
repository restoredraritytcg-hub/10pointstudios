/** Approved copy. Apostrophes match the site’s existing typography (U+2019). */

export const hero = {
  eyebrow: "10POINT STUDIOS",
  title: "Websites and apps, built to a 10.",
  subhead:
    "Enterprise-grade websites and apps at small-business prices, with design, build and managed maintenance under one roof.",
  primary: "Start a project",
  secondary: "See the work",
} as const;

export const capabilitiesIntro = {
  eyebrow: "What we can build",
  title: "Already running, ready to reuse.",
  intro:
    "These are capabilities already running on sites and apps we have built and still manage. If you can describe the job, we can almost certainly start from something that exists.",
} as const;

export const capabilities = [
  {
    title: "Managed maintenance after launch",
    body: "We don’t hand over a zip file and disappear. Updates, fixes, content changes and care for the sites and apps we build, with a single place to ask.",
    href: "/website-maintenance",
  },
  {
    title: "Service intake that runs the shop",
    body: "Multi-item request forms with photos, service choices, and hand-off options. Customers start a job online; you confirm the work before anything is shipped.",
    href: "/web-design",
  },
  {
    title: "Quote calculators you control",
    body: "Live totals from service tiers, add-ons, and referral codes. The number is a starting point you can still confirm with the customer.",
    href: "/web-design",
  },
  {
    title: "Where is my order? pages",
    body: "Customers look up a reference number or scan a receipt and see the stage, notes, and next step without calling the shop.",
    href: "/web-design",
  },
  {
    title: "Scan-powered listing and intake tools",
    body: "A crooked phone photo or scanner page comes out straightened, measured for centering, and cut into the close-ups a listing or a workbench needs.",
    href: "/app-development",
  },
  {
    title: "Counter apps and staff portals",
    body: "An installable iPad check-in, a staff dashboard for orders and payouts, and a private admin for photos, notes, and status.",
    href: "/app-development",
  },
  {
    title: "Shop sites that stay current",
    body: "Hours, open-now status, maps, promotions, and homepage photos you can update yourself, plus the local SEO a storefront needs.",
    href: "/web-design",
  },
  {
    title: "Accounts, plans, and installable web apps",
    body: "Sign-in, subscription plans, and a home-screen app so a tool feels like a product, not a brochure.",
    href: "/app-development",
  },
  {
    title: "Galleries, shows, and reviews",
    body: "Before-and-after work, upcoming event calendars, and a review form that only goes live after you approve it.",
    href: "/web-design",
  },
] as const;

export const workIntro = {
  eyebrow: "Work",
  title: "Live work, and the problem each one solves.",
  intro: "Sites and apps from the studio, still running and still maintained.",
  close: "Same studio, same care. Different brands, built to a 10",
} as const;

export const work = [
  {
    kind: "App",
    name: "ScanStationIQ",
    href: "https://scanstationiq.com",
    url: "scanstationiq.com",
    image: "/projects/scanstationiq-desktop.webp",
    alt: "ScanStationIQ listing app, built by 10Point Studios",
    width: 1440,
    height: 900,
    featured: true,
    slug: "scanstationiq",
    problem: "Turning a card photo into an eBay listing took too many manual steps.",
    built:
      "Accounts and subscription plans, phone or scanner intake, automatic straightening and centering, listing-ready photo packs with titles and descriptions, and an installable web app.",
  },
  {
    kind: "Website",
    name: "PH Restoration Labs",
    href: "https://phrestorationlab.com",
    url: "phrestorationlab.com",
    image: "/projects/ph-restoration-desktop.webp",
    alt: "PH Restoration Labs website",
    width: 1440,
    height: 828,
    featured: false,
    slug: "ph-restoration-labs",
    problem: "A Houston card-restoration shop needed customers to start, price and track jobs online.",
    built:
      "Online submissions with photo uploads, a per-card quote calculator, reference-number tracking, a show calendar, a work gallery and a moderated review form.",
  },
  {
    kind: "Website",
    name: "RipperDoc TCG",
    href: "https://theripperdoctcg.com",
    url: "theripperdoctcg.com",
    image: "/projects/ripper-doc-desktop.webp",
    alt: "RipperDoc TCG website",
    width: 1440,
    height: 852,
    featured: false,
    slug: "ripperdoc-tcg",
    problem: "A restoration brand needed full intake and tracking without a custom build from scratch.",
    built:
      "A branded site on the studio’s shared service platform: intake and tracking, turnaround choices, add-on services, delivery options, a Google Sheet CMS and reviews.",
  },
  {
    kind: "Website + apps",
    name: "PBG Cards & Collectibles HTX",
    href: "https://pbgcardshtx.com",
    url: "pbgcardshtx.com",
    image: "/projects/pbg-desktop.webp",
    alt: "PBG Cards & Collectibles HTX website",
    width: 1440,
    height: 900,
    featured: false,
    slug: "pbg-cards-htx",
    problem:
      "A busy card shop needed its website, counter intake and order updates to work as one system.",
    built:
      "A shop website, QR-code order tracking, a staff portal with a built-in site editor, and an iPad intake app.",
  },
  {
    kind: "Website + portal",
    name: "Restored Rarity TCG",
    href: "https://restoredraritytcg.com",
    url: "restoredraritytcg.com",
    image: "/projects/restored-rarity-desktop.webp",
    alt: "Restored Rarity TCG website",
    width: 1440,
    height: 870,
    featured: false,
    slug: "restored-rarity",
    problem: "A full-service restoration business needed sales, intake and operations in one place.",
    built:
      "Before-and-after galleries, a quote calculator, a live centering calculator, online submit-and-track, a customer portal, an admin dashboard and a scan station.",
  },
] as const;

export const process = {
  eyebrow: "Process",
  title: "Five points on the compass.",
  intro: "A straight path from the first conversation to a product we keep in shape.",
  steps: [
    {
      title: "Discover",
      body: "We listen, look at what you have, and agree what “a 10” means for this project.",
    },
    {
      title: "Design",
      body: "Structure, interface, and a visual system tight enough to build from.",
    },
    {
      title: "Build",
      body: "The site or app, produced carefully and checked before anyone else sees it.",
    },
    {
      title: "Launch",
      body: "Go live with hosting, domain, and a handoff that isn’t a dump of files.",
    },
    {
      title: "Guide",
      body: "Managed maintenance after launch: updates, care, and a single place to ask.",
    },
  ],
} as const;

export const about = {
  eyebrow: "About",
  title: "Who builds it",
  body: "10Point Studios is led by Scott Shipley. Before starting the studio, Scott built apps for Meta, Disney and Under Armour, and ran major projects for Standard Chartered Bank, Nike and Blue Cross Blue Shield. That work taught him what enterprise-grade delivery takes: clear scope, careful builds and launches that hold up. 10Point grew out of Restored Rarity TCG, the card-restoration business Scott built and still runs, and brings that same standard to every client. You get big-company discipline from a studio small enough that you work directly with the person building it.",
} as const;

export const websiteCheckSlot = {
  eyebrow: "Website Check",
  title: "How does your website score?",
  body: "Get a Free Website Check: a 1-page report with your score out of 10 and your top 3 fixes, delivered within 2 business days. Want the full picture? The True North Audit covers clarity, UX, performance, SEO and 3 local competitors, and the fee is 100% credited toward your build.",
  button: "Get my free check",
  link: "Explore the True North Audit →",
} as const;

export const websiteCheckBanner = {
  label: "New:",
  body: "How does your website score? Get a free 1-page check with your top 3 fixes within 2 business days.",
  button: "Start free",
} as const;

export const contactCopy = {
  eyebrow: "Contact",
  title: "Tell us what you want to build.",
  intro: "Share a little about the project. We’ll scope it with you.",
  needs: [
    "A website",
    "An app",
    "Managed maintenance",
    "A free Website Check",
    "Not sure yet",
  ],
  help: "We reply within 1 business day. Your details are only used to reply to you.",
  success: "Thanks, your message is in. We’ll reply within 1 business day.",
  error:
    "That didn’t send. Try again, or email us at 10pointstudios@protonmail.com.",
  authorization:
    "I own this website or am authorized by its owner to request this check.",
  authorizationError:
    "Please confirm you own this website or are authorized to request this check.",
} as const;

export const cta = {
  title: "Tell us what you want to build.",
  body: "We’ll scope it with you.",
  button: "Start a project",
} as const;
