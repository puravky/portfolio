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
              <p>
                Nestfolio: an ai-powered dao governance. ~ this project also won
                d grant from solana foundation x coindcx. ~{" "}
                <Link
                  className=""
                  href="https://www.avhimaz.in/projects/nestfolio"
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
