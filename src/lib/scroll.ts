import type { MouseEvent } from "react";

export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function handleSectionNav(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith("#")) return;

  event.preventDefault();
  const id = href.slice(1);
  if (id) scrollToId(id);
}
