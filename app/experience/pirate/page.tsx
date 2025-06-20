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

        <section className="flex items-center justify-center min-h-screen z-10">
          updating soon
        </section>
      </div>
    </Slide>
  );
}
