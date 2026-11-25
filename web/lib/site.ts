export const SITE_URL = "https://10pointstudios.com";

export const STUDIO_ID = `${SITE_URL}/#studio`;

export const STUDIO_EMAIL = "10pointstudios@protonmail.com";

/** Hidden FormSubmit CC. Not rendered as page text. */
export const CONTACT_CC = "restoredraritytcg@gmail.com";

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

export const AREA_SERVED = ["Conroe, TX", "The Woodlands, TX", "Houston, TX", "United States"] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": STUDIO_ID,
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
  areaServed: [...AREA_SERVED],
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

export const footerServices = [
  { name: "Web design", href: "/web-design" },
  { name: "App development", href: "/app-development" },
  { name: "Maintenance", href: "/website-maintenance" },
  { name: "Free Website Check", href: "/website-check" },
] as const;

/** Canonical / schema URL. Trailing slash on inner routes matches the static export. */
export function pageUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

export const CASE_STUDY_UTM = "utm_source=10pointstudios&utm_medium=referral&utm_campaign=case_study";

export function liveSiteHref(url: string, withUtm = false): string {
  if (!withUtm) return url;
  const [base, hash] = url.split("#");
  const joiner = base.includes("?") ? "&" : "?";
  return hash ? `${base}${joiner}${CASE_STUDY_UTM}#${hash}` : `${base}${joiner}${CASE_STUDY_UTM}`;
}

export function inquiryMailto(fields: {
  name: string;
  email: string;
  need: string;
  message: string;
  website?: string;
  authorized?: boolean;
}) {
  const subject = encodeURIComponent(
    fields.need === "A free Website Check"
      ? "Free Website Check request \u2014 10Point Studios"
      : "Project inquiry \u2014 10Point Studios",
  );
  const extra = [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Need: ${fields.need}`,
    fields.website?.trim() ? `Website: ${fields.website.trim()}` : "",
    fields.authorized
      ? "Authorization: I own this website or am authorized by its owner to request this check. Checked: yes"
      : "",
    "",
    fields.message.trim(),
  ]
    .filter((line, index, all) => line !== "" || all[index - 1] !== "")
    .join("\n");
  const body = encodeURIComponent(extra);
  const cc = encodeURIComponent(CONTACT_CC);
  return `mailto:${STUDIO_EMAIL}?cc=${cc}&subject=${subject}&body=${body}`;
}
