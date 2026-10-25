"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { handleSectionNav } from "@/lib/scroll";

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="nav-shell relative z-20 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent), var(--accent-3), var(--accent-2), transparent)",
          opacity: 0.55,
        }}
      />

      <div className="container-shell section-pad flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <a
          href="#top"
          className="brand-mark font-display shrink-0"
          aria-label={profile.name}
          onClick={(event) => {
            handleSectionNav(event, "#top");
            setOpen(false);
          }}
        >
          {profile.navBrand}
        </a>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {profile.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono rounded-full px-3.5 py-2 text-[11px] font-semibold tracking-[0.14em] text-[var(--muted)] uppercase transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] lg:px-4"
              onClick={(event) => handleSectionNav(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] shadow-[var(--shadow)] lg:hidden"
            aria-expanded={open}
            aria-controls={open ? "mobile-nav" : undefined}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="relative flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`block h-0.5 w-full origin-center rounded-full bg-[var(--foreground)] transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-[var(--foreground)] transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full origin-center rounded-full bg-[var(--foreground)] transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="border-t border-[var(--border)] bg-[var(--background-elevated)] lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              className="container-shell section-pad flex flex-col py-3"
              aria-label="Mobile"
            >
              {profile.nav.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono px-3 py-3.5 text-xs font-semibold tracking-[0.14em] text-[var(--foreground)] uppercase transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                  style={{
                    borderLeft: `3px solid ${
                      index % 3 === 0
                        ? "var(--accent)"
                        : index % 3 === 1
                          ? "var(--accent-3)"
                          : "var(--accent-2)"
                    }`,
                  }}
                  onClick={(event) => {
                    handleSectionNav(event, item.href);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
