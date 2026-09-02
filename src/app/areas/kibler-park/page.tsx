import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";
import { createMetadata } from "@/lib/seo";

const data = areaPages["kibler-park"];

export const metadata: Metadata = createMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  canonical: "/areas/kibler-park",
  image: data.image,
});

export default function KiblerParkPage() {
  return <AreaLocationClient slug="kibler-park" />;
}
