"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { socialIcons } from "@/lib/icons";

const companyIcons: Record<
  string,
  (typeof socialIcons)[keyof typeof socialIcons]
> = {
  "Oracle Health": socialIcons.oracle,
  "Accenture": socialIcons.accenture,
};

export function Experience() {
  const reduce = useReducedMotion();
  const copy = profile.sections.experience;

  return (
    <section id="experience" className="section-pad section-frame">
      <div className="container-shell">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />

        <div className="relative space-y-6 sm:space-y-8">
          <div className="absolute top-3 bottom-3 left-[15px] hidden w-1 rounded-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent-3)] to-[var(--accent-2)] sm:left-[19px] sm:block" />

          {profile.experience.map((job, index) => {
            const brand = companyIcons[job.company] ?? socialIcons.oracle;
            const BrandIcon = brand.Icon;

            return (
              <motion.article
                key={job.company}
                className="relative grid gap-4 sm:gap-5 sm:pl-14 md:grid-cols-[200px_1fr] md:pl-16 lg:grid-cols-[220px_1fr]"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <span
                  className="absolute top-1 left-0 hidden h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-[var(--shadow)] sm:flex sm:h-11 sm:w-11"
                  style={{ color: brand.color }}
                >
                  <BrandIcon className="h-5 w-5" />
                </span>

                <div className="panel rounded-2xl p-4 sm:rounded-[1.75rem] sm:p-5">
                  <div className="mb-2 flex items-center gap-3 sm:mb-0 sm:block">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--chip)] sm:hidden"
                      style={{ color: brand.color }}
                    >
                      <BrandIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-wide text-[var(--accent-2)] uppercase sm:text-xs">
                        {job.period}
                      </p>
                      <h3 className="font-display mt-1 text-xl tracking-tight text-[var(--foreground)] sm:mt-2 sm:text-2xl">
                        {job.company}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                    {job.title} · {job.employmentType}
                  </p>
                  <p className="font-mono mt-1 text-xs text-[var(--muted)]">
                    {job.location}
                  </p>
                </div>

                <ul className="panel space-y-0 overflow-hidden rounded-2xl sm:rounded-[1.75rem]">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bullet}
                      className="border-b border-[var(--border)] px-4 py-3 text-sm leading-relaxed text-[var(--foreground)] last:border-b-0 sm:px-5 sm:py-3.5 sm:text-[15px]"
                      style={{
                        borderLeft: `3px solid ${
                          bulletIndex % 3 === 0
                            ? "var(--accent)"
                            : bulletIndex % 3 === 1
                              ? "var(--accent-3)"
                              : "var(--accent-2)"
                        }`,
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
