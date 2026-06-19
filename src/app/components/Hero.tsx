"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowDown, Layers, Volume2 } from "lucide-react";

// ── word-reveal helper ──────────────────────────────────────────────────────
const wr = (delay: number) => ({
  initial: { y: "110%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  transition: { delay, duration: 0.65, ease: [0.33, 1, 0.68, 1] as const },
});

// ── scan-line texture ───────────────────────────────────────────────────────
const ScanLines = () => (
  <div
    aria-hidden
    className="absolute inset-0 pointer-events-none z-[3]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.022) 3px, rgba(0,0,0,0.022) 4px)",
    }}
  />
);

// ── scroll hint ─────────────────────────────────────────────────────────────
const ScrollHint = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.2, duration: 0.6 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 pointer-events-none"
  >
    <span
      className="text-[10px] tracking-[0.25em] uppercase"
      style={{ color: "rgba(240,242,255,0.3)", fontFamily: "var(--font-geist-mono)" }}
    >
      scroll
    </span>
    <motion.div
      animate={{ y: [0, 7] }}
      transition={{
        duration: 1.1,
        repeat: Infinity,
        repeatType: "mirror",
        type: "tween",
        ease: "easeInOut",
      }}
    >
      <ArrowDown className="w-4 h-4" style={{ color: "rgba(240,242,255,0.3)" }} />
    </motion.div>
  </motion.div>
);

// ── hero ────────────────────────────────────────────────────────────────────
export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const audioUnlockedRef = useRef(false);
  const heroVisibleRef = useRef(true);

  // One-time click anywhere unlocks browser audio policy
  const unlockAudio = useCallback(() => {
    if (audioUnlockedRef.current) return;
    audioUnlockedRef.current = true;
    setAudioUnlocked(true);
    if (heroVisibleRef.current && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", unlockAudio, { once: true });
    return () => document.removeEventListener("click", unlockAudio);
  }, [unlockAudio]);

  // Re-sync muted after React re-renders (JSX `muted` attr overrides DOM property)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !audioUnlockedRef.current;
    }
  });

  // Play + unmute when hero visible; mute + pause when scrolled away
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          video.muted = !audioUnlockedRef.current;
          video.play().catch(() => {});
        } else {
          video.muted = true;
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#06090f]">

      {/* video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain object-right-top z-0"
        src="/video/webvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* enable-audio nudge — disappears after first click */}
      <AnimatePresence>
        {!audioUnlocked && (
          <motion.button
            key="audio-nudge"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ delay: 1.8, duration: 0.4 }}
            onClick={unlockAudio}
            aria-label="Enable audio"
            className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
            style={{
              background: "rgba(9,9,11,0.6)",
              border: "1px solid rgba(147,51,234,0.4)",
              color: "rgba(240,242,255,0.6)",
              backdropFilter: "blur(10px)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            <Volume2 className="w-3.5 h-3.5" />
            ENABLE AUDIO
          </motion.button>
        )}
      </AnimatePresence>

      {/* gradient overlay — only darkens left strip behind text, rest shows video */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(9,9,11,0.80) 0%, rgba(9,9,11,0.38) 32%, rgba(9,9,11,0.08) 58%, transparent 80%)",
        }}
      />

      {/* scan-line texture */}
      <ScanLines />

      {/* violet ambient bloom — top left corner */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.08) 0%, transparent 65%)",
        }}
      />

      {/* ── content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen py-24 lg:py-28">

        {/* ── LEFT: text ── */}
        <div className="flex-1 min-w-0">

          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-7"
          >
            <span
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ color: "#a855f7", fontFamily: "var(--font-geist-mono)" }}
            >
              AI Engineer
            </span>
            <span
              className="hidden sm:block h-px w-10 opacity-50"
              style={{ background: "#a855f7" }}
            />
            <span
              className="hidden sm:block text-[11px] tracking-[0.3em] uppercase"
              style={{
                color: "rgba(240,242,255,0.35)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              Software Developer  
            </span>
          </motion.div>

          {/* name */}
          <h1 className="mb-5 leading-none flex items-baseline gap-3 flex-wrap">
            <span className="overflow-hidden inline-block">
              <motion.span
                {...wr(0.08)}
                className="block font-black"
                style={{
                  fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                  letterSpacing: "-0.035em",
                  color: "#F0F2FF",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                ELANCHEZHIAN
              </motion.span>
            </span>
            <span className="overflow-hidden inline-block">
              <motion.span
                {...wr(0.22)}
                className="block font-black"
                style={{
                  fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                  letterSpacing: "-0.035em",
                  fontFamily: "var(--font-geist-sans)",
                  background: "linear-gradient(90deg, #a855f7 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                M
              </motion.span>
            </span>
          </h1>

          {/* subtitle rule */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-5"
          >
            {/* <span
              className="flex-shrink-0 h-[2px] w-8"
              style={{
                background: "linear-gradient(to right, #9333ea, #4f46e5)",
              }}
            /> */}
            <span
              className="text-lg font-medium"
              style={{ color: "rgba(240,242,255,0.75)" }}
            >
              Building intelligent systems that scale.
            </span>
          </motion.div>

          {/* intro */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            className="text-base leading-relaxed mb-9 max-w-[480px]"
            style={{ color: "rgba(240,242,255,0.5)" }}
          >
            Full-stack developer specializing in AI-driven applications and cloud-native
            solutions — delivering products that are as scalable as they are innovative.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            {/* primary */}
            <motion.a
              href="https://www.linkedin.com/in/elanchezhian-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #9333ea, #4f46e5)",
                boxShadow: "0 0 22px rgba(147,51,234,0.35)",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              <Layers className="w-4 h-4" />
              View LinkedIn
            </motion.a>

            {/* ghost */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-colors duration-200"
              style={{
                background: "rgba(147,51,234,0.08)",
                border: "1px solid rgba(147,51,234,0.38)",
                color: "rgba(240,242,255,0.88)",
                backdropFilter: "blur(10px)",
                fontFamily: "var(--font-geist-sans)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(147,51,234,0.16)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(147,51,234,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(147,51,234,0.08)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(147,51,234,0.38)";
              }}
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </motion.button>
          </motion.div>

          {/* tech tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-2.5"
          >
            <span
              className="text-[10px] uppercase tracking-[0.28em] mr-1"
              style={{
                color: "rgba(240,242,255,0.25)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              Stack
            </span>
            {["Next.js", "Python", "AI / ML", "Cloud"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-md"
                style={{
                  background: "rgba(147,51,234,0.07)",
                  border: "1px solid rgba(147,51,234,0.18)",
                  color: "rgba(240,242,255,0.45)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

      </div>

      <ScrollHint />
    </section>
  );
};
