"use client";

import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";
import Particles from "./components/particle";
import CurrentDateTimeGMT from "./components/date";
import Github from "./components/github";
import { Slide } from "./components/animations/Slide";
import Skills from "./components/skills";
import { FaLightbulb } from "react-icons/fa6";

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

          <h1 className="mb-2 text-2xl font-medium tracking-tight">
            engineer ~ i use arch btw.
          </h1>
          <div className="prose prose-neutral dark:prose-invert">
            <p>
              I'm a 21-year-old developer a member of{" "}
              <Link target="_" href="https://superteam.fun/">
                superteam
              </Link>{" "}
              and a graduate of the{" "}
              <Link target="_" href="https://turbin3.com/">
                solanaturbine
              </Link>{" "}
              builders' cohort with a passion for building cool products, with a
              strong understanding of Web2/Web3 concepts.
            </p>
            <p>
              in my spare time, i enjoy reading, writing, learning new things,
              and occasionally doodling / sketching.
            </p>
            <div className="flex gap-3 mb-7 mt-7">
              <Link target="_" href="https://cal.com/avhidotsol-wsblbp/meet">
                <button className=" flex items-center gap-2 rounded-lg text-center px-4 py-2 border border-transparent border-zinc-200  dark:border-zinc-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <img
                    src="/icons/google-meet.png"
                    alt="book a meet"
                    className="h-5 w-5 flex"
                  />

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
                  className="w-12 h-12 rounded-full object-cover border border-gray-500"
                />
                <div>
                  <p className="font-semibold">
                    <Link className="!font-semibold" href="/experience/turbine">
                      solanaturbin3 ~ grad
                    </Link>
                    <span className="text-gray-400 ml-2">mar 2025</span>
                  </p>
                  <p className="tracking-tight text-sm text-gray-400">
                    successfully graduated builders' cohort and also shipped
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
                  className="w-12 h-12 rounded-full object-cover border border-gray-500"
                />
                <div>
                  <p className="font-semibold">
                    <Link
                      className="!font-semibold"
                      href="/experience/superteam"
                    >
                      superteam ~ member ~ grant recipient (2x)
                    </Link>
                    <span className="text-gray-400 ml-2">mar 2025</span>
                  </p>
                  <p className="tracking-tight text-sm text-gray-400">
                    Received a total of <span className="blur-sm inline-block">$XXXX</span> grant from the superteam.
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
                    <Link className="!font-semibold" href="/experience/athena">
                      project athena ~ core member
                    </Link>
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
            <div className="text-gray-400 text-sm items-center flex-none lg:flex w-full gap-[220px]">
              <span className="w-[200px]">
                <CurrentDateTimeGMT />
              </span>

              <p className="flex items-center text-sm gap-1 text-gray-500">
                <FaLightbulb className="text-yellow-400 animate-pulse drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]" />
                Last updated on May 12, 2025
              </p>

            </div>
          </div>
        </section >
      </div >
    </Slide >
  );
}
