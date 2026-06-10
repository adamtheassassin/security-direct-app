import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Gate Motor Repair & Installation | Electric Fencing & CCTV | Home Automation Company | Alberton & Johannesburg - Security Direct",
  description:
    "Security Direct – certified home automation company and installers of gate motors, electric fencing, CCTV, and garage door motors in Alberton and across Johannesburg since 2008. Call 082 498 1272.",
  keywords:
    "home automation company, gate motors, electric fencing, CCTV, garage door motors, security, Alberton, Johannesburg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
