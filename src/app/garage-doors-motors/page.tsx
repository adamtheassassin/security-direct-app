import { Metadata } from "next";
import GarageDoorsClient from "@/components/GarageDoorsClient";

export const metadata: Metadata = {
  title: "Garage Door Motors, Automation & Repair in Alberton & Johannesburg | Centurion & ET, Battery Backup | Security Direct",
  description:
    "Garage door automation and repair across Alberton and Johannesburg. Centurion and ET DC Blue motors fitted for sectional, roll-up, and tip-up doors, with backup battery, spring and cable repairs. All brands repaired. Call 082 498 1272.",
  keywords:
    "garage door motors, garage door automation, garage door repair, garage door motor Alberton, garage door motor Johannesburg, garage door repair near me, sectional door motor, roll-up door motor, tip-up door, Centurion garage motor, ET DC Blue, garage door spring replacement, Security Direct",
};

export default function GarageDoorsPage() {
  return <GarageDoorsClient />;
}
