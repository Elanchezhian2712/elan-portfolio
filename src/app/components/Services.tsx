"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const education = [
    {
      icon: <GraduationCap className="w-7 h-7 text-purple-300" />,
      title: "Master of Computer Applications (MCA) — University Rank Holder",
      desc: "Periyar University | Aug 2022 – Jun 2024 | CGPA: 8.5. Awarded University Rank for outstanding academic excellence. Specialized in AI-driven solutions, scalable full-stack architectures, and enterprise-grade database systems.",
    },
    {
      icon: <BookOpen className="w-7 h-7 text-purple-300" />,
      title: "Bachelor of Science in Computer Science (B.Sc. CS)",
      desc: "Vysya College | Jul 2019 – Jun 2022 | CGPA: 7.7. Built a solid foundation in programming, algorithms, and software engineering principles.",
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-20 md:py-28 bg-gradient-to-b from-purple-900/20 via-zinc-900 to-zinc-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight text-white">
            Education & Achievements
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-14 leading-relaxed">
            A strong academic foundation in computer science, AI integration,
            and full-stack development.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl p-6 md:p-8 bg-zinc-900/70 backdrop-blur-md border border-zinc-700/50 shadow-xl group overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600/30 to-purple-400/20 border border-purple-400/30 shadow-md mb-6 mx-auto"
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
