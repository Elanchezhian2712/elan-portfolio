"use client";

import {
  ShieldCheck,
  Target,
  Zap,
  Code2,
  Layers,
  Database,
  Cloud,
  GitMerge,
  Server,
  Sparkles,
  Figma,
} from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-purple-500" />,
    title: "Full-Stack + AI Skills",
    description:
      "Build scalable apps blending React/Next.js with Python AI and API integrations.",
  },
  {
    icon: <Target className="w-7 h-7 text-purple-500" />,
    title: "Proven Results",
    description:
      "Delivered solutions boosting efficiency 40% and cutting manual work 30%.",
  },
  {
    icon: <Zap className="w-7 h-7 text-purple-500" />,
    title: "Creative Problem Solver",
    description:
      "From AI assistants to secure bookmark tools, I turn ideas into impact.",
  },
];

const skills = [
  {
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    name: "Python / JavaScript",
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    name: "React / Next.js / Framer",
  },
  {
    icon: <Server className="w-6 h-6 text-purple-400" />,
    name: "FastAPI / Django / Flask",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    name: "Gemini & Google APIs",
  },
  {
    icon: <Database className="w-6 h-6 text-purple-400" />,
    name: "MySQL / PostgreSQL / Supabase / MongoDB",
  },
  {
    icon: <Cloud className="w-6 h-6 text-purple-400" />,
    name: " AWS / GCP",
  },
  {
    icon: <GitMerge className="w-6 h-6 text-purple-400" />,
    name: "Git / Docker / Postman",
  },
  {
    icon: <Figma className="w-6 h-6 text-purple-400" />,
    name: "Figma / Visily AI",
  },
];

export const WhyChooseUs = () => (
  <>
    <SectionWrapper id="skills" className="py-20">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-purple-400 font-semibold text-sm tracking-widest uppercase">
          Why Hire Me
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white my-4 leading-tight">
          Full-Stack Skill, AI Expertise, Real Results
        </h2>
        <p className="text-gray-400 text-base max-w-3xl mx-auto mb-12 leading-relaxed">
          I blend full-stack development with AI integration to build fast,
          secure, and scalable solutions that deliver measurable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl bg-zinc-800/70 backdrop-blur-sm border border-white/10 p-6 shadow-md hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20 shadow-md">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-md text-center leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center max-w-3xl mx-auto mt-20">
        <span className="text-purple-400 font-semibold text-sm tracking-widest uppercase">
          Skills
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white my-4 leading-tight">
          Tools & Technologies I Work With
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-800/50 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-3 text-gray-300 text-sm font-medium text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  </>
);