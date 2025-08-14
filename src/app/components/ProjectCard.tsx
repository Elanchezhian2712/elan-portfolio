// app/components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block group" 
    >
      <motion.div
        className="h-full bg-zinc-900/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-purple-400/50 hover:shadow-purple-900/20 hover:-translate-y-1"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
      >
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-4 sm:p-6 flex flex-col justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 8).map((t) => ( 
                <span
                  key={t}
                  className="bg-zinc-800 text-purple-300 text-xs px-3 py-1 rounded-full border border-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-auto pt-4">
            <div className="text-purple-400 font-semibold flex items-center gap-2 transition-transform duration-300 group-hover:gap-3">
              View Project
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};