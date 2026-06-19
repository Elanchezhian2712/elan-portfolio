// src/app/components/Experience.tsx

"use client";

import { Star, MapPin, Briefcase, Lightbulb, ArrowRight } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { motion, Variants } from "framer-motion";
import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Mahima Technology Private Limited",
    location: "Salem, Tamil Nadu, India",
    period: "Jul '23 — Present",
    duration: "~2 years",
    icon: Briefcase,
    featured: true,
    color: "from-purple-600 to-indigo-600",
    details: [
      "🔧 Built a full-stack time‑tracking system to boost productivity.",
      "📊 Designed role‑based dashboards → improved task efficiency by 20%.",
      "🤖 Integrated Gemini AI API for invoice parsing → cut manual entry by 30%.",
      "⚡ Optimized scalability w/ async processing → reduced file handling time by 40%.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Rakumura IT Solutions",
    location: "Chennai, Tamil Nadu, India",
    period: "Jan '24 — Apr '24",
    duration: "4 months",
    icon: Briefcase,
    color: "from-blue-600 to-cyan-600",
    details: [
      "💻 Delivered responsive websites driving a 40% increase in client engagement.",
      "🤝 Collaborated on 10+ projects → boosted quarterly sales by 25%.",
    ],
  },
  {
    role: "Incubation Program Participant",
    company: "BIC@PU (Periyar University)",
    location: "Salem, Tamil Nadu, India",
    period: "Sep '23 — Dec '23",
    duration: "4 months",
    icon: Lightbulb,
    color: "from-amber-600 to-orange-600",
    details: [
      "🚀 Built and validated a startup prototype via DST‑NIDHI incubation.",
      "📈 Formulated go‑to‑market strategy backed by customer research & competitive analysis.",
    ],
  },
];

const fadeIn: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" },
  }),
};

export const FAQ = () => {
  return (
    <SectionWrapper id="experience" className="py-24 sm:py-32 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
            🚀 My Journey
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mt-6 mb-6 leading-tight">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            A timeline of how I grew from incubation projects to building
            AI‑powered software solutions in professional roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={i}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className={`
                    relative rounded-3xl p-8 md:p-10
                    backdrop-blur-xl border
                    bg-gradient-to-br from-zinc-900/80 to-zinc-950/80
                    border-purple-500/20 hover:border-purple-500/50
                    shadow-xl hover:shadow-2xl hover:shadow-purple-500/20
                    overflow-hidden transition-all duration-300
                    ${exp.featured ? "ring-2 ring-purple-500/40" : ""}
                  `}>
                    {/* Animated Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      {/* Time Period + Featured Badge */}
                      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                        <p className="text-purple-300 font-semibold text-sm">{exp.period}</p>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {exp.duration}
                          </span>
                          {exp.featured && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                              className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 whitespace-nowrap"
                            >
                              <Star className="w-3.5 h-3.5 text-yellow-400" />
                              <span className="text-yellow-400 text-xs font-semibold">Most Recent</span>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Icon + Role */}
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                        >
                          <Icon className="w-8 h-8" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm">
                            <span className="text-purple-300 font-semibold">{exp.company}</span>
                            <span className="text-white/30">•</span>
                            <div className="flex items-center gap-1 text-gray-400">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        {exp.details.map((detail, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <ArrowRight className="w-4 h-4 mt-1 text-purple-400 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                            <span className="text-gray-300 group-hover/item:text-gray-100 transition-colors" dangerouslySetInnerHTML={{ __html: detail }} />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Gradient Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
