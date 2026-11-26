import { BrowserShot } from "@/components/BrowserShot";
import { work } from "@/lib/content";
import type { CaseSlug } from "@/lib/pages";
import { caseStudies } from "@/lib/pages";
import { liveSiteHref } from "@/lib/site";
import type { ReactNode } from "react";

export function Breadcrumbs({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index < items.length - 1 ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
  crumbs,
}: {
  kicker: string;
  title: string;
  intro?: string;
  crumbs: { href: string; label: string }[];
}) {
  return (
    <section className="page-hero theme-dark">
      <div className="atmosphere" aria-hidden="true">
        <span className="glow glow-a" />
        <span className="rose rose-section" />
      </div>
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {intro ? <p className="lede">{intro}</p> : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  dark = false,
  id,
}: {
  children: ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section className={dark ? "section theme-dark" : "section"} id={id}>
      <div className="wrap prose-wrap">{children}</div>
    </section>
  );
}

export function WorkTeasers({ slugs }: { slugs: readonly string[] }) {
  const items = slugs
    .map((slug) => work.find((entry) => entry.slug === slug))
    .filter((entry): entry is (typeof work)[number] => Boolean(entry));
  return (
    <div className="work-grid teaser-grid">
      {items.map((item) => (
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
  );
}

export function CaseCtas({
  study,
}: {
  study: (typeof caseStudies)[CaseSlug];
}) {
  return (
    <div className="case-links reveal">
      {study.cta.map((item) => (
        <a className="btn btn-accent btn-lg" href={item.href} key={item.href + item.label}>
          {item.label}
        </a>
      ))}
      {study.services.map((item) => (
        <a className="btn btn-ghost" href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
      <a className="btn btn-ghost" href={study.sibling.href}>
        {study.sibling.label}
      </a>
    </div>
  );
}

export function LiveLink({ href, label, utm = false }: { href: string; label: string; utm?: boolean }) {
  return (
    <a className="work-url" href={liveSiteHref(href, utm)} target="_blank" rel="noopener noreferrer">
      {label} <span className="arrow">{"\u2192"}</span>
    </a>
  );
}


export function CaseStudyView({ slug }: { slug: CaseSlug }) {
  const study = caseStudies[slug];
  const item = work.find((entry) => entry.slug === slug);
  if (!item) return null;
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: study.path, label: item.name },
  ];
  const utm = slug === "scanstationiq" || slug === "restored-rarity";
  return (
    <>
      <PageHero kicker="Case study" title={study.h1} crumbs={crumbs} />
      {item.image ? (
        <Section dark>
          <BrowserShot url={item.url} src={item.image} alt={item.alt} width={item.width} height={item.height} />
        </Section>
      ) : null}
      <Section>
        <h2>The client</h2>
        <p>{study.client}</p>
        <LiveLink href={item.href} label={item.url} utm={utm} />
        <h2>The problem</h2>
        <p>{study.problem}</p>
        <h2>What we built</h2>
        <p>{study.built}</p>
        {study.platformNote ? (
          <>
            <h2>Why the shared platform matters</h2>
            <p>{study.platformNote}</p>
          </>
        ) : null}
        {study.news ? (
          <>
            <h2>In the news</h2>
            <p>{study.news.text}</p>
          </>
        ) : null}
        {study.results ? (
          <>
            <h2>Results</h2>
            <p>{study.results}</p>
          </>
        ) : null}
        {study.quote ? (
          <>
            <h2>Client quote</h2>
            <p>{study.quote}</p>
          </>
        ) : null}
        {study.launchDate ? (
          <>
            <h2>Launch date</h2>
            <p>{study.launchDate}</p>
          </>
        ) : null}
        <CaseCtas study={study} />
      </Section>
    </>
  );
}
