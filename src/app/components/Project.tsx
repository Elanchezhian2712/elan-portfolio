// app/components/Project.tsx
"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, Github, ExternalLink } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { projects } from "../data/projects";
import Image from "next/image";

export const Project = () => {
  const observerRef = useRef(null);
  const isInView = useInView(observerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper
      id="projects"
      className="bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-900/50"
    >
      <div ref={observerRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
            ✨ My Work
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white my-6 leading-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
            A selection of my most impactful projects that combine AI, full-stack
            development, and cloud integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                opacity: isInView
                  ? hoveredIndex === idx
                    ? 1
                    : hoveredIndex !== null
                    ? 0.6
                    : 1
                  : 0,
                y: isInView ? 0 : 40,
                scale: isInView
                  ? hoveredIndex === idx
                    ? 1.02
                    : hoveredIndex !== null
                    ? 0.95
                    : 1
                  : 1,
              }}
              transition={{
                duration: isInView ? 0.4 : 0.6,
                delay: isInView ? 0 : idx * 0.15,
                ease: "easeInOut",
              }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-purple-500/20 hover:border-purple-500/50 shadow-2xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 h-full flex flex-col">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700"
                    priority={idx < 2}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Top Links Badge */}
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-zinc-900/80 backdrop-blur border border-gray-500/30 text-gray-300 hover:text-white hover:border-purple-400/60 transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-zinc-900/80 backdrop-blur border border-gray-500/30 text-gray-300 hover:text-white hover:border-purple-400/60 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-400/30 group-hover:border-purple-400/60 transition-all"
                      >
                        {t}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-400/30">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="mt-auto"
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      View Details
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};