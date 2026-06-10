import { Metadata } from "next";
import GateMotorInstallationClient from "@/components/GateMotorInstallationClient";

export const metadata: Metadata = {
  title: "Professional Gate Motor Installation | Alberton & Johannesburg - Security Direct",
  description:
    "Expert installation of Centurion D5 Evo, D10, FAAC, and ET Nice gate motors in Alberton and Johannesburg since 2008. Backup batteries and anti-theft brackets included. Call 082 498 1272.",
  keywords:
    "gate motor installation, sliding gate motor, swing gate motor, Centurion D5 Smart installation, Alberton, Johannesburg, Security Direct",
};

export default function GateMotorInstallationPage() {
  return <GateMotorInstallationClient />;
}
