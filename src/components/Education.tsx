"use client";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Education() {
  return (
    <section id="education" className="section-pad py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading eyebrow="05 — Education" title="Academic foundation." />

        <div className="grid gap-6 md:grid-cols-2">
          {profile.education.map((item, index) => (
            <FadeIn key={item.school} delay={index * 0.08}>
              <article className="h-full border-t border-[var(--accent)]/40 pt-5">
                <p className="font-mono text-xs text-[var(--accent)]">
                  {item.period}
                </p>
                <h3 className="font-display mt-3 text-2xl tracking-tight">
                  {item.degree}
                </h3>
                <p className="mt-3 text-[var(--muted)]">{item.school}</p>
                <p className="font-mono mt-1 text-xs text-[var(--muted)]">
                  {item.location}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
