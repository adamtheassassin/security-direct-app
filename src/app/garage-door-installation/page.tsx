import { Metadata } from "next";
import GarageDoorInstallationClient from "@/components/GarageDoorInstallationClient";

export const metadata: Metadata = {
  title: "Garage Door Installation & Automation in Alberton & Johannesburg | Centurion & ET, Battery Backup | Security Direct",
  description:
    "Garage door motors fitted and manual doors automated across Alberton and Johannesburg. Centurion and ET DC Blue motors for sectional, roll-up, and tip-up doors, with backup battery and remotes set up. Call 082 498 1272.",
  keywords:
    "garage door installation, garage door automation, garage door motor installation, garage door motor Alberton, garage door motor Johannesburg, sectional door motor, roll-up door motor, tip-up door, Centurion garage motor, ET DC Blue, garage door automation near me, Security Direct",
};

export default function GarageDoorInstallationPage() {
  return <GarageDoorInstallationClient />;
}
