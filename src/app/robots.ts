import type { MetadataRoute } from "next";
import { NAP } from "@/lib/nap";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${NAP.url}/sitemap.xml`,
    host: NAP.url,
  };
}
