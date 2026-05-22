"use client";
import { Mail, BadgeCheck, Folder, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { TechStack } from "@/components/tech-stack";
import router from "next/router";


export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-24">
        <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <h1 className="flex items-center justify-center gap-3 text-4xl font-semibold tracking-tight md:text-7xl">
            Purav Kumar
             <BadgeCheck className="h-8 w-8 md:h-12 md:w-12" />
          </h1>

          <p className="mt-6 max-w-xl text-slate-400">
            A <span className="text-stone-200">FULL STACK DEVELOPER</span> & <span className="text-stone-200">ML ENGINEER</span> who loves to build modern tech systems that solve real world problems using unique and state-of-the-art approach. I care about simplicity on the surface, and depth where it matters.
          </p>

          <div className="mt-8 flex gap-4">
            <button onClick={() => router.push('/projects')} className="flex items-center gap-2 rounded-xl font-mono cursor-pointer transition-colors duration-300 bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/25 px-6 py-2">
              <Folder className="h-4 w-4" />
              Projects
            </button>
            <button onClick={() => window.open('/resume.pdf', '_blank')} className="flex items-center gap-2 rounded-xl font-mono cursor-pointer transition-colors duration-300 bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/25 px-6 py-2">
              <FileText className="h-4 w-4" />
              Resume
            </button>
          </div>

          {/* Socials Section */}


          <div className="mt-8 flex flex-wrap justify-center gap-4 text-slate-100">
            <a href="https://github.com/puravky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl cursor-pointer transition-colors duration-300 bg-white/5 border border-white/15 px-5 py-2.5 hover:bg-white/10 hover:text-amber-600 hover:border-amber-800">
              <GithubIcon width={18} height={18} />
              <span>Github</span>
            </a>
            <a href="https://linkedin.com/in/puravky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl cursor-pointer transition-colors duration-300 bg-white/5 border border-white/15 px-5 py-2.5 hover:bg-white/10 hover:text-blue-500 hover:border-blue-500/50">
              <LinkedinIcon width={18} height={18} />
              <span>Linkedin</span>
            </a>
            <a href="https://x.com/async7i" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl cursor-pointer transition-colors duration-300 bg-white/5 border border-white/15 px-5 py-2.5 hover:bg-white/10 hover:text-white hover:border-white/50 tracking-tighter">
              <XIcon width={18} height={18} />
              <span>DM on X</span>
            </a>
            <a href="mailto:puravkumaryadav@gmail.com" className="flex items-center gap-2 rounded-xl cursor-pointer transition-colors duration-300 bg-white/5 border border-white/15 px-5 py-2.5 hover:bg-emerald-500/10 hover:text-yellow-500 hover:border-yellow-600 tracking-tighter">
              <Mail size={18} />
              <span>Mail me</span>
            </a>
          </div>
        </section>
      </div>

      <TechStack />
    </main>
  );
}
