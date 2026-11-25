import { BrowserShot } from "@/components/BrowserShot";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Mark } from "@/components/Mark";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { ToConfirm } from "@/components/ToConfirm";
import {
  about,
  capabilities,
  capabilitiesIntro,
  contactCopy,
  cta,
  hero,
  process,
  websiteCheckBanner,
  websiteCheckSlot,
  work,
  workConfirm,
  workIntro,
} from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import { META_DESCRIPTION, PAGE_TITLE, jsonLd, STUDIO_EMAIL } from "@/lib/site";

export const metadata = {
  ...pageMeta({ title: PAGE_TITLE, description: META_DESCRIPTION, path: "/" }),
  title: PAGE_TITLE,
};

function indexLabel(index: number) {
  return String(index + 1).padStart(2, "0");
}

function WorkPoints({
  problem,
  built,
  confirm,
}: {
  problem: string;
  built: string;
  confirm?: string;
}) {
  return (
    <div className="work-points">
      {confirm ? <ToConfirm>{confirm}</ToConfirm> : null}
      <p className="work-point">
        <span className="work-label">Problem</span>
        {problem}
      </p>
      <p className="work-point">
        <span className="work-label">Built</span>
        {built}
      </p>
    </div>
  );
}

export default function HomePage() {
  const featured = work.find((item) => item.featured);
  const rest = work.filter((item) => !item.featured);

  return (
    <>
      <SiteHeader />
      <div className="site-banner">
        <div className="wrap">
          <p>
            <strong>{websiteCheckBanner.label}</strong> {websiteCheckBanner.body}
          </p>
          <a href="/website-check">{websiteCheckBanner.button}</a>
        </div>
      </div>
      <main id="main">
        <section className="hero theme-dark" id="top">
          <div className="atmosphere" aria-hidden="true">
            <span className="glow glow-a" />
            <span className="glow glow-b" />
            <span className="glow glow-c" />
            <span className="rose rose-hero-back" />
            <span className="rose rose-hero-fore" />
          </div>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="kicker">{hero.eyebrow}</p>
              <h1>
                Websites and apps, built to a 10<span className="dot">.</span>
              </h1>
              <p className="lede">{hero.subhead}</p>
              <div className="hero-cta">
                <a className="btn btn-accent btn-lg" href="#contact">
                  {hero.primary}
                </a>
                <a className="btn btn-ghost btn-lg" href="#work">
                  {hero.secondary}
                </a>
              </div>
            </div>
            <div className="hero-stage">
              <div className="stage-ring" aria-hidden="true">
                <svg className="ring-svg" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="188" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.28" />
                  <circle
                    cx="200"
                    cy="200"
                    r="176"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    opacity="0.18"
                    strokeDasharray="2 6"
                  />
                  <g className="ring-spin">
                    <circle cx="200" cy="12" r="3.2" fill="var(--accent)" />
                    <circle cx="200" cy="388" r="1.6" fill="currentColor" opacity="0.45" />
                    <circle cx="12" cy="200" r="1.6" fill="currentColor" opacity="0.45" />
                    <circle cx="388" cy="200" r="1.6" fill="currentColor" opacity="0.45" />
                  </g>
                </svg>
                <Mark className="stage-mark" />
              </div>
              <BrowserShot
                className="device browser tilt-a"
                url="scanstationiq.com"
                src="/projects/scanstationiq-desktop.webp"
                alt="ScanStationIQ listing app, built by 10Point Studios"
                width={1440}
                height={900}
              />
            </div>
          </div>
        </section>

        <section className="section capabilities" id="services">
          <div className="atmosphere light" aria-hidden="true">
            <span className="rose rose-section" />
            <span className="glow glow-sand" />
          </div>
          <div className="wrap">
            <div className="section-head reveal">
              <p className="kicker">{capabilitiesIntro.eyebrow}</p>
              <h2>{capabilitiesIntro.title}</h2>
              <p className="intro">{capabilitiesIntro.intro}</p>
            </div>
            <div className="cards nine">
              {capabilities.map((card, index) => (
                <article className="card glass reveal" key={card.title}>
                  <span className="index">{indexLabel(index)}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <a className="card-link" href={card.href}>
                    Learn more <span className="arrow">{"\u2192"}</span>
                  </a>
                </article>
              ))}
            </div>
            <div className="cta-band reveal">
              <div>
                <h3>{cta.title}</h3>
                <p>{cta.body}</p>
              </div>
              <a className="btn btn-accent btn-lg" href="#contact">
                {cta.button}
              </a>
            </div>
          </div>
        </section>

        <section className="section work-section theme-dark" id="work">
          <div className="atmosphere" aria-hidden="true">
            <span className="glow glow-a" />
            <span className="glow glow-b" />
            <span className="rose rose-work" />
          </div>
          <div className="wrap">
            <div className="section-head reveal">
              <p className="kicker">{workIntro.eyebrow}</p>
              <h2>{workIntro.title}</h2>
              <p className="intro">{workIntro.intro}</p>
            </div>
            {featured ? (
              <article className="work-featured reveal">
                <a className="work-shot" href={featured.href} target="_blank" rel="noopener noreferrer">
                  <BrowserShot
                    url={featured.url}
                    src={featured.image}
                    alt={featured.alt}
                    width={featured.width}
                    height={featured.height}
                    tall
                  />
                </a>
                <div className="work-copy">
                  <span className="work-kind">{featured.kind}</span>
                  <h3>{featured.name}</h3>
                  <WorkPoints
                    problem={featured.problem}
                    built={featured.built}
                    confirm={workConfirm(featured)}
                  />
                  <a className="work-url" href={`/work/${featured.slug}`}>
                    Read the case study <span className="arrow">{"\u2192"}</span>
                  </a>
                  <a className="work-url" href={featured.href} target="_blank" rel="noopener noreferrer">
                    {featured.url} <span className="arrow">{"\u2192"}</span>
                  </a>
                </div>
              </article>
            ) : null}
            <div className="work-grid">
              {rest.map((item) => (
                <article className="work-card glass-dark reveal" key={item.name}>
                  <a className="work-shot" href={item.href} target="_blank" rel="noopener noreferrer">
                    <BrowserShot url={item.url} src={item.image} alt={item.alt} width={item.width} height={item.height} />
                  </a>
                  <div className="work-meta">
                    <span className="work-kind">{item.kind}</span>
                    <h3>{item.name}</h3>
                    <WorkPoints
                      problem={item.problem}
                      built={item.built}
                      confirm={workConfirm(item)}
                    />
                    <a className="work-url" href={`/work/${item.slug}`}>
                      Read the case study <span className="arrow">{"\u2192"}</span>
                    </a>
                    <a className="work-url" href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.url} <span className="arrow">{"\u2192"}</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-close reveal">
              {workIntro.close}
              <span className="dot">.</span>
            </p>
          </div>
        </section>

        <section className="section check-slot" id="website-check">
          <div className="atmosphere light" aria-hidden="true">
            <span className="rose rose-section rose-right" />
            <span className="glow glow-sand" />
          </div>
          <div className="wrap">
            <div className="cta-band reveal">
              <div>
                <p className="kicker">{websiteCheckSlot.eyebrow}</p>
                <h2>{websiteCheckSlot.title}</h2>
                <p>{websiteCheckSlot.body}</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-accent btn-lg" href="/website-check">
                  {websiteCheckSlot.button}
                </a>
                <a className="text-link" href="/website-check">
                  {websiteCheckSlot.link}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="atmosphere light" aria-hidden="true">
            <span className="rose rose-section rose-right" />
          </div>
          <div className="wrap">
            <div className="section-head reveal">
              <p className="kicker">{process.eyebrow}</p>
              <h2>{process.title}</h2>
              <p className="intro">{process.intro}</p>
            </div>
            <ol className="steps">
              {process.steps.map((step, index) => (
                <li className="reveal" key={step.title}>
                  <span className="step-index">{indexLabel(index)}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section about-section theme-dark" id="about">
          <div className="atmosphere" aria-hidden="true">
            <span className="rose rose-section" />
          </div>
          <div className="wrap">
            <div className="section-head reveal">
              <p className="kicker">{about.eyebrow}</p>
              <h2>{about.title}</h2>
              <p className="about-body">{about.body}</p>
            </div>
          </div>
        </section>

        <section className="section contact-section theme-dark" id="contact">
          <div className="atmosphere" aria-hidden="true">
            <span className="glow glow-a" />
            <span className="glow glow-c" />
            <span className="rose rose-contact" />
          </div>
          <div className="wrap contact-grid">
            <div className="reveal">
              <p className="kicker">{contactCopy.eyebrow}</p>
              <h2>{contactCopy.title}</h2>
              <p className="intro">{contactCopy.intro}</p>
            </div>
            <div>
              <ContactForm />
              <p className="form-alt reveal">
                Prefer email? <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={jsonLd} />
    </>
  );
}
