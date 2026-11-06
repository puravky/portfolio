import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://puravky.me", changeFrequency: "monthly", priority: 1 }];
}
