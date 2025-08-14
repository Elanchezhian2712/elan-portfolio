// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import ProjectClientPage from "./ProjectClientPage";
import { use } from "react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetailPage = ({ params }: ProjectPageProps) => {
  const { slug } = use(params);

  // Find the current project
  const currentProject = projects.find((p) => p.slug === slug);

  // If no project matches, show 404
  if (!currentProject) {
    notFound();
  }

  // Create a new list containing all projects EXCEPT the current one.
  // The variable is correctly named 'otherProjects'.
  const otherProjects = projects.filter((p) => p.slug !== slug);

  // Pass BOTH the current project and the list of other projects to the client page
  return (
    <ProjectClientPage
      project={currentProject}
      // FIX: The variable passed here now correctly matches the one defined above.
      otherProjects={otherProjects}
    />
  );
};

export default ProjectDetailPage;