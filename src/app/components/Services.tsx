"use client";

import { GraduationCap, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const education = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Master of Computer Applications (MCA)",
      subtitle: "University Rank Holder",
      school: "Periyar University",
      period: "Aug 2022 – Jun 2024",
      cgpa: "8.5",
      desc: "Awarded University Rank for outstanding academic excellence. Specialized in AI-driven solutions, scalable full-stack architectures, and enterprise-grade database systems.",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Bachelor of Science in Computer Science",
      subtitle: "B.Sc. CS",
      school: "Vysya College",
      period: "Jul 2019 – Jun 2022",
      cgpa: "7.7",
      desc: "Built a solid foundation in programming, algorithms, and software engineering principles.",
      color: "from-indigo-600 to-blue-600",
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-20 md:py-28 bg-gradient-to-b from-purple-900/10 via-zinc-900/50 to-zinc-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
            📚 Academic Background
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Education & Achievements
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            A strong academic foundation in computer science, AI integration,
            and full-stack development with proven excellence.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative rounded-3xl p-8 md:p-10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-purple-500/20 shadow-2xl overflow-hidden h-full">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon + Content Layout */}
                <div className="flex gap-6 items-start relative z-10">
                  {/* Icon Container - Left */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-xl text-white relative flex-shrink-0`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.icon}
                  </motion.div>

                  {/* Content - Right */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-purple-300 font-semibold text-sm mb-2">
                          {item.subtitle}
                        </p>
                      </div>
                      {item.subtitle === "University Rank Holder" && (
                        <Award className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      )}
                    </div>

                    {/* School & Details */}
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-300 font-medium text-sm">
                        📍 {item.school}
                      </p>
                      <p className="text-gray-400 text-sm flex items-center gap-2">
                        📅 {item.period}
                      </p>
                      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30">
                        <p className="text-purple-300 font-semibold text-xs">
                          CGPA: {item.cgpa}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Gradient Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
