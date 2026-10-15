import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** One page: every section of the product story lives on the homepage. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.domain, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
