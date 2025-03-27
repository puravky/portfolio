"use client";

import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";
import Particles from "./components/particle";
import CurrentDateTimeGMT from "./components/date";
import Github from "./components/github";
import { Slide } from "./components/animations/Slide";
import Skills from "./components/skills";

export default function Page() {
  return (
    <Slide delay={0.5}>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>

        <section className="relative z-10">
          <a href={socialLinks.twitter} target="_blank">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0 dark:border"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </a>

          <h1 className="mb-8 text-2xl font-medium tracking-tight">
            engineer.
          </h1>
          <div className="prose prose-neutral dark:prose-invert">
            <p>
              i'm a 21-year-old developer and an undergraduate student with a
              passion for building cool products, with a strong understanding of
              web2 / web3 concepts.
            </p>
            <p>
              in my spare time, i enjoy reading, writing, learning new things,
              and occasionally doodling / sketching.
            </p>
            <div className="flex gap-3 mb-7 mt-7">
              <Link
                target="_"
                href="https://proximal-reaper-8ea.notion.site/avhi-proof-of-work-1afcb21267e48041a4d0fb71d99706f6"
              >
                <button className="rounded-lg text-center px-4 py-2 border border-transparent border-zinc-200  dark:border-zinc-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  proof of works
                </button>
              </Link>
              <Link target="_" href="https://cal.com/avhidotsol-wsblbp/meet">
                <button className="rounded-lg text-center px-4 py-2 border border-transparent border-zinc-200  dark:border-zinc-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  book a meet
                </button>
              </Link>
            </div>
            <div>
              <Skills />
            </div>
            <div className="mt-8">
              some of my recent achievements / experiences: <br />
              <div className="flex tracking-tight rounded-md py-0 mt-4 items-center space-x-4">
                <Image
                  src="/turbine.jpg"
                  width={48}
                  height={48}
                  alt="turbine"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">
                    solanaturbin3 // builder.
                    <span className="text-gray-400 ml-2">mar 2025</span>
                  </p>
                  <p className="tracking-tight text-sm text-gray-400">
                    successfully graduated builders' cohort and also ship
                    capstone.
                  </p>
                </div>
              </div>
              <div className="flex tracking-tight rounded-md py-0 mt-2 items-center space-x-4">
                <Image
                  src="/superteam.jpg"
                  width={48}
                  height={48}
                  alt="superteam"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">
                    superteam // grant recipient
                    <span className="text-gray-400 ml-2">nov 2024</span>
                  </p>
                  <p className="tracking-tight text-sm text-gray-400">
                    Received a $1000 grant from the Solana Foundation for
                    creating a product using Solana Blinks.
                  </p>
                </div>
              </div>
              <div className="flex tracking-tight rounded-md py-0 mt-0 items-center space-x-4">
                <Image
                  src="/athena.png"
                  width={48}
                  height={48}
                  alt="superteam"
                  className="w-12 h-12 rounded-full object-cover border border-gray-500"
                />
                <div>
                  <p className="font-semibold">
                    project athena // core member.
                    <span className="text-gray-400 ml-2">nov 2024</span>
                  </p>
                  <p className="tracking-tight text-sm text-gray-400">
                    a community of crack devs shiiping and developing day and
                    nights
                  </p>
                </div>
              </div>
              <br />
            </div>
            <div className="">
              <Github />
            </div>
            <div className="mt-9 w-full h-px bg-zinc-800"></div>
            <p>
              if you're interested in collaborating on building some cool sh*ts,
              feel free to dm me on <Link href={socialLinks.twitter}>x</Link> or
              drop me an <Link href={socialLinks.email}>email</Link>. i will get
              back to you within 2 business days. i'm always open to new ideas
              and projects!
            </p>
            <p>
              built and maintained by{" "}
              <a href="https://x.com/avhidotsol" target="_blank">
                avhi
              </a>
              .
            </p>
            <div className="text-gray-400 text-sm">
              <CurrentDateTimeGMT />
            </div>
          </div>
        </section>
      </div>
    </Slide>
  );
}
