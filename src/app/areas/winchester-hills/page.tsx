import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";
import { createMetadata } from "@/lib/seo";

const data = areaPages["winchester-hills"];

export const metadata: Metadata = createMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  canonical: "/areas/winchester-hills",
  image: data.image,
});

export default function WinchesterHillsPage() {
  return <AreaLocationClient slug="winchester-hills" />;
}
