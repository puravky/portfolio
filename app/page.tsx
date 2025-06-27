"use client"

import Skills from "@/components/skills";
import Github from "@/components/github";
import Link from "next/link";
import { socialLinks } from "@/config";
import { Slide } from "@/components/animations/Slide";

export default function Portfolio() {
  return (
    <Slide delay={0.5}>
      <div className="">
        <header className="mb-12">
          <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-400">
            I'm a 21-year-old developer. Currently, I'm an engineer at <span className="font-medium underline">piratecrewfun</span> where I'm dealing with fullstack, and meteora stuffs. Before that, I was the a part of builders & adv svm cohorts at{" "}
            <span className="font-medium underline">solanaturbine</span>.
          </p>
          <p className="text-gray-600 leading-relaxed dark:text-gray-400">
            in my spare time, i enjoy reading, writing, learning new things, occasionally doodling / sketching  and travel (a lot).
          </p>
        </header>
        <h2 className="text-lg font-medium mb-6">generally i be with:</h2>
        <Skills />
        <section className="mb-12">
          <h2 className="text-lg font-medium mb-6">experiences:</h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">piratecrewfun</h3>
                <span className="text-sm text-gray-500">2025 - present</span>
              </div>
              <p className="text-gray-600 text-sm">dealing with fe and meteora stuffs.</p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">superteam</h3>
                <span className="text-sm text-gray-500">2025 - present</span>
              </div>
              <p className="text-gray-600 text-sm">
                joined Superteam as a member and a 2x grant recipient.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">akatsuki</h3>
                <span className="text-sm text-gray-500">2025 - present</span>
              </div>
              <p className="text-gray-600 text-sm">
                building a team a cracked devs, and till now we managed to win $15k+ grants.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">project athena</h3>
                <span className="text-sm text-gray-500">2024 - present</span>
              </div>
              <p className="text-gray-600 text-sm">got the opp to be a core member here, community of crack devs shipping and developing day and night.
              </p>
            </div>
          </div>
        </section>
        <div>
          <Github />
        </div>
        <div className="mt-9 w-full h-px bg-zinc-600"></div>
        <p className="text-gray-600 leading-relaxed mt-6 dark:text-gray-400">
          if you're interested in collaborating on building some cool sh*ts,
          feel free to dm me on <Link href={socialLinks.twitter}>x</Link> or
          drop me an <Link href={socialLinks.email}>email</Link>. i will get
          back to you within 2 business days. i'm always open to new ideas
          and projects!
        </p>
        <p className="text-gray-500 mt-6 mb-10">
          built and maintained by{" "}
          <a className="underline" href="https://x.com/avhidotsol" target="_blank">
            avhi
          </a>
          .
        </p>
      </div>
    </Slide>
  )
}
