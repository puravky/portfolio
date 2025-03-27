"use client";

import { Slide } from "@/components/animations/Slide";
import Particles from "@/components/particle";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Slide delay={0.5}>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>

        <section className="relative z-10">
          <div className="prose prose-neutral dark:prose-invert">
            <p className="text-2xl font-medium tracking-tight">
              project athena ~ core member
            </p>

            <div>
              <p>
                Proud to be a Core Member at Project Athena ~ a thriving
                community of cracked devs building and experimenting at the
                bleeding edge of everthing.
                <br />
              </p>
              <Image
                src="/build.png"
                alt="build"
                width="720"
                height="240"
                className="rounded"
              />
              <p className="text-center">BUILD BUILD BUILD</p>
            </div>
          </div>
        </section>
      </div>
    </Slide>
  );
}
