import { BrowserShot } from "@/components/BrowserShot";
import { PageShell } from "@/components/SiteChrome";
import { PageHero, Section } from "@/components/InnerPages";
import { work, workIntro } from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import { workIndex } from "@/lib/pages";
import { collectionGraph } from "@/lib/schema";

export const metadata = pageMeta({
  title: workIndex.title,
  description: workIndex.description,
  path: workIndex.path,
});

export default function WorkIndexPage() {
  return (
    <PageShell
      jsonLd={collectionGraph(workIndex.path, workIndex.h1, [
        { name: "Home", path: "/" },
        { name: "Work", path: workIndex.path },
      ])}
    >
      <PageHero kicker={workIntro.eyebrow} title={workIndex.h1} intro={workIntro.intro} crumbs={[
        { href: "/", label: "Home" },
        { href: "/work", label: "Work" },
      ]} />
      <Section dark>
        <div className="work-grid">
          {work.map((item) => (
            <article className="work-card glass-dark reveal" key={item.slug}>
              <BrowserShot url={item.url} src={item.image} alt={item.alt} width={item.width} height={item.height} />
              <div className="work-meta">
                <span className="work-kind">{item.kind}</span>
                <h3>{item.name}</h3>
                <p className="work-point">
                  <span className="work-label">Problem</span>
                  {item.problem}
                </p>
                <a className="work-url" href={`/work/${item.slug}`}>
                  Read the case study <span className="arrow">{"\u2192"}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
