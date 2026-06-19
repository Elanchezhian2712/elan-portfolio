"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { Project } from "@/app/data/projects";
import { ProjectCard } from "@/app/components/ProjectCard";
import { useState, useEffect } from "react";

interface ProjectClientPageProps {
  project: Project;
  otherProjects: Project[];
}

const ProjectClientPage = ({ project, otherProjects }: ProjectClientPageProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white min-h-screen px-4 sm:px-6 lg:px-12 py-6">
      <SectionWrapper className="pt-20 sm:pt-24 lg:pt-32">
        {/* Title + Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-purple-400">
            {project.title}
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto">
            {project.purpose}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            {project.videoUrl && (
              <Link
                href={project.videoUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
              >
                <ExternalLink size={20} /> Watch Demo
              </Link>
            )}

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full"
              >
                <Github size={20} /> View Code
              </Link>
            )}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-12"
        >
          <div className="relative w-full h-80 rounded-xl overflow-hidden border border-zinc-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Project Overview</h2>
            <p className="text-gray-300 mb-10">{project.overview}</p>

            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Challenges & Solutions
            </h2>
            <div className="space-y-6 mb-10">
              {project.challenges.map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-purple-400">
                    Challenge: {item.challenge}
                  </h3>
                  <p className="text-gray-300">
                    <strong>Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 text-purple-300">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-400 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-1/3"
          >
            <div className="sticky top-24 bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Tech Stack</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700 text-purple-300 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Architecture</h2>
              <p className="text-gray-300 text-sm">{project.architecture}</p>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-300">
              Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setPreviewImage(img.src)}
                  className="relative h-72 rounded-lg overflow-hidden border-2 border-zinc-700 hover:border-purple-500 cursor-pointer"
                >
                  <Image
                      src={img.src}
                      alt={`Gallery image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {previewImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setPreviewImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full max-w-5xl h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={previewImage}
                  alt="Preview"
                  fill
                  className="object-contain rounded-lg"
                />
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 bg-black/60 rounded-full p-2"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Other Projects */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">
            Explore More Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ProjectClientPage;
