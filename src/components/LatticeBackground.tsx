"use client";

import { motion, useReducedMotion } from "motion/react";

export function LatticeBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="surface-mist absolute inset-0" />
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 18, 0],
                y: [0, -12, 0],
                opacity: [0.55, 0.85, 0.55],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 22, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <defs>
          <pattern
            id="lattice"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M56 0H0V56"
              fill="none"
              stroke="var(--lattice)"
              strokeWidth="1"
            />
            <circle cx="0" cy="0" r="1.25" fill="var(--lattice-strong)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice)" />
      </motion.svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </div>
  );
}
