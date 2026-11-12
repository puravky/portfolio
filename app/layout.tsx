import type { Metadata } from "next";
import "@fontsource/silkscreen/400.css";
import "@fontsource/silkscreen/700.css";
import { GeistSans } from "geist/font/sans";
import { GeistPixelSquare } from "geist/font/pixel/square";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://puravky.me"),
  title: "Purav Kumar's Digital Crib",
  description: "Purav Kumar's digital crib: software, systems, applied AI, selected work, and notes from the build.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Purav Kumar's Digital Crib",
    description: "Software, systems, applied AI, and notes from the build.",
    url: "https://puravky.me",
    siteName: "Digital Crib",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digital Crib — Purav Kumar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purav Kumar's Digital Crib",
    description: "Software, systems, applied AI, and notes from the build.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Purav Kumar", url: "https://puravky.me", sameAs: ["https://github.com/puravky", "https://www.linkedin.com/in/puravky"], alumniOf: { "@type": "CollegeOrUniversity", name: "Delhi Technological University" } };
  return <html lang="en" className={`${GeistSans.variable} ${GeistPixelSquare.variable}`}><body>{children}<Analytics /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
