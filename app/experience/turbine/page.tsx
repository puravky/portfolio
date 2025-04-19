"use client";

import { Slide } from "@/components/animations/Slide";
import Particles from "@/components/particle";
import { Skeleton } from "@/components/skeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
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
              solanaturbin3 ~ grad
            </p>

            <div>
              <p>
                I had the incredible opportunity to be part of SolanaTurbine, an
                intensive cohort designed for builders pushing the limits of
                what’s possible on Solana. Successfully graduating from the
                Builders' Cohort, all are cracked dev there from mentor to
                student everyone and also shipped a capstone project-Nestfolio:
                an AI DAO Governance.
                <br />
              </p>
              <div className="h-50 lg:h-[365px]">
                {!showVideo ? (
                  <Skeleton className="h-44 lg:h-[380px] lg:w-[640px]" />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    width="720"
                    height="240"
                    preload="none"
                    className="rounded"
                  >
                    <source src="/projects/nestfolio.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
              <p>
                Nestfolio: an ai-powered dao governance. ~ this project also won
                grant from solana foundation x coindcx. ~{" "}
                <Link
                  className=""
                  href="https://www.avhidotsol.xyz/proof-of-work/nestfolio"
                >
                  read more here
                </Link>
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>
    </Slide>
  );
}
