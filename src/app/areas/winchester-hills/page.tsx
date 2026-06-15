import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";

const data = areaPages["winchester-hills"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: {
    canonical: "/areas/winchester-hills",
  },
};

export default function WinchesterHillsPage() {
  return <AreaLocationClient slug="winchester-hills" />;
}
