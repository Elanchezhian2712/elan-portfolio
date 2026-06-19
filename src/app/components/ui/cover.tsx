// src/app/components/ui/cover.tsx

"use client";
import React, { useEffect, useId, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "../sparkles";

export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState<number[]>([]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const updateDimensions = () => {
      if (currentRef) {
        const width = currentRef.clientWidth;
        const height = currentRef.clientHeight;
        setContainerWidth(width);
        const numberOfBeams = Math.floor(height / 10);
        const positions = Array.from(
          { length: numberOfBeams },
          (_, i) => (i + 1) * (height / (numberOfBeams + 1))
        );
        setBeamPositions(positions);
      }
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(currentRef);

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative bg-neutral-900 inline-block dark:bg-neutral-900 px-2 py-2 transition duration-200 rounded-sm"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full w-full overflow-hidden absolute inset-0"
      >
        <motion.div
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            x: {
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          className="w-[200%] h-full flex"
        >
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={500}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={500}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </motion.div>
      </motion.div>
      {beamPositions.map((position, index) => (
        <Beam
          key={index}
          width={containerWidth}
          style={{ top: `${position}px` }}
        />
      ))}
      <motion.span
        className={cn(
          "dark:text-white inline-block text-white relative z-20 transition duration-200",
          className
        )}
      >
        {children}
      </motion.span>
      <CircleIcon className="absolute -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" />
      <CircleIcon className="absolute -left-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" />
    </div>
  );
};

export const Beam = ({
  className,
  width = 600,
  ...svgProps
}: {
  className?: string;
  width?: number;
} & React.ComponentProps<typeof motion.svg>) => {
  const id = useId();
  return (
    <motion.svg
      width={width ?? "600"}
      height="1"
      viewBox={`0 0 ${width ?? "600"} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <motion.path
        d={`M0 0.5H${width ?? "600"}`}
        stroke={`url(#svgGradient-${id})`}
      />
      <defs>
        <motion.linearGradient
          id={`svgGradient-${id}`}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "-10%" }}
          animate={{ x1: "110%", x2: "100%" }}
          transition={{
            duration: 0.5,
            ease: "linear",
            repeat: Infinity,
            delay: Math.random() * (1 - 0.2) + 0.2,
            repeatDelay: Math.random() * (2 - 1) + 1,
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

export const CircleIcon = ({ className }: { className?: string }) => {
  return <div className={cn("hidden", className)}></div>;
};