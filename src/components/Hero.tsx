"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";
import { SocialLinks } from "@/components/SocialLinks";
import { handleSectionNav } from "@/lib/scroll";
import { HiArrowDownTray } from "react-icons/hi2";

const heroTags = profile.heroTags
  .split("·")
  .map((tag) => tag.trim())
  .filter(Boolean);

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
      className="section-pad hero-stage relative flex items-center overflow-x-clip py-12 sm:py-16 md:py-20 lg:min-h-[calc(100dvh-4rem)] lg:py-24"
    >
      <div className="container-shell w-full min-w-0">
        <div className="layout-asymmetric w-full min-w-0 items-stretch lg:items-center">
          <div className="min-w-0">
            <motion.div
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 shadow-[var(--shadow)] sm:mb-7"
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
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 md:gap-6"
              custom={0.08}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={variants}
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[var(--accent)] shadow-[var(--shadow-strong)] ring-4 ring-[var(--accent-soft)] sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
                <Image
                  src={profile.photo}
                  alt={profile.photoAlt}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h1 className="font-display name-title break-words text-[2rem] leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  {profile.name}
                </h1>
                <p className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs font-semibold text-[var(--accent)] sm:mt-3 sm:text-sm">
                  <span className="break-words">{profile.role}</span>
                  <span className="text-[var(--accent-2)]" aria-hidden>
                    ·
                  </span>
                  <span className="text-[var(--muted)]">{profile.location}</span>
                </p>
              </div>
            </motion.div>

            <motion.ul
              className="mt-5 flex max-w-xl flex-wrap gap-2 sm:mt-7"
              custom={0.16}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={variants}
            >
              {heroTags.map((tag, index) => (
                <li
                  key={tag}
                  className="chip"
                  style={{
                    borderColor:
                      index === 0
                        ? "color-mix(in srgb, var(--accent) 35%, var(--border))"
                        : index === 1
                          ? "color-mix(in srgb, var(--accent-3) 35%, var(--border))"
                          : "color-mix(in srgb, var(--accent-2) 35%, var(--border))",
                  }}
                >
                  {tag}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="panel relative w-full min-w-0 overflow-hidden rounded-2xl p-4 sm:rounded-[2rem] sm:p-6 md:p-8"
            custom={0.2}
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={variants}
          >
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), var(--accent-3), var(--accent-2))",
              }}
            />
            <p className="text-sm leading-relaxed text-[var(--foreground)] sm:text-base md:text-lg">
              {profile.heroLine}
            </p>
            <div className="mt-5 flex w-full flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center">
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
            <div className="mt-5 sm:mt-7">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
