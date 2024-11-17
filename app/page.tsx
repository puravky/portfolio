import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";
import { Dot } from "lucide-react";
import Location from "./components/location";

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
          i'm 21 year old developer. currently, undergrade sudent with a passion
          of building cool products with a strong concepts of web2 / web3.
        </p>
        <p>
          in my spare time i enjoy reading, writing, and learning new things
          also sometimes doodling / sketching.
        </p>
        <p>
          some of my recent achievements include: <br />
          <Dot className="inline mx-1" /> winning a $1000 grant from{" "}
          <Link
            target="_"
            href="https://x.com/avhidotsol/status/1852357389170688162"
          >
            superteam{" "}
          </Link>{" "}
          <br />
          <Dot className="inline mx-1" /> founded a SaaS product{" "}
          <Link target="_" href="https://viralxpost.xyz">
            viralxpost
          </Link>
          <br />
          <Dot className="inline mx-1" /> core member at{" "}
          <Link href="https://x.com/AthenaF0SS">projects athena</Link>
          <br />
          <Dot className="inline mx-1" /> contribution in{" "}
          <Link href="https://github.com/argoproj/argo-cd/pull/15059">
            cncf
          </Link>
        </p>

        <p>
          if you're interested in collaborating on building some cool sh*ts,
          just dm me on <Link href={socialLinks.twitter}>x</Link> or just drop a{" "}
          <Link href={socialLinks.email}>mail</Link> will be getting back to you
          by 2 business days. i'm always open to new ideas and projects!
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://x.com/avhidotsol" target="_blank">
            Avhi
          </a>
          .
        </p>
      </div>
    </section>
  );
}
