// Single source of truth for NAP (Name, Address, Phone).
// Must match the Google Business Profile exactly for local SEO consistency.
// GBP: "Security direct - Gate motors and electric fence specialists est 2008"
//      33 Waboom St, Alberton, Johannesburg, 1449 — 082 498 1272

export const NAP = {
  // Exact Google Business Profile name — used for schema/citations so the
  // entity matches the GBP. Do not "tidy" the casing; it must match verbatim.
  name: "Security direct - Gate motors and electric fence specialists est 2008",
  // Short brand label for visible UI / headings only.
  displayName: "Security Direct",
  streetAddress: "33 Waboom St",
  addressLocality: "Alberton",
  addressRegion: "Gauteng",
  postalCode: "1449",
  addressCountry: "ZA",
  telephone: "+27824981272",
  telephoneDisplay: "082 498 1272",
  telephoneHref: "tel:0824981272",
  email: "securitydirect2@gmail.com",
  whatsapp: "https://wa.me/+27824981272",
  url: "https://securitydirect.co.za",
  geo: { latitude: -26.31975, longitude: 28.08473 },
} as const;

// One-line address string for visible NAP blocks (matches GBP order).
export const addressLine = `${NAP.streetAddress}, ${NAP.addressLocality}, ${NAP.addressRegion}, ${NAP.postalCode}`;

type JsonLdOptions = {
  url?: string;
  description?: string;
  areaServed?: { "@type": "City"; name: string }[];
};

// Builds a HomeAndConstructionBusiness LocalBusiness schema with the
// canonical NAP. Pass overrides for page-specific url/description/areaServed.
export function buildBusinessJsonLd(options: JsonLdOptions = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: NAP.name,
    alternateName: NAP.displayName,
    description:
      options.description ??
      "Security Direct installs and repairs gate motors, garage doors, electric fencing, CCTV and alarms across Alberton and Johannesburg since 2008.",
    telephone: NAP.telephone,
    email: NAP.email,
    url: options.url ?? NAP.url,
    image: `${NAP.url}/images/hero-bg.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: options.areaServed ?? [
      { "@type": "City", name: "Alberton" },
      { "@type": "City", name: "Johannesburg" },
    ],
  };
}
