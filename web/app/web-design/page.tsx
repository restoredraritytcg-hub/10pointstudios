import { PageShell } from "@/components/SiteChrome";
import { PageHero, Section, WorkTeasers } from "@/components/InnerPages";
import { pageMeta } from "@/lib/meta";
import { process } from "@/lib/content";
import { servicePages } from "@/lib/pages";
import { serviceGraph } from "@/lib/schema";

const page = servicePages["web-design"];

export const metadata = pageMeta({
  title: page.title,
  description: page.description,
  path: page.path,
});

const crumbs = [
  { href: "/", label: "Home" },
  { href: page.path, label: "Web design" },
];

export default function WebDesignPage() {
  return (
    <PageShell
      jsonLd={serviceGraph({
        serviceType: page.serviceType,
        path: page.path,
        name: page.h1,
        crumbs: [
          { name: "Home", path: "/" },
          { name: "Web design", path: page.path },
        ],
        faq: page.faqs,
      })}
    >
      <PageHero kicker="Web design" title={page.h1} intro={page.intro} crumbs={crumbs} />
      <Section>
        <h2>{page.valuePoint.title}</h2>
        <p>{page.valuePoint.body}</p>
      </Section>
      <Section>
        <h2>What{"\u2019"}s included</h2>
        <div className="cards four">
          {page.included.map((item) => (
            <article className="card glass reveal" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <div className="section-head reveal">
          <p className="kicker">{process.eyebrow}</p>
          <h2>{process.title}</h2>
          <p className="intro">{process.intro}</p>
        </div>
        <ol className="steps">
          {process.steps.map((step, index) => (
            <li className="reveal" key={step.title}>
              <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section dark>
        <h2>Work examples</h2>
        <WorkTeasers slugs={page.workSlugs} />
      </Section>
      <Section>
        <h2>Service area</h2>
        <p>{page.area}</p>
        <div className="case-links">
          <a className="btn btn-accent btn-lg" href="/website-check">
            Get my free Website Check
          </a>
          <a className="btn btn-ghost" href="/#contact">
            Start a project
          </a>
        </div>
      </Section>
      <Section>
        <h2>FAQ</h2>
        <dl className="faq">
          {page.faqs.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </PageShell>
  );
}
