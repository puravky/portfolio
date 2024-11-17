import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";
import { Dot } from "lucide-react";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={10}
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
        <p>
          some of my recent achievements include: <br />
          <Dot className="inline" /> winning a $1000 grant from{" "}
          <Link
            target="_"
            href="https://x.com/avhidotsol/status/1852357389170688162"
          >
            superteam
          </Link>
          <br />
          <Dot className="inline" /> founded a saas product{" "}
          <Link target="_" href="https://viralxpost.xyz">
            viralxpost
          </Link>
          <br />
          <Dot className="inline" /> core member of{" "}
          <Link href="https://x.com/AthenaF0SS">projects athena</Link>
          <br />
          <Dot className="inline" /> contributed to{" "}
          <Link href="https://github.com/argoproj/argo-cd/pull/15059">
            cncf
          </Link>
        </p>

        <p>
          if you're interested in collaborating on building some cool projects,
          feel free to dm me on <Link href={socialLinks.twitter}>x</Link> or
          drop me an <Link href={socialLinks.email}>email</Link>. i will get
          back to you within 2 business days. i'm always open to new ideas and
          projects!
        </p>
        <p>
          built and maintained by{" "}
          <a href="https://x.com/avhidotsol" target="_blank">
            Avhi
          </a>
          .
        </p>
      </div>
    </section>
  );
}
