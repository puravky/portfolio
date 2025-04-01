"use client";

import { Slide } from "@/components/animations/Slide";
import Particles from "@/components/particle";
import { Skeleton } from "@/components/skeleton";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
              <div className="h-[365px]">
                {!showImage ? (
                  <Skeleton className="h-[380px] w-[640px]" />
                ) : (
                  <Image
                    src="/build.png"
                    alt="build"
                    width="720"
                    height="240"
                    className="rounded"
                  />
                )}
              </div>

              <p className="text-center">BUILD BUILD BUILD</p>
            </div>
          </div>
        </section>
      </div>
    </Slide>
  );
}
