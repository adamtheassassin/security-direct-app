import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { areaPages, areaSlugs } from "@/data/areaPages";

export const metadata: Metadata = {
  title:
    "Areas We Serve | Gate Motors, Electric Fencing & Security Across Alberton & Johannesburg South | Security Direct",
  description:
    "Security Direct fits and repairs gate motors, electric fencing, CCTV and alarms across Alberton and Johannesburg South. See the suburbs we cover and get a free quote. Call 082 498 1272.",
  keywords:
    "gate motor Alberton, gate motor Johannesburg South, electric fence Alberton, security Johannesburg South, areas served, gate motor repair near me",
  alternates: {
    canonical: "/areas",
  },
};

const regionGroups: { region: "alberton" | "jhb"; label: string }[] = [
  { region: "alberton", label: "Alberton & Surrounds" },
  { region: "jhb", label: "Johannesburg South & East" },
];

export default function AreasHubPage() {
  const areas = areaSlugs.map((s) => areaPages[s]);

  return (
    <>
      <Header />

      <main className="flex-grow pt-16">
        {/* ── Hero ── */}
        <section className="relative bg-navy py-20 md:py-28 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/areas/alberton_central.png"
              alt="The suburbs of Alberton that Security Direct covers"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left">
            <span className="inline-block bg-blue/30 border border-blue/40 text-blue-200 text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-6">
              Areas We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display max-w-3xl">
              The Suburbs We Cover
            </h1>
            <p className="text-lg text-blue-200 max-w-xl leading-relaxed mx-auto md:mx-0">
              We fit and repair gate motors, electric fencing, CCTV and alarms right across
              Alberton and Johannesburg South. Pick your suburb to see how we help and get a
              free quote.
            </p>
          </div>
        </section>

        {/* ── Area Grid ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            {regionGroups.map((group) => {
              const groupAreas = areas.filter(
                (a) => (a.region ?? "alberton") === group.region
              );
              if (groupAreas.length === 0) return null;
              return (
                <div key={group.region} className="mb-16 last:mb-0">
                  <h2 className="text-2xl font-bold text-navy font-display mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-blue rounded-full" />
                    {group.label}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={area.image}
                            alt={`Gate motors and security in ${area.name}, ${area.localityLabel ?? "Alberton"}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                          <h3 className="absolute bottom-4 left-5 text-white text-xl font-bold font-display">
                            {area.name}
                          </h3>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            Gate motors, electric fencing, garage doors, CCTV and alarms for
                            homes and businesses around {area.name}.
                          </p>
                          <span className="text-blue font-semibold text-sm flex items-center gap-1.5">
                            See {area.name}
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <p className="text-gray-400 text-sm italic text-center mt-12">
              Don&apos;t see your suburb? We cover most of Alberton and Johannesburg South.{" "}
              <a href="tel:0824981272" className="text-blue hover:underline font-semibold not-italic">
                Call 082 498 1272
              </a>{" "}
              to check.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-gradient-to-r from-navy to-blue text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Get a Free Quote in Your Area
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Send us your address on WhatsApp or give us a call and we will set up a time that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0824981272"
                className="bg-white text-navy font-bold px-8 py-3.5 rounded-lg text-sm hover:bg-blue-pale transition-colors shadow-lg flex justify-center items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 082 498 1272
              </a>
              <a
                href="https://wa.me/+27824981272"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-lg flex justify-center items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
