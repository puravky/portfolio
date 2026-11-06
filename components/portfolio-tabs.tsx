"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import { BriefcaseBusiness, Clapperboard, FileText, GraduationCap, Heart, Home, ImagePlus, Layers3, Mail, Music2, NotebookPen, Palette, Trophy, Wrench } from "lucide-react";
import { BrandIcon } from "@/components/brand-icon";
import { CopyEmail } from "@/components/copy-email";

const socialLinks = {
  github: "https://github.com/puravky",
  linkedin: "https://www.linkedin.com/in/puravky",
  x: "https://x.com/puravky",
  email: "mailto:puravkumaryadav@gmail.com",
};

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
          <div className="email-cluster"><Mail size={14} aria-hidden="true" /><a href={socialLinks.email}>puravkumaryadav@gmail.com</a><CopyEmail /></div>
          <div className="social-icons">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><BrandIcon name="github" label="GitHub" /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BrandIcon name="linkedin" label="LinkedIn" /></a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X"><BrandIcon name="x" label="X" /></a>
            <a className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open résumé PDF"><FileText size={17} /><span>résumé</span></a>
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
  return <ComingSoon icon={BriefcaseBusiness} label="Selected work is being prepared." />;
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
  return <ComingSoon icon={NotebookPen} label="Notes from the build are on their way." />;
}

function ComingSoon({ icon: Icon, label }: { icon: typeof BriefcaseBusiness; label: string }) {
  return <div className="coming-soon"><Icon size={22} strokeWidth={1.5} /><p>coming soon</p><span>{label}</span></div>;
}

const funCards = [
  { title: "art I love", icon: Palette, className: "tape-top" },
  { title: "shows I love", icon: Clapperboard, className: "clip-card" },
  { title: "artists I love", icon: Music2, className: "tape-corner" },
  { title: "players I love", icon: Trophy, className: "clip-card alt" },
];

function FunPanel() {
  return (
    <div className="fun-panel">
      <div className="fun-intro"><p className="pixel-label"><Heart size={13} /> things outside the terminal</p><h2>A small wall for the stuff I keep coming back to.</h2><p>Images, names, and odd little favorites will live here.</p></div>
      <div className="fun-grid">
        {funCards.map(({ title, icon: Icon, className }) => <article className={`fun-card ${className}`} key={title}><div className="fun-image-slot"><ImagePlus size={22} /><span>add image</span></div><div className="fun-card-label"><Icon size={14} /><h3>{title}</h3></div></article>)}
      </div>
    </div>
  );
}
