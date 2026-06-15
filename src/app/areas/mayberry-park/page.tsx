import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";

const data = areaPages["mayberry-park"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: {
    canonical: "/areas/mayberry-park",
  },
};

export default function MayberryParkPage() {
  return <AreaLocationClient slug="mayberry-park" />;
}
