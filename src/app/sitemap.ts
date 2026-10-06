import type { MetadataRoute } from "next";
import { projects, siteUrl } from "@/data/portfolio";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: "2026-10-07", changeFrequency: "monthly", priority: 1 }, ...projects.map(p=>({ url: `${siteUrl}/work/${p.slug}/`, lastModified: "2026-10-07", changeFrequency: "monthly" as const, priority: .8 }))];
}
