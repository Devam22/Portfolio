"use client";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { socialIcons } from "@/lib/icons";
import { HiArrowDownTray } from "react-icons/hi2";

const details = [
  {
    key: "email" as const,
    label: profile.contactLabels.email,
    value: profile.email,
    Icon: socialIcons.email.Icon,
    color: socialIcons.email.color,
  },
  {
    key: "phone" as const,
    label: profile.contactLabels.phone,
    value: profile.phone,
    Icon: socialIcons.phone.Icon,
    color: socialIcons.phone.color,
  },
  {
    key: "linkedin" as const,
    label: profile.contactLabels.linkedin,
    value: profile.contactLabels.linkedinDisplay,
    Icon: socialIcons.linkedin.Icon,
    color: socialIcons.linkedin.color,
  },
  {
    key: "github" as const,
    label: profile.contactLabels.github,
    value: profile.contactLabels.githubDisplay,
    Icon: socialIcons.github.Icon,
    color: socialIcons.github.color,
  },
];

export function Contact() {
  const copy = profile.sections.contact;

  return (
    <section id="contact" className="section-pad section-frame pb-16 sm:pb-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {details.map((item) => {
              const Icon = item.Icon;
              return (
                <div key={item.key} className="contact-row">
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
                    <p className="mt-1 select-all break-all text-base font-semibold text-[var(--foreground)] sm:text-lg">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-8">
            <a
              href={profile.resumePath}
              download={profile.resumeDownloadName}
              className="btn-primary"
            >
              <HiArrowDownTray className="h-4 w-4" />
              {profile.cta.resume}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
