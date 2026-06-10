import { Metadata } from "next";
import GateMotorRepairClient from "@/components/GateMotorRepairClient";

export const metadata: Metadata = {
  title: "Gate Motor Repair in Alberton and Johannesburg | All Brands, Same Day",
  description:
    "We repair all gate motor brands across Alberton and Johannesburg. Same-day call-outs, a full diagnostic on arrival, and a clear quote before any work starts. Call 082 498 1272.",
  keywords:
    "gate motor repair, gate motor repair near me, gate motor repair Alberton, gate motor repair Johannesburg, CENTURION repair, ET Systems repair, same day gate motor repair",
};

export default function GateMotorRepairPage() {
  return <GateMotorRepairClient />;
}
