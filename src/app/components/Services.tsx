"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const education = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Master of Computer Applications (MCA) — University Rank Holder",
      desc: "Periyar University | Aug 2022 – Jun 2024 | CGPA: 8.5. Awarded University Rank for outstanding academic excellence. Specialized in AI-driven solutions, scalable full-stack architectures, and enterprise-grade database systems.",
    }
    ,
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Bachelor of Science in Computer Science (B.Sc. CS)",
      desc: "Vysya College | Jul 2019 – Jun 2022 | CGPA: 7.7. Built a solid foundation in programming, algorithms, and software engineering principles.",
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-900/20 via-zinc-900 to-zinc-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">
          Academic Background
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight text-white">
          Education & Achievements
        </h2>
        <p className="text-gray-400 text-base max-w-3xl mx-auto mb-12 leading-relaxed">
          A strong academic foundation in computer science, AI integration, and full-stack development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-zinc-800/60 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-zinc-700 hover:border-purple-400 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-purple-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
