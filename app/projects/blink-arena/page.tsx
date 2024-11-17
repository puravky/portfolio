import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlinkArena = () => {
  return (
    <div>
      <Image
        src="/projects/blink-arena.png"
        alt="Blink Arena"
        width={1920}
        height={1080}
        className="rounded-lg"
      />
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          introducing blinkarena: a platform where user can either host or join
          gaming tournament via solana blinks.
        </p>
        <p>
          this project also won a 1000$ of grant from{" "}
          <Link
            target="_"
            href="https://x.com/avhidotsol/status/1852357389170688162"
          >
            superteam
          </Link>
        </p>
        <p>
          you can view the{" "}
          <Link
            target="_"
            href="https://x.com/avhidotsol/status/1852384957630738688"
          >
            tweet
          </Link>{" "}
          here. the code is open-sourced and available on{" "}
          <Link target="_" href="https://github.com/AvhiMaz/blink-arena">
            github
          </Link>
          , deployed on{" "}
          <Link target="_" href="https://vercel.com/">
            vercel
          </Link>{" "}
          and here’s the{" "}
          <Link target="_" href="https://www.blinkarena.xyz/">
            live link
          </Link>
        </p>
        <p>
          skills used : nextjs | prisma | mongodb | git | github | solana blinks
          | tailwindcss | typescript | docker.
        </p>
      </div>
    </div>
  );
};

export default BlinkArena;
