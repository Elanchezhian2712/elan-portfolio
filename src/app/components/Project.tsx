// app/components/Project.tsx
"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { projects } from "../data/projects";
import Image from "next/image";

export const Project = () => {
  const observerRef = useRef(null);
  // once: true is important here. It means isInView will become true and stay true.
  const isInView = useInView(observerRef, { once: true, margin: "-100px" });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper
      id="projects"
      className="bg-[linear-gradient(to_bottom,rgba(147,51,247,0.15),#18181b,rgba(147,51,247,0.15))]"
    >
      <div ref={observerRef}>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight">
              Projects
            </h2>
            <p className="text-gray-400 text-base max-w-3xl mx-auto mb-12 leading-relaxed">
              A selection of my most impactful projects that combine AI, full-stack
              development, and cloud integration.
            </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    ? 0.5 
                    : 1
                  : 0,
                y: isInView ? 0 : 40,
                scale: isInView
                  ? hoveredIndex === idx
                    ? 0.97 
                    : hoveredIndex !== null
                    ? 0.90 
                    : 1 
                  : 1,
              }}
              transition={{
                duration: isInView ? 0.4 : 0.6, 
                delay: isInView ? 0 : idx * 0.2, 
                ease: "easeInOut",
              }}
              className="group bg-zinc-800/60 backdrop-blur-lg rounded-xl overflow-hidden border border-zinc-700 hover:border-purple-400 transition-colors"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  priority={idx < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm"
                >
                  View Project
                  <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};