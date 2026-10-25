import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="section-pad border-t border-[var(--border)] py-6 sm:py-8">
      <div className="container-shell">
        <p className="font-mono text-left text-[10px] tracking-wide text-[var(--muted)] uppercase sm:text-xs">
          Designed by {profile.name}
        </p>
      </div>
    </footer>
  );
}
