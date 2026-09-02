import type { Metadata } from "next";
import { NAP } from "./nap";

export interface PageMetadataOptions {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article";
}

export function createMetadata({
  title,
  description,
  canonical,
  image = "/images/hero-bg.jpg",
  keywords,
  type = "website",
}: PageMetadataOptions): Metadata {
  const cleanPath = canonical ? (canonical.startsWith("/") ? canonical : `/${canonical}`) : "";
  const fullUrl = `${NAP.url}${cleanPath}`;
  const fullImageUrl = image.startsWith("http") ? image : `${NAP.url}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    title,
    description,
    keywords,
    alternates: canonical ? { canonical: cleanPath } : undefined,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: NAP.displayName,
      locale: "en_ZA",
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
    },
  };
}
