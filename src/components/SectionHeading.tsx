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
    <FadeIn className="mb-10 max-w-2xl">
      <p className="font-mono text-xs tracking-[0.22em] text-[var(--accent)] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[var(--muted)] sm:text-lg">{description}</p>
      ) : null}
    </FadeIn>
  );
}
