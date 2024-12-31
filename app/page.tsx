import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";
import Particles from "./components/particle";
import CurrentDateTimeGMT from "./components/date";

export default function Page() {

  return (
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
          developer based in india.
        </h1>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            i'm a 21-year-old developer and an undergraduate student with a
            passion for building cool products, with a strong understanding of
            web2 / web3 concepts.
          </p>
          <p>
            in my spare time, i enjoy reading, writing, learning new things, and
            occasionally doodling / sketching.
          </p>
          <div className="">
            some of my recent achievements / experiences includes: <br />
            <div className="flex tracking-tighter bg-zinc-100 dark:bg-zinc-900 rounded-md py-[1px] mt-6 items-center justify-between">
              <div className="">
                <p className="ml-5">
                  won $1000 grant from{" "}
                  <Link
                    target="_"
                    href="https://x.com/avhidotsol/status/1852357389170688162"
                  >
                    superteam
                  </Link>
                </p>
              </div>
              <div className="mr-5">| 2024</div>
            </div>
            <br />
            <div className="bg-zinc-100 tracking-tighter dark:bg-zinc-900 rounded-md py-[1px] flex items-center justify-between">
              <div className="">
                <p className="ml-5">
                  core member at{" "}
                  <Link target="_" href="https://x.com/AthenaF0SS">
                    project athena
                  </Link>
                </p>
              </div>
              <div className="mr-5">| 2024</div>
            </div>
            <br />
            <div className="bg-zinc-100 tracking-tighter  dark:bg-zinc-900 rounded-md py-[1px] flex items-center justify-between">
              <div className="">
                <p className="ml-5">
                  co-founded{" "}
                  <Link target="_" href="https://viralxpost.xyz">
                    viralxpost
                  </Link>
                </p>
              </div>
              <div className="mr-5">| 2024</div>
            </div>
            <br />
            <div className="bg-zinc-100 tracking-tighter dark:bg-zinc-900 rounded-md py-[1px] flex items-center justify-between">
              <div className="">
                <p className="ml-5">
                  contribution in{" "}
                  <Link
                    target="_"
                    href="https://github.com/argoproj/argo-cd/pull/15059"
                  >
                    cncf
                  </Link>
                </p>
              </div>
              <div className="mr-5">| 2023</div>
            </div>
          </div>
          <div className="mt-14 w-full h-px bg-zinc-800"></div>
          <p>
            if you're interested in collaborating on building some cool sh*ts,
            feel free to dm me on <Link href={socialLinks.twitter}>x</Link> or
            drop me an <Link href={socialLinks.email}>email</Link>. i will get
            back to you within 2 business days. i'm always open to new ideas and
            projects!
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
  );
}
