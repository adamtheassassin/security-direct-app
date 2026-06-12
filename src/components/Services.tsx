import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Gate Motor Installation",
    description:
      "We fit gate motors that keep working for years. Sliding & swing gates, battery backups, and trusted brands like Centurion and FAAC.",
    image: "/images/gate-motor-feature.jpg",
    href: "/gate-motor-installation",
    alt: "Gate motor installation",
  },
  {
    title: "Gate Motor Repair",
    description:
      "We fix gate motors fast, whatever the brand. Urgent diagnostic and on-site troubleshooting for Centurion, FAAC, ET, Gemini, and more.",
    image: "/images/Centurion D10 Installation 260605.jpg",
    href: "/gate-motor-repair",
    alt: "Gate motor repair",
  },
  {
    title: "Electric Fence Installation",
    description:
      "We put up electric fencing that keeps people out. 6 to 12-strand setups meeting SABS standards, with a certificate of compliance on every new fence.",
    image: "/images/electric-fence.jpg",
    href: "/electric-fence-installation",
    alt: "10 strand electric fencing",
  },
  {
    title: "Electric Fence Repair",
    description:
      "Fence stopped charging? We fix dead energizers, snapped strands, broken insulators, and false alarms on all brands, often the same day.",
    image: "/images/electric-fencing/night-fence.jpg",
    href: "/electric-fence-repair",
    alt: "Electric fence repair on a boundary wall",
  },
  {
    title: "CCTV Systems",
    description:
      "AHD and IP CCTV camera installation and repairs. Watch your property from your phone, day or night, and keep your home secure.",
    image: "/images/gallery-1.png",
    href: "/cctv",
    alt: "CCTV security camera",
  },
  {
    title: "Garage Doors & Motors",
    description:
      "Professional installation, repair, and automation for garage doors of every kind. Get your door running smoothly.",
    image: "/images/garage-door.jpg",
    href: "/garage-doors-motors",
    alt: "Garage door motor",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p
            style={{ color: "#094B92" }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#001d3b",
            }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Security Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Professional installations, repairs, and maintenance across
            Alberton and the whole of Johannesburg.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(9,75,146,0.6) 0%, transparent 60%)",
                  }}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "#001d3b",
                  }}
                  className="text-lg font-bold mb-2"
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div
                  className="mt-4 flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "#094B92" }}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
