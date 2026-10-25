"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { socialIcons } from "@/lib/icons";
import { HiArrowDownTray, HiOutlineMapPin } from "react-icons/hi2";

const details = [
  {
    key: "email" as const,
    label: profile.contactLabels.email,
    value: "Send a message",
    href: `mailto:${profile.email}`,
    Icon: socialIcons.email.Icon,
    color: socialIcons.email.color,
    external: false,
  },
  {
    key: "phone" as const,
    label: profile.contactLabels.phone,
    value: "Call directly",
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    Icon: socialIcons.phone.Icon,
    color: socialIcons.phone.color,
    external: false,
  },
  {
    key: "linkedin" as const,
    label: profile.contactLabels.linkedin,
    value: profile.name,
    href: profile.linkedin,
    Icon: socialIcons.linkedin.Icon,
    color: socialIcons.linkedin.color,
    external: true,
  },
  {
    key: "github" as const,
    label: profile.contactLabels.github,
    value: `@${profile.githubUsername}`,
    href: profile.github,
    Icon: socialIcons.github.Icon,
    color: socialIcons.github.color,
    external: true,
  },
];

export function Contact() {
  const copy = profile.sections.contact;
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="contact" className="section-pad section-frame pb-16 sm:pb-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {details.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <motion.li
                    key={item.key}
                    className="min-w-0 h-full"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-6% 0px" }}
                    transition={{
                      duration: 0.4,
                      delay: reduce ? 0 : index * 0.05,
                      ease,
                    }}
                  >
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="contact-row group h-full"
                    >
                      <span
                        className="icon-badge shrink-0"
                        style={{
                          color: item.color,
                          background: `color-mix(in srgb, ${item.color} 16%, transparent)`,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[var(--muted)] uppercase sm:text-xs">
                          {item.label}
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold text-[var(--foreground)] transition group-hover:text-[var(--accent)] sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="panel-static flex flex-col gap-3 rounded-2xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-[1.75rem] sm:px-5 sm:py-5">
              <p className="inline-flex max-w-full items-center gap-2 text-[var(--muted)]">
                <HiOutlineMapPin className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span className="font-mono truncate text-[10px] font-semibold tracking-wide uppercase sm:text-xs">
                  {profile.location}
                </span>
              </p>
              <a
                href={profile.resumePath}
                download={profile.resumeDownloadName}
                className="btn-primary"
              >
                <HiArrowDownTray className="h-4 w-4" />
                {profile.cta.resume}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
