import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";

const data = areaPages["alberton-central"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: {
    canonical: "/areas/alberton-central",
  },
};

export default function AlbertonCentralPage() {
  return <AreaLocationClient slug="alberton-central" />;
}
