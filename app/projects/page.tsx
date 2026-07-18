import type { Metadata } from "next";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Purav Kumar | Projects",
  description:
    "A showcase of projects built by Purav Kumar — full-stack apps, AI systems, and open-source tools.",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  date: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "dialogOS",
    description:
      "A multi-modal RAG pipeline with adaptive chunking, hybrid search, and LLM-driven re-ranking. Built to answer complex queries over large document corpora with high fidelity.",
    tags: ["Python", "LangChain", "FAISS", "FastAPI"],
    date: "Jun 2025",
    github: "https://github.com/puravky/dialogOS",
    demo: "https://github.com/puravky",
  },
  {
    title: "FinShield",
    description:
      "An encrypted key-value store with TTL support, access control, and audit logging. Designed for edge deployments with minimal infrastructure overhead.",
    tags: ["Go", "SQLite", "gRPC", "Docker"],
    date: "Aug 2024",
    github: "https://github.com/puravky/FinShield",
    demo: "https://finshield67.streamlit.app",
  },
  {
    title: "Portfolio",
    description:
    "Lightweight chat interface over local LLMs. Supports streaming, system prompt injection, conversation branching, and model hot-swapping without page reload.",
    tags: ["React", "FastAPI", "Ollama", "WebSockets"],
    date: "Nov 2024",
    github: "https://github.com/puravky/portfolio",
    demo: "https://www.puravky.me/"
  },
  {
    title: "GitSay",
    description:
      "Real-time developer activity dashboard. Aggregates commit history, PR velocity, and issue throughput across repos into a unified analytics view.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    date: "Mar 2025",
    github: "https://github.com/puravky/GitSay",
    demo: "https://gitsay.vercel.app/",
  },
  {
    title: "Synapse",
    description:
      "Graph-based knowledge management system. Nodes represent concepts, edges encode relationships. Built for researchers who think in networks, not lists.",
    tags: ["TypeScript", "D3.js", "Neo4j", "Express"],
    date: "Apr 2024",
    github: "https://github.com/puravky",
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex-1 flex flex-col font-mono">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 md:py-12">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-white font-mono">
            Projects
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
            Some side quests for showcase.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center dotted line — thicker, brighter dashes */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] animate-timeline-flow"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 8px, transparent 8px, transparent 18px)",
            }}
          />

          <div className="flex flex-col gap-14">
            {projects.map((project, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={project.title} className="relative flex items-center">
                  {/* Left slot — card gets 58%, date gets 42% */}
                  <div className="w-1/2 pr-8 flex justify-end">
                    {isLeft ? (
                      <ProjectCard project={project} />
                    ) : (
                      <DateLabel date={project.date} align="right" />
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="h-3 w-3 rounded-full border-2 border-white/50 bg-zinc-950 shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300" />
                  </div>

                  {/* Right slot */}
                  <div className="w-1/2 pl-8 flex justify-start">
                    {isLeft ? (
                      <DateLabel date={project.date} align="left" />
                    ) : (
                      <ProjectCard project={project} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-3 mt-auto">
        <p className="text-center text-xs text-zinc-500 tracking-wider">
          © 2026 puravky. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

function DateLabel({
  date,
  align,
}: {
  date: string;
  align: "left" | "right";
}) {
  return (
    <span
      className={`text-xs text-zinc-500 font-mono tracking-[0.2em] select-none uppercase ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {date}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group w-full relative flex flex-col gap-4 rounded-2xl border border-white/12 bg-zinc-900/30 px-6 py-5 backdrop-blur-sm
      transition-all duration-300 ease-out
      hover:scale-[1.03] hover:border-white/25 hover:bg-zinc-900/55
      hover:shadow-[0_8px_40px_rgba(255,255,255,0.12),0_0_0_1px_rgba(255,255,255,0.25)]
      hover:-translate-y-0.5
    ">

      {/* Shimmer top-edge line on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-xl
        bg-linear-to-r from-transparent via-white/30 to-transparent
        opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
      />

      {/* Corner glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl
        opacity-0 transition-opacity duration-500 group-hover:opacity-100
        bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.15),transparent_30%)]"
      />

      {/* Title row */}
      <div className="flex items-center justify-between gap-4 w-full">
        <h2 className="text-base font-semibold text-white tracking-tight font-sans leading-none">
          {project.title}
        </h2>

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              id={`github-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-1.5 rounded-lg border border-white/12 px-3 py-1.5 text-xs text-zinc-400
                transition-all duration-200
                hover:border-white/30 hover:text-white hover:bg-white/8 hover:scale-105 active:scale-95"
            >
              <GithubIcon width={12} height={12} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              id={`demo-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-1.5 rounded-lg border border-white/12 px-3 py-1.5 text-xs text-zinc-400
                transition-all duration-200
                hover:border-white/30 hover:text-white hover:bg-white/8 hover:scale-105 active:scale-95"
            >
              <ExternalLink size={11} />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-400 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/4 px-2.5 py-1 text-xs text-zinc-400 font-mono tracking-wide
              transition-all duration-200
              group-hover:border-white/18 group-hover:text-zinc-300 group-hover:bg-white/6"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
