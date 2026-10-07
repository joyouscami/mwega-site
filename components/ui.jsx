import * as React from "react";
import NextLink from "next/link";
import { cx } from "@/lib/utils";
import { Check, ChevronDown, Menu, X } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { brand, siteConfig, solutions, getSolution, navLinks, footerCols, socials, flow, processSteps, challenges, audiences, industries, caseStudies, resourceCats, homeResourceCats, resources, articleCats, catAccent, articles, values, statements, timeline, pipeline, principles, formats, aiTasks, topics, nextSteps, seo, HV } from "@/content/site";

/* Internal links use the Next.js router. External links open in a new tab. */
export function Link({ href = "/", children, ...rest }) {
  if (/^(https?:|mailto:|tel:)/.test(href)) return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  return <NextLink href={href} {...rest}>{children}</NextLink>;
}

export function Button({ href, variant = "primary", className, children, ...rest }) {
  const cls = cx("btn", "btn-" + variant, className);
  return href ? <Link href={href} className={cls} {...rest}>{children}</Link> : <button className={cls} {...rest}>{children}</button>;
}

export const Badge = ({ variant, children }) => <span className={cx("badge", variant && "badge-" + variant)}>{children}</span>;

export function SectionHeading({ title, lead, kicker }) {
  return (
    <Reveal className="sec-head">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead sec-lead">{lead}</p>}
    </Reveal>
  );
}

export function Logo({ size = 38 }) {
  const logo = brand;
  if (logo.src && logo.mode === "plain") return <img className="logo-img" src={logo.src} alt="Mwega" style={{ height: size }} />;
  return (
    <span className="logo">
      {logo.src && <span className="logo-mark logo-crop" style={{ width: size, height: size }} />}
      <span className="logo-word">MWEGA</span>
    </span>
  );
}

export function BrandPlate() {
  const logo = brand;
  if (logo.src && logo.mode === "plate") return <img className="plate-img" src={logo.src} alt="Mwega logo with the line: Build better. Together." />;
  return (
    <div className="plate">
      {logo.src ? <img src={logo.src} alt="Mwega" className="plate-logo" /> : <span className="plate-word">MWEGA</span>}
      <span className="plate-tag">Build better. Together.</span>
      {!logo.src && <span className="plate-note">Logo slot</span>}
    </div>
  );
}

export function EmptyState({ title, text, action }) {
  return (
    <div className="empty">
      <div className="empty-art" aria-hidden="true">{[18, 30, 22, 40].map((h) => <span key={h} style={{ height: h }} />)}</div>
      <h3 className="h3">{title}</h3>
      {text && <p className="body measure">{text}</p>}
      {action && <Button href={action[1]} variant="ghost">{action[0]}</Button>}
    </div>
  );
}

