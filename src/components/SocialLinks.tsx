"use client";

import { profile } from "@/content/profile";
import { socialIcons } from "@/lib/icons";

const links = [
  {
    key: "github" as const,
    href: profile.github,
  },
  {
    key: "linkedin" as const,
    href: profile.linkedin,
  },
  {
    key: "email" as const,
    href: `mailto:${profile.email}`,
  },
  {
    key: "phone" as const,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label={meta.label}
            className={`social-btn ${size === "sm" ? "!h-9 !w-9" : ""}`}
            onMouseEnter={(event) => {
              const hoverColor =
                link.key === "github" ? "#24292F" : meta.color;
              event.currentTarget.style.backgroundColor = hoverColor;
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
