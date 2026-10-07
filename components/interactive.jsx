"use client";

import * as React from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cx } from "@/lib/utils";
import { Check, ChevronDown, Menu, X } from "@/components/icons";
import { useInView } from "@/components/reveal";
import { Link, Button, Badge, SectionHeading, Logo, BrandPlate, EmptyState, Footer, Formula, bez, HeroVisual, InsightStack, SolutionCard, ChallengeSelector, CaseStudyCard, ToolkitFeature, ResourceCard, ArticleCard, CTASection, PageHero, Rows } from "@/components/ui";
import { brand, siteConfig, solutions, getSolution, navLinks, footerCols, socials, flow, processSteps, challenges, audiences, industries, caseStudies, resourceCats, homeResourceCats, resources, articleCats, catAccent, articles, values, statements, timeline, pipeline, principles, formats, aiTasks, topics, nextSteps, seo, HV } from "@/content/site";

/* Reads one ?name=value from the address bar, inside its own Suspense boundary so pages stay static. */
function QueryReader({ name, onValue }) {
  const value = useSearchParams().get(name);
  useEffect(() => { onValue(value); }, [value]);
  return null;
}
export function QueryParam(props) {
  return <Suspense fallback={null}><QueryReader {...props} /></Suspense>;
}

export function FilterBar({ label, options, value, onChange }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map(([id, text]) => <button key={id} type="button" className="filter" aria-pressed={value === id} onClick={() => onChange(id)}>{text}</button>)}
    </div>
  );
}

