import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://afayyyy.github.io/cv/", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://afayyyy.github.io/research/", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://afayyyy.github.io/personal-life/", changeFrequency: "monthly", priority: 0.5 },
    {
      url: "https://afayyyy.github.io/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
