import { Metadata } from "next";
import GateMotorInstallationClient from "@/components/GateMotorInstallationClient";

export const metadata: Metadata = {
  title: "Gate Motor Installation in Alberton & Johannesburg | Centurion from R6 600 Installed",
  description:
    "New Centurion gate motors fitted for sliding and swing gates across Alberton and Johannesburg. Prices from R6 600 installed, backup battery and anti-theft bracket included. Fitting since 2008. Call 082 498 1272.",
  keywords:
    "gate motor installation, gate motor installation Alberton, gate motor installation Johannesburg, sliding gate motor, swing gate motor, Centurion D5 Evo Smart, Centurion D3 Smart, Centurion D10, gate automation, Security Direct",
  alternates: {
    canonical: "/gate-motor-installation",
  },
};

export default function GateMotorInstallationPage() {
  return <GateMotorInstallationClient />;
}
