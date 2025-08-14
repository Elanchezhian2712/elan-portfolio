// This is the Server Component.
// No "use client" here.

import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import ProjectClientPage from "./ProjectClientPage";

// FIX: Import the 'use' hook from React.
import { use } from "react";

interface ProjectPageProps {
  // The 'params' prop is now a Promise that resolves to the params object.
  params: Promise<{ slug: string }>;
}

// Server components can be async, but we'll use React.use() instead of await.
const ProjectDetailPage = ({ params }: ProjectPageProps) => {
  // FIX: Unwrap the 'params' promise using React.use()
  // This is the new, required pattern in Next.js 15.
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