export function Footer() {
  return (
    <footer id="mw-footer" className="footer tone-dark">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" aria-label="Mwega, home"><Logo /></Link>
            <p className="footer-tag">{siteConfig.tagline}</p>
            <p className="small measure">{siteConfig.description}</p>
          </div>
          <div className="footer-cols">
            {footerCols.map(([title, links]) => (
              <nav key={title} aria-label={title}>
                <h2 className="footer-h">{title}</h2>
                <ul>{links.map(([label, href]) => <li key={label}><Link href={href} className="footer-link">{label}</Link></li>)}</ul>
              </nav>
            ))}
            <div>
              <h2 className="footer-h">Connect</h2>
              <ul>
                {socials.map(([label, key]) => (
                  <li key={key}>{siteConfig[key] ? <Link href={siteConfig[key]} className="footer-link">{label}</Link> : <span className="footer-link is-pending">{label}<span className="pending-tag">link to add</span></span>}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Mwega. All rights reserved.</p>
          <ul><li><Link href="/privacy">Privacy Policy</Link></li><li><Link href="/terms">Terms of Service</Link></li></ul>
        </div>
      </div>
    </footer>
  );
}

export function Formula() {
  const parts = [["Data", "teal"], ["Technology", "violet"], ["Strategy", "magenta"], ["People", "gold"]];
  return (
    <p className="formula">
      <span className="sr-only">Data plus technology plus strategy plus people equals better business.</span>
      <span className="formula-row" aria-hidden="true">
        {parts.map(([w, a], i) => (
          <React.Fragment key={w}>
            {i > 0 && <span className="formula-op">+</span>}
            <span className="formula-term" data-accent={a}><span className="dot" />{w}</span>
          </React.Fragment>
        ))}
        <span className="formula-op">=</span>
        <span className="formula-result">Better business</span>
      </span>
    </p>
  );
}

export const bez = (a, b, c, d, t) => { const m = 1 - t; return m * m * m * a + 3 * m * m * t * b + 3 * m * t * t * c + t * t * t * d; };

export function HeroVisual() {
  const logo = brand;
  const [lx, ly] = HV.lens;
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv-box">
        <svg className="hv-svg" viewBox="0 0 600 500" focusable="false">
          <defs>
            {HV.lines.map(([color], i) => (
              <linearGradient key={i} id={"mw-line-" + i} gradientUnits="userSpaceOnUse" x1={lx} y1="0" x2="584" y2="0">
                <stop offset="0" stopColor={color} stopOpacity="0" /><stop offset="0.3" stopColor={color} stopOpacity="0.85" /><stop offset="1" stopColor={color} />
              </linearGradient>
            ))}
          </defs>
          {HV.sources.map(([label, x, y], i) => (
            <g key={label}>
              <path className="hv-in" d={`M${x} ${y} C${x + 62} ${y} ${lx - 74} ${ly} ${lx} ${ly}`} style={{ animationDelay: -0.4 * i + "s" }} />
              <circle cx={x} cy={y} r="3.5" fill="#F9F6EF" />
            </g>
          ))}
          {HV.lines.map(([color, y], i) => {
            const xs = [lx, lx + 100, 470, 584], ys = [ly, ly, y, y];
            return (
              <g key={i}>
                <path className="hv-out" pathLength="1" d={`M${xs[0]} ${ys[0]} C${xs[1]} ${ys[1]} ${xs[2]} ${ys[2]} ${xs[3]} ${ys[3]}`} stroke={`url(#mw-line-${i})`} style={{ "--d": 0.5 + i * 0.18 + "s" }} />
                {[0.56, 0.72, 0.87].map((t, j) => <circle key={j} className="hv-pt" cx={bez(xs[0], xs[1], xs[2], xs[3], t).toFixed(1)} cy={bez(ys[0], ys[1], ys[2], ys[3], t).toFixed(1)} r="3" fill="#07102A" stroke={color} strokeWidth="1.8" style={{ "--d": 1.5 + i * 0.18 + j * 0.12 + "s" }} />)}
                <circle className="hv-end" cx="584" cy={y} r="10" fill={color} style={{ "--d": i * 0.5 + "s" }} />
                <circle className="hv-pt" cx="584" cy={y} r="5" fill={color} style={{ "--d": 1.9 + i * 0.18 + "s" }} />
              </g>
            );
          })}
        </svg>
        {HV.sources.map(([label, x, y], i) => <span key={label} className="hv-chip" style={{ top: y / 5 + "%", right: 100 - (x - 12) / 6 + "%", "--d": 0.3 + i * 0.12 + "s" }}>{label}</span>)}
        <div className="hv-lens"><div className="hv-lens-box">
          {logo.src && logo.mode === "plate" ? <span className="lens-mark logo-crop" /> : logo.src ? <img className="lens-img" src={logo.src} alt="" /> : <><span className="lens-ring" /><span className="lens-core" /><span className="lens-dot" /></>}
        </div></div>
        <span className="hv-label" style={{ left: "2%", top: "96%" }}>Data</span>
        <span className="hv-label" style={{ left: "58%", top: "70%", transform: "translateX(-50%)" }}>Technology</span>
        <span className="hv-label" style={{ right: "2.6%", top: "57%" }}>Growth</span>
      </div>
    </div>
  );
}

export function InsightStack() {
  const hi = "#3FD9C6", lo = "rgba(249,246,239,.2)";
  return (
    <div className="istack" aria-hidden="true">
      <div className="istack-row"><span>What is happening</span>
        <svg viewBox="0 0 120 36"><polyline points="2,27 18,23 32,28 48,17 62,20 78,10 94,14 116,5" fill="none" stroke={hi} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="116" cy="5" r="3" fill={hi} /></svg></div>
      <div className="istack-row"><span>Why it matters</span>
        <svg viewBox="0 0 120 36">{[10, 16, 12, 28, 14, 19, 11].map((h, i) => <rect key={i} x={6 + i * 16} y={34 - h} width="9" height={h} rx="3" fill={i === 3 ? hi : lo} />)}</svg></div>
      <div className="istack-row"><span>What to do next</span>
        <svg viewBox="0 0 120 36"><path d="M4 26H112" fill="none" stroke={lo} strokeWidth="2.2" strokeLinecap="round" /><path d="M4 26H46C62 26 62 9 78 9H108" fill="none" stroke={hi} strokeWidth="2.2" strokeLinecap="round" /><circle cx="111" cy="9" r="3.4" fill={hi} /></svg></div>
    </div>
  );
}

export function SolutionCard({ solution: s, lead }) {
  return (
    <article className={cx("pillar", lead && "pillar-lead")} data-accent={s.accent}>
      <div className="pillar-main">
        <p className="pillar-role">{s.role}</p>
        <h3 className="pillar-name">{s.name}</h3>
        <p className="pillar-tag">{s.tagline}</p>
        <p className="pillar-desc">{s.description}</p>
        <ul className="pillar-services">{s.services.map((x) => <li key={x}>{x}</li>)}</ul>
        <Link href={"/solutions/" + s.slug} className="tlink stretch">{s.cardCta}</Link>
      </div>
      {lead && <InsightStack />}
    </article>
  );
}

export function ChallengeSelector() {
  return (
    <fieldset className="challenge">
      <legend className="sr-only">What are you trying to solve?</legend>
      {challenges.map((c) => <input key={c.id} type="radio" name="mw-challenge" id={"ch-" + c.id} className="sr-only" />)}
      <div className="challenge-grid">
        {challenges.map((c) => (
          <label key={c.id} htmlFor={"ch-" + c.id} className="ch-card" data-for={c.id}>
            <span className="ch-mark" aria-hidden="true"><Check size={15} strokeWidth={3} /></span>
            <span className="ch-text">{c.statement}</span>
          </label>
        ))}
      </div>
      <div className="ch-results" aria-live="polite">
        <p className="ch-hint">Pick the one that sounds most like you. We'll show you where we would start.</p>
        {challenges.map((c) => {
          const p = getSolution(c.pillar);
          return (
            <div key={c.id} className="ch-result on-light" data-for={c.id} data-accent={p.accent}>
              <div>
                <p className="small muted">We'd start with</p>
                <p className="h2">{p.name}</p>
                <p className="lead" style={{ marginTop: 10 }}>{c.advice}</p>
                {c.then && <p className="body" style={{ marginTop: 8 }}>{c.then}</p>}
              </div>
              <div className="ch-actions">
                <Button href={"/contact?topic=" + encodeURIComponent(p.topic)}>Talk to Mwega</Button>
                <Link className="tlink" href={"/solutions/" + p.slug}>Explore {p.short}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}

export function CaseStudyCard({ study: c, onLight }) {
  const p = getSolution(c.pillar);
  if (c.status !== "published") {
    return (
      <article className={cx("cs cs-empty", onLight && "on-light")} data-accent={p.accent}>
        <div className="cs-top"><Badge variant="accent">{p.name}</Badge><Badge variant="dashed">Placeholder</Badge></div>
        <h3 className="cs-title">Case study coming soon</h3>
        <dl className="cs-facts cs-skel">{["Challenge", "Approach", "Solution", "Result"].map((k) => <div key={k}><dt>{k}</dt><dd><span className="sr-only">To be added</span></dd></div>)}</dl>
      </article>
    );
  }
  return (
    <article className={cx("cs", onLight && "on-light")} data-accent={p.accent}>
      <div className="cs-top"><Badge variant="accent">{p.name}</Badge><span className="small muted">{c.kind}</span></div>
      <h3 className="cs-title">{c.title}</h3>
      <p className="cs-client">{c.client}, {c.period}. Delivered as {c.deliveredAs}.</p>
      <dl className="cs-facts"><div><dt>Challenge</dt><dd>{c.challenge}</dd></div><div><dt>Result</dt><dd>{c.result}</dd></div></dl>
      <Link href={"/case-studies/" + c.slug} className="tlink stretch">Read the case study</Link>
    </article>
  );
}

export function ToolkitFeature() {
  const r = resources[0];
  return (
    <article className="toolkit tone-dark" data-accent="gold">
      <div className="badges"><Badge variant="accent">Premium toolkit</Badge><Badge variant="paid">Paid</Badge></div>
      <h3 className="h2 toolkit-title">{r.title}</h3>
      <p className="body">{r.description}</p>
      <ul className="ticks">{r.points.map((x) => <li key={x}><Check size={18} aria-hidden="true" />{x}</li>)}</ul>
      <div className="toolkit-foot"><p className="toolkit-price">{r.price}</p><Button href={r.cta[1]}>{r.cta[0]}</Button></div>
      <p className="small muted">{r.note}</p>
    </article>
  );
}

export function ResourceCard({ resource: r }) {
  const cat = resourceCats.find(([id]) => id === r.category);
  return (
    <article className={cx("rcard", r.placeholder && "is-placeholder")}>
      <div className="rcard-top">
        <span className="small muted">{cat ? cat[1] : ""}</span>
        <span className="badges">{r.placeholder && <Badge variant="dashed">Placeholder</Badge>}<Badge variant={r.access}>{r.access === "paid" ? "Paid" : "Free"}</Badge></span>
      </div>
      <h3 className="card-title">{r.title}</h3>
      <p className="body">{r.description}</p>
      {r.price && <p className="strong">{r.price}</p>}
      {r.cta ? <Link href={r.cta[1]} className="tlink">{r.cta[0]}</Link> : <span className="small muted">Not yet available</span>}
      {r.note && <p className="small muted">{r.note}</p>}
    </article>
  );
}

export function ArticleCard({ article: [category, title], featured }) {
  return (
    <article className={cx("article", featured && "article-featured")} data-accent={catAccent[category]}>
      <div className="article-cover">{category}</div>
      <div className="article-body">
        <Badge variant="dashed">Sample</Badge>
        <h3 className="card-title">{title}</h3>
        <p className="body">Placeholder summary. This article has not been written yet.</p>
      </div>
    </article>
  );
}

export function CTASection({ title = "Ready to build better?", text, primary = ["Let's Talk", "/contact"], secondary = ["Explore Solutions", "/solutions"] }) {
  return (
    <section className="cta tone-dark grain">
      <div className="glow glow-teal" aria-hidden="true" /><div className="glow glow-gold" aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <p className="cta-aside">You're not alone in figuring this out.</p>
          <h2 className="h1">{title}</h2>
          <p className="lead">{text || "Whether you're trying to understand your data, improve your systems, adopt AI or grow your organisation, Mwega can help you identify the next step."}</p>
          <div className="btn-row"><Button href={primary[1]}>{primary[0]}</Button><Button href={secondary[1]} variant="ghost">{secondary[0]}</Button></div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ title, lead, accent, kicker, children }) {
  return (
    <section className="phero tone-dark grain" data-accent={accent}>
      <div className="phero-glow" aria-hidden="true" />
      <div className="wrap">
        {kicker && <p className="kicker rise">{kicker}</p>}
        <h1 className="h1 rise" style={{ "--d": "60ms" }}>{title}</h1>
        {lead && <p className="lead phero-lead rise" style={{ "--d": "180ms" }}>{lead}</p>}
        {children && <div className="rise" style={{ "--d": "300ms" }}>{children}</div>}
      </div>
    </section>
  );
}

export function Rows({ items }) {
  return <dl className="rows">{items.map(([name, text]) => <div key={name}><dt>{name}</dt><dd className="body">{text}</dd></div>)}</dl>;
}
