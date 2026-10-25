"use client";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getCategoryIcon } from "@/lib/icons";

export function Skills() {
  const copy = profile.sections.skills;

  return (
    <section id="skills" className="section-pad section-frame">
      <div className="container-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <Stagger className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {profile.skills.map((group) => {
            const { Icon, color } = getCategoryIcon(group.category);
            return (
              <StaggerItem key={group.category} className="min-w-0">
                <article className="panel h-full rounded-2xl p-4 sm:rounded-[1.75rem] sm:p-5 md:p-6">
                  <div className="mb-3 flex min-w-0 items-center gap-3 sm:mb-4">
                    <span
                      className="icon-badge shrink-0"
                      style={{ color, background: `${color}18` }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display min-w-0 break-words text-lg tracking-tight text-[var(--foreground)] sm:text-xl">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <SkillBadge key={item} name={item} />
                    ))}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
