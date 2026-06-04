"use client";
import { Mail, BadgeCheck, Folder, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { TechStack } from "@/components/tech-stack";
import { useRouter } from "next/navigation";

const highlights = [
  "Building full-stack apps & AI-powered systems",
  "Exploring LLMs, agents & retrieval systems",
  "Open-source contributor & lifelong learner",
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex-1 flex flex-col font-mono">
      <div className="mx-auto w-full max-w-3xl px-6 py-8 md:py-10 mt-8">
        <section className="flex flex-col items-start">
          {/* Name row + action buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-6">
            <h1 className="flex items-center gap-3 text-4xl font-semibold tracking-tight md:text-6xl font-sans">
              Purav Kumar
            </h1>

            {/* Action button */}
            <button
              onClick={() => router.push("/projects")}
              className="flex items-center gap-2 rounded-xl cursor-pointer transition-all duration-300 border border-white/20 px-6 py-2.5 text-sm text-zinc-300 hover:bg-white/10 hover:border-white/35 hover:text-white shrink-0"
            >
              <Folder className="h-4 w-4" />
              Projects
            </button>
          </div>

          {/* Bio */}
          <p className="mt-6 w-full text-base text-slate-400 leading-relaxed">
            A <span className="text-stone-200">FULL STACK DEVELOPER</span> &amp; <span className="text-stone-200">AI ENGINEER</span> who loves to build modern tech systems that solve real world problems using unique and state-of-the-art approach. From crafting performant web apps to building intelligent agents and retrieval pipelines — I care about simplicity on the surface, and depth where it matters.
          </p>

          {/* Social links + Resume */}
          <div className="mt-6 flex w-full flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/puravky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-amber-700"
              >
                <GithubIcon width={15} height={15} />
                Github
              </a>
              <a
                href="https://linkedin.com/in/puravky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-blue-400"
              >
                <LinkedinIcon width={15} height={15} />
                Linkedin
              </a>
              <a
                href="https://x.com/async7i"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
              >
                <XIcon width={15} height={15} />
                DM
              </a>
              <a
                href="mailto:puravkumaryadav@gmail.com"
                className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-yellow-500"
              >
                <Mail size={15} />
                Mail
              </a>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-emerald-400 self-start sm:self-auto"
            >
              <FileText size={15} />
              Resume
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-12">
            <h2 className="text-md md:text-lg font-mono tracking-normal text-slate-300 uppercase">
              Highlights
            </h2>
            <ul className="space-y-1.5 pl-1">
              {highlights.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-zinc-400 text-sm md:text-base"
                >
                  <span className="text-zinc-600 mt-0.5 select-none">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <TechStack />

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-3 mt-auto">
        <p className="text-center text-xs text-zinc-500 tracking-wider">
          © 2026 puravky. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
