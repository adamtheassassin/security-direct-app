export default function About() {
  const services = [
    "Gate Motor Installations & Repairs – Automatic or manual, ensuring smooth, reliable gate operation.",
    "Garage Doors & Garage Door Motors – Professional installation, repair, and automation for all types.",
    "CCTV Installation & Repairs – Protect your property with high-quality monitored CCTV systems.",
    "6-Strand Electric Fence – Cost-effective security for homes and small businesses.",
    "8-Strand Electric Fence – Durable perimeter protection for residential and commercial properties.",
    "10-Strand Electric Fence – High-security solutions for warehouses and factories.",
    "12-Strand Electric Fence – Maximum security for estates and high-risk commercial properties.",
  ];

  return (
    <section className="pt-10 pb-20" style={{ backgroundColor: "#f8f7f4" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: About text */}
          <div>
            <p
              style={{ color: "#094B92" }}
              className="text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Welcome to Security Direct
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#001d3b",
              }}
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
            >
              Alberton&apos;s Gate Motor &amp;
              <br />
              Electric Fence Specialists
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: "#094B92" }} />
            <p className="text-gray-600 leading-relaxed mb-5">
              Established in 2008, Security Direct has been providing reliable
              security solutions for homes and businesses in Alberton and
              surrounding areas. With years of experience, we pride ourselves on{" "}
              <strong>professional workmanship</strong> and{" "}
              <strong>great value for money</strong>, ensuring every installation
              or repair meets <strong>SABS standards</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Security Direct, we combine expertise, quality materials, and
              professional installation to deliver solutions that protect your
              property and give you peace of mind.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["Est. 2008", "SABS Compliant", "Local Specialists", "Free Quotes"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border"
                  style={{ borderColor: "#094B92", color: "#094B92", backgroundColor: "#e8f0f8" }}
                >
                  <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Services list */}
          <div
            className="rounded-2xl p-8 shadow-sm border"
            style={{ backgroundColor: "#ffffff", borderColor: "#e2e8f0" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#001d3b",
              }}
              className="text-xl font-bold mb-6"
            >
              Our Services Include
            </h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#094B92" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href="tel:0824981272"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                style={{ color: "#094B92" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call us for a free quote: 082 498 1272
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
