import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import { MotionProvider } from "@/components/layout/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono-jb",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "LiftIQ — AI-Powered Gym Management Software",
    template: "%s — LiftIQ",
  },
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
  authors: [{ name: "LiftIQ" }],
  creator: "LiftIQ",
  alternates: { canonical: site.domain },
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.name,
    title: "LiftIQ — AI-Powered Gym Management Software",
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiftIQ — AI-Powered Gym Management Software",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LiftIQ",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  url: site.domain,
  offers: { "@type": "Offer", availability: "https://schema.org/PreOrder" },
  publisher: {
    "@type": "Organization",
    name: "LiftIQ",
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sholinganallur, Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
