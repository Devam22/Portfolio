"use client";

import { motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/motion/FadeIn";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <FadeIn className="mb-10 max-w-3xl sm:mb-12 md:mb-14">
      <div className="mb-3 flex items-center gap-3 sm:mb-4">
        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent-2)]" />
        <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)] uppercase sm:text-xs sm:tracking-[0.22em]">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display relative inline-block max-w-full text-2xl leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
        <motion.span
          aria-hidden
          className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-3)] to-[var(--accent-2)]"
          initial={reduce ? { width: "42%" } : { width: 0 }}
          whileInView={{ width: "42%" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
