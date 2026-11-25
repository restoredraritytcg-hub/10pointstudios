import { about, capabilities, process, work } from "@/lib/content";

export type CaseSlug =
  | "ph-restoration-labs"
  | "ripperdoc-tcg"
  | "pbg-cards-htx"
  | "scanstationiq"
  | "restored-rarity";

function workBySlug(slug: CaseSlug) {
  const item = work.find((entry) => entry.slug === slug);
  if (!item) throw new Error(`Missing work item: ${slug}`);
  return item;
}

export const servicePages = {
  "web-design": {
    path: "/web-design",
    title: "Web Design in Conroe, TX | 10Point Studios",
    description:
      "Custom websites for businesses in Conroe, The Woodlands and Houston: clear, fast, mobile-first and built to run the business.",
    h1: "Web design for businesses that need their site to work",
    serviceType: "Web design",
    included: [
      { title: "Custom design", body: "Clear, fast, mobile-first websites built to run the business." },
      { title: "Intake forms", body: capabilities[1].body },
      { title: "Quote calculators", body: capabilities[2].body },
      { title: "Order tracking", body: capabilities[3].body },
    ],
    workSlugs: ["ph-restoration-labs", "ripperdoc-tcg", "restored-rarity"] as const,
    area: "Serving Conroe, The Woodlands and Houston.",
  },
  "app-development": {
    path: "/app-development",
    title: "Custom Web App Development | 10Point Studios",
    description:
      "Web apps with accounts, subscriptions, customer portals and staff tools, built around how your business actually runs.",
    h1: "Apps built around how your business works",
    serviceType: "Custom web app development",
    workSlugs: ["scanstationiq", "pbg-cards-htx"] as const,
  },
  "website-maintenance": {
    path: "/website-maintenance",
    title: "Managed Website Maintenance | 10Point Studios",
    description:
      "Updates, fixes, content changes and care after launch, with one place to ask. Managed maintenance for the sites and apps we build.",
    h1: "Managed maintenance after launch",
    serviceType: "Managed website maintenance",
    covered: capabilities[0].body,
    reply: "We reply within 1 business day.",
    workSlugs: ["pbg-cards-htx", "restored-rarity"] as const,
  },
  "website-check": {
    path: "/website-check",
    title: "Free Website Check & True North Audit | 10Point Studios",
    description:
      "Get a free 1-page website check with a score out of 10 and your top 3 fixes within 2 business days. Want more? The True North Audit goes deeper.",
    h1: "Find out where your website really stands, and where it should go next.",
    serviceType: "Website check and True North Audit",
  },
} as const;

export const workIndex = {
  path: "/work",
  title: "Work: Websites & Apps We've Built | 10Point Studios",
  description:
    "Live websites and apps from 10Point Studios, and the problem each one solves: intake and tracking sites, shop platforms and a card-listing app.",
  h1: "Live work, and the problem each one solves.",
} as const;

export const caseStudies: Record<
  CaseSlug,
  {
    path: string;
    title: string;
    description: string;
    h1: string;
    client: string;
    displayNote?: string;
    problem: string;
    problemConfirm?: string;
    built: string;
    builtExtra?: string;
    platformNote?: string;
    framing?: string;
    quote?: string;
    results?: string;
    launchDate?: string;
    news?: { text: string };
    cta: { href: string; label: string }[];
    services: { href: string; label: string }[];
    sibling: { href: string; label: string };
    about: { type: "Organization" | "Store" | "SoftwareApplication"; name: string; url: string };
  }
