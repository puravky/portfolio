import Link from "next/link";
import { getProjects } from "app/lib/projects";

export const metadata = {
  title: "proof of work",
  description: "proof of work",
};

export default function Projects() {
  let allProjects = getProjects();

  function formatDate123(date: string, includeRelative = false) {
    let targetDate = new Date(date);
    return targetDate.getFullYear().toString();
  }

  const sortedProjects = allProjects.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt);
    const dateB = new Date(b.metadata.publishedAt);

    if (dateA.getTime() > dateB.getTime()) return -1;
    if (dateA.getTime() < dateB.getTime()) return 1;

    return a.metadata.title.localeCompare(b.metadata.title);
  });

  return (
    <section>
      <style>
        {`
          @media (min-width: 640px) and (max-width: 767px) {
            .custom-margin {
              padding-right: 20px;
            }
          }
        `}
      </style>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">proof of work</h1>
      <div>
        {sortedProjects.map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-4 mb-4 transition-opacity duration-200 hover:opacity-80"
            href={`/proof-of-work/${project.slug}`}
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
