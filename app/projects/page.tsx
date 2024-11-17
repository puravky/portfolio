import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "projects",
  description: "projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col bg-zinc-100 dark:bg-zinc-900 rounded-md py-4">
              <div className="w-full flex justify-between items-baseline ml-5">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm mr-10">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3 ml-5">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
