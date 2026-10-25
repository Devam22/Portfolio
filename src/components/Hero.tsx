"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";
import { SocialLinks } from "@/components/SocialLinks";
import { handleSectionNav } from "@/lib/scroll";
import { HiArrowDownTray } from "react-icons/hi2";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: reduce ? 0 : delay,
        ease,
      },
    }),
  };

  return (
    <section
      id="top"
      className="section-pad hero-stage relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20 md:pt-20 md:pb-28"
    >
      <div className="container-shell">
        <div className="layout-asymmetric items-stretch lg:items-center">
          <div className="min-w-0">
            <motion.div
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 shadow-[var(--shadow)]"
              custom={0}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={variants}
            >
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[var(--accent-3)]" />
              <span className="font-mono truncate text-[10px] font-semibold tracking-wide text-[var(--muted)] uppercase sm:text-xs">
                {profile.heroBadge}
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 sm:gap-5"
              custom={0.08}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={variants}
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[var(--accent)] shadow-[var(--shadow-strong)] sm:h-16 sm:w-16">
                <Image
                  src={profile.photo}
                  alt={profile.photoAlt}
                  fill
                  priority
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <h1 className="font-display name-title break-words text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  {profile.name}
                </h1>
                <p className="mt-2 font-mono text-xs font-semibold text-[var(--accent)] sm:mt-2.5 sm:text-sm">
                  <span className="break-words">{profile.role}</span>
                  <span className="mx-2 text-[var(--accent-2)]" aria-hidden>
                    ·
                  </span>
                  <span className="inline-block text-[var(--muted)]">
                    {profile.location}
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.p
              className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:mt-5 sm:text-base"
              custom={0.16}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={variants}
            >
              {profile.heroTags}
            </motion.p>
          </div>

          <motion.div
            className="panel min-w-0 rounded-2xl p-5 sm:rounded-[2rem] sm:p-6 md:p-7"
            custom={0.2}
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={variants}
          >
            <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg">
              {profile.heroLine}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={profile.resumePath}
                download={profile.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <HiArrowDownTray className="h-4 w-4" />
                {profile.cta.resume}
              </a>
              <a
                href="#projects"
                className="btn-ghost"
                onClick={(event) => handleSectionNav(event, "#projects")}
              >
                {profile.cta.work}
              </a>
            </div>
            <div className="mt-5 sm:mt-6">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
