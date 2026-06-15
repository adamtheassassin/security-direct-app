import { Metadata } from "next";
import GateMotorRepairClient from "@/components/GateMotorRepairClient";

import { buildBusinessJsonLd } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Gate Motor Repair in Alberton and Johannesburg | All Brands, Same Day",
  description:
    "We repair all gate motor brands across Alberton and Johannesburg. Same-day call-outs, a full diagnostic on arrival, and a clear quote before any work starts. Call 082 498 1272.",
  keywords:
    "gate motor repair, gate motor repair near me, gate motor repair Alberton, gate motor repair Johannesburg, CENTURION repair, ET Systems repair, same day gate motor repair",
  alternates: {
    canonical: "/gate-motor-repair",
  },
};

export default function GateMotorRepairPage() {
  const jsonLd = buildBusinessJsonLd({
    url: "https://securitydirect.co.za/gate-motor-repair",
    description: "Professional gate motor repair services in Alberton and Johannesburg. We service CENTURION, ET Systems, BFT and Nice. Same-day call-outs and upfront quotes.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GateMotorRepairClient />
    </>
  );
}
