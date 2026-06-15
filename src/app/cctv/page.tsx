import { Metadata } from "next";
import CCTVClient from "@/components/CCTVClient";

export const metadata: Metadata = {
  title: "CCTV Installation & Repair in Alberton & Johannesburg | AHD & IP Cameras, View on Your Phone | Security Direct",
  description:
    "CCTV cameras installed and repaired across Alberton and Johannesburg. AHD and IP systems, Provision-ISR cameras, night vision, smart detection, and viewing on your phone. Backup power for load shedding. Call 082 498 1272.",
  keywords:
    "CCTV installation, CCTV repair, security cameras, CCTV Alberton, CCTV Johannesburg, CCTV installation near me, IP cameras, AHD cameras, Provision-ISR, DVR NVR, night vision cameras, CCTV repair near me, view cameras on phone, Security Direct",
  alternates: {
    canonical: "/cctv",
  },
};

export default function CCTVPage() {
  return <CCTVClient />;
}
