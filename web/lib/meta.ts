import type { Metadata } from "next";
import { OG_IMAGE_ALT, pageUrl } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = pageUrl(path);
  const ogImage = {
    url: image ?? "/og.jpg",
    width: 1200,
    height: 630,
    alt: imageAlt ?? OG_IMAGE_ALT,
  };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
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
