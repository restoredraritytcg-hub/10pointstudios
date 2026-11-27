import { Mark, Wordmark } from "@/components/Mark";
import { JsonLd } from "@/components/JsonLd";
import { footerProjects, footerServices, jsonLd, STUDIO_EMAIL } from "@/lib/site";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="site-header theme-dark">
      <div className="wrap">
        <a className="brand" href="/">
          <Mark />
          <Wordmark />
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="/#services">Capabilities</a>
          <a href="/work/">Work</a>
          <a href="/#process">Process</a>
          <a href="/#about">About</a>
          <a className="btn btn-accent" href="/#contact">
            Start a project
          </a>
        </nav>
        <button className="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
          <span />
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer theme-dark">
      <div className="wrap">
        <div className="brand">
          <Mark />
          <Wordmark />
        </div>
        <div className="footer-copy">
          <p>
            © 2026 10Point Studios · Conroe, TX · <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>
            {" · "}
            <a href="/privacy/">Privacy</a>
          </p>
          <p>
            {footerServices.map((item, index) => (
              <span key={item.href}>
                {index > 0 ? " · " : null}
                <a href={item.href}>{item.name}</a>
              </span>
            ))}
          </p>
          <p>
            Studio projects:{" "}
            {footerProjects.map((project, index) => (
              <span key={project.name}>
                {index > 0 ? " · " : null}
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  jsonLd: pageJsonLd,
}: {
  children: ReactNode;
  jsonLd?: unknown;
}) {
  const blocks = [jsonLd, ...(pageJsonLd == null ? [] : Array.isArray(pageJsonLd) ? pageJsonLd : [pageJsonLd])];
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      {blocks.map((block, index) => (
        <JsonLd data={block} key={index} />
      ))}
    </>
  );
}
