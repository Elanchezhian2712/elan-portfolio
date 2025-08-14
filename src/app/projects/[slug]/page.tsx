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
  const currentProject = projects.find((p) => p.slug === slug);
  if (!currentProject) {
    notFound();
  }
  const otherProjects = projects.filter((p) => p.slug !== slug);
  return (
    <ProjectClientPage
      project={currentProject}
      otherProjects={otherProjects}
    />
  );
};

export default ProjectDetailPage;