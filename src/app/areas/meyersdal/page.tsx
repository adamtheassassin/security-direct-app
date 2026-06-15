import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";

const data = areaPages["meyersdal"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: {
    canonical: "/areas/meyersdal",
  },
};

export default function MeyersdalPage() {
  return <AreaLocationClient slug="meyersdal" />;
}
