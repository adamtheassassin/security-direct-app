import { Metadata } from "next";
import ElectricFencingClient from "@/components/ElectricFencingClient";

export const metadata: Metadata = {
  title: "Professional Electric Fencing | Alberton & Johannesburg - Security Direct",
  description:
    "Expert installation and repair of 6, 8, 10, and 12-strand electric fences in Alberton and Johannesburg. SABS rules compliant, with Certificate of Compliance (COC). Call 082 498 1272.",
  keywords:
    "electric fencing, electric fence installation, fence repair, COC certificate, SABS fence rules, Alberton, Johannesburg, Security Direct",
};

export default function ElectricFencingPage() {
  return <ElectricFencingClient />;
}
