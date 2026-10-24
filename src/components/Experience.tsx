"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="section-pad py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Shipped models in healthcare and banking."
        />

        <div className="relative space-y-12 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-[var(--timeline)] sm:before:left-[11px]">
          {profile.experience.map((job, index) => (
            <motion.article
              key={job.company}
              className="relative grid gap-4 pl-10 sm:pl-14 lg:grid-cols-[220px_1fr]"
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <motion.span
                className="absolute top-2 left-0 flex h-4 w-4 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--background)] sm:h-6 sm:w-6"
                whileInView={
                  reduce
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0 0 rgba(15,118,110,0)",
                          "0 0 0 8px rgba(15,118,110,0.12)",
                          "0 0 0 0 rgba(15,118,110,0)",
                        ],
                      }
                }
                transition={{ duration: 1.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] sm:h-2 sm:w-2" />
              </motion.span>

              <div>
                <p className="font-mono text-xs tracking-wide text-[var(--accent)] uppercase">
                  {job.period}
                </p>
                <h3 className="font-display mt-2 text-2xl tracking-tight">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {job.title} · {job.employmentType}
                </p>
                <p className="font-mono mt-1 text-xs text-[var(--muted)]">
                  {job.location}
                </p>
              </div>

              <ul className="space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="border-b border-[var(--border)] pb-3 text-sm leading-relaxed text-[var(--foreground)]/85 last:border-b-0 sm:text-[15px]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
