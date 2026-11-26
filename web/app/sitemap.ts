import type { MetadataRoute } from "next";
import { caseStudies, servicePages, workIndex } from "@/lib/pages";
import { pageUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  servicePages["web-design"].path,
  servicePages["app-development"].path,
  servicePages["website-maintenance"].path,
  servicePages["website-check"].path,
  workIndex.path,
  ...Object.values(caseStudies).map((item) => item.path),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path, index) => ({
    url: pageUrl(path),
    lastModified: "2026-11-25",
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
