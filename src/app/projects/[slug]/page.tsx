// app/projects/[slug]/page.tsx

// This is the Server Component. It fetches data.
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import ProjectClientPage from "./ProjectClientPage";
import { use } from "react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetailPage = ({ params }: ProjectPageProps) => {
  // Unwrap the 'params' promise using React.use()
  const { slug } = use(params);

  // Find the project by slug
  const project = projects.find((p) => p.slug === slug);

  // If no project matches, show 404
  if (!project) {
    notFound();
  }

  // Render the Client Component and pass the fetched project data as a prop.
  return <ProjectClientPage project={project} />;
};

export default ProjectDetailPage;