> = {
  "ph-restoration-labs": {
    path: "/work/ph-restoration-labs",
    title: "PH Restoration Labs Website Case Study | 10Point Studios",
    description:
      "How 10Point Studios built PH Restoration Labs' site: online card submissions with photos, per-card quotes, reference-number tracking, shows and reviews.",
    h1: "PH Restoration Labs: online intake and tracking for a Houston card-restoration shop",
    client:
      "PH Restoration Labs, the restoration side of PH Collectibles HTX, Houston (as stated on their site).",
    problem: workBySlug("ph-restoration-labs").problem,
    built: `${workBySlug("ph-restoration-labs").built.slice(0, -1)}, and a staff intake and scan station.`,
    cta: [{ href: "/website-check", label: "Get my free Website Check" }],
    services: [
      { href: "/web-design", label: "Web design" },
      { href: "/website-maintenance", label: "Managed maintenance" },
    ],
    sibling: { href: "/work/ripperdoc-tcg", label: "RipperDoc TCG" },
    about: { type: "Organization", name: "PH Restoration Labs", url: "https://phrestorationlab.com" },
  },
  "ripperdoc-tcg": {
    path: "/work/ripperdoc-tcg",
    title: "RipperDoc TCG Website Case Study | 10Point Studios",
    description:
      "How 10Point Studios launched RipperDoc TCG on its shared service platform: intake and tracking, turnaround choices, add-ons, delivery options and reviews.",
    h1: "RipperDoc TCG: a full restoration storefront without a from-scratch build",
    client: "RipperDoc TCG, a trading card cleaning, repair and restoration brand.",
    problem: workBySlug("ripperdoc-tcg").problem,
    built: workBySlug("ripperdoc-tcg").built,
    platformNote: "Already running, ready to reuse.",
    cta: [{ href: "/website-check", label: "Get my free Website Check" }],
    services: [{ href: "/web-design", label: "Web design" }],
    sibling: { href: "/work/ph-restoration-labs", label: "PH Restoration Labs" },
    about: { type: "Organization", name: "RipperDoc TCG", url: "https://theripperdoctcg.com" },
  },
  "pbg-cards-htx": {
    path: "/work/pbg-cards-htx",
    title: "PBG Cards & Collectibles Website & Apps | 10Point Studios",
    description:
      "How 10Point Studios built PBG Cards & Collectibles HTX a shop site, QR order tracking, a staff portal and an iPad intake app for its Spring, TX store.",
    h1: "PBG Cards & Collectibles HTX: one system for the website, the counter and order tracking",
    client:
      "PBG Cards & Collectibles HTX, a sports card and Pok\u00e9mon shop at 25170 I-45 N, Spring, TX (as stated on their site).",
    problem:
      "A busy card shop needed its website, counter intake and customers\u2019 order updates to work as one system.",
    built:
      "The public website; a private order-status page customers reach from the QR code on their receipt; a staff portal for orders, grading stages, pickup clock and payouts, with a Website editor for hours, announcements, homepage, promos, events, shop photos and the Instagram grid; and an iPad intake app.",
    news: {
      text: "Community Impact covered PBG\u2019s opening (\u201cPBG Cards & Collectibles opens near The Woodlands\u201d).",
    },
    cta: [
      { href: "/website-check", label: "Get my free Website Check" },
      { href: "/app-development", label: "App development" },
    ],
    services: [
      { href: "/app-development", label: "App development" },
      { href: "/web-design", label: "Web design" },
      { href: "/website-maintenance", label: "Managed maintenance" },
    ],
    sibling: { href: "/work/scanstationiq", label: "ScanStationIQ" },
    about: { type: "Store", name: "PBG Cards & Collectibles HTX", url: "https://pbgcardshtx.com" },
  },
  scanstationiq: {
    path: "/work/scanstationiq",
    title: "ScanStationIQ App Case Study | 10Point Studios",
    description:
      "How 10Point Studios built ScanStationIQ: accounts and plans, phone or scanner intake, auto-straightening and centering, and eBay-ready photo packs.",
    h1: "ScanStationIQ: from a crooked card photo to an eBay-ready listing",
    client: "ScanStationIQ is a studio-built product.",
    problem: workBySlug("scanstationiq").problem,
    built: workBySlug("scanstationiq").built,
    cta: [{ href: "/app-development", label: "App development" }],
    services: [{ href: "/app-development", label: "App development" }],
    sibling: { href: "/work/pbg-cards-htx", label: "PBG Cards & Collectibles HTX" },
    about: { type: "SoftwareApplication", name: "ScanStationIQ", url: "https://scanstationiq.com" },
  },
  "restored-rarity": {
    path: "/work/restored-rarity",
    title: "Restored Rarity TCG Website & Portal | 10Point Studios",
    description:
      "How 10Point Studios built Restored Rarity\u2019s site and portal: galleries, quote and centering calculators, submit-and-track and an admin dashboard.",
    h1: "Restored Rarity TCG: sales, intake and operations in one place",
    client:
      "Restored Rarity TCG is the card-restoration business Scott built and still runs, and a site the studio built and still maintains for an active business.",
    problem: workBySlug("restored-rarity").problem,
    built: workBySlug("restored-rarity").built,
    cta: [{ href: "/web-design", label: "Web design" }],
    services: [{ href: "/web-design", label: "Web design" }],
    sibling: { href: "/work/ph-restoration-labs", label: "PH Restoration Labs" },
    about: { type: "Organization", name: "Restored Rarity TCG", url: "https://restoredraritytcg.com" },
  },
};

