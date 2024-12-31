import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "portfolio",
  description: "portfolio",
};

const Portfolio = () => {
  return (
    <div>
      <p className="prose prose-neutral dark:prose-invert">dark mode</p>
      <Image
        src="/dark-mode-demo.png"
        alt="viralpost"
        width={1920}
        height={1080}
        className="rounded-lg"
      />
      <p className="prose prose-neutral dark:prose-invert">light mode</p>
      <Image
        src="/light-mode-demo.png"
        alt="viralpost"
        width={1920}
        height={1080}
        className="rounded-lg"
      />
      <div className="prose prose-neutral dark:prose-invert">
        <p>nothing to write here</p>
        <p>
          follow me to stay connected, or feel free to dm me if you'd like to
          collaborate on turning cool ideas into reality. check the footer to
          find me on your favorite platform!
        </p>
        <p>
          and yes the code not open-sourced yet (soon will be) and it is
          deployed on{" "}
          <Link target="_" href="https://vercel.com">
            vercel
          </Link>
        </p>
        <p>skills used : nextjs | git | github | tailwindcss | typescript.</p>
      </div>
    </div>
  );
};

export default Portfolio;
