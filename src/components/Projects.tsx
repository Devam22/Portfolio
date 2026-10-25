"use client";

import { motion, useReducedMotion } from "motion/react";
import type { GitHubRepo } from "@/lib/github";
import { formatRelativeDate } from "@/lib/github";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { getLanguageIcon, socialIcons } from "@/lib/icons";
import { FaGithub, FaStar, FaCodeFork } from "react-icons/fa6";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export function Projects({
  repos,
  error,
}: {
  repos: GitHubRepo[];
  error: string | null;
}) {
  const reduce = useReducedMotion();
  const copy = profile.sections.projects;
  const GithubIcon = socialIcons.github.Icon;

  return (
    <section id="projects" className="section-pad section-frame">
      <div className="container-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 sm:mb-6">
          <GithubIcon
            className="h-4 w-4 shrink-0"
            style={{ color: socialIcons.github.color }}
          />
          <span className="font-mono truncate text-[10px] font-semibold text-[var(--muted)] sm:text-xs">
            Top {profile.projectsLimit} · @{profile.githubUsername}
          </span>
        </div>

        {error ? (
          <p className="panel mb-6 rounded-2xl px-4 py-4 text-sm text-[var(--muted)] sm:px-5">
            {error}
          </p>
        ) : null}

        {!error && repos.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">No public repositories found.</p>
        ) : null}

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {repos.map((repo, index) => {
            const lang = getLanguageIcon(repo.language);
            const LangIcon = lang.Icon;

            return (
              <motion.li
                key={repo.id}
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
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="panel group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl p-4 sm:rounded-[1.75rem] sm:p-5 md:p-6"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{
                      background:
                        index % 3 === 0
                          ? "var(--accent)"
                          : index % 3 === 1
                            ? "var(--accent-3)"
                            : "var(--accent-2)",
                    }}
                  />

                  <div className="flex min-w-0 items-start gap-2">
                    <FaGithub className="mt-1 h-5 w-5 shrink-0 text-[var(--foreground)]" />
                    <h3 className="font-display min-w-0 break-words text-lg tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] sm:text-xl">
                      {repo.name}
                    </h3>
                    <HiArrowTopRightOnSquare className="mt-1.5 hidden h-4 w-4 shrink-0 text-[var(--muted)] opacity-0 transition group-hover:opacity-100 sm:block" />
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {repo.description ?? "No description provided."}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                    <span className="chip">
                      <LangIcon
                        className="h-3.5 w-3.5"
                        style={{ color: lang.color }}
                      />
                      {repo.language ?? "Other"}
                    </span>
                    <span className="chip">
                      <FaStar className="h-3.5 w-3.5 text-[#F59E0B]" />
                      {repo.stargazers_count}
                    </span>
                    <span className="chip">
                      <FaCodeFork className="h-3.5 w-3.5 text-[var(--accent)]" />
                      {repo.forks_count}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--muted)] sm:text-xs">
                      {formatRelativeDate(repo.updated_at)}
                    </span>
                  </div>
                </motion.a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
