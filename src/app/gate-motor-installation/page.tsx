import { Metadata } from "next";
import GateMotorInstallationClient from "@/components/GateMotorInstallationClient";
import { buildBusinessJsonLd } from "@/lib/nap";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gate Motor Installation in Alberton & Johannesburg | Centurion, ET Nice, Gemini & Hansa",
  description:
    "Professional gate motor installation for sliding and swing gates across Alberton and Johannesburg. We supply and fit Centurion, ET Nice, Gemini, and Hansa motors with battery backup and anti-theft brackets. Call 082 498 1272.",
  keywords:
    "gate motor installation, gate motor installation Alberton, gate motor installation Johannesburg, sliding gate motor, swing gate motor, Centurion gate motors, ET Nice, Gemini, Hansa, gate automation, Security Direct",
  canonical: "/gate-motor-installation",
  image: "/images/gate-motor-d5-evo.png",
});

export default function GateMotorInstallationPage() {
  const jsonLd = buildBusinessJsonLd({
    url: "https://securitydirect.co.za/gate-motor-installation",
    description: "Professional gate motor installation for sliding and swing gates across Alberton and Johannesburg. We supply and fit leading brands including Centurion, ET Nice, Gemini, and Hansa with battery backup and anti-theft brackets. Call 082 498 1272.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GateMotorInstallationClient />
    </>
  );
}
