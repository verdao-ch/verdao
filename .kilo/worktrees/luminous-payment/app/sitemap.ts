import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { allRoutes } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}