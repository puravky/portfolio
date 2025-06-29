"use client"

import Skills from "@/components/skills";
import Github from "@/components/github";
import Link from "next/link";
import { socialLinks } from "@/config";
import { Slide } from "@/components/animations/Slide";

export default function Portfolio() {
  return (
    <Slide delay={0.5}>
      <div className="text-sm">
        <header className="mb-6">
          <p className="text-gray-600 mb-6 dark:text-gray-400">I'm 21-year-old developer based in india.</p>
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            Currently, an engineer at <Link href="https://x.com/PirateCrewFun" target="_blank" className="font-medium underline decoration-gray-200 decoration-4 dark:decoration-gray-800">piratecrewfun</Link> working across full-stack stuff, smart contract workflows, and Meteora integrations. Before this, I was part of the Builders and Advanced SVM cohorts at {" "}
            <Link href="https://x.com/solanaturbine" target="_blank" className="font-medium underline decoration-gray-200 decoration-4 dark:decoration-gray-800">solanaturbine</Link>.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            in my spare time, i enjoy reading, writing, learning new things, occasionally doodling/sketching and traveling (a lot).
          </p>
        </header>
        <h2 className="text-lg font-medium mb-6">generally i be with:</h2>
        <Skills />
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-6 mt-6">experiences:</h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">piratecrewfun</h3>
                <span className="text-sm text-gray-500">Jun 2025 – Present</span>
              </div>
              <p className="text-sm text-gray-500 italic mb-2">Engineer</p>
              <p className="text-gray-600 text-sm">
                Working across full-stack, smart contract workflows, and Meteora integrations. building and maintaining systems that bridge user experiences with on-chain mechanics in the Solana ecosystem, with a focus on integrating Meteora’s infrastructure and smart routing capabilities.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">solanaturbine</h3>
                <span className="text-sm text-gray-500">Various Dates</span>
              </div>
              <p className="text-sm text-gray-500 italic mb-2">Cohort student (Builder & Advanced SVM)</p>
              <p className="text-gray-600 text-sm">
                part of Builder and Advanced SVM cohorts where we explored Solana's architecture deeply ~ understanding the runtime, Sealevel parallelization, and low-level mechanics of the chain.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">superteam</h3>
                <span className="text-sm text-gray-500">Mar 2025 – Present</span>
              </div>
              <p className="text-sm text-gray-500 italic mb-2">member / 2x Grant Recipient</p>
              <p className="text-gray-600 text-sm">
                Active member of <Link className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800" target="_blank" href="https://superteam.fun/">Superteam</Link>, contributing to the Solana ecosystem through projects, collaborations, and community initiatives.
                Awarded 2 grants totaling <span className="blur-sm">$X,XXX</span> for shipping <Link className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800" href="https://www.avhidotsol.xyz/proof-of-work/blink-arena">blink-arena</Link> & <Link className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800" href="https://www.avhidotsol.xyz/proof-of-work/nestfolio">nestfolio</Link>.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">akatsuki</h3>
                <span className="text-sm text-gray-500">Jan 2025 – Present</span>
              </div>
              <p className="text-sm text-gray-500 italic mb-2">kisame</p>
              <p className="text-gray-600 text-sm">
                co-founder and team lead of <Link className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800" href="https://x.com/akatsuk10_" target="_blank">akatsuki</Link> ~ a team of high-performing developers.
                We've won $15k+ in grants while building experimental products across web2/web3 infrastructures.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">project athena</h3>
                <span className="text-sm text-gray-500">Nov 2024 – Present</span>
              </div>
              <p className="text-sm text-gray-500 italic mb-2">Core Contributor</p>
              <p className="text-gray-600 text-sm">
                Core member and contributor at <Link className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800" href="https://x.com/AthenaF0SS" target="_blank">Project Athena</Link>, a community of skilled developers focused on building and shipping fast.
                Collaborating on high-impact ideas and pushing technical boundaries daily.
              </p>
            </div>
          </div>
        </section>
        <div>
          <Github />
        </div>
        <div className="mt-9 w-full h-px bg-zinc-300 dark:bg-zinc-600"></div>
        <p className="text-gray-600 mt-6 dark:text-gray-400">
          if you're interested in collaborating on building some cool sh*ts,
          feel free to dm me on <Link className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800" href={socialLinks.twitter}>x</Link> or
          drop me an <Link className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800" href={socialLinks.email}>email</Link>. i will get
          back to you within 2 business days. i'm always open to new ideas
          and projects!
        </p>
        <p className="text-gray-500 mt-6 mb-10">
          built and maintained by{" "}
          <a className="underline decoration-gray-200 decoration-4 dark:decoration-gray-800" href={socialLinks.twitter} target="_blank">
            avhi
          </a>
          .
        </p>
      </div>
    </Slide>
  )
}
