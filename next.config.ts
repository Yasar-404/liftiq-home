import type { NextConfig } from "next";

/**
 * Addresses that existed briefly as separate pages. The content now lives on
 * the homepage, so they redirect to the matching section (the page's own
 * scripts then drop the #hash from the address bar).
 */
const movedSections = ["platform", "ai-insights", "features", "security"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return movedSections.map((section) => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
