// src/app/components/FAQ.tsx

"use client";

import { Star, MapPin, Briefcase, Lightbulb } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
// FIX #1: Import the 'Variants' type from framer-motion
import { motion, Variants } from "framer-motion";
import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Mahima Technology Private Limited",
    location: "Salem, Tamil Nadu, India",
    period: "Jul '24 — Present",
    icon: Briefcase,
    details: [
      "Built a comprehensive time-tracking system to monitor task states and improve productivity.",
      "Engineered role-based dashboards, boosting task management efficiency by 20%.",
      "Integrated Gemini AI API to extract structured invoice data, reducing manual entry by 30%.",
      "Enhanced scalability with asynchronous processing, decreasing large file handling time by 40%.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Rakumura IT Solutions",
    location: "Chennai, Tamil Nadu, India",
    period: "Jan '24 — Apr '24",
    icon: Briefcase,
    details: [
      "Executed end-to-end website projects, enhancing UX and responsive design to increase client engagement by 40%.",
      "Collaborated with cross-functional teams on 10+ initiatives, boosting customer engagement and driving a 25% rise in quarterly sales.",
    ],
  },
  {
    role: "Incubation Program Participant",
    company: "BIC@PU (Periyar University)",
    location: "Salem, Tamil Nadu, India",
    period: "Sep '23 — Dec '23",
    icon: Lightbulb,
    details: [
      "Built and validated a startup prototype through EDII-TN & DST-NIDHI-iTBI incubation.",
      "Created a go-to-market strategy backed by customer research and competitive analysis.",
    ],
  },
];

// FIX #2: Explicitly type the variable with 'Variants' for better type safety.
const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  // The 'animate' function's return value is now correctly checked against the Variants type.
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.8,
      ease: "easeOut",
    },
    // FIX #3 (Alternative to #2): You could also add `as const` here, but explicit typing is often cleaner.
    // } as const),
  }),
};

export const FAQ = () => {
  return (
    <SectionWrapper id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-purple-400 font-semibold text-sm tracking-widest uppercase">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 leading-tight">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto mb-12 leading-relaxed">
            From internships and incubation programs to developing impactful AI-driven solutions, here is a timeline of my work.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => {
            const isFeatured = index === 0;
            const IconComponent = exp.icon;

            return (
              <motion.div
                key={index}
                className={`
                  ${isFeatured ? "lg:col-span-2" : ""}
                  bg-zinc-800/80 border border-white/10 rounded-xl shadow-lg backdrop-blur-sm
                  transition-all duration-300 hover:border-purple-400/50 hover:bg-zinc-800 group
                `}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="p-6 sm:p-8 h-full flex flex-col">
                  {isFeatured && (
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="font-semibold text-yellow-400">
                        Most Recent Work
                      </span>
                    </div>
                  )}
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <div className="flex items-center gap-3 my-2">
                    <IconComponent className="w-6 h-6 text-purple-400 shrink-0" />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 text-purple-400 font-medium mb-4">
                    <p className="group-hover:text-purple-300 transition-colors">{exp.company}</p>
                    <span className="text-white/30">|</span>
                    <p className="flex items-center gap-1.5 text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-3 list-disc list-inside text-gray-300 flex-grow text-base">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};