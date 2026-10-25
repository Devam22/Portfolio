"use client";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineChatBubbleLeftRight,
  HiOutlineEye,
} from "react-icons/hi2";

const highlightMeta = [
  { icon: HiOutlineHeart, color: "#FF3D00" },
  { icon: HiOutlineLightBulb, color: "#F59E0B" },
  { icon: HiOutlineRocketLaunch, color: "#0066FF" },
  { icon: HiOutlineChatBubbleLeftRight, color: "#00BFA6" },
  { icon: HiOutlineEye, color: "#0EA5E9" },
];

export function About() {
  const copy = profile.sections.about;

  return (
    <section id="about" className="section-pad section-frame section-dense">
      <div className="container-shell">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="layout-asymmetric">
          <FadeIn delay={0.05}>
            <div className="panel space-y-4 rounded-2xl p-5 sm:space-y-5 sm:rounded-[2rem] sm:p-6 md:p-8">
              {profile.summary.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className="border-l-4 pl-3 text-sm leading-relaxed text-[var(--foreground)] sm:pl-4 sm:text-base md:text-lg"
                  style={{
                    borderColor:
                      index === 0
                        ? "var(--accent)"
                        : index === 1
                          ? "var(--accent-2)"
                          : "var(--accent-3)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <Stagger className="grid grid-cols-1 content-start gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            {profile.highlights.map((item, index) => {
              const meta = highlightMeta[index % highlightMeta.length];
              const Icon = meta.icon;
              return (
                <StaggerItem key={item}>
                  <div className="panel flex items-center gap-3 rounded-2xl px-3 py-3 sm:px-4">
                    <span
                      className="icon-badge !h-9 !w-9 shrink-0 sm:!h-10 sm:!w-10"
                      style={{
                        color: meta.color,
                        background: `${meta.color}18`,
                      }}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <span className="text-sm font-medium text-[var(--foreground)] sm:text-base">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
