import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";

const data = areaPages["mondeor"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: {
    canonical: "/areas/mondeor",
  },
};

export default function MondeorPage() {
  return <AreaLocationClient slug="mondeor" />;
}
