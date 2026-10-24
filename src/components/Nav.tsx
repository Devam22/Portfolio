"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = profile.nav.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell section-pad flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-[var(--foreground)]"
        >
          {profile.name.split(" ")[0]}
          <span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {profile.nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumePath}
            download={profile.resumeDownloadName}
            className="btn-ghost hidden !px-3 !py-1.5 text-xs sm:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="font-mono text-xs">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl lg:hidden">
          <div className="container-shell section-pad flex flex-col gap-1 py-4">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--accent-soft)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumePath}
              download={profile.resumeDownloadName}
              className="mt-2 rounded-lg px-3 py-2 text-sm text-[var(--accent)]"
              onClick={() => setOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
