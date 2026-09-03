import { Metadata } from "next";
import GateMotorsHubClient from "@/components/GateMotorsHubClient";
import { buildBusinessJsonLd, NAP } from "@/lib/nap";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gate Motors in Alberton & Johannesburg | Prices from R6 600 Fitted",
  description:
    "Find the right gate motor for sliding and swing gates across Alberton and Johannesburg. We supply, install, and repair Centurion, ET Nice, Gemini, and Hansa motors. Call 082 498 1272.",
  keywords:
    "gate motors, gate motors Alberton, gate motors Johannesburg, sliding gate motors, swing gate motors, gate motor prices, gate automation, gate motor installation, gate motor repair, Security Direct",
  canonical: "/gate-motors",
  image: "/images/gate-motor-d5-evo.png",
});

export default function GateMotorsPage() {
  const businessJsonLd = buildBusinessJsonLd({
    url: `${NAP.url}/gate-motors`,
    description:
      "Security Direct supplies, fits, and repairs gate motors for sliding and swing gates across Alberton and Johannesburg, working with all leading brands including Centurion, ET Nice, Gemini, and Hansa.",
  });

  const collectionAndProductJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${NAP.url}/gate-motors#webpage`,
        url: `${NAP.url}/gate-motors`,
        name: "Gate Motors for Sliding and Swing Gates",
        description:
          "Browse gate motors for residential, estate, and commercial gates in Alberton and Johannesburg. Compare leading brands, motor sizes, load shedding battery setups, and installation prices.",
        isPartOf: {
          "@id": `${NAP.url}/#website`,
        },
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
          ],
        },
      },
      {
        "@type": "Product",
        "@id": `${NAP.url}/gate-motors#residential-sliding`,
        name: "Residential Sliding Gate Motor Package",
        image: `${NAP.url}/images/gate-motors/d5-evo-smart.jpg`,
        description:
          "Complete sliding gate motor package for residential gates up to 500kg. Includes steel rack, base plate, backup battery, and remotes.",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "6600",
          highPrice: "11500",
          priceCurrency: "ZAR",
          offerCount: "4",
          seller: {
            "@id": `${NAP.url}/#business`,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${NAP.url}/gate-motors#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What brands of gate motors do you supply and repair?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We work with all leading gate motor brands in South Africa, including Centurion Systems, ET Nice, Gemini, and Hansa. We supply brand new units and carry replacement parts for repairs.",
            },
          },
          {
            "@type": "Question",
            name: "Which gate motor size do I need for my driveway gate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For light gates under 300kg, a 300kg rated motor is suitable. Most standard residential steel gates weigh between 300kg and 500kg, which requires a 500kg motor like the Centurion D5 Smart or ET Drive 500. Heavy solid gates and townhouse complexes need 1000kg rated motors.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a gate motor cost with installation in Johannesburg?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Complete gate motor installations start from R6 600 for light gates and R7 850 for standard 500kg home gates. This price includes the motor, 4 metre steel reinforced rack, base plate, backup battery, and two remotes.",
            },
          },
          {
            "@type": "Question",
            name: "Will my gate motor work when the power goes out?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every gate motor we install comes with a 12V or 24V standby battery. It automatically charges from the mains and powers the gate during load shedding.",
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
          __html: JSON.stringify(collectionAndProductJsonLd),
        }}
      />
      <GateMotorsHubClient />
    </>
  );
}