export const trueNorth = {
  eyebrow: "The True North Audit by 10Point Studios",
  subhead:
    "Start with a Free Website Check: one page, one score out of 10, your top 3 fixes, delivered within 2 business days. When you want the full picture, the True North Audit shows how clear and intuitive your site is, how it performs, and how it compares with your competitors. The fee is 100% credited toward your build.",
  primary: "Get my Free Website Check",
  noObligation: "Free, with no obligation.",
  problemTitle: "Visitors decide in seconds. Most websites don\u2019t give them a reason to stay.",
  problems: [
    "People can\u2019t tell right away what you do, who it\u2019s for, or what to do next.",
    "Navigation that makes sense to you confuses everyone else.",
    "Pages that are slow or awkward on a phone.",
    "Competitors nearby who look sharper and are easier to choose.",
    "Basic security housekeeping, like SSL and an up-to-date platform, that may not have been checked since launch.",
  ],
  problemClose: "You don\u2019t need more guesses. You need a clear read on where you stand and a plan for where you\u2019re going.",
  columns: ["Free Website Check", "True North Audit"] as const,
  rows: [
    { label: "Best for", free: "A fast, honest snapshot", audit: "The full picture before you invest in a new site" },
    {
      label: "Cost",
      free: "Free, no obligation",
      audit: "One-time fee, 100% credited toward your build*",
    },
    {
      label: "Clarity & UX",
      free: "5-second snapshot: is it clear what you do, who it\u2019s for and what to do next? Is navigation obvious?",
      audit:
        "Lead section: full UX/UI assessment covering navigation, layout, visual hierarchy, mobile usability and accessibility basics, plus message clarity: value proposition, audience, CTAs and trust signals",
    },
    { label: "Speed & mobile", free: "Speed and mobile score", audit: "In-depth performance review" },
    {
      label: "SEO",
      free: "Basics: page titles, Google Business Profile, and whether you show up when people search your business name",
      audit: "Full SEO review",
    },
    { label: "Content & conversion", free: "Not included", audit: "Content and conversion review: what moves visitors to act, and what stops them" },
    {
      label: "Competitors",
      free: "Not included",
      audit: "3 local competitors, picked together with you, compared side by side, including UX and messaging",
    },
    {
      label: "Security",
      free: "Passive basics from public information: SSL certificate, visible platform version, and security headers",
      audit:
        "Passive, non-invasive review of your site\u2019s public-facing security settings, with your written authorization. Not a penetration test.",
    },
    {
      label: "You receive",
      free: "1-page PDF with a score out of 10 and your top 3 fixes",
      audit: "Full report, prioritized action plan and a 30-minute walkthrough call",
    },
    { label: "Delivered", free: "Within 2 business days", audit: "Within 7 business days" },
  ],
  creditNote:
    "*Credited in full toward a 10Point Studios website or app build signed within 60 days of audit delivery.",
  competitorNote: "Competitor comparisons use public pages only and never include a security review.",
  howItWorksTitle: "How it works",
  steps: [
    "Request your Free Website Check. Send us your website and a little about your business.",
    "Get your 1-page report. Within 2 business days you receive your score out of 10 and your top 3 fixes.",
    "Go deeper with the True North Audit. Choose 3 local competitors together with us, and sign a short authorization for the passive security review.",
    "Get your roadmap. Within 7 business days you receive the full report and a prioritized action plan, and we walk you through both on a 30-minute call.",
    "Build when you\u2019re ready. Sign a 10Point website or app build within 60 days of audit delivery and your audit fee is 100% credited toward it.",
  ],
  creditTitle: "Your audit counts toward your build",
  creditLead: "The True North Audit isn\u2019t an extra cost. It\u2019s the first step of your build.",
  creditBody:
    "The audit is a one-time fee. If you sign a 10Point Studios website or app build within 60 days of audit delivery, we credit the full fee toward the total cost of your project. Your build starts from a plan grounded in research, not a blank page.",
  whoTitle: "Who it\u2019s for",
  who: [
    "Business owners whose website feels dated, confusing or slow.",
    "Teams planning a redesign who want facts before setting a budget.",
    "Local businesses losing ground to nearby competitors online.",
    "Anyone who isn\u2019t sure their site clearly explains what they do and why to choose them.",
  ],
  whyTitle: "Why 10Point Studios",
  why: "10Point Studios designs and builds modern websites and apps, and keeps them running with managed maintenance. Founder Scott Shipley has built apps for Meta, Disney and Under Armour, and has run major projects for Standard Chartered Bank, Nike and Blue Cross Blue Shield. Every audit gets the same enterprise-level standard: clear, intuitive and built to a 10.",
  where: "Based in Conroe, Texas, working with clients remotely. We reply within 1 business day at 10pointstudios@protonmail.com.",
  faqs: [
    {
      q: "Is the free check really free?",
      a: "Yes. The Free Website Check costs nothing and comes with no obligation. You get a 1-page PDF with your score and top 3 fixes, and it\u2019s yours to keep.",
    },
    {
      q: "What\u2019s the difference between the free check and the True North Audit?",
      a: "The free check is a quick snapshot: one score, your top 3 fixes. The True North Audit goes deep. It starts with how clear and intuitive your site is, covers content, performance, SEO, conversion and security, and benchmarks you against 3 local competitors. It ends with a prioritized action plan and a walkthrough call.",
    },
    {
      q: "Why does the audit focus so much on clarity and UX?",
      a: "Because that\u2019s where most sites lose people. If visitors can\u2019t quickly tell what you do, who it\u2019s for and what to do next, nothing else matters much. So it\u2019s the first thing we look at.",
    },
    {
      q: "Will the security review affect my website?",
      a: "It\u2019s designed not to. The review is passive and non-invasive: we only look at what your site already shows to any visitor, such as its SSL certificate, platform versions and security headers. We don\u2019t log in, submit forms, scan ports, or attempt to break in, and the True North review happens only with your written authorization. It isn\u2019t a penetration test or a full security audit, so it can\u2019t guarantee your site is secure. It\u2019s a check of the basics with clear next steps.",
    },
    {
      q: "How do you choose the competitors?",
      a: "Together. We agree on 3 local competitors with you, so the comparison reflects who your customers are actually choosing between.",
    },
    {
      q: "How does the credit work?",
      a: "The True North Audit is a one-time fee. If you sign a 10Point Studios website or app build within 60 days of audit delivery, the full fee is credited toward the total cost of your project.",
    },
    {
      q: "Do I have to build with you afterward?",
      a: "No. Your report and action plan are yours to keep and act on however you choose.",
    },
  ],
  competitorFaqNote: "Competitor comparisons use public pages only and never include a security review.",
  finalTitle: "Every good build starts with knowing where you stand.",
  finalBody: "Get your Free Website Check: one page, one score, your top 3 fixes, within 2 business days.",
  questions: "Questions? Email 10pointstudios@protonmail.com. We reply within 1 business day.",
  acknowledgment:
    "By ordering, you confirm that you own or are authorized to approve review of the website(s) listed, and you authorize 10Point Studios to perform a passive, non-invasive review of their publicly visible content, performance and security settings. Findings are a point-in-time snapshot and recommendations, not a guarantee of security, rankings or results. We keep your report confidential.",
  formIntro: "Send us your website and a little about your business.",
};

export const processSteps = process.steps;
export const founderLine = about.body;
