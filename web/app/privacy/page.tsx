import { PageShell } from "@/components/SiteChrome";
import { PageHero, Section } from "@/components/InnerPages";
import { pageMeta } from "@/lib/meta";
import { STUDIO_EMAIL } from "@/lib/site";

const path = "/privacy/";

const title = "Privacy | 10Point Studios";
const description =
  "How 10Point Studios uses information you send through the contact form and the free Website Check form.";

export const metadata = pageMeta({
  title,
  description,
  path,
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        kicker="10Point Studios"
        title="Privacy"
        intro="How we use the information you send us through this website."
        crumbs={[
          { href: "/", label: "Home" },
          { href: path, label: "Privacy" },
        ]}
      />

      <Section>
        <p>
          Last updated: 27 November 2026. This wording should be reviewed by counsel (Leroy)
          before it is treated as final.
        </p>

        <h2>Who we are</h2>
        <p>
          10Point Studios is Scott Shipley&apos;s web and app studio, based in Conroe, Texas,
          and serving Conroe, The Woodlands and Houston. Email:{" "}
          <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>.
        </p>

        <h2>What we collect</h2>
        <p>This website collects information only when you fill in a form:</p>
        <ul>
          <li>
            <strong>Start a project (contact form):</strong> your name, email address, what you
            need, and a short message about the project, plus the authorization checkbox.
          </li>
          <li>
            <strong>Free Website Check form:</strong> your name, email address, website address,
            a short note about your business, and the authorization checkbox.
          </li>
        </ul>
        <p>
          A hidden “company website” field on those forms is a honeypot to catch spam and is
          not used as a real question.
        </p>

        <h2>How that information is handled</h2>
        <ul>
          <li>
            Both forms are sent through FormSubmit to the studio inbox at {STUDIO_EMAIL}. A
            copy is also sent to restoredraritytcg@gmail.com.
          </li>
          <li>
            We use that information to reply to your inquiry, usually within one business day,
            and to follow up about a project or a Website Check.
          </li>
          <li>
            This site does not currently include a visitor-analytics or advertising pixel. If
            that changes, this page should be updated.
          </li>
          <li>Fonts and images for this site are hosted with the site itself.</li>
        </ul>
        <p>
          We do not sell this information. How long form messages are kept, and any other tools
          later added to the site, should be reflected here after review.
        </p>

        <h2>Your choices</h2>
        <p>
          To ask what we hold about you, or to ask us to update or delete it, email{" "}
          <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>.
        </p>
      </Section>
    </PageShell>
  );
}
