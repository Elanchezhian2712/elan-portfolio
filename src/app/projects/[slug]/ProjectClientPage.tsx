// app/projects/[slug]/ProjectClientPage.tsx

// This is the Client Component. It handles all the UI and animations.
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { Project } from "@/app/data/projects";

const ProjectClientPage = ({ project }: { project: Project }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white min-h-screen px-4 sm:px-6 lg:px-12 py-6">
      <SectionWrapper className="pt-24 lg:pt-32">
        {/* Project Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }} className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-purple-400 font-semibold">{project.title}</h1>
          {/* NEW: Display the project's purpose */}
          <p className="text-base sm:text-lg text-gray-300 max-w-full sm:max-w-3xl mx-auto">{project.purpose}</p>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4 mt-6 sm:mt-8">
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg transition-all w-full sm:w-auto text-center">
              <ExternalLink size={20} /> Live Demo
            </Link>
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white font-medium rounded-lg transition-all w-full sm:w-auto text-center">
                <Github size={20} /> View Code
              </Link>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8, delay: 0.2 }} className="my-8 sm:my-12">
          <div className="relative w-full h-64 sm:h-80 md:h-[28rem] mx-auto rounded-xl shadow-2xl shadow-purple-900/20 border-2 border-zinc-700 overflow-hidden">
            <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} priority />
          </div>
        </motion.div>

        {/* NEW: Two-column layout for detailed content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* --- Main Content Column --- */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8, delay: 0.4 }} className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-10 text-justify">{project.overview}</p>

            {/* NEW: Challenges and Solutions Section */}
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Challenges & Solutions</h2>
            <div className="space-y-6 mb-10">
              {project.challenges.map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-purple-400 mb-1 text-justify">Challenge: {item.challenge}</h3>
                  <p className="text-gray-300 leading-relaxed text-justify"><strong>Solution:</strong> {item.solution}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 text-purple-300">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3"><CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} /><span>{feature}</span></li>
              ))}
            </ul>
          </motion.div>

          {/* --- Sticky Sidebar Column --- */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8, delay: 0.6 }} className="lg:w-1/3">
            <div className="sticky top-24 bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Tech Stack</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (<span key={t} className="bg-zinc-800 text-purple-300 text-sm px-3 py-1 rounded-full border border-zinc-700">{t}</span>))}
              </div>

              {/* NEW: Architectural Decisions Section */}
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Architecture</h2>
              <p className="text-gray-300 text-justify leading-relaxed text-sm">{project.architecture}</p>
            </div>
          </motion.div>
        </div>

        {/* Video Demo Section */}
        {/* {project.videoUrl && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8, delay: 0.8 }} className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-purple-300">Live Demo</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-zinc-700">
              <iframe width="100%" height="100%" src={project.videoUrl} title="Project Demo Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </motion.div>
        )} */}

        {/* Gallery Section */}
        {project.gallery.length > 0 && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8, delay: 0.8 }} className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-purple-300">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative w-full h-72 rounded-lg overflow-hidden border-2 border-zinc-700 hover:border-purple-500 transition-colors">
                  <Image src={img} alt={`Gallery image ${i + 1}`} fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </SectionWrapper>
    </div>
  );
};

export default ProjectClientPage;