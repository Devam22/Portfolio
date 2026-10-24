"use client";

import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/devam-zanzmera",
    href: profile.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Devam22",
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let’s build something reliable."
          description="Open to conversations about production ML, MLOps, and applied AI systems."
        />

        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-5 py-5 transition hover:border-[var(--accent)]"
              >
                <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent)] uppercase">
                  {link.label}
                </p>
                <p className="link-underline mt-3 text-lg text-[var(--foreground)] group-hover:text-[var(--accent)]">
                  {link.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={profile.resumePath}
              download={profile.resumeDownloadName}
              className="btn-primary"
            >
              Download Resume
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              Send an email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
