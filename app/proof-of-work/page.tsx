
import ProjectList from "@/components/project-list";
import { getProjects } from "app/lib/projects";

export const metadata = {
  title: "proof of work",
  description: "proof of work",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return <ProjectList projects={projects} />;
}

