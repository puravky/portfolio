import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "viralxpost",
  description: "viralxpost",
};

const ViralxPost = () => {
  return (
    <div>
      <Image
        src="/projects/viralxpost.png"
        alt="viralpost"
        width={1920}
        height={1080}
        className="rounded-lg"
      />
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Introducing Viralxpost: let our AI tool help you create engaging
          content that breaks through the noise and gets you seen by the right
          people.
        </p>
        <p>
          This project was created in collaboration with one of my childhood
          developer friends,{" "}
          <Link target="_" href="https://x.com/near0lx/">
            Pawan,
          </Link>{" "}
          before attending the Solana Hacker House, as we needed a project to
          showcase at the event to everyone.
        </p>
        <p>
          The code is open-sourced and available on{" "}
          <Link target="_" href="https://github.com/viralxpost/viralxpost-web">
            GitHub
          </Link>
          , deployed on{" "}
          <Link target="_" href="https://vercel.com">
            Vercel
          </Link>{" "}
          and here’s the{" "}
          <Link target="_" href="https://www.viralxpost.xyz/">
            live link
          </Link>
          .
        </p>
        <p>
          And yes, the backend is down as it is deployed on{" "}
          <Link href="https://render.com/">Render</Link>. It needs to be
          upgraded!
        </p>
        <p>
          <strong>Skills used:</strong> React, Mongoose, MongoDB, Git, GitHub,
          TailwindCSS, TypeScript, Node.js, Express.js, Docker.
        </p>
      </div>
    </div>
  );
};

export default ViralxPost;
