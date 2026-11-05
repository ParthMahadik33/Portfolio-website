import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.parthmahadik.in",
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

