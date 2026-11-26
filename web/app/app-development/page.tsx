import { PageShell } from "@/components/SiteChrome";
import { PageHero, Section, WorkTeasers } from "@/components/InnerPages";
import { about, capabilities } from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import { servicePages } from "@/lib/pages";
import { serviceGraph } from "@/lib/schema";

const page = servicePages["app-development"];
const counter = capabilities[5];
const accounts = capabilities[7];

const crumbs = [
  { href: "/", label: "Home" },
  { href: page.path, label: "App development" },
];

export const metadata = pageMeta({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function AppDevelopmentPage() {
  return (
    <PageShell
      jsonLd={serviceGraph({
        serviceType: page.serviceType,
        path: page.path,
        name: page.h1,
        crumbs: [
          { name: "Home", path: "/" },
          { name: "App development", path: page.path },
        ],
      })}
    >
      <PageHero kicker="App development" title={page.h1} crumbs={crumbs} />
      <Section>
        <h2>ScanStationIQ</h2>
        <p>
          Accounts and plans, scanner intake, and an installable web app{"\u2014"}a case study of an app built around how the work actually runs.
        </p>
        <WorkTeasers slugs={["scanstationiq"]} />
      </Section>
      <Section>
        <h2>{counter.title}</h2>
        <p>{counter.body}</p>
        <h2>{accounts.title}</h2>
        <p>{accounts.body}</p>
      </Section>
      <Section dark>
        <h2>Related work</h2>
        <WorkTeasers slugs={page.workSlugs} />
      </Section>
      <Section>
        <h2>Who builds it</h2>
        <p className="about-body">{about.body}</p>
        <div className="case-links">
          <a className="btn btn-accent btn-lg" href="/website-check">
            Get my free Website Check
          </a>
          <a className="btn btn-ghost" href="/#contact">
            Start a project
          </a>
        </div>
      </Section>
    </PageShell>
  );
}
