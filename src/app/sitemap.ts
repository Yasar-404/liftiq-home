import type { MetadataRoute } from "next";
import { primaryPages } from "@/data/pages";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.domain, lastModified, changeFrequency: "weekly", priority: 1 },
    ...primaryPages.map((page) => ({
      url: `${site.domain}${page.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
