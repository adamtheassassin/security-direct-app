import { Metadata } from "next";
import ElectricFenceRepairClient from "@/components/ElectricFenceRepairClient";

import { buildBusinessJsonLd } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Electric Fence Repair in Alberton & Johannesburg | All Brands, Same-Day Fault-Finding | Security Direct",
  description:
    "Electric fence repairs across Alberton and Johannesburg. We fix dead energizers, snapped strands, broken insulators, flat batteries, and false alarms on all brands, and re-issue a SABS COC where needed. Call 082 498 1272.",
  keywords:
    "electric fence repair, electric fence repair near me, electric fence repair Alberton, electric fence repair Johannesburg, electric fence fault finding, energizer replacement, electric fence not working, false alarm electric fence, Nemtek repair, electric fence battery replacement, COC after repair, Security Direct",
  alternates: {
    canonical: "/electric-fence-repair",
  },
};

export default function ElectricFenceRepairPage() {
  const jsonLd = buildBusinessJsonLd({
    url: "https://securitydirect.co.za/electric-fence-repair",
    description: "Same-day electric fence repair services in Alberton and Johannesburg. We troubleshoot dead energizers, broken strands, flat batteries, and false alarms on Nemtek and other brands.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ElectricFenceRepairClient />
    </>
  );
}
