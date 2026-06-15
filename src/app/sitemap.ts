import type { MetadataRoute } from "next";
import { NAP } from "@/lib/nap";
import { areaSlugs } from "@/data/areaPages";

// Single build timestamp so every entry shares the same lastModified.
const lastModified = new Date();

// Core service pages — the money pages, highest priority after the homepage.
const servicePaths = [
  "/gate-motor-installation",
  "/gate-motor-repair",
  "/garage-door-installation",
  "/garage-door-repair",
  "/electric-fence-installation",
  "/electric-fence-repair",
  "/alarm-system-installation",
  "/alarm-system-repair",
  "/cctv",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${NAP.url}${path}`;

  return [
    {
      url: url("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePaths.map((path) => ({
      url: url(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: url("/areas"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...areaSlugs.map((slug) => ({
      url: url(`/areas/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: url("/contact-us"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
