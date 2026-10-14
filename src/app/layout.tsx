import type { ReactNode } from "react";
import { AnchorScroll } from "@/components/layout/AnchorScroll";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { metadata as siteMetadata, structuredData, viewport as siteViewport } from "@/lib/seo";
import { inter } from "./fonts";
import "./globals.css";

export const metadata = siteMetadata;
export const viewport = siteViewport;

// Runs before first paint. Reveal animations in styles/motion.css only hide
// content once this flag is set, so pages stay readable without JavaScript.
// It also mutates <html> before hydration, hence suppressHydrationWarning.
const enableJsStyles = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: enableJsStyles }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <RevealObserver />
        <AnchorScroll />
      </body>
    </html>
  );
}
