// src/app/components/Footer.tsx

"use client";

import { motion } from "framer-motion";


const GitHubIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
      3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 
      1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.304 
      3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 
      0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 
      0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404 
      11.52 11.52 0 0 1 3.003.404c2.293-1.552 3.301-1.23 
      3.301-1.23.653 1.652.241 2.873.118 3.176.77.84 
      1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 
      5.921.43.372.823 1.102.823 2.222 0 1.606-.015 
      2.898-.015 3.293 0 .321.218.694.825.576C20.565 
      22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
);

const Footer = () => {
  const borderStyle = "border-neutral-700";
  const horizontalPadding = "px-0 sm:px-6 lg:px-8";

  return (
    <footer className="relative mt-32">
      <div className="absolute inset-x-0 -top-40 flex justify-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-7xl rounded-[2rem] p-[1px] bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-purple-500/40 shadow-2xl"
        >
          <div className="relative w-full rounded-[1.9rem] bg-neutral-900/80 backdrop-blur-xl p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-1/3 -left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse opacity-50" />
            <div className="absolute -bottom-1/3 -right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px] animate-pulse opacity-50" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white transition-all duration-500">
                  Let&apos;s Build Something Amazing
                </h2>
                <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                  Turning your ideas into intelligent solutions that drive real impact.
                </p>
              </div>
              <div className="hidden md:block relative w-64 h-64 flex-shrink-0">
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full shadow-2xl" />
                </div>
                <div className="absolute inset-0 border-2 border-indigo-500/10 rounded-full" />
                <div className="absolute inset-10 border border-purple-500/10 rounded-full" />
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-1/2 -left-1 w-3 h-3 bg-indigo-400 rounded-full shadow-lg" />
                </div>
                <div className="absolute inset-5 animate-[spin_12s_linear_infinite_reverse]">
                  <div className="absolute top-1/2 -right-1 w-2.5 h-2.5 bg-purple-400 rounded-full shadow-lg" />
                </div>
                <div className="absolute inset-10 animate-[spin_8s_linear_infinite]">
                  <div className="absolute -top-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="text-white bg-gradient-to-br from-purple-900/30 via-zinc-950 to-zinc-950 pt-0 sm:pt-20 lg:pt-38">
        <div
          className={`${borderStyle} grid grid-cols-1 md:grid-cols-12 gap-0 py-8 sm:py-10 ${horizontalPadding}`}
        >
        </div>
        <div
          className={`mt-0 sm:mt-0 py-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-white/60 ${horizontalPadding}`}
        >
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Elanchezhian Muthukumar. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/elanchezhian-dev/" aria-label="LinkedIn" className="hover:text-purple-500 transition-colors">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/Elanchezhian2712" aria-label="GitHub" className="hover:text-purple-500 transition-colors">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
