import { Metadata } from "next";
import ElectricFenceInstallationClient from "@/components/ElectricFenceInstallationClient";

import { buildBusinessJsonLd } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Electric Fence Installation in Alberton & Johannesburg | 6 to 12 Strand, SABS COC, Nemtek | Security Direct",
  description:
    "New electric fencing installed across Alberton and Johannesburg. 6, 8, 10, and 12-strand walls, Nemtek energizers, backup battery fitted, and a SABS certificate of compliance with every install. Call 082 498 1272.",
  keywords:
    "electric fence installation, electric fencing installation, electric fence installation Alberton, electric fence installation Johannesburg, electric fencing near me, Nemtek energizer, 6 strand electric fence, 8 strand electric fence, 10 strand electric fence, 12 strand electric fence, COC certificate, SABS electric fence, Security Direct",
  alternates: {
    canonical: "/electric-fence-installation",
  },
};

export default function ElectricFenceInstallationPage() {
  const jsonLd = buildBusinessJsonLd({
    url: "https://securitydirect.co.za/electric-fence-installation",
    description: "Certified electric fence installations in Alberton and Johannesburg. We fit 6 to 12-strand wall-top fences, Nemtek energizers, and issue SABS COC certificates. Call 082 498 1272.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ElectricFenceInstallationClient />
    </>
  );
}
