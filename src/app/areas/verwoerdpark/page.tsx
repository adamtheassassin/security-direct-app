import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";
import { createMetadata } from "@/lib/seo";

const data = areaPages["verwoerdpark"];

export const metadata: Metadata = createMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  canonical: "/areas/verwoerdpark",
  image: data.image,
});

export default function VerwoerdparkPage() {
  return <AreaLocationClient slug="verwoerdpark" />;
}
