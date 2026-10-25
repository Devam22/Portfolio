import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SiteBackground } from "@/components/SiteBackground";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.heroLine,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    profile.role,
    "Machine Learning",
    "MLOps",
    "Toronto",
    "Explainable AI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.heroLine,
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    locale: "en_CA",
    images: [
      {
        url: profile.photo,
        width: 400,
        height: 400,
        alt: profile.photoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.role}`,
    description: profile.heroLine,
    images: [profile.photo],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ebeae6" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${plexSans.variable} ${plexMono.variable} dark h-full antialiased`}
    >
      <body className="overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          <div className="relative flex min-h-dvh flex-col">
            <SiteBackground />
            {children}
          </div>
          <JsonLd />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
