import type { NextConfig } from "next";

/**
 * Addresses that existed briefly as separate pages. The content now lives on
 * the homepage, so they redirect to the matching section.
 */
const movedSections: Record<string, string> = {
  "/platform": "/#platform",
  "/ai-insights": "/#ai",
  "/features": "/#platform",
  "/security": "/#security",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return Object.entries(movedSections).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
