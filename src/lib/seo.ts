import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "gym management software",
    "gym management software India",
    "gym membership software",
    "gym billing software",
    "gym attendance software",
    "gym CRM",
    "fitness studio software",
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.domain }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false, email: false, address: false },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#060912",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/**
 * schema.org description of the company and product, rendered as JSON-LD in
 * the root layout. Only facts the site states elsewhere; no prices or ratings.
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.domain}/#organization`,
      name: site.name,
      url: site.domain,
      logo: `${site.domain}/icon.svg`,
      email: site.contact.email,
      telephone: site.contact.phone,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: site.description,
      url: site.domain,
      publisher: { "@id": `${site.domain}/#organization` },
    },
  ],
};
