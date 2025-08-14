// This is the Client Component. It handles all the UI and animations.
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { Project } from "@/app/data/projects"; // Import the Project type

// This component receives the final 'project' object as a prop.
const ProjectClientPage = ({ project }: { project: Project }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white min-h-screen px-4 sm:px-6 lg:px-12 py-6">
      <SectionWrapper className="pt-24 lg:pt-32">
        {/* Project Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-purple-400 font-semibold">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-full sm:max-w-3xl mx-auto">
            {project.desc}
          </p>

          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4 mt-6 sm:mt-8">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg transition-all w-full sm:w-auto text-center"
            >
              <ExternalLink size={20} />
              Live Demo
            </Link>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white font-medium rounded-lg transition-all w-full sm:w-auto text-center"
              >
                <Github size={20} />
                View Code
              </Link>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-8 sm:my-12"
        >
          <div className="relative w-full h-64 sm:h-80 md:h-[28rem] mx-auto rounded-xl shadow-2xl shadow-purple-900/20 border-2 border-zinc-700 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>

        {/* Overview & Features */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Overview & Tech Stack */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-300">
              Project Overview
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8">
              {project.overview}
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-300">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-zinc-800 text-purple-300 text-xs sm:text-sm px-3 py-1 rounded-full border border-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-zinc-800/50 p-4 sm:p-6 rounded-xl border border-zinc-700 flex-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-300">
              Key Features
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle
                    className="text-green-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-300 text-sm sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-purple-300">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-60 sm:h-64 md:h-72 rounded-lg overflow-hidden border-2 border-zinc-700 hover:border-purple-500 transition-colors"
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
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