import { Metadata } from "next";
import CenturionMotorsClient from "@/components/CenturionMotorsClient";
import { buildBusinessJsonLd, NAP } from "@/lib/nap";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Centurion Gate Motors Alberton & Johannesburg | D3, D5 Smart, D10 & Vantage",
  description:
    "Official Centurion sliding and swing gate motors supplied, installed, and repaired in Alberton and Johannesburg. D3 Smart, D5 Evo, D5 Smart, and D10. Call 082 498 1272.",
  keywords:
    "Centurion gate motors, Centurion D5 Smart, Centurion D5 Evo, Centurion D3 Smart, Centurion D10 Smart, Centurion Vantage swing gate, Centsys gate motor, Centurion gate motor installation, Centurion gate motor repair Alberton, Centurion Johannesburg",
  canonical: "/gate-motors/centurion",
  image: "/images/gate-motor-d5-evo.png",
});

export default function CenturionGateMotorsPage() {
  const businessJsonLd = buildBusinessJsonLd({
    url: `${NAP.url}/gate-motors/centurion`,
    description:
      "Centurion gate motor sales, installations, upgrades, and repairs across Alberton and Johannesburg by Security Direct.",
  });

  const brandAndProductsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${NAP.url}/gate-motors/centurion#webpage`,
        url: `${NAP.url}/gate-motors/centurion`,
        name: "Centurion Gate Motors Alberton and Johannesburg",
        description:
          "Official Centurion sliding and swing gate motor models supplied, fitted, and serviced.",
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
              name: "Centurion Gate Motors",
              item: `${NAP.url}/gate-motors/centurion`,
            },
          ],
        },
        mainEntity: {
          "@type": "Brand",
          name: "Centurion Systems",
          alternateName: "Centsys",
          sameAs: "https://en.wikipedia.org/wiki/Centurion_Systems",
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors/centurion#d5-smart`,
        name: "Centurion D5 Smart Sliding Gate Motor",
        image: `${NAP.url}/images/gate-motors/d5-evo-smart.jpg`,
        description:
          "High speed smart sliding gate motor for residential gates up to 500kg. App management and 24V twin battery backup.",
        brand: {
          "@type": "Brand",
          name: "Centurion Systems",
        },
        offers: {
          "@type": "Offer",
          price: "7850",
          priceCurrency: "ZAR",
          availability: "https://schema.org/InStock",
          seller: {
            "@id": `${NAP.url}/#business`,
          },
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors/centurion#d3-smart`,
        name: "Centurion D3 Smart Sliding Gate Motor",
        image: `${NAP.url}/images/gate-motors/d3-smart.jpg`,
        description:
          "Compact residential sliding gate motor for gates up to 300kg with 12V backup battery.",
        brand: {
          "@type": "Brand",
          name: "Centurion Systems",
        },
        offers: {
          "@type": "Offer",
          price: "6600",
          priceCurrency: "ZAR",
          availability: "https://schema.org/InStock",
          seller: {
            "@id": `${NAP.url}/#business`,
          },
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors/centurion#d10-smart`,
        name: "Centurion D10 Smart Commercial Gate Motor",
        image: `${NAP.url}/images/gate-motors/d10-smart.jpg`,
        description:
          "Heavy duty 24V smart sliding gate motor for gates up to 1000kg. Rated for high daily cycles in complexes.",
        brand: {
          "@type": "Brand",
          name: "Centurion Systems",
        },
        offers: {
          "@type": "Offer",
          price: "11500",
          priceCurrency: "ZAR",
          availability: "https://schema.org/InStock",
          seller: {
            "@id": `${NAP.url}/#business`,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${NAP.url}/gate-motors/centurion#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Why is Centurion the most popular gate motor brand in South Africa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Centurion Systems is based right here in South Africa. Their motors are designed specifically for local conditions, including lightning, power cuts, and heavy daily use.",
            },
          },
          {
            "@type": "Question",
            name: "Can I replace my old Centurion D5 Evo with a D5 Smart?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The D5 Smart sits directly on the same mounting bolts and base plate as the older D5 Evo. We can swap the motor and have you up and running with phone control in about an hour.",
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
      <CenturionMotorsClient />
    </>
  );
}
