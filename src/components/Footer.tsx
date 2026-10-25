import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="section-pad border-t border-[var(--border)] py-8 sm:py-10 md:py-12">
      <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="brand-mark font-display text-[10px]">
            {profile.navBrand}
          </span>
          <p className="font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase sm:text-xs">
            Designed by {profile.name}
          </p>
        </div>
        <p className="font-mono text-[10px] tracking-wide text-[var(--muted)] sm:text-xs">
          {profile.footerNote}
        </p>
      </div>
    </footer>
  );
}
