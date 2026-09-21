import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";

const title = "LiftIQ — AI-Powered Gym Management Software";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: title, template: "%s — LiftIQ" },
  description: site.description,
  keywords: [
    "gym management software",
    "fitness business platform",
    "membership management",
    "gym CRM",
    "attendance tracking",
    "gym billing software",
    "AI gym insights",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: site.domain },
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/** schema.org description of the product, rendered as JSON-LD in the root layout. */
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  url: site.domain,
  offers: { "@type": "Offer", availability: "https://schema.org/PreOrder" },
  publisher: {
    "@type": "Organization",
    name: site.name,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.locationShort,
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
};
