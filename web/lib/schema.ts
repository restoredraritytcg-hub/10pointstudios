import { AREA_SERVED, SITE_URL, STUDIO_ID, pageUrl } from "@/lib/site";

function assetUrl(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

type Crumb = { name: string; path: string };

export function breadcrumbList(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function serviceGraph({
  serviceType,
  path,
  name,
  crumbs,
  faq,
}: {
  serviceType: string;
  path: string;
  name: string;
  crumbs: Crumb[];
  faq?: readonly { q: string; a: string }[];
}) {
  const graph: unknown[] = [
    {
      "@type": "Service",
      serviceType,
      name,
      url: pageUrl(path),
      provider: { "@id": STUDIO_ID },
      areaServed: [...AREA_SERVED],
    },
    breadcrumbList(crumbs),
  ];
  if (faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function collectionGraph(path: string, name: string, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name,
        url: pageUrl(path),
      },
      breadcrumbList(crumbs),
    ],
  };
}

export function articleGraph({
  headline,
  path,
  image,
  about,
  crumbs,
}: {
  headline: string;
  path: string;
  image: string;
  about: { type: string; name: string; url: string };
  crumbs: Crumb[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline,
        image: assetUrl(image),
        author: { "@id": STUDIO_ID },
        publisher: { "@id": STUDIO_ID },
        mainEntityOfPage: pageUrl(path),
        about: {
          "@type": about.type,
          name: about.name,
          url: about.url,
        },
      },
      breadcrumbList(crumbs),
    ],
  };
}
