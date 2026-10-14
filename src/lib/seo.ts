import type { Metadata, Viewport } from "next";
import type { PageInfo } from "@/data/pages";
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
  // Each page sets its own canonical URL (see homeMetadata and pageMetadata), so
  // pages never inherit the homepage's.
  openGraph: {
    type: "website",
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

/** Canonical and social metadata for the homepage. */
export const homeMetadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_IN",
  },
};

/**
 * The site-wide social preview from app/opengraph-image.tsx. A page that sets its
 * own openGraph replaces the inherited one, image included, so pages name it again.
 */
const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name}: gym management software for memberships, payments and renewals`,
};

/** Title, description, canonical URL and social metadata for a dedicated page. */
export function pageMetadata(page: PageInfo): Metadata {
  const title = `${page.title} | ${site.name}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      url: page.path,
      siteName: site.name,
      title,
      description: page.description,
      locale: "en_IN",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#08090a",
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
