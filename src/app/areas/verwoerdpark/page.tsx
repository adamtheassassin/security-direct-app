import { Metadata } from "next";
import AreaLocationClient from "@/components/AreaLocationClient";
import { areaPages } from "@/data/areaPages";

const data = areaPages["verwoerdpark"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
};

export default function VerwoerdparkPage() {
  return <AreaLocationClient slug="verwoerdpark" />;
}
