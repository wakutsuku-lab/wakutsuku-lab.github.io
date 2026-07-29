import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://wakutsuku-lab.cnatgpt.chatgpt.site/sitemap.xml",
  };
}
