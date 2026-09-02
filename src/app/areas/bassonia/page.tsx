import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";
import { createMetadata } from "@/lib/seo";

const data = areaPages["bassonia"];

export const metadata: Metadata = createMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  canonical: "/areas/bassonia",
  image: data.image,
});

export default function BassoniaPage() {
  return <AreaLocationClient slug="bassonia" />;
}
