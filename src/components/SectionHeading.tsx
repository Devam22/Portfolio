"use client";

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
  return (
    <FadeIn className="mb-8 max-w-3xl sm:mb-10">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent-2)]" />
        <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)] uppercase sm:text-xs sm:tracking-[0.22em]">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-2xl leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:mt-4 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
