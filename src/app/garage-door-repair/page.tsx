import { Metadata } from "next";
import GarageDoorRepairClient from "@/components/GarageDoorRepairClient";

export const metadata: Metadata = {
  title: "Garage Door Repair in Alberton & Johannesburg | Springs, Cables & Motors, All Brands | Security Direct",
  description:
    "Garage door repairs across Alberton and Johannesburg. We fix broken springs, frayed cables, jammed doors, dead motors, and flat backup batteries on all brands. Same-day call-outs, quote before work. Call 082 498 1272.",
  keywords:
    "garage door repair, garage door repair near me, garage door repair Alberton, garage door repair Johannesburg, garage door spring replacement, garage door cable repair, garage door motor repair, garage door off track, broken garage door spring, Security Direct",
  alternates: {
    canonical: "/garage-door-repair",
  },
};

export default function GarageDoorRepairPage() {
  return <GarageDoorRepairClient />;
}