export function Navbar() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropBtn = useRef(null), menuRef = useRef(null), timer = useRef(null), pointer = useRef("");
  const [lead, ...rest] = solutions;
  const isActive = (href) => (href === "/" ? path === "/" : path === href || path.indexOf(href + "/") === 0);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);
  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [path]);
  useEffect(() => {
    ["mw-main", "mw-footer"].forEach((id) => { const el = document.getElementById(id); if (el) el.toggleAttribute("inert", menuOpen); });
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    if (menuRef.current) menuRef.current.focus();
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [menuOpen]);

  return (
    <header className={cx("nav tone-dark", (solid || menuOpen) && "is-solid")}>
      <nav className="wrap nav-inner" aria-label="Primary">
        <Link href="/" aria-label="Mwega, home"><Logo /></Link>
        <ul className="nav-links">
          {navLinks.map(([label, href]) => href === "/solutions" ? (
            <li key={label} className="drop"
              onPointerEnter={(e) => { if (e.pointerType === "mouse") { clearTimeout(timer.current); setDropOpen(true); } }}
              onPointerLeave={(e) => { if (e.pointerType === "mouse") { clearTimeout(timer.current); timer.current = setTimeout(() => setDropOpen(false), 140); } }}
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setDropOpen(false); }}
              onKeyDown={(e) => { if (e.key === "Escape" && dropOpen) { setDropOpen(false); if (dropBtn.current) dropBtn.current.focus(); } }}>
              <button ref={dropBtn} type="button" className="nav-link" aria-expanded={dropOpen} data-current={isActive(href) || undefined}
                onPointerDown={(e) => { pointer.current = e.pointerType; }} onKeyDown={() => { pointer.current = "key"; }}
                onClick={() => { if (pointer.current === "mouse") setDropOpen(true); else setDropOpen((o) => !o); }}>
                {label}<ChevronDown size={16} aria-hidden="true" />
              </button>
              {dropOpen && (
                <div className="drop-wrap">
                  <div className="drop-panel">
                    <Link href={"/solutions/" + lead.slug} className="drop-lead">
                      <span className="drop-role">{lead.role}</span>
                      <span className="drop-big">{lead.name}</span>
                      <span className="small">{lead.tagline}</span>
                    </Link>
                    <div>
                      {rest.map((s) => (
                        <Link key={s.slug} href={"/solutions/" + s.slug} className="drop-item" data-accent={s.accent}>
                          <span className="drop-name"><span className="dot" />{s.name}</span>
                          <span className="drop-role">{s.role}</span>
                        </Link>
                      ))}
                      <Link href="/solutions" className="drop-item"><span className="drop-name">All solutions</span></Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ) : (
            <li key={label}><Link href={href} className="nav-link" aria-current={isActive(href) ? "page" : undefined} data-current={isActive(href) || undefined}>{label}</Link></li>
          ))}
        </ul>
        <div className="nav-right">
          <Button href="/contact" className="btn-sm nav-cta">Let's Talk</Button>
          <button type="button" className="nav-burger" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div ref={menuRef} tabIndex={-1} className="mmenu tone-dark" role="dialog" aria-modal="true" aria-label="Menu">
          <ul>
            {navLinks.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="mmenu-link" onClick={closeMenu} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>
                {href === "/solutions" && (
                  <ul className="mmenu-sub">
                    {solutions.map((s) => <li key={s.slug}><Link href={"/solutions/" + s.slug} className="mmenu-sublink" data-accent={s.accent} onClick={closeMenu}><span className="dot" />{s.name}</Link></li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Button href="/contact" className="btn-block mt" onClick={closeMenu}>Let's Talk</Button>
          <p className="mmenu-tag">{siteConfig.tagline}</p>
        </div>
      )}
    </header>
  );
}

export function ProcessSteps() {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={cx("steps", inView && "is-in")}>
      <span className="steps-track" aria-hidden="true"><span /></span>
      <ol className="steps-list">
        {processSteps.map(([name, text], i) => (
          <li key={name} className="step" style={{ "--i": i }}>
            <span className="step-num" aria-hidden="true">{"0" + (i + 1)}</span>
            <h3 className="step-name">{name}</h3>
            <p className="step-text">{text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function FlowLine() {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={cx("flow", inView && "is-in")}>
      <span className="flow-track" aria-hidden="true" />
      <ol className="flow-list" aria-label="Data leads to insight, then action, then growth">
        {flow.map(([name, text, accent], i) => (
          <li key={name} className="flow-step" data-accent={accent} style={{ "--i": i }}>
            <span className="flow-node" aria-hidden="true" /><span className="flow-name">{name}</span><span className="flow-text">{text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AIDiagnostic() {
  const [picked, setPicked] = useState([]);
  const toggle = (i) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  return (
    <div className="diag">
      <fieldset className="diag-opts">
        <legend className="sr-only">Work that takes up your team's time</legend>
        {aiTasks.map(([label], i) => (
          <label key={label} className={cx("diag-opt", picked.includes(i) && "is-on")}>
            <input type="checkbox" className="sr-only" checked={picked.includes(i)} onChange={() => toggle(i)} />
            <span className="diag-box" aria-hidden="true"><Check size={15} strokeWidth={3} /></span><span>{label}</span>
          </label>
        ))}
      </fieldset>
      <div className="diag-out" aria-live="polite">
        <h3 className="h3">Where we would look first</h3>
        {picked.length === 0 ? <p className="body" style={{ marginTop: 10 }}>Tick one or more on the left. Each one maps to a practical place to start.</p> : (
          <ul style={{ marginTop: 14 }}>{picked.map((i) => <li key={i}><b>{aiTasks[i][1]}</b>{aiTasks[i][2]}</li>)}</ul>
        )}
        <p className="small muted" style={{ margin: "16px 0 20px" }}>A starting point, not an assessment. A proper review looks at your tools, your data and your team.</p>
        <Button href="/contact?topic=AI">Put AI to Work</Button>
      </div>
    </div>
  );
}

export function InsightsPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? articles : articles.filter((a) => a[0] === cat);
  return (
    <>
      <PageHero title="Practical thinking on data, AI and growth." lead="Short, useful reads for people running businesses and organisations." />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <p className="notice">The articles below are samples that show the layout. None has been written yet.</p>
          <FilterBar label="Filter articles by category" options={["All", ...articleCats].map((c) => [c, c])} value={cat} onChange={setCat} />
          {list.length === 0 ? <EmptyState title={"No " + cat + " articles yet"} text="New articles are on the way. Until then, the resource library has tools you can use today." action={["Explore Resources", "/resources"]} />
            : <div className="grid3">{list.map((a, i) => <ArticleCard key={a[1]} article={a} featured={i === 0 && cat === "All"} />)}</div>}
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function ResourcesPage() {
  const [query, setQuery] = useState({});
  const [cat, setCat] = useState("all");
  useEffect(() => { if (resourceCats.some(([id]) => id === query.category)) setCat(query.category); }, [query.category]);
  const list = (cat === "all" ? resources : resources.filter((r) => r.category === cat)).filter((r) => r.id !== "toolkit" || cat !== "all");
  const label = (resourceCats.find(([id]) => id === cat) || ["", "resources"])[1].toLowerCase();
  return (
    <>
      <PageHero title="Tools and ideas to help you build better." lead="Guides, templates and toolkits you can put to work this week." />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <FilterBar label="Filter resources by category" options={[["all", "All"], ...resourceCats]} value={cat} onChange={setCat} />
          {cat === "all" && <div style={{ marginBottom: 20 }}><ToolkitFeature /></div>}
          {list.length === 0 ? <EmptyState title={"No " + label + " yet"} text="Tell us what would be useful and we will let you know when it is ready." action={["Contact Mwega", "/contact"]} />
            : <div className="grid3">{list.map((r) => <ResourceCard key={r.id} resource={r} />)}</div>}
        </div>
      </section>
      <CTASection />
      <QueryParam name="category" onValue={(category) => setQuery({ category })} />
    </>
  );
}

export function CaseStudiesPage() {
  const [pillar, setPillar] = useState("all");
  const list = pillar === "all" ? caseStudies : caseStudies.filter((c) => c.pillar === pillar);
  return (
    <>
      <PageHero title="Real problems. Practical solutions." lead="How the work gets done, told the same way each time: the challenge, our approach, what we built and what changed." />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <FilterBar label="Filter case studies by solution" options={[["all", "All"], ...solutions.map((s) => [s.slug, s.short])]} value={pillar} onChange={setPillar} />
          <div className="cs-grid">{list.map((c) => <CaseStudyCard key={c.slug} study={c} onLight />)}</div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function StickyCta() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (path === "/contact") return null;
  return <div className={cx("sticky-cta tone-dark", show && "is-on")}><Button href="/contact" className="btn-block" tabIndex={show ? 0 : -1}>Let's Talk</Button></div>;
}

/* Posts to app/api/contact/route.js, which sends the enquiry by email. */
export function ContactForm() {
  const [v, setV] = useState({ name: "", organisation: "", email: "", phone: "", topic: "", message: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const summary = useRef(null);
  const set = (k) => (e) => { const val = e.target.value; setV((s) => ({ ...s, [k]: val })); };
  const presetTopic = (topic) => { if (topics.includes(topic)) setV((s) => ({ ...s, topic })); };
  const labels = { name: "Name", email: "Email", topic: "What do you need help with?", message: "Message" };
  const onSubmit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = "Enter your name.";
    if (!v.email.trim()) er.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) er.email = "Enter an email address in the format name@example.com.";
    if (!v.topic) er.topic = "Choose what you need help with.";
    if (v.message.trim().length < 10) er.message = "Tell us a little more. A sentence is enough.";
    setErrors(er);
    if (Object.keys(er).length) { setTimeout(() => summary.current && summary.current.focus(), 0); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      setStatus(res.ok ? "success" : "error");
    } catch (err) { setStatus("error"); }
  };
  const field = (k, label, input, optional) => (
    <div className={cx(errors[k] && "has-error")}>
      <label htmlFor={"f-" + k} className="field-label">{label}{optional && <span> (optional)</span>}</label>
      {input}
      {errors[k] && <p className="field-error" id={"f-" + k + "-error"}>Error: {errors[k]}</p>}
    </div>
  );
  const props = (k) => ({ id: "f-" + k, name: k, className: "input", value: v[k], onChange: set(k), "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? "f-" + k + "-error" : undefined });
  if (status === "success") {
    return (
      <div className="panel" role="status">
        <h2 className="h3">Thanks, {v.name.trim().split(" ")[0]}. We've got your enquiry.</h2>
        <p className="body">{nextSteps[0]}</p>
        <Button type="button" variant="ghost" onClick={() => { setStatus("idle"); setV((s) => ({ ...s, message: "" })); }}>Send another enquiry</Button>
      </div>
    );
  }
  const errKeys = Object.keys(errors);
  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label="Enquiry">
      <QueryParam name="topic" onValue={presetTopic} />
      {errKeys.length > 0 && (
        <div className="form-summary" ref={summary} tabIndex={-1} role="alert">
          <p className="strong" style={{ color: "inherit" }}>Check {errKeys.length === 1 ? "this field" : "these " + errKeys.length + " fields"} and send again.</p>
          <ul>{errKeys.map((k) => <li key={k}><a href={"#f-" + k} onClick={(e) => { e.preventDefault(); const el = document.getElementById("f-" + k); if (el) el.focus(); }}>{labels[k]}</a></li>)}</ul>
        </div>
      )}
      {status === "error" && <div className="form-summary" role="alert">Your enquiry was not sent. Please try again in a moment.</div>}
      <div className="form-row">
        {field("name", "Name", <input type="text" autoComplete="name" {...props("name")} />)}
        {field("organisation", "Organisation", <input type="text" autoComplete="organization" {...props("organisation")} />, true)}
      </div>
      <div className="form-row">
        {field("email", "Email", <input type="email" autoComplete="email" {...props("email")} />)}
        {field("phone", "Phone", <input type="tel" autoComplete="tel" {...props("phone")} />, true)}
      </div>
      {field("topic", "What do you need help with?", <select {...props("topic")}><option value="">Choose one</option>{topics.map((t) => <option key={t} value={t}>{t}</option>)}</select>)}
      {field("message", "Message", <textarea rows={6} {...props("message")} />)}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="f-website">Leave this field empty</label>
        <input type="text" id="f-website" name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} />
      </div>
      <div><Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending enquiry" : "Send Enquiry"}</Button></div>
    </form>
  );
}
