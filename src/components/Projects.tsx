"use client";

import { motion, useReducedMotion } from "motion/react";
import type { GitHubRepo } from "@/lib/github";
import { formatRelativeDate } from "@/lib/github";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects({
  repos,
  error,
}: {
  repos: GitHubRepo[];
  error: string | null;
}) {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="section-pad py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Live from GitHub — every public repository."
          description="Auto-synced hourly from github.com/Devam22. No curated allowlist."
        />

        {error ? (
          <p className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-5 py-4 text-sm text-[var(--muted)]">
            {error}
          </p>
        ) : null}

        {!error && repos.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">No public repositories found.</p>
        ) : null}

        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {repos.map((repo, index) => (
            <motion.li
              key={repo.id}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: 0.45,
                delay: reduce ? 0 : Math.min(index * 0.04, 0.4),
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-3 py-6 transition sm:grid-cols-[1fr_auto] sm:items-start"
                whileHover={reduce ? undefined : { x: 6 }}
                transition={{ duration: 0.25 }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)]">
                      {repo.name}
                    </h3>
                    {repo.fork ? <span className="chip">fork</span> : null}
                    {repo.archived ? <span className="chip">archived</span> : null}
                  </div>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                    {repo.description ?? "No description provided."}
                  </p>
                  {repo.topics.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {repo.topics.slice(0, 6).map((topic) => (
                        <span key={topic} className="chip font-mono">
                          {topic}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <span className="mt-3 block h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-24" />
                </div>

                <div className="font-mono flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--muted)] sm:flex-col sm:items-end sm:text-right">
                  <span>{repo.language ?? "—"}</span>
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                  <span>Updated {formatRelativeDate(repo.updated_at)}</span>
                </div>
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
