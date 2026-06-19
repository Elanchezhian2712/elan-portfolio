"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  Variants,
} from "framer-motion";

import React, { useRef, ReactNode, useState } from "react";
import { Download } from "../components/Download";
import { Check } from "lucide-react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export const SectionWrapper = ({
  children,
  id,
  className = "",
}: SectionWrapperProps) => (
  <section
    id={id}
    className={`w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8 ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export const ResumeDownload = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(
        "/Elanchezhian_M_SoftwareDeveloper_Resume.pdf"
      );
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Elanchezhian_M_SoftwareDeveloper_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
    >
      {downloaded ? (
        <>
          Downloaded Resume <Check width={16} height={16} stroke="#fff" className="ml-2" />
        </>
      ) : (
        <>
          Download Resume <Download width={15} height={15} stroke="#fff" className="ml-2" />
        </>
      )}
    </button>
  );
};


const RobotModel = () => {
  const Nub = ({ className = "" }: { className?: string }) => (
    <div
      className={`absolute h-4 w-4 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-inner ${className}`}
    />
  );
  const Foot = ({ className = "" }: { className?: string }) => (
    <div
      className={`absolute h-6 w-6 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-700 shadow-inner ${className}`}
    />
  );

  return (
    <div className="relative" style={{ transformStyle: "preserve-3d" }}>
      <div
        className="relative h-48 w-56 rounded-[40px] border-2 border-white/5 bg-zinc-900 shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
          backgroundImage: `
            radial-gradient(circle at 10% 20%, #BEB3D466, transparent 50%),
            radial-gradient(circle at 90% 30%, #4F4C9B66, transparent 60%),
            radial-gradient(ellipse at 50% 100%, #B49A7844, transparent 60%)
          `,
        }}
      >
        <div className="absolute inset-0 rounded-[38px] bg-gradient-to-t from-transparent via-transparent to-pink-500/10" />
        <div
          className="absolute inset-4 rounded-[28px] bg-black/70 shadow-[inset_0px_4px_16px_rgba(0,0,0,0.7)]"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <div
              className="h-8 w-10 rounded-t-full bg-pink-400"
              style={{
                boxShadow:
                  "0 0 12px #ec4899, 0 0 24px #ec4899, 0 0 40px #d946ef",
                transform: "translateZ(10px)",
              }}
            />
            <div
              className="h-8 w-10 rounded-t-full bg-pink-400"
              style={{
                boxShadow:
                  "0 0 12px #ec4899, 0 0 24px #ec4899, 0 0 40px #d946ef",
                transform: "translateZ(10px)",
              }}
            />
          </div>
        </div>
        <Nub className="left-16 -top-2" />
        <Nub className="right-16 -top-2" />
        <Nub className="top-16 -left-2" />
        <Nub className="top-28 -left-2" />
        <Nub className="top-16 -right-2" />
        <Nub className="top-28 -right-2" />
        <Foot className="left-12 -bottom-3" />
        <Foot className="right-12 -bottom-3" />
        <Foot className="left-24 -bottom-3" />
        <Foot className="right-24 -bottom-3" />
      </div>
    </div>
  );
};

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef(null);
  const isInView = useInView(observerRef, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-200, 200], [-15, 15]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
  };

  return (
    <SectionWrapper
      id="about"
      className="bg-[linear-gradient(to_bottom,rgba(147,51,234,0.15),#18181b,rgba(147,51,234,0.15))]"
    >
      <div ref={observerRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-center text-center md:text-left"
        >
          <div className="w-full lg:w-1/2 order-last md:order-first text-justify">
            <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight">
              Building Smart Solutions with Lasting Impact
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I&apos;m <span className="font-semibold text-purple-400">Elanchezhian Muthukumar</span>,
              a full-stack developer with a passion for building AI-driven, cloud-native applications
              that solve real-world problems. I bridge the gap between modern web development and
              advanced AI capabilities, delivering products that are as scalable as they are innovative.
            </p>
            <p className="text-gray-300 text-md mb-8 leading-relaxed">
              From developing secure, serverless bookmarking systems with natural-language commands
              to designing accessibility-focused virtual assistants, I specialize in creating solutions
              that merge performance, usability, and intelligence. My goal is simple: turn complex
              challenges into intuitive, high-impact experiences.
            </p>
            <div className="flex justify-center sm:justify-start">
              <ResumeDownload />
            </div>
          </div>
          <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            className="relative w-full lg:w-1/2 h-[460px] order-first lg:order-last hidden lg:flex items-center justify-center"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <RobotModel />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};