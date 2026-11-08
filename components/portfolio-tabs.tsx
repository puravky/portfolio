"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import { Braces, BriefcaseBusiness, Cog, Construction, FileText, GraduationCap, Heart, Home, Layers3, Mail, NotebookPen, Wrench } from "lucide-react";
import { BrandIcon } from "@/components/brand-icon";
import { CopyEmail } from "@/components/copy-email";
import { PhotoStamps } from "@/components/photo-stamps";
import { siteConfig } from "@/site-config";

type Tab = "Home" | "Works" | "Stack" | "Writings" | "Fun";

const tabs = [
  { label: "Home" as const, icon: Home },
  { label: "Works" as const, icon: BriefcaseBusiness },
  { label: "Stack" as const, icon: Layers3 },
  { label: "Writings" as const, icon: NotebookPen },
  { label: "Fun" as const, icon: Heart },
];

const stack = [
  { icon: "nextjs" as const, title: "Next.js", group: "interfaces" },
  { icon: "react" as const, title: "React", group: "interfaces" },
  { icon: "typescript" as const, title: "TypeScript", group: "interfaces" },
  { icon: "tailwind" as const, title: "Tailwind CSS", group: "interfaces" },
  { icon: "python" as const, title: "Python", group: "systems + AI" },
  { icon: "fastapi" as const, title: "FastAPI", group: "systems + AI" },
  { icon: "supabase" as const, title: "Supabase", group: "data" },
  { icon: "postgres" as const, title: "Postgres", group: "data" },
];

export function PortfolioTabs() {
  const [active, setActive] = useState<Tab>("Home");
  const activeIndex = tabs.findIndex(({ label }) => label === active);

  return (
    <section className="portfolio-tabs" aria-label="Portfolio sections">
      <div className="tab-list" role="tablist" aria-label="Sections" style={{ "--active-tab": activeIndex } as CSSProperties}>
        {tabs.map(({ label, icon: Icon }) => (
          <button key={label} role="tab" aria-selected={active === label} onClick={() => setActive(label)}>
            <Icon size={13} aria-hidden="true" /><span>{label.toLowerCase()}</span>
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel" key={active}>
        {active === "Home" && <HomePanel />}
        {active === "Works" && <WorksPanel />}
        {active === "Stack" && <StackPanel />}
        {active === "Writings" && <WritingsPanel />}
        {active === "Fun" && <FunPanel />}
      </div>
    </section>
  );
}

function HomePanel() {
  return (
    <div className="home-panel">
      <section className="intro-block">
        <p className="pixel-kicker">software × systems × intelligence</p>
        <h1>I build systems that <em>ship.</em></h1>
        <p className="intro-copy">I’m a product-minded engineer living between software development and AI engineering - comfortable moving from an unfamiliar codebase to architecture, APIs, data, deployment, and the final interface.</p>
        <div className="contact-row">
          <div className="email-cluster"><Mail size={14} aria-hidden="true" /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><CopyEmail email={siteConfig.email} /></div>
          <div className="social-icons">
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><BrandIcon name="github" label="GitHub" /></a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BrandIcon name="linkedin" label="LinkedIn" /></a>
            <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" aria-label="X"><BrandIcon name="x" label="X" /></a>
            <a className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open résumé PDF"><FileText size={17} /><span>CV</span></a>
          </div>
        </div>
      </section>

      <section className="proof-grid" aria-label="How I work">
        <article><span>01</span><h3>Production-minded</h3><p>I think past the demo: failure states, permissions, deployment, observability, and the next person maintaining the code.</p></article>
        <article><span>02</span><h3>Systems thinker</h3><p>I trace how interfaces, APIs, data, background work, and models affect one another before optimizing a single layer.</p></article>
        <article><span>03</span><h3>Fast adapter</h3><p>I’m comfortable learning unfamiliar tools and codebases when the problem calls for them instead of forcing one favorite stack.</p></article>
        <article><span>04</span><h3>Product-aware</h3><p>I care whether a technically correct system is understandable, useful, and appropriately scoped for the person using it.</p></article>
      </section>

      <div className="journey-split">
        <section className="journey-section">
          <p className="pixel-label"><Wrench size={13} /> experience</p>
          <div className="journey-list"><article><div className="journey-logo"><Image src="/beat22.png" alt="Beat22" width={44} height={44} /></div><div><h3>Beat22</h3><p>Sde Intern · product and platform work.</p></div><div className="journey-meta"><span>JUL 2026 - SEP 2026</span><strong>3 Months</strong></div></article></div>
        </section>
        <section className="journey-section education-section">
          <p className="pixel-label"><GraduationCap size={13} /> education</p>
          <div className="journey-list"><article><div className="journey-logo dtu"><Image src="/dtu-logo.png" alt="Delhi Technological University" width={44} height={44} /></div><div><h3>Delhi Technological University</h3><p>B.Tech · Software Eng · New Delhi</p></div><div className="journey-meta"><span>Expected 2028</span><strong>4 years</strong></div></article></div>
        </section>
      </div>
    </div>
  );
}

function WorksPanel() {
  return <ComingSoon status="work in progress" label="Selected work is being prepared." />;
}

function StackPanel() {
  return (
    <div className="stack-panel">
      <div className="stack-intro"><p className="pixel-label"><Layers3 size={13} /> tools I reach for</p><h2>Chosen by purpose, not identity.</h2><p>I don’t sell myself as one framework. These are the tools that appear repeatedly in the public work.</p></div>
      <div className="stack-grid">{stack.map((item) => <article key={item.title}><BrandIcon name={item.icon} label={item.title} /><div><h3>{item.title}</h3><p>{item.group}</p></div></article>)}</div>
    </div>
  );
}

function WritingsPanel() {
  return <ComingSoon status="under construction" label="Notes from the build are on their way." />;
}

function ComingSoon({ status, label }: { status: string; label: string }) {
  return <div className="coming-soon"><div className="construction-mark" aria-hidden="true"><Construction className="construction-main" /><Cog className="construction-cog" /></div><p>{status}</p><span>{label}</span></div>;
}

const funFacts = [
  { key: "players I'm watching", value: "Arda Guler, Rayan Cherki, Desire Doue" },
  { key: "design taste", value: "I’m a fan of minimalism" },
  { key: "shows I'm watching", value: "Dexter, New Girl, Lanterns" },
  { key: "unusual talent", value: "I only write code after midnight, I sleep after having coffee" },
];

function FunPanel() {
  return (
    <div className="fun-panel">
      <div className="fun-intro"><p className="pixel-label"><Heart size={13} /> outside the terminal</p><h2>Things that make me human.</h2><p>Here are few facts about me.</p></div>
      <section className="fact-artifact" aria-label="Fun facts about Purav">
        <header className="fact-artifact-header">
          <div><Braces size={15} aria-hidden="true" /><span>human.config</span></div>
          <span className="fact-status"><i aria-hidden="true" /> read only</span>
        </header>
        <ol className="fun-facts">
          {funFacts.map((fact, index) => <li key={fact.key}><span className="fact-index">{String(index + 1).padStart(2, "0")}</span><span className="fact-key">{fact.key}</span><p>{fact.value}</p></li>)}
        </ol>
        <footer className="fact-artifact-footer"><span>4 entries</span><span>last updated · now</span></footer>
      </section>
      <div className="fun-stamps"><PhotoStamps /></div>
    </div>
  );
}
