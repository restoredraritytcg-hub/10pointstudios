import type { Metadata } from "next";
import { PageHero, Section } from "@/components/InnerPages";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Thanks | 10Point Studios",
    description: "We received your message and will reply within 1 business day.",
    path: "/thanks/",
  }),
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          kicker="Contact"
          title="Thanks, your message is in."
          intro="We’ll reply within 1 business day. Your details are only used to reply to you."
          crumbs={[
            { href: "/", label: "Home" },
            { href: "/thanks/", label: "Thanks" },
          ]}
        />
        <Section>
          <div className="case-links">
            <a className="btn btn-accent btn-lg" href="/">
              Back to home
            </a>
            <a className="btn btn-ghost" href="/work/">
              See our work
            </a>
            <a className="btn btn-ghost" href="/website-check/">
              Free Website Check
            </a>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
