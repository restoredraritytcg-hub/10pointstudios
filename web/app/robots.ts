import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Source tree (served until Pages deploys from the Actions artifact),
      // the RSC payload for the home page, and the 404 document.
      disallow: ["/web/", "/index.txt", "/404.html", "/404/"],
    },
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
