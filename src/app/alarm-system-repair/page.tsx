import { Metadata } from "next";
import AlarmRepairClient from "@/components/AlarmRepairClient";

export const metadata: Metadata = {
  title: "Alarm System Repair in Alberton & Johannesburg | All Brands, False Alarms & Faults Fixed | Security Direct",
  description:
    "Alarm repairs across Alberton and Johannesburg. We fix false alarms, dead zones, flat backup batteries, beeping keypads, and panels that won't arm, on all brands. Same-day call-outs. Call 082 498 1272.",
  keywords:
    "alarm system repair, alarm repair near me, alarm repair Alberton, alarm repair Johannesburg, false alarm fix, alarm keeps going off, alarm battery replacement, alarm not arming, armed response signal fault, burglar alarm repair, Security Direct",
};

export default function AlarmRepairPage() {
  return <AlarmRepairClient />;
}
