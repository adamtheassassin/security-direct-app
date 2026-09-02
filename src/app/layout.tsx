import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import Script from "next/script";
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
  openGraph: {
    title:
      "Gate Motor Repair & Installation | Garage Door Repair, Electric Fencing & CCTV | Alberton & Johannesburg - Security Direct",
    description:
      "Security Direct installs and repairs gate motors, garage doors, electric fencing and CCTV across Alberton and Johannesburg since 2008. Same-day call-outs, quote before work. Call 082 498 1272.",
    url: NAP.url,
    siteName: NAP.displayName,
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: `${NAP.url}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Security Direct - Gate Motor Repair & Security Services Alberton & Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gate Motor Repair & Installation | Garage Door Repair, Electric Fencing & CCTV | Alberton & Johannesburg - Security Direct",
    description:
      "Security Direct installs and repairs gate motors, garage doors, electric fencing and CCTV across Alberton and Johannesburg since 2008. Call 082 498 1272.",
    images: [`${NAP.url}/images/hero-bg.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-950839845"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-950839845');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <div className="flex flex-col flex-grow w-full overflow-x-hidden relative pb-20 lg:pb-0">
          {children}
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
