import { Metadata } from "next";
import CCTVClient from "@/components/CCTVClient";

export const metadata: Metadata = {
  title: "Professional CCTV Installation & Repair | Alberton & Johannesburg - Security Direct",
  description:
    "Expert installation and repair of high-definition AHD and digital IP CCTV camera systems in Alberton and Johannesburg. View security feeds from your phone. Call 082 498 1272.",
  keywords:
    "CCTV installation, security cameras, CCTV repairs, IP cameras, analog cameras, Alberton, Johannesburg, Security Direct",
};

export default function CCTVPage() {
  return <CCTVClient />;
}
