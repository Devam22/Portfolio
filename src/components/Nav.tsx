"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell relative z-20 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md">
      <div className="container-shell section-pad flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <a
          href="#top"
          className="brand-mark font-display shrink-0"
          aria-label={profile.name}
        >
          {profile.navBrand}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {profile.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="font-mono text-xs">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] md:hidden">
          <div className="container-shell section-pad flex flex-col gap-1 py-4">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent-soft)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
