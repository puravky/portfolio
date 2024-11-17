import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlinkArena = () => {
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
        <p>nothing to write in this</p>
        <p>follow me to stay connected with me :)</p>
        <p>see the footer you will find me on you favorite platform</p>
        <p>skills used : nextjs | git | github | tailwindcss | typescript.</p>
      </div>
    </div>
  );
};

export default BlinkArena;
