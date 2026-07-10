// Single source of truth for NAP (Name, Address, Phone).
// Must match the Google Business Profile exactly for local SEO consistency.
// GBP: "Security Direct Gate Motor Repair and Garage Door Repair"
//      33 Waboom St, Alberton, Johannesburg, 1449 — 082 498 1272

export const NAP = {
  // Exact Google Business Profile name — used for schema/citations so the
  // entity matches the GBP. Do not "tidy" the casing; it must match verbatim.
  name: "Security Direct Gate Motor Repair and Garage Door Repair",
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
  areaServed?: any[];
  suburbSlug?: string;
};

// Geographic hierarchy objects for Gauteng, South Africa
const CountryZA = {
  "@type": "Country",
  name: "ZA",
};

const ProvinceGauteng = {
  "@type": "AdministrativeArea",
  "@id": "https://en.wikipedia.org/wiki/Gauteng",
  name: "Gauteng",
  sameAs: "https://en.wikipedia.org/wiki/Gauteng",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2708,
    longitude: 28.0844,
  },
  containedInPlace: CountryZA,
};

const CityAlberton = {
  "@type": "City",
  "@id": "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  name: "Alberton",
  sameAs: "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2625,
    longitude: 28.1256,
  },
  containedInPlace: ProvinceGauteng,
};

const CityJohannesburg = {
  "@type": "City",
  "@id": "https://en.wikipedia.org/wiki/Johannesburg",
  name: "Johannesburg",
  sameAs: "https://en.wikipedia.org/wiki/Johannesburg",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2041,
    longitude: 28.0473,
  },
  containedInPlace: ProvinceGauteng,
};

const CityGermiston = {
  "@type": "City",
  "@id": "https://en.wikipedia.org/wiki/Germiston",
  name: "Germiston",
  sameAs: "https://en.wikipedia.org/wiki/Germiston",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2167,
    longitude: 28.1667,
  },
  containedInPlace: ProvinceGauteng,
};

const suburbsData = [
  {
    slug: "alberton-central",
    name: "Alberton Central",
    geo: { latitude: -26.2580, longitude: 28.1220 },
    city: CityAlberton,
    wikipedia: "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  },
  {
    slug: "brackenhurst",
    name: "Brackenhurst",
    geo: { latitude: -26.3312, longitude: 28.0931 },
    city: CityAlberton,
    wikipedia: "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  },
  {
    slug: "brackendowns",
    name: "Brackendowns",
    geo: { latitude: -26.3458, longitude: 28.0963 },
    city: CityAlberton,
    wikipedia: "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  },
  {
    slug: "meyersdal",
    name: "Meyersdal",
    geo: { latitude: -26.3117, longitude: 28.0772 },
    city: CityAlberton,
    wikipedia: "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  },
  {
    slug: "randhart",
    name: "Randhart",
    geo: { latitude: -26.3028, longitude: 28.1064 },
    city: CityAlberton,
    wikipedia: "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  },
  {
    slug: "verwoerdpark",
    name: "Verwoerdpark",
    geo: { latitude: -26.2750, longitude: 28.1408 },
    city: CityAlberton,
    wikipedia: "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  },
  {
    slug: "mayberry-park",
    name: "Mayberry Park",
    geo: { latitude: -26.3267, longitude: 28.1258 },
    city: CityAlberton,
    wikipedia: "https://en.wikipedia.org/wiki/Alberton,_Gauteng",
  },
  {
    slug: "glenvista",
    name: "Glenvista",
    geo: { latitude: -26.2917, longitude: 28.0475 },
    city: CityJohannesburg,
    wikipedia: "https://en.wikipedia.org/wiki/Glenvista",
  },
  {
    slug: "bassonia",
    name: "Bassonia",
    geo: { latitude: -26.2803, longitude: 28.0678 },
    city: CityJohannesburg,
    wikipedia: "https://en.wikipedia.org/wiki/Bassonia",
  },
  {
    slug: "mulbarton",
    name: "Mulbarton",
    geo: { latitude: -26.2914, longitude: 28.0375 },
    city: CityJohannesburg,
    wikipedia: "https://en.wikipedia.org/wiki/Mulbarton,_Gauteng",
  },
  {
    slug: "kibler-park",
    name: "Kibler Park",
    geo: { latitude: -26.3244, longitude: 28.0161 },
    city: CityJohannesburg,
    wikipedia: "https://en.wikipedia.org/wiki/Kibler_Park",
  },
  {
    slug: "germiston",
    name: "Germiston",
    geo: { latitude: -26.2167, longitude: 28.1667 },
    city: CityGermiston,
    wikipedia: "https://en.wikipedia.org/wiki/Germiston",
  },
  {
    slug: "mondeor",
    name: "Mondeor",
    geo: { latitude: -26.2778, longitude: 28.0050 },
    city: CityJohannesburg,
    wikipedia: "https://en.wikipedia.org/wiki/Mondeor",
  },
  {
    slug: "winchester-hills",
    name: "Winchester Hills",
    geo: { latitude: -26.2694, longitude: 28.0194 },
    city: CityJohannesburg,
    wikipedia: "https://en.wikipedia.org/wiki/Winchester_Hills",
  },
];

const buildSuburbSchema = (sub: typeof suburbsData[0]) => {
  return {
    "@type": sub.slug === "germiston" ? "City" : "AdministrativeArea",
    "@id": sub.wikipedia,
    name: sub.name,
    sameAs: sub.wikipedia,
    geo: {
      "@type": "GeoCoordinates",
      latitude: sub.geo.latitude,
      longitude: sub.geo.longitude,
    },
    containedInPlace: sub.city,
  };
};

const allAreasServed = [
  CityAlberton,
  CityJohannesburg,
  CityGermiston,
  ...suburbsData.filter((s) => s.slug !== "germiston").map(buildSuburbSchema),
];

const servicesList = [
  { name: "Gate Motor Installation", slug: "gate-motor-installation" },
  { name: "Gate Motor Repair", slug: "gate-motor-repair" },
  { name: "Garage Door Installation", slug: "garage-door-installation" },
  { name: "Garage Door Repair", slug: "garage-door-repair" },
  { name: "Electric Fence Installation", slug: "electric-fence-installation" },
  { name: "Electric Fence Repair", slug: "electric-fence-repair" },
  { name: "CCTV Camera Installation & Repair", slug: "cctv" },
  { name: "Alarm System Installation", slug: "alarm-system-installation" },
  { name: "Alarm System Repair", slug: "alarm-system-repair" },
];

const getOfferCatalog = () => {
  return {
    "@type": "OfferCatalog",
    name: "Security Direct Services",
    itemListElement: servicesList.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${NAP.url}/${service.slug}#service`,
        name: service.name,
        url: `${NAP.url}/${service.slug}`,
      },
    })),
  };
};

// Builds a HomeAndConstructionBusiness LocalBusiness schema with the
// canonical NAP. Pass overrides for page-specific url/description/suburbSlug/areaServed.
export function buildBusinessJsonLd(options: JsonLdOptions = {}) {
  let areaServed: any[] = allAreasServed;

  if (options.suburbSlug) {
    const sub = suburbsData.find((s) => s.slug === options.suburbSlug);
    if (sub) {
      areaServed = [buildSuburbSchema(sub), sub.city, ProvinceGauteng];
    }
  }

  if (options.areaServed) {
    areaServed = options.areaServed;
  }

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${NAP.url}/#business`,
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
    sameAs: [
      "https://www.facebook.com/gatemotors123",
      "https://www.thebusinessdirectory.co.za/listings/security-direct/",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "146",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed,
    hasOfferCatalog: getOfferCatalog(),
  };
}
