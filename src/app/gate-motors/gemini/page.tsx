import { Metadata } from "next";
import GeminiMotorsClient from "@/components/GeminiMotorsClient";
import { buildBusinessJsonLd, NAP } from "@/lib/nap";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gemini Gate Motors Alberton & Johannesburg | 12V & 24V DC Sliding Gate Motors",
  description:
    "Official Gemini gate motors supplied, fitted, and repaired across Alberton and Johannesburg. Gemini 12V DC, 24V DC, and swing gate systems. Call 082 498 1272.",
  keywords:
    "Gemini gate motors, Gemini 12V DC sliding motor, Gemini 24V gate motor, Gemini gate motor repair Alberton, Gemini gate motor installation Johannesburg, DMI Engineering Gemini, gate automation, Security Direct",
  canonical: "/gate-motors/gemini",
  image: "/images/gate-motors/gemini-dc-slider.jpg",
});

export default function GeminiGateMotorsPage() {
  const businessJsonLd = buildBusinessJsonLd({
    url: `${NAP.url}/gate-motors/gemini`,
    description:
      "Gemini sliding and swing gate motor sales, professional installations, and on-site repairs across Alberton and Johannesburg by Security Direct.",
  });

  const brandAndProductsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${NAP.url}/gate-motors/gemini#webpage`,
        url: `${NAP.url}/gate-motors/gemini`,
        name: "Gemini Gate Motors Alberton and Johannesburg",
        description:
          "Official Gemini gate motor models supplied, fitted, and serviced by Security Direct.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: NAP.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Gate Motors",
              item: `${NAP.url}/gate-motors`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Gemini Gate Motors",
              item: `${NAP.url}/gate-motors/gemini`,
            },
          ],
        },
        mainEntity: {
          "@type": "Brand",
          name: "Gemini Automation Systems",
          alternateName: "DMI Engineering",
          sameAs: "https://geminigates.co.za",
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors/gemini#slider-12v`,
        name: "Gemini 12V DC Sliding Gate Motor",
        image: `${NAP.url}/images/gate-motors/gemini-dc-slider.jpg`,
        description:
          "Reliable South African manufactured residential sliding gate motor for gates up to 500kg with 12V battery backup.",
        brand: {
          "@type": "Brand",
          name: "Gemini Automation Systems",
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors/gemini#slider-24v`,
        name: "Gemini 24V DC Fast Sliding Gate Motor",
        image: `${NAP.url}/images/gate-motors/gemini-dc-slider.jpg`,
        description:
          "Heavy duty 24V DC fast sliding gate motor for residential and light commercial gates up to 600kg.",
        brand: {
          "@type": "Brand",
          name: "Gemini Automation Systems",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${NAP.url}/gate-motors/gemini#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Why should I pick a Gemini gate motor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Gemini motors are locally manufactured in South Africa. They are sturdy, reliable, simple to maintain, and spare parts are readily available.",
            },
          },
          {
            "@type": "Question",
            name: "Will my Gemini gate motor open during load shedding?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every Gemini sliding motor runs off a rechargeable backup battery that keeps your gate running smoothly during power outages.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandAndProductsJsonLd),
        }}
      />
      <GeminiMotorsClient />
    </>
  );
}
