"use client";

import { Slide } from "@/components/animations/Slide";
import Particles from "@/components/particle";

export default function Page() {
  return (
    <Slide delay={0.5}>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>

        <section className="relative z-10">
          <div className="prose prose-neutral dark:prose-invert">
            <p>solanaturbin3 ~ grad</p>

            <div className="flex gap-3 mb-7 mt-7">hi hi</div>

            <p>hello</p>
          </div>
        </section>
      </div>
    </Slide>
  );
}
