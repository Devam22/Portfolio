"use client";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function About() {
  return (
    <section id="about" className="section-pad py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="01 — About"
          title="Production ML with explainability at the core."
          description="From clinical risk models to credit decisioning — shipping models that teams can trust."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn delay={0.05}>
            <ul className="space-y-5 text-[var(--foreground)]/90">
              {profile.summary.map((paragraph) => (
                <li
                  key={paragraph}
                  className="border-l border-[var(--border)] pl-5 text-base leading-relaxed sm:text-lg"
                >
                  {paragraph}
                </li>
              ))}
            </ul>
          </FadeIn>

          <Stagger className="flex flex-wrap content-start gap-2 lg:justify-end">
            {profile.highlights.map((item) => (
              <StaggerItem key={item}>
                <span className="chip font-mono">{item}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
