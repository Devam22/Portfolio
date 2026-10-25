"use client";

import { motion, useReducedMotion } from "motion/react";
import { formatRelativeDate } from "@/lib/github";
import type { DisplayProject } from "@/lib/projects";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { getLanguageIcon, socialIcons } from "@/lib/icons";
import { FaGithub, FaStar, FaCodeFork } from "react-icons/fa6";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export function Projects({
  projects,
  error,
}: {
  projects: DisplayProject[];
  error: string | null;
}) {
  const reduce = useReducedMotion();
  const copy = profile.sections.projects;
  const GithubIcon = socialIcons.github.Icon;

  return (
    <section id="projects" className="section-pad section-frame section-dense">
      <div className="container-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 sm:mb-8">
          <GithubIcon
            className="h-4 w-4 shrink-0"
            style={{ color: socialIcons.github.color }}
          />
          <span className="font-mono truncate text-[10px] font-semibold text-[var(--muted)] sm:text-xs">
            Selected work · @{profile.githubUsername}
          </span>
        </div>

        {error ? (
          <p className="panel-static mb-6 rounded-2xl px-4 py-4 text-sm text-[var(--muted)] sm:px-5">
            {error}
          </p>
        ) : null}

        {!error && projects.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">No projects to show yet.</p>
        ) : null}

        <ul className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-7">
          {projects.map((project, index) => {
            const lang = getLanguageIcon(project.language);
            const LangIcon = lang.Icon;

            return (
              <motion.li
                key={project.id}
                className="min-w-0"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.45,
                  delay: reduce ? 0 : Math.min(index * 0.06, 0.3),
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl p-5 sm:rounded-[1.75rem] sm:p-6"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-100 transition duration-300 group-hover:h-1.5"
                    style={{
                      background:
                        index % 3 === 0
                          ? "var(--accent)"
                          : index % 3 === 1
                            ? "var(--accent-3)"
                            : "var(--accent-2)",
                    }}
                  />

                  <div className="flex min-w-0 items-start gap-2.5">
                    <FaGithub className="mt-1 h-5 w-5 shrink-0 text-[var(--foreground)]" />
                    <h3 className="font-display min-w-0 flex-1 break-words text-lg tracking-tight text-[var(--foreground)] transition group-hover:text-[var(--accent)] sm:text-xl">
                      {project.name}
                    </h3>
                    <HiArrowTopRightOnSquare className="mt-1.5 hidden h-4 w-4 shrink-0 text-[var(--muted)] opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:block" />
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.length > 0
                      ? project.stack.slice(0, 4).map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))
                      : (
                          <span className="chip">
                            <LangIcon
                              className="h-3.5 w-3.5"
                              style={{ color: lang.color }}
                            />
                            {project.language ?? "Other"}
                          </span>
                        )}
                    {project.stargazers_count > 0 ? (
                      <span className="chip">
                        <FaStar className="h-3.5 w-3.5 text-[#F59E0B]" />
                        {project.stargazers_count}
                      </span>
                    ) : null}
                    {project.forks_count > 0 ? (
                      <span className="chip">
                        <FaCodeFork className="h-3.5 w-3.5 text-[var(--accent)]" />
                        {project.forks_count}
                      </span>
                    ) : null}
                    {project.updated_at ? (
                      <span className="font-mono self-center text-[10px] text-[var(--muted)] sm:text-xs">
                        {formatRelativeDate(project.updated_at)}
                      </span>
                    ) : null}
                  </div>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
