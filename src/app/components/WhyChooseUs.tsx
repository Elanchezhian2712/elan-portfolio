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
    icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
    title: "Full-Stack + AI Skills",
    description:
      "Build scalable apps blending React/Next.js with Python AI and API integrations.",
  },
  {
    icon: <Target className="w-8 h-8 text-purple-400" />,
    title: "Proven Results",
    description:
      "Delivered solutions boosting efficiency 40% and cutting manual work 30%.",
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: "Creative Problem Solver",
    description:
      "From AI assistants to secure bookmark tools, I turn ideas into impact.",
  },
];

const skills = [
  {
    icon: <Code2 className="w-7 h-7 text-purple-300" />,
    name: "Python / JavaScript",
  },
  {
    icon: <Layers className="w-7 h-7 text-purple-300" />,
    name: "React / Next.js / Framer",
  },
  {
    icon: <Server className="w-7 h-7 text-purple-300" />,
    name: "FastAPI / Django / Flask",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-purple-300" />,
    name: "Gemini & Google APIs",
  },
  {
    icon: <Database className="w-7 h-7 text-purple-300" />,
    name: "MySQL / PostgreSQL / Supabase / MongoDB",
  },
  {
    icon: <Cloud className="w-7 h-7 text-purple-300" />,
    name: " AWS / GCP",
  },
  {
    icon: <GitMerge className="w-7 h-7 text-purple-300" />,
    name: "Git / Docker / Postman",
  },
  {
    icon: <Figma className="w-7 h-7 text-purple-300" />,
    name: "Figma / Visily AI",
  },
];

export const WhyChooseUs = () => (
  <SectionWrapper id="skills" className="py-24 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-900/50">
    {/* Intro */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      <span className="inline-block text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
        💼 Why Hire Me
      </span>
      <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white my-6 leading-tight">
        Full-Stack Skill, AI Expertise, Real Results
      </h2>
      <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
        I blend full-stack development with AI integration to build fast,
        secure, and scalable solutions that deliver measurable impact.
      </p>
    </motion.div>

    {/* Features */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 p-6 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-2"
        >
          <div className="flex items-center justify-center mb-5">
            <div className="p-4 rounded-full bg-gradient-to-tr from-purple-600/30 to-purple-400/20 border border-purple-400/30 shadow-md group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-white text-lg font-semibold mb-2 text-center">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-sm text-center leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Skills */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mt-32 mb-16"
    >
      <span className="inline-block text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
        🛠️ Skills
      </span>
      <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white my-6 leading-tight">
        Tools & Technologies I Work With
      </h2>
    </motion.div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="group relative flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-purple-600/10 to-indigo-600/10 border border-purple-400/20 hover:border-purple-400/60 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-indigo-500/20 border border-purple-400/30 group-hover:border-purple-300/60 group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 blur group-hover:blur-md transition-all duration-300" />
            <div className="relative">
              {skill.icon}
            </div>
          </div>
          <p className="mt-4 text-gray-200 text-sm font-semibold text-center group-hover:text-white transition-colors duration-300">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);
