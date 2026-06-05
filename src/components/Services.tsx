import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Gate Motors",
    description:
      "Centurion, FAAC, and more. Automatic sliding and swing gate motor installations, repairs, and upgrades for homes and businesses.",
    image: "/images/gate-motor-feature.jpg",
    href: "/gate-motors",
    alt: "Gate motor installation",
  },
  {
    title: "Electric Fencing",
    description:
      "6, 8, 10, and 12-strand electric fence installations and repairs. SABS compliant perimeter security for any property type.",
    image: "/images/electric-fence.jpg",
    href: "/electric-fencing",
    alt: "10 strand electric fencing",
  },
  {
    title: "CCTV Systems",
    description:
      "AHD and IP CCTV camera installation and repairs. Keep an eye on your property 24/7 with professional surveillance systems.",
    image: "/images/gallery-1.png",
    href: "/cctv",
    alt: "CCTV security camera",
  },
  {
    title: "Garage Doors & Motors",
    description:
      "Professional installation, repair, and automation for all types of garage doors. Manual and automated systems available.",
    image: "/images/garage-door.jpg",
    href: "/garage-doors-motors",
    alt: "Garage door motor",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
