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
    <section id="experience" className="section-pad section-frame section-dense">
      <div className="container-shell">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />

        <div className="relative space-y-10 sm:space-y-12 md:space-y-14">
          <div className="absolute top-4 bottom-4 left-[19px] hidden w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-3)] to-[var(--accent-2)] opacity-70 sm:block" />

          {profile.experience.map((job, index) => {
            const brand = companyIcons[job.company] ?? socialIcons.oracle;
            const BrandIcon = brand.Icon;

            return (
              <motion.article
                key={job.company}
                className="relative grid gap-5 sm:gap-6 sm:pl-14 md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] md:pl-16 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
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
                  className="absolute top-1 left-0 hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] shadow-[var(--shadow)] sm:flex"
                  style={{ color: brand.color }}
                >
                  <BrandIcon className="h-4 w-4" />
                </span>

                <div className="min-w-0">
                  <div className="mb-2 flex items-center gap-3 sm:mb-0 sm:block">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--chip)] sm:hidden"
                      style={{ color: brand.color }}
                    >
                      <BrandIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-wide text-[var(--accent-2)] uppercase sm:text-xs">
                        {job.period}
                      </p>
                      <h3 className="font-display mt-1.5 text-2xl tracking-tight text-[var(--foreground)] sm:mt-2 sm:text-3xl">
                        {job.company}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-[var(--accent)] sm:mt-3">
                    {job.title}
                    <span className="mx-2 text-[var(--muted)]">·</span>
                    <span className="text-[var(--muted)]">{job.employmentType}</span>
                  </p>
                  <p className="font-mono mt-1 text-xs text-[var(--muted)]">
                    {job.location}
                  </p>
                </div>

                <ul className="space-y-3 sm:space-y-3.5">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-sm leading-relaxed text-[var(--foreground)] sm:text-[15px]"
                    >
                      <span
                        className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full"
                        style={{
                          background:
                            bulletIndex % 3 === 0
                              ? "var(--accent)"
                              : bulletIndex % 3 === 1
                                ? "var(--accent-3)"
                                : "var(--accent-2)",
                        }}
                      />
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
