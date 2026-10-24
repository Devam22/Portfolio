"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";

export function Hero() {
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  const variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: reduce ? 0 : delay,
        ease,
      },
    }),
  };

  return (
    <section
      id="top"
      className="section-pad relative flex min-h-[100svh] items-center pt-24 pb-20"
    >
      <div className="container-shell">
        <motion.p
          className="font-mono text-xs tracking-[0.24em] text-[var(--accent)] uppercase"
          custom={0}
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={variants}
        >
          {profile.location}
        </motion.p>

        <motion.h1
          className="font-display mt-5 max-w-5xl text-5xl leading-[0.95] tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl"
          custom={0.08}
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={variants}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="mt-5 font-mono text-sm text-[var(--muted)] sm:text-base"
          custom={0.16}
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={variants}
        >
          {profile.role}
          <span className="mx-2 text-[var(--accent)]">·</span>
          Toronto
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          custom={0.24}
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={variants}
        >
          {profile.heroLine}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          custom={0.34}
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={variants}
        >
          <a
            href={profile.resumePath}
            download={profile.resumeDownloadName}
            className="btn-primary"
          >
            Download Resume
          </a>
          <a href="#projects" className="btn-ghost">
            View work
          </a>
          <a href="#contact" className="btn-ghost">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
