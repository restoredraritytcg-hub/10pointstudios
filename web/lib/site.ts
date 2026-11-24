export const SITE_URL = "https://10pointstudios.com";

export const STUDIO_EMAIL = "10pointstudios@protonmail.com";

/** Baked in at build time from NEXT_PUBLIC_CONTACT_ENDPOINT. Public URL, not a secret. */
export const CONTACT_ENDPOINT = (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "").trim();

export const PAGE_TITLE =
  "10Point Studios | Website & App Development · Conroe & Houston, TX";

export const META_DESCRIPTION =
  "10Point Studios designs, builds and maintains websites and apps for businesses: intake forms, quote calculators, order tracking, customer portals and managed care after launch. Built to a 10.";

export const SOCIAL_TITLE = "10Point Studios | Websites and apps, built to a 10.";

export const SOCIAL_DESCRIPTION =
  "Design, build and managed maintenance under one roof, for businesses that need their site to run the business.";

export const OG_IMAGE_ALT = "10Point Studios. Built to a 10.";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "10Point Studios",
  url: SITE_URL,
  slogan: "Built to a 10.",
  description: "Website and app design, development and managed maintenance for businesses.",
  founder: { "@type": "Person", name: "Scott Shipley" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Conroe",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: ["Conroe, TX", "The Woodlands, TX", "Houston, TX", "United States"],
  email: STUDIO_EMAIL,
  sameAs: ["https://scanstationiq.com", "https://restoredraritytcg.com"],
} as const;

export const footerProjects = [
  {
    name: "ScanStationIQ",
    href: "https://scanstationiq.com/?utm_source=10pointstudios&utm_medium=referral&utm_campaign=footer",
  },
  {
    name: "Restored Rarity TCG",
    href: "https://restoredraritytcg.com/?utm_source=10pointstudios&utm_medium=referral&utm_campaign=footer",
  },
] as const;

export function inquiryMailto(fields: {
  name: string;
  email: string;
  need: string;
  message: string;
}) {
  const subject = encodeURIComponent("Project inquiry — 10Point Studios");
  const body = encodeURIComponent(
    `Name: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\nNeed: ${fields.need}\n\n${fields.message.trim()}`,
  );
  return `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`;
}
