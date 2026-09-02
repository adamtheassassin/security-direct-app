import { Metadata } from "next";
import AlarmInstallationClient from "@/components/AlarmInstallationClient";
import { buildBusinessJsonLd } from "@/lib/nap";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Alarm System Installation in Alberton & Johannesburg | Sensors, Beams, Panic Buttons, Armed Response | Security Direct",
  description:
    "Alarm systems installed across Alberton and Johannesburg. Indoor motion sensors, outdoor beams, and panic buttons, wired to your armed response and armed through load shedding. Free site visit. Call 082 498 1272.",
  keywords:
    "alarm system installation, alarm installation Alberton, alarm installation Johannesburg, home alarm system, burglar alarm installation, outdoor beams, panic buttons, armed response link-up, alarm installation near me, Security Direct",
  canonical: "/alarm-system-installation",
  image: "/images/hero-bg.jpg",
});

export default function AlarmInstallationPage() {
  const jsonLd = buildBusinessJsonLd({
    url: "https://securitydirect.co.za/alarm-system-installation",
    description: "Professional home and business alarm system installations in Alberton and Johannesburg. Includes indoor motion sensors, outdoor beams, panic buttons, and armed response linkage. Call 082 498 1272.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AlarmInstallationClient />
    </>
  );
}
