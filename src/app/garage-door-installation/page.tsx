import { Metadata } from "next";
import GarageDoorInstallationClient from "@/components/GarageDoorInstallationClient";

import { buildBusinessJsonLd } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Garage Door Installation & Automation in Alberton & Johannesburg | Centurion & ET, Battery Backup | Security Direct",
  description:
    "Garage door motors fitted and manual doors automated across Alberton and Johannesburg. Centurion and ET DC Blue motors for sectional, roll-up, and tip-up doors, with backup battery and remotes set up. Call 082 498 1272.",
  keywords:
    "garage door installation, garage door automation, garage door motor installation, garage door motor Alberton, garage door motor Johannesburg, sectional door motor, roll-up door motor, tip-up door, Centurion garage motor, ET DC Blue, garage door automation near me, Security Direct",
  alternates: {
    canonical: "/garage-door-installation",
  },
};

export default function GarageDoorInstallationPage() {
  const jsonLd = buildBusinessJsonLd({
    url: "https://securitydirect.co.za/garage-door-installation",
    description: "Professional garage door motor installation and automation services in Alberton and Johannesburg. Sized and fitted for sectional, roll-up, and tip-up doors with backup battery. Call 082 498 1272.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarageDoorInstallationClient />
    </>
  );
}
