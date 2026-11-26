import type { Metadata } from "next";
import { OG_IMAGE_ALT, pageUrl } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  /** Real pixel size of `image`. Defaults to the 1200x630 og.jpg. */
  imageWidth?: number;
  imageHeight?: number;
  /** Case studies are articles; everything else is a website page. */
  type?: "website" | "article";
  /** ISO date. Only pass a real date (first commit of the page). */
  publishedTime?: string;
}): Metadata {
  const url = pageUrl(path);
  const ogImage = {
    url: image ?? "/og.jpg",
    width: image ? (imageWidth ?? 1200) : 1200,
    height: image ? (imageHeight ?? 630) : 630,
    alt: imageAlt ?? OG_IMAGE_ALT,
  };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph:
      type === "article"
        ? {
            title,
            description,
            url,
            siteName: "10Point Studios",
            locale: "en_US",
            type: "article",
            ...(publishedTime ? { publishedTime } : {}),
            images: [ogImage],
          }
        : {
            title,
            description,
            url,
            siteName: "10Point Studios",
            locale: "en_US",
            type: "website",
            images: [ogImage],
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? "/og.jpg"],
    },
  };
}
