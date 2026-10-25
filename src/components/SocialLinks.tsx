"use client";

import { profile } from "@/content/profile";
import { socialIcons } from "@/lib/icons";

const links = [
  {
    key: "github" as const,
    href: profile.github,
    external: true,
  },
  {
    key: "linkedin" as const,
    href: profile.linkedin,
    external: true,
  },
  {
    key: "email" as const,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    key: "phone" as const,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    external: false,
  },
];

export function SocialLinks({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map((link) => {
        const meta = socialIcons[link.key];
        const Icon = meta.Icon;
        return (
          <a
            key={link.key}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            aria-label={meta.label}
            className={`social-btn ${size === "sm" ? "!h-9 !w-9" : ""}`}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = meta.color;
              event.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor = "";
              event.currentTarget.style.color = "";
            }}
          >
            <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
          </a>
        );
      })}
    </div>
  );
}
