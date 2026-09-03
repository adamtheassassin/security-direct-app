import { Metadata } from "next";
import ETNiceMotorsClient from "@/components/ETNiceMotorsClient";
import { buildBusinessJsonLd, NAP } from "@/lib/nap";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ET Nice Gate Motors Alberton & Johannesburg | ET Drive 500, 600 & 1000",
  description:
    "Official ET Nice and ET Systems gate motors supplied, fitted, and repaired across Alberton and Johannesburg. ET Drive 500, ET Drive 600, and ET Drive 1000. Call 082 498 1272.",
  keywords:
    "ET Nice gate motors, ET Drive 500, ET Drive 600, ET Drive 1000, ET Systems gate motor, ET gate motor repair Alberton, ET gate motor installation Johannesburg, Nice gate automation, Security Direct",
  canonical: "/gate-motors/et-nice",
  image: "/images/gate-motors/et-drive-500.png",
});

export default function ETNiceGateMotorsPage() {
  const businessJsonLd = buildBusinessJsonLd({
    url: `${NAP.url}/gate-motors/et-nice`,
    description:
      "ET Nice and ET Systems sliding and swing gate motor supply, installations, and repairs across Alberton and Johannesburg by Security Direct.",
  });

  const brandAndProductsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${NAP.url}/gate-motors/et-nice#webpage`,
        url: `${NAP.url}/gate-motors/et-nice`,
        name: "ET Nice Gate Motors Alberton and Johannesburg",
        description:
          "Official ET Nice sliding and swing gate motor models supplied, fitted, and serviced.",
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
              name: "ET Nice Gate Motors",
              item: `${NAP.url}/gate-motors/et-nice`,
            },
          ],
        },
        mainEntity: {
          "@type": "Brand",
          name: "ET Nice",
          alternateName: "ET Systems",
          sameAs: "https://niceforyou.com/za",
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors/et-nice#drive-500`,
        name: "ET Drive 500 Sliding Gate Motor",
        image: `${NAP.url}/images/gate-motors/et-drive-500.png`,
        description:
          "Reliable residential sliding gate motor for gates up to 500kg with soft start and stop and battery backup.",
        brand: {
          "@type": "Brand",
          name: "ET Nice",
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors/et-nice#drive-600`,
        name: "ET Drive 600 Sliding Gate Motor",
        image: `${NAP.url}/images/gate-motors/et-drive-600.jpg`,
        description:
          "High speed domestic sliding gate motor for gates up to 600kg with metal gearbox and rolling code remotes.",
        brand: {
          "@type": "Brand",
          name: "ET Nice",
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors/et-nice#drive-1000`,
        name: "ET Drive 1000 Commercial Gate Motor",
        image: `${NAP.url}/images/gate-motors/et-drive-1000.jpg`,
        description:
          "Heavy duty 24V commercial sliding gate motor for complex and estate gates up to 1000kg.",
        brand: {
          "@type": "Brand",
          name: "ET Nice",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${NAP.url}/gate-motors/et-nice#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Why should I choose an ET Nice gate motor for my home?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ET Nice motors are known for smooth and quiet movement, strong gearboxes, and dependable battery backup that keeps working reliably during power outages.",
            },
          },
          {
            "@type": "Question",
            name: "Can you repair my older ET 500 or ET Blue motor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We carry replacement control boards, power supplies, batteries, and remotes for both modern ET Drive units and older ET Systems models.",
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
      <ETNiceMotorsClient />
    </>
  );
}
