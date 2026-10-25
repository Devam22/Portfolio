import { profile } from "@/content/profile";

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (profile.siteUrl) return profile.siteUrl.replace(/\/$/, "");
  return "http://localhost:3000";
}
