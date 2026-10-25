"use client";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { socialIcons } from "@/lib/icons";

export function Education() {
  const copy = profile.sections.education;
  const EduIcon = socialIcons.education.Icon;

  return (
    <section id="education" className="section-pad section-frame">
      <div className="container-shell">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {profile.education.map((item, index) => (
            <FadeIn key={item.school} delay={index * 0.08}>
              <article className="panel h-full min-w-0 rounded-2xl p-4 sm:rounded-[1.75rem] sm:p-6">
                <div className="mb-3 flex min-w-0 items-center gap-3 sm:mb-4">
                  <span
                    className="icon-badge shrink-0"
                    style={{
                      color: index === 0 ? "var(--accent)" : "var(--accent-2)",
                      background:
                        index === 0
                          ? "var(--accent-soft)"
                          : "var(--accent-2-soft)",
                    }}
                  >
                    <EduIcon className="h-5 w-5" />
                  </span>
                  <p className="font-mono min-w-0 text-[10px] font-semibold text-[var(--accent)] sm:text-xs">
                    {item.period}
                  </p>
                </div>
                <h3 className="font-display break-words text-xl tracking-tight text-[var(--foreground)] sm:text-2xl">
                  {item.degree}
                </h3>
                <p className="mt-2 break-words text-sm font-medium text-[var(--muted)] sm:mt-3 sm:text-base">
                  {item.school}
                </p>
                <p className="font-mono mt-1 text-[10px] text-[var(--muted)] sm:text-xs">
                  {item.location}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
