"use client"

import Skills from "@/components/skills";
import Link from "next/link";
import { socialLinks } from "@/config";
import { Slide } from "@/components/animations/Slide";
import { VisitTracker } from "./components/visitor";

export default function Portfolio() {
  return (
    <Slide delay={0.5}>
      <div className="text-medium">
        <header className="mb-6">
          <p className="mb-6 opacity-80">I'm 22-year-old developer based in india.</p>
          <p className="mb-4 opacity-80">
            Currently, an engineer at <Link href="https://x.com/PirateCrewFun" target="_blank" className="font-medium underline decoration-gray-400 decoration-4 dark:decoration-gray-600">piratecrewfun</Link> working across full-stack stuff, smart contract workflows, and Meteora integrations. Before this, I was part of the Builders and Advanced SVM cohorts at {" "}
            <Link href="https://x.com/solanaturbine" target="_blank" className="font-medium underline decoration-gray-400 decoration-4 dark:decoration-gray-600">solanaturbine</Link>.
          </p>
          <p className="opacity-80">
            in my spare time, i enjoy reading, writing, learning new things, occasionally doodling/sketching and traveling (a lot).
          </p>
        </header>
        <h2 className="text-lg font-medium mb-6">tools & frameworks I work with:</h2>
        <Skills />
        <div className="mt-9 w-full h-px bg-gray-400 dark:bg-gray-600"></div>
        <p className="mt-6 opacity-80">
          if you're interested in collaborating on building some cool sh*ts,
          feel free to dm me on <Link className="underline decoration-gray-400 decoration-4 dark:decoration-gray-600" href={socialLinks.twitter}>x</Link> or
          drop me an <Link className="underline decoration-gray-400 decoration-4 dark:decoration-gray-600" href={socialLinks.email}>email</Link>. i will get
          back to you within 2 business days. i'm always open to new ideas
          and projects!
        </p>
        <p className="opacity-60 mt-6 mb-10">
          built and maintained by{" "}
          <a className="underline decoration-gray-400 decoration-4 dark:decoration-gray-600" href={socialLinks.twitter} target="_blank">
            avhi
          </a>
          .
        </p>
        <VisitTracker />
      </div>
    </Slide>
  )
}
