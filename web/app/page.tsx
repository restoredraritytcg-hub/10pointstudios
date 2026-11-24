import { BrowserShot } from "@/components/BrowserShot";
import { ContactForm } from "@/components/ContactForm";
import { Mark, Wordmark } from "@/components/Mark";
import { about, capabilities, capabilitiesIntro, contactCopy, cta, hero, process, work, workIntro } from "@/lib/content";
import { footerProjects, jsonLd, STUDIO_EMAIL } from "@/lib/site";

function indexLabel(index: number) {
  return String(index + 1).padStart(2, "0");
}

function WorkPoints({ problem, built }: { problem: string; built: string }) {
  return (
    <div className="work-points">
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
      <header className="site-header theme-dark">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="10Point Studios home">
            <Mark />
            <Wordmark />
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#services">Capabilities</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a className="btn btn-accent" href="#contact">
              Start a project
            </a>
          </nav>
          <button className="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
            <span />
          </button>
        </div>
      </header>
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
                  <WorkPoints problem={featured.problem} built={featured.built} />
                  <a className="work-url" href={featured.href} target="_blank" rel="noopener noreferrer">
                    {featured.url} <span className="arrow">→</span>
                  </a>
                </div>
              </article>
            ) : null}
            <div className="work-grid">
              {rest.map((item) => (
                <a
                  className="work-card glass-dark reveal"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.name}
                >
                  <BrowserShot url={item.url} src={item.image} alt={item.alt} width={item.width} height={item.height} />
                  <div className="work-meta">
                    <span className="work-kind">{item.kind}</span>
                    <h3>{item.name}</h3>
                    <WorkPoints problem={item.problem} built={item.built} />
                    <span className="work-url">
                      {item.url} <span className="arrow">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <p className="work-close reveal">
              {workIntro.close}
              <span className="dot">.</span>
            </p>
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
      <footer className="site-footer theme-dark">
        <div className="wrap">
          <div className="brand">
            <Mark />
            <Wordmark />
          </div>
          <div className="footer-copy">
            <p>
              © 2026 10Point Studios · Conroe, TX · <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
