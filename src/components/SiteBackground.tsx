"use client";

import { motion, useReducedMotion } from "motion/react";

export function SiteBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="surface-mist absolute inset-0" />

      {/* Soft color orbs */}
      <motion.div
        className="orb absolute -top-28 left-[-8%] h-[28rem] w-[28rem]"
        style={{ background: "var(--glow)" }}
        animate={
          reduce
            ? undefined
            : { x: [0, 50, 0], y: [0, 35, 0], scale: [1, 1.15, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb absolute top-[28%] right-[-12%] h-[30rem] w-[30rem]"
        style={{ background: "var(--glow-2)" }}
        animate={
          reduce
            ? undefined
            : { x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb absolute bottom-[-12%] left-[25%] h-[24rem] w-[24rem]"
        style={{ background: "var(--accent-3-soft)" }}
        animate={
          reduce
            ? undefined
            : { opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Diagonal signal bands */}
      <div className="signal-band absolute top-[18%] -left-20 h-24 w-[140%] rotate-[-8deg]" />
      <div className="signal-band-alt absolute top-[62%] -right-24 h-16 w-[130%] rotate-[6deg]" />

      {/* Circuit / node mesh */}
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-[0.55]"
        xmlns="http://www.w3.org/2000/svg"
        animate={
          reduce
            ? undefined
            : { x: [0, 12, 0], y: [0, -8, 0], opacity: [0.35, 0.6, 0.35] }
        }
        transition={
          reduce
            ? undefined
            : { duration: 22, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <defs>
          <pattern
            id="circuit"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 36 H28 M44 36 H72 M36 0 V28 M36 44 V72"
              fill="none"
              stroke="var(--lattice)"
              strokeWidth="1.2"
            />
            <circle cx="36" cy="36" r="3" fill="var(--lattice-strong)" />
            <circle cx="0" cy="0" r="1.4" fill="var(--lattice)" />
            <circle cx="72" cy="72" r="1.4" fill="var(--lattice)" />
          </pattern>
          <radialGradient id="vignette" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="var(--background)" stopOpacity="0.55" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
        <rect width="100%" height="100%" fill="url(#vignette)" />
      </motion.svg>

      {/* Floating geometric accents */}
      <motion.div
        className="geo-ring absolute top-[12%] right-[12%] h-40 w-40"
        animate={reduce ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="geo-diamond absolute bottom-[18%] left-[8%] h-24 w-24"
        animate={reduce ? undefined : { rotate: [0, -20, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="geo-cross absolute top-[48%] left-[48%] h-16 w-16"
        animate={reduce ? undefined : { opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
