// src/app/components/Experience.tsx

"use client";

import { Star, MapPin, Briefcase, Lightbulb, TrendingUp } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { motion, Variants } from "framer-motion";
import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Mahima Technology Private Limited",
    location: "Salem, Tamil Nadu, India",
    period: "Jul '24 — Present",
    icon: Briefcase,
    featured: true,
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
    icon: Briefcase,
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
    icon: Lightbulb,
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
    <SectionWrapper id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm tracking-widest uppercase">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            A timeline of how I grew from incubation projects to building
            AI‑powered software solutions in professional roles.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={i}
                className={`
                  relative group border border-white/10 rounded-2xl 
                  bg-gradient-to-b from-zinc-800/80 to-zinc-900/70 
                  shadow-md backdrop-blur-sm p-8 transition-all 
                  hover:shadow-purple-500/20 hover:border-purple-500/40 
                  hover:-translate-y-1
                  ${exp.featured ? "lg:col-span-2 ring-2 ring-purple-500/40" : ""}
                `}
              >
                {/* Featured Badge */}
                {exp.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-yellow-400 text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Recent
                  </div>
                )}

                {/* Time Period */}
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>

                {/* Role + Icon */}
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                </div>

                {/* Company and Location */}
                <div className="flex flex-wrap items-center gap-x-3 text-purple-300 text-sm font-medium mb-4">
                  <span>{exp.company}</span>
                  <span className="text-white/30">•</span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  {exp.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 group-hover:text-gray-100"
                    >
                      <TrendingUp className="w-4 h-4 mt-1 text-purple-400 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: detail }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
