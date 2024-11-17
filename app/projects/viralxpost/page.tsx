import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlinkArena = () => {
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
          introducing viralxpost: let our ai tool help you create to engaging
          content that breaks through the noise and gets you seen by the right
          people.
        </p>
        <p>
          this project was made with one of my childhood developer friend{" "}
          <Link target="_" href="https://x.com/near0lx/">
            pawan
          </Link>{" "}
          before going to solana hh as we need to showcase some project in the
          even to everyone.
        </p>
        <p>
          the code is open-sourced and available on{" "}
          <Link target="_" href="https://github.com/viralxpost/viralxpost-web">
            github
          </Link>
          . here’s the{" "}
          <Link target="_" href="https://www.viralxpost.xyz/">
            live link
          </Link>
          <p>
            and yes the backend is down as it is deployed on{" "}
            <Link href="https://render.com/">render</Link>, need to upgrade it !
          </p>
          <p>
            skills used : nextjs | mongoose | mongodb | git | github |
            tailwindcss | typescript | docker.
          </p>
        </p>
      </div>
    </div>
  );
};

export default BlinkArena;
