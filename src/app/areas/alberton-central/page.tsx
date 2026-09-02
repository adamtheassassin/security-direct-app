import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";
import { createMetadata } from "@/lib/seo";

const data = areaPages["alberton-central"];

export const metadata: Metadata = createMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  canonical: "/areas/alberton-central",
  image: data.image,
});

export default function AlbertonCentralPage() {
  return <AreaLocationClient slug="alberton-central" />;
}
