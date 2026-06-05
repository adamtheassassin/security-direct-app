import type { Metadata } from "next";
import { Playfair_Display, Rubik } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Security Direct – Electric Fence & Gate Motors | Alberton, Johannesburg",
  description:
    "Security Direct – certified installers of gate motors, electric fencing, CCTV, and garage door motors in Alberton and across Johannesburg since 2008. Call 082 498 1272.",
  keywords:
    "gate motors, electric fencing, CCTV, garage door motors, security, Alberton, Johannesburg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${rubik.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
