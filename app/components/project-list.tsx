"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectList({ projects }: { projects: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
        (project) => project.metadata.category === selectedCategory
      );

  const sortedProjects = filteredProjects.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt);
    const dateB = new Date(b.metadata.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

  function formatDate123(date: string) {
    return new Date(date).getFullYear().toString();
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">proof of work</h1>
      <div className="flex gap-3 mb-5 text-sm tracking-tighter">
        {["all", "web3", "web2"].map((cat) => (
          <p
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`border rounded px-3 py-1 cursor-pointer ${selectedCategory === cat
              ? "bg-black text-white dark:bg-white dark:text-black"
              : ""
              }`}
          >
            {cat}
          </p>
        ))}
      </div>

      <div>
        {sortedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/proof-of-work/${project.slug}`}
            className="flex flex-col space-y-4 mb-4 transition-opacity duration-200 hover:opacity-80"
          >
            <div className="flex flex-col bg-zinc-100 dark:bg-zinc-900 rounded-md py-4">
              <div className="flex justify-between items-center ml-5 mr-5">
                <p className="text-black dark:text-white font-medium tracking-tight">
                  {project.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {formatDate123(project.metadata.publishedAt)}
                </p>
              </div>

              <p className="prose prose-neutral dark:prose-invert pt-3 ml-5">
                {project.metadata.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
