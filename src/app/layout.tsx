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
  verification: {
    google: "ViVtJ4RwcMY9YQi3leFxRj4juf5zdrP8T4g8VdnaF4k",
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P8QTBMHN');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8QTBMHN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="flex flex-col flex-grow w-full overflow-x-hidden relative pb-20 lg:pb-0">
          {children}
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
