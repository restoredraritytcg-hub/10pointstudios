import { PageShell } from "@/components/SiteChrome";
import { PageHero, Section, WorkTeasers } from "@/components/InnerPages";
import { pageMeta } from "@/lib/meta";
import { servicePages } from "@/lib/pages";
import { serviceGraph } from "@/lib/schema";

const page = servicePages["website-maintenance"];

const crumbs = [
  { href: "/", label: "Home" },
  { href: page.path, label: "Maintenance" },
];

export const metadata = pageMeta({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function WebsiteMaintenancePage() {
  return (
    <PageShell
      jsonLd={serviceGraph({
        serviceType: page.serviceType,
        path: page.path,
        name: page.h1,
        crumbs: [
          { name: "Home", path: "/" },
          { name: "Maintenance", path: page.path },
        ],
      })}
    >
      <PageHero kicker="Maintenance" title={page.h1} crumbs={crumbs} />
      <Section>
        <h2>What{"\u2019"}s covered</h2>
        <p>{page.covered}</p>
        <h2>How requests work</h2>
        <p>Updates, fixes, content changes and care after launch, with one place to ask.</p>
        <h2>Reply time</h2>
        <p>{page.reply}</p>
        <div className="case-links">
          <a className="btn btn-accent btn-lg" href="/website-check/">
            Get my free Website Check
          </a>
          <a className="btn btn-ghost" href="/#contact">
            Start a project
          </a>
        </div>
      </Section>
      <Section dark>
        <h2>Related work</h2>
        <WorkTeasers slugs={page.workSlugs} />
      </Section>
    </PageShell>
  );
}
