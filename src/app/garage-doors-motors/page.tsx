import { Metadata } from "next";
import GarageDoorsClient from "@/components/GarageDoorsClient";

export const metadata: Metadata = {
  title: "Professional Garage Door Motor Automation & Repair | Alberton & Johannesburg - Security Direct",
  description:
    "Expert installation, repair, and automation for sectional, roll-up, and tip-up garage doors in Alberton and Johannesburg. Springs, cables, and motors serviced. Call 082 498 1272.",
  keywords:
    "garage door motors, garage door automation, garage door repair, garage door installation, sectional doors, roll-up doors, Alberton, Johannesburg, Security Direct",
};

export default function GarageDoorsPage() {
  return <GarageDoorsClient />;
}
