import type { MetadataRoute } from "next";
import { articles } from "./articles/article-data";

export const dynamic = "force-static";

const baseUrl = "https://wakutsuku-lab.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/articles/mobile-monitor", ...articles.map(({ slug }) => `/articles/${slug}`), "/about", "/advertising-policy", "/privacy", "/contact"];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date("2026-08-03"), changeFrequency: route.startsWith("/articles/") ? "weekly" : "monthly", priority: route === "" ? 1 : route.startsWith("/articles/") ? 0.8 : 0.4 }));
}
