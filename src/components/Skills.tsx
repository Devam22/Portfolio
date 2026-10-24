"use client";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Skills() {
  return (
    <section id="skills" className="section-pad py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="04 — Skills"
          title="A full ML lifecycle toolkit."
        />

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {profile.skills.map((group) => (
            <StaggerItem
              key={group.category}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-5 py-4 backdrop-blur-sm"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent)] uppercase">
                {group.category}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/90">
                {group.items.join(" · ")}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
