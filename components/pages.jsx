import * as React from "react";
import { cx } from "@/lib/utils";
import { Check, ChevronDown, Menu, X } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Link, Button, Badge, SectionHeading, Logo, BrandPlate, EmptyState, Footer, Formula, bez, HeroVisual, InsightStack, SolutionCard, ChallengeSelector, CaseStudyCard, ToolkitFeature, ResourceCard, ArticleCard, CTASection, PageHero, Rows } from "@/components/ui";
import { AIDiagnostic, ContactForm, FlowLine, ProcessSteps } from "@/components/interactive";
import { brand, siteConfig, solutions, getSolution, navLinks, footerCols, socials, flow, processSteps, challenges, audiences, industries, caseStudies, resourceCats, homeResourceCats, resources, articleCats, catAccent, articles, values, statements, timeline, pipeline, principles, formats, aiTasks, topics, nextSteps, seo, HV } from "@/content/site";

export function HomePage() {
  const [lead, ...rest] = solutions;
  return (
    <>
      <section className="hero tone-dark grain">
        <div className="glow glow-teal" aria-hidden="true" /><div className="glow glow-violet" aria-hidden="true" /><div className="glow glow-gold" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div>
            <h1 className="h-display"><span className="rise" style={{ "--d": "80ms" }}>Build better.</span><span className="rise" style={{ "--d": "220ms" }}>Together.</span></h1>
            <p className="hero-sub rise" style={{ "--d": "380ms" }}>Turn data, technology and ideas into better decisions, smarter systems and sustainable growth.</p>
            <p className="hero-copy rise" style={{ "--d": "480ms" }}>Mwega helps businesses and organisations use data, digital technology and artificial intelligence to improve how they decide, operate and grow.</p>
            <div className="btn-row rise" style={{ "--d": "580ms" }}><Button href="/contact">Let's Build Better</Button><Button href="/solutions" variant="ghost">Explore Our Solutions</Button></div>
          </div>
          <HeroVisual />
        </div>
        <div className="wrap"><Formula /></div>
      </section>

      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <div className="pos-grid">
            <Reveal><h2 className="h2">Your business already has more information than it uses.</h2></Reveal>
            <Reveal delay={120} className="stack">
              <p className="pos-run">Sales data. Customer information. Financial records. Marketing results. Operational processes. Market research.</p>
              <p className="lead">But information only becomes valuable when it helps you make a better decision.</p>
              <p className="lead strong">That's where Mwega comes in.</p>
            </Reveal>
          </div>
          <FlowLine />
        </div>
      </section>

      <section className="sec bg-navy tone-dark">
        <div className="wrap">
          <SectionHeading title="Four ways we help you build better." lead="It starts with understanding your business. Then we help you improve it, automate it and develop the people who run it." />
          <div className="pillars">
            <Reveal><SolutionCard solution={lead} lead /></Reveal>
            <div className="pillars-rest">{rest.map((s, i) => <Reveal key={s.slug} delay={i * 110}><SolutionCard solution={s} /></Reveal>)}</div>
          </div>
        </div>
      </section>

      <section className="sec bg-paper tone-light">
        <div className="wrap"><SectionHeading title="From challenge to measurable progress." /><ProcessSteps /></div>
      </section>

      <section className="sec bg-indigo tone-dark grain">
        <div className="wrap evo-grid">
          <Reveal className="stack">
            <h2 className="h2">A new chapter. A bigger vision.</h2>
            <p className="lead strong">Mwega is the evolution of Comrades Market.</p>
            <p className="body measure">What began as a platform focused on helping businesses navigate digital marketing, research, technology and growth has evolved into something broader.</p>
            <p className="body">Today, Mwega brings together:</p>
            <p className="plus-row">{["Data", "AI", "Digital", "Strategy", "Research", "Learning"].map((w, i) => <React.Fragment key={w}>{i > 0 && <i>+</i>}<span>{w}</span></React.Fragment>)}</p>
            <p className="body">to help businesses build better.</p>
            <div><Button href="/about" variant="ghost">Discover Our Story</Button></div>
          </Reveal>
          <Reveal delay={150}>
            <figure className="evo" aria-label="Comrades Market has grown into Mwega">
              <div className="evo-from">Comrades Market</div><div className="evo-line" aria-hidden="true" /><BrandPlate />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="sec bg-paper tone-light">
        <div className="wrap"><SectionHeading title="What are you trying to solve?" lead="Tell us where you're stuck. We'll help you identify where to start." /><ChallengeSelector /></div>
      </section>

      <section className="sec bg-white tone-light">
        <div className="wrap">
          <SectionHeading title="Built for organisations ready to move forward." />
          <ul className="cells cells-3">
            {audiences.map(([id, name, text]) => (
              <li key={id}><Link href={"/industries#" + id} className="cell"><h3 className="cell-name">{name}</h3><p>{text}</p><span className="cell-more">See how we help</span></Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec bg-navy tone-dark">
        <div className="wrap">
          <SectionHeading title="Real problems. Practical solutions." lead="Each project is told the same way: the challenge, our approach, what we built and what changed." />
          <div className="cs-grid">{caseStudies.slice(0, 3).map((c, i) => <Reveal key={c.slug} delay={i * 100}><CaseStudyCard study={c} /></Reveal>)}</div>
          <div className="sec-foot"><Button href="/case-studies" variant="ghost">View Case Studies</Button></div>
        </div>
      </section>

      <section className="sec bg-paper tone-light">
        <div className="wrap res-grid">
          <Reveal>
            <p className="kicker">Mwega Resources</p>
            <h2 className="h2">Tools and ideas to help you build better.</h2>
            <p className="lead sec-lead">Guides, tools and templates you can put to work this week, starting with the SME Data & AI Toolkit.</p>
            <ul className="cat-list">{homeResourceCats.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>
            <Button href="/resources">Explore Resources</Button>
          </Reveal>
          <Reveal delay={140}><ToolkitFeature /></Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function SolutionsPage() {
  return (
    <>
      <PageHero title="Solutions designed around real business problems." lead="Four connected ways to build better. It starts with understanding your business." />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <SectionHeading title="Understanding comes first." lead="Mwega Intelligence sits at the centre of what we do. Once you can see what is happening in your business, Digital improves it, AI automates it and Academy develops the people who run it." />
          <nav className="map" aria-label="Jump to a solution">
            {solutions.map((s) => <Link key={s.slug} href={"/solutions#" + s.slug} className="on-light" data-accent={s.accent}><span>{s.role}</span><b>{s.short}</b></Link>)}
          </nav>
          {solutions.map((s) => (
            <article key={s.slug} id={s.slug} className="sol on-light" data-accent={s.accent}>
              <p className="sol-role">{s.role}</p>
              <h2 className="h2">{s.name}</h2>
              <p className="lead" style={{ marginTop: 10 }}>{s.tagline}</p>
              <div className="sol-grid">
                <Rows items={[["The problem", s.problem], ["What we do", s.solution], ["What you get", s.outcome]]} />
                <div className="sol-side">
                  <h3 className="row-name">Services</h3>
                  <ul className="ticks">{s.pageServices.map(([n]) => <li key={n}><Check size={18} aria-hidden="true" />{n}</li>)}</ul>
                  <Button href={"/solutions/" + s.slug} className="btn-block">{s.cardCta}</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function SolutionPage({ solution: s }) {
  const href = "/contact?topic=" + encodeURIComponent(s.topic);
  return (
    <>
      <PageHero accent={s.accent} kicker={s.name} title={s.heroTitle} lead={s.heroLead}>
        <div className="btn-row"><Button href={href}>{s.cta}</Button></div>
        <nav className="stabs" aria-label="Solutions">
          {solutions.map((x) => <Link key={x.slug} href={"/solutions/" + x.slug} className="stab" data-accent={x.accent} aria-current={x.slug === s.slug ? "page" : undefined}><span>{x.verb}</span>{x.short}</Link>)}
        </nav>
      </PageHero>
      <section className="sec bg-paper tone-light">
        <div className="wrap split">
          <Reveal><h2 className="h2">{s.introTitle}</h2></Reveal>
          <Reveal delay={100} className="stack">{s.intro.map((p) => <p key={p} className="body">{p}</p>)}<p className="body strong">{s.connects}</p></Reveal>
        </div>
      </section>
      <section className="sec bg-white tone-light">
        <div className="wrap"><SectionHeading title={s.servicesTitle} /><Rows items={s.pageServices} /></div>
      </section>
      {s.slug === "intelligence" && (
        <section className="sec bg-navy tone-dark">
          <div className="wrap">
            <SectionHeading title="From raw data to action." lead="Every Intelligence project moves through the same six stages. Skip one and the decision at the end is a guess." />
            <Reveal><ol className="pipe">{pipeline.map(([name, text], i) => <li key={name}><p className="pipe-num">{"0" + (i + 1)}</p><p className="pipe-name">{name}</p><p className="pipe-text">{text}</p></li>)}</ol></Reveal>
            <Reveal className="callout">
              <div><h3 className="h3">Not sure what your data can tell you?</h3><p className="body" style={{ marginTop: 8 }}>A Business Data Checkup is a short review of what you collect, where it lives and the first question worth answering.</p></div>
              <Button href={href}>Get a Business Data Checkup</Button>
            </Reveal>
          </div>
        </section>
      )}
      {s.slug === "digital" && (
        <section className="sec bg-navy tone-dark">
          <div className="wrap">
            <SectionHeading title="Three rules we work by." lead="Technology should make business simpler, smarter and more measurable." />
            <Reveal className="trio">{principles.map(([n, t]) => <div key={n}><h3 className="h3">{n}</h3><p className="body">{t}</p></div>)}</Reveal>
          </div>
        </section>
      )}
      {s.slug === "ai" && (
        <section className="sec sec-open bg-navy tone-dark">
          <div className="wrap"><SectionHeading title="Where could AI help your business?" lead="Tick the work that takes up your team's time. We'll show you where we would look first." /><AIDiagnostic /></div>
        </section>
      )}
      {s.slug === "academy" && (
        <section className="sec bg-navy tone-dark">
          <div className="wrap">
            <SectionHeading title="Four ways to learn with us." />
            <Reveal><Rows items={formats} /></Reveal>
            <Reveal className="callout">
              <div><h3 className="h3">The Business Clinic</h3><p className="body" style={{ marginTop: 8 }}>A six-week cohort for founders who are already running something. Each week you build one part of a data and AI system on your own business numbers, alongside other founders.</p>
                <p style={{ marginTop: 12 }}><Link className="tlink" href="/case-studies/business-clinic-first-edition">Read how the first edition went</Link></p></div>
              <Button href={href}>Build Your Team</Button>
            </Reveal>
          </div>
        </section>
      )}
      <CTASection title={"Ready to " + s.verb.toLowerCase() + (s.slug === "academy" ? " your people?" : " your business?")} primary={[s.cta, href]} />
    </>
  );
}

export function IndustriesPage() {
  return (
    <>
      <PageHero title="Built for organisations ready to move forward." lead="Different organisations start from different places. Here is where we usually begin with each." />
      <section className="sec sec-open bg-paper tone-light">
        <div className="wrap ind-layout">
          <nav className="ind-nav" aria-label="Industries"><ul>{industries.map((i) => <li key={i.id}><Link href={"/industries#" + i.id}>{i.name}</Link></li>)}</ul></nav>
          <div>
            {industries.map((i) => (
              <article key={i.id} id={i.id} className="ind">
                <h2 className="h2">{i.name}</h2>
                <div className="ind-cols">
                  <div><h3 className="row-name">Common challenges</h3><ul className="bullets">{i.challenges.map((c) => <li key={c}>{c}</li>)}</ul></div>
                  <div>
                    <h3 className="row-name">How Mwega approaches it</h3><p className="body" style={{ marginTop: 12 }}>{i.approach}</p>
                    <h3 className="row-name" style={{ marginTop: 22 }}>Where we usually start</h3>
                    <div className="pill-row">{i.solutions.map((slug) => { const p = getSolution(slug); return <Link key={slug} href={"/solutions/" + slug} className="pill-link" data-accent={p.accent}><span className="dot" />{p.name}</Link>; })}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero title="Building better businesses through data, technology and practical innovation." />
      <section id="story" className="sec bg-paper tone-light anchor">
        <div className="wrap split">
          <Reveal><h2 className="h2">Our story</h2></Reveal>
          <Reveal delay={100} className="stack">
            <p className="lead strong">Mwega is the evolution of Comrades Market.</p>
            <p className="body">Comrades Market helped businesses navigate digital marketing, research, technology and growth. The services grew from digital marketing into research and business support, and then into data and AI.</p>
            <p className="body">Mwega is the name for what that work has become: one company that helps organisations understand their business, improve it, automate it and develop the people who run it.</p>
            <p className="body strong">The name changed because the work did.</p>
          </Reveal>
        </div>
      </section>
      <section className="sec bg-white tone-light">
        <div className="wrap split">
          <Reveal><h2 className="h2">How we got here</h2><p className="notice mt">Dates are placeholders. They will be added once confirmed.</p></Reveal>
          <ol>
            {timeline.map(([title, text], i) => (
              <li key={title} className={cx("tl-item", title === "Mwega" && "is-key")}>
                <span className="tl-node" aria-hidden="true" /><p className="small muted">Stage {i + 1}</p><h3 className="tl-title">{title}</h3><p className="body">{text}</p>
              </li>
            ))}
            <li className="tl-item"><span className="tl-node" aria-hidden="true" /><p className="small muted">Today</p><h3 className="tl-title">Business intelligence + digital transformation + AI + learning</h3>
              <div className="pill-row">{solutions.map((p) => <Link key={p.slug} href={"/solutions/" + p.slug} className="pill-link" data-accent={p.accent}><span className="dot" />{p.name}</Link>)}</div></li>
          </ol>
        </div>
      </section>
      <section className="sec bg-navy tone-dark">
        <div className="wrap"><Reveal><dl className="big-rows">{statements.map(([n, t]) => <div key={n}><dt>{n}</dt><dd>{t}</dd></div>)}</dl></Reveal></div>
      </section>
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <SectionHeading title="Our values" />
          <ul className="cells cells-3">{values.map(([n, t]) => <li key={n}><div className="cell"><h3 className="cell-name">{n}</h3><p>{t}</p></div></li>)}</ul>
        </div>
      </section>
      <section className="sec bg-white tone-light">
        <div className="wrap">
          <SectionHeading title="Our approach" lead="Technology only matters when it helps people build better businesses. So every project follows the same five steps." />
          <ProcessSteps /><Formula />
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function CaseStudyPage({ study: c }) {
  const p = getSolution(c.pillar), live = c.status === "published";
  return (
    <>
      <PageHero accent={p.accent} kicker={live ? c.kind + ", " + c.period : p.name + " placeholder"} title={live ? c.title : "Case study coming soon"} lead={live ? c.client + ". Delivered as " + c.deliveredAs + "." : "This page shows how each case study will be laid out once a real project is added."} />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          {live && <dl className="metrics">{c.metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
          <Rows items={["challenge", "approach", "solution", "result"].map((k) => [k[0].toUpperCase() + k.slice(1), c[k] || "To be added."])} />
          <p className="sec-foot"><Link className="tlink" href="/case-studies">All case studies</Link></p>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero title="Let's build better." lead="Tell us what you're working on, what you're trying to improve or where you're stuck." />
      <section className="sec bg-paper tone-light">
        <div className="wrap contact-grid">
          <ContactForm />
          <aside className="panel">
            <h2 className="h3">Other ways to reach us</h2>
            <div className="detail"><b>WhatsApp</b>Number to be added <Badge variant="dashed">Placeholder</Badge></div>
            <div className="detail"><b>Email</b>{siteConfig.email} <Badge variant="dashed">Placeholder</Badge></div>
            <div className="detail"><b>Location</b>{siteConfig.location}</div>
            <h2 className="h3" style={{ marginTop: 26 }}>What happens next</h2>
            <ol className="numbered">{nextSteps.map((t) => <li key={t}>{t}</li>)}</ol>
          </aside>
        </div>
      </section>
    </>
  );
}

export function LegalPage({ title }) {
  return (
    <>
      <PageHero title={title} lead="This page is a placeholder. The final text will be added before launch." />
      <section className="sec bg-paper tone-light"><div className="wrap"><EmptyState title={title + " to be added"} text="Have a question in the meantime? Send us a note." action={["Contact Mwega", "/contact"]} /></div></section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="nf tone-dark grain">
      <div className="glow glow-teal" aria-hidden="true" /><div className="glow glow-gold" aria-hidden="true" />
      <div className="wrap">
        <p className="nf-code" aria-hidden="true">404</p>
        <h1 className="h1">Looks like you've taken a wrong turn.</h1>
        <p className="lead" style={{ margin: "18px 0 30px" }}>Let's get you back to building better.</p>
        <Button href="/">Back to Mwega</Button>
      </div>
    </section>
  );
}
