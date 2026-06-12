import { Metadata } from "next";
import ElectricFenceRepairClient from "@/components/ElectricFenceRepairClient";

export const metadata: Metadata = {
  title: "Electric Fence Repair in Alberton & Johannesburg | All Brands, Same-Day Fault-Finding | Security Direct",
  description:
    "Electric fence repairs across Alberton and Johannesburg. We fix dead energizers, snapped strands, broken insulators, flat batteries, and false alarms on all brands, and re-issue a SABS COC where needed. Call 082 498 1272.",
  keywords:
    "electric fence repair, electric fence repair near me, electric fence repair Alberton, electric fence repair Johannesburg, electric fence fault finding, energizer replacement, electric fence not working, false alarm electric fence, Nemtek repair, electric fence battery replacement, COC after repair, Security Direct",
};

export default function ElectricFenceRepairPage() {
  return <ElectricFenceRepairClient />;
}
