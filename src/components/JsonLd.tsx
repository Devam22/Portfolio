import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}${profile.photo}`,
    jobTitle: profile.role,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressCountry: "CA",
    },
    sameAs: [profile.github, profile.linkedin],
    description: profile.heroLine,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
