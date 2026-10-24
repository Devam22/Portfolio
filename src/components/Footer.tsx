import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="section-pad border-t border-[var(--border)] py-8">
      <div className="container-shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-[var(--muted)]">
          © 2026 {profile.name}
        </p>
        <p className="text-xs text-[var(--muted)]">
          Built with Next.js · Inference Field design system
        </p>
      </div>
    </footer>
  );
}
