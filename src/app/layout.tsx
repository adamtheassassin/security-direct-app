import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { NAP } from "@/lib/nap";

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
  metadataBase: new URL(NAP.url),
  title:
    "Gate Motor Repair & Installation | Garage Door Repair, Electric Fencing & CCTV | Alberton & Johannesburg - Security Direct",
  description:
    "Security Direct installs and repairs gate motors, garage doors, electric fencing and CCTV across Alberton and Johannesburg since 2008. Same-day call-outs, quote before work. Call 082 498 1272.",
  keywords:
    "gate motor repair, gate motor installation, garage door repair, garage door motors, electric fencing, CCTV, home automation, security, Alberton, Johannesburg",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <div className="flex flex-col flex-grow w-full overflow-x-hidden relative pb-20 lg:pb-0">
          {children}
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
