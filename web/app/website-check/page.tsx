import { PageShell } from "@/components/SiteChrome";
import { PageHero, Section } from "@/components/InnerPages";
import { WebsiteCheckForm } from "@/components/WebsiteCheckForm";
import { pageMeta } from "@/lib/meta";
import { servicePages, trueNorth } from "@/lib/pages";
import { serviceGraph } from "@/lib/schema";
import { STUDIO_EMAIL } from "@/lib/site";

const page = servicePages["website-check"];

const crumbs = [
  { href: "/", label: "Home" },
  { href: page.path, label: "Website Check" },
];

export const metadata = pageMeta({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function WebsiteCheckPage() {
  return (
    <PageShell
      jsonLd={serviceGraph({
        serviceType: page.serviceType,
        path: page.path,
        name: page.h1,
        crumbs: [
          { name: "Home", path: "/" },
          { name: "Website Check", path: page.path },
        ],
        faq: trueNorth.faqs,
      })}
    >
      <PageHero kicker={trueNorth.eyebrow} title={page.h1} intro={trueNorth.subhead} crumbs={crumbs} />

      <Section>
        <div className="hero-cta">
          <a className="btn btn-accent btn-lg" href="#free-check-form">
            {trueNorth.primary}
          </a>
          <p className="form-help">{trueNorth.noObligation}</p>
        </div>
      </Section>

      <Section>
        <h2>{trueNorth.problemTitle}</h2>
        <ul>
          {trueNorth.problems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{trueNorth.problemClose}</p>
      </Section>

      <Section>
        <h2>Two ways to start</h2>
        <div className="table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col"></th>
                {trueNorth.columns.map((col) => (
                  <th scope="col" key={col}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {trueNorth.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.free}</td>
                  <td>{row.audit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{trueNorth.creditNote}</p>
        <p>{trueNorth.competitorNote}</p>
      </Section>

      <Section>
        <h2>{trueNorth.howItWorksTitle}</h2>
        <ol className="steps">
          {trueNorth.steps.map((step, index) => (
            <li className="reveal" key={step}>
              <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2>{trueNorth.creditTitle}</h2>
        <p>
          <strong>{trueNorth.creditLead}</strong>
        </p>
        <p>{trueNorth.creditBody}</p>
      </Section>

      <Section>
        <h2>{trueNorth.whoTitle}</h2>
        <ul>
          {trueNorth.who.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2>{trueNorth.whyTitle}</h2>
        <p className="about-body">{trueNorth.why}</p>
        <p>
          Based in Conroe, Texas, working with clients remotely. We reply within 1 business day at{" "}
          <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>.
        </p>
      </Section>

      <Section>
        <h2>FAQ</h2>
        <dl className="faq">
          {trueNorth.faqs.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
        <p>{trueNorth.competitorFaqNote}</p>
      </Section>

      <Section dark id="true-north-order">
        <h2>True North Audit authorization</h2>
        <p>{trueNorth.acknowledgment}</p>
      </Section>

      <Section dark id="request">
        <h2>{trueNorth.finalTitle}</h2>
        <p>{trueNorth.finalBody}</p>
        <p>{trueNorth.formIntro}</p>
        <WebsiteCheckForm />
        <p className="form-alt">
          {trueNorth.questions.split("Email ")[0]}
          Email <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>. We reply within 1 business day.
        </p>
      </Section>
    </PageShell>
  );
}
