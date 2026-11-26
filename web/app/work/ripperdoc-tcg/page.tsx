import { CaseStudyView } from "@/components/InnerPages";
import { PageShell } from "@/components/SiteChrome";
import { work } from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import { caseStudies, caseStudyPublished } from "@/lib/pages";
import { articleGraph } from "@/lib/schema";

const slug = "ripperdoc-tcg" as const;
const study = caseStudies[slug];
const item = work.find((entry) => entry.slug === slug)!;

export const metadata = pageMeta({
  title: study.title,
  description: study.description,
  path: study.path,
  image: item.image,
  imageAlt: item.alt,
  imageWidth: item.width,
  imageHeight: item.height,
  type: "article",
  publishedTime: caseStudyPublished[slug],
});

export default function Page() {
  return (
    <PageShell
      jsonLd={articleGraph({
        headline: study.h1,
        path: study.path,
        image: item.image,
        about: study.about,
        datePublished: caseStudyPublished[slug],
        crumbs: [
          { name: "Home", path: "/" },
          { name: "Work", path: "/work/" },
          { name: item.name, path: study.path },
        ],
      })}
    >
      <CaseStudyView slug={slug} />
    </PageShell>
  );
}
