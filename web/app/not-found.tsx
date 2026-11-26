import type { Metadata } from "next";
import { PageHero, Section } from "@/components/InnerPages";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Page not found | 10Point Studios" },
  description: "This page could not be found.",
  // Next.js adds its own noindex to the 404; null drops the layout's "index, follow".
  robots: null,
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          kicker="404"
          title="This page could not be found."
          intro="The link may be old, or the page may have moved."
          crumbs={[
            { href: "/", label: "Home" },
            { href: "/404/", label: "Page not found" },
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
            <a className="btn btn-ghost" href="/#contact">
              Contact us
            </a>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
