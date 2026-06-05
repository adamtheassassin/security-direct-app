import Image from "next/image";

const reasons = [
  {
    icon: "/images/icon-1.svg",
    title: "Value for Money",
    description:
      "We understand investing in security is significant. Our competitive pricing reflects quality products – every Rand counts.",
    cta: "Get a Free Quote",
    href: "/contact-us",
  },
  {
    icon: "/images/icon-2.svg",
    title: "Prompt Response",
    description:
      "Security needs can be urgent. Our dedicated team is always ready to assist swiftly, ensuring peace of mind when it matters most.",
    cta: "Contact Us",
    href: "/contact-us",
  },
  {
    icon: "/images/icon-3.svg",
    title: "Quality Workmanship",
    description:
      "Since 2008, we've delivered exceptional workmanship in every project. Attention to detail and dedication to quality is our standard.",
    cta: "Our Services",
    href: "/gate-motors",
  },
  {
    icon: null,
    title: "Built on Pride",
    description:
      "Established in 2008 with ambition and pride. Trusted local specialists keeping homes and businesses safe across Johannesburg.",
    cta: "About Us",
    href: "/contact-us",
    iconFallback: "2008",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f8f7f4" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p
            style={{ color: "#094B92" }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Why Choose Security Direct
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#001d3b",
            }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            The Security Direct Difference
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We combine expertise, quality materials, and professional
            installation to deliver security solutions you can rely on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-7 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "#e8f0f8" }}
              >
                {reason.icon ? (
                  <Image
                    src={reason.icon}
                    alt={reason.title}
                    width={36}
                    height={36}
                    className="opacity-80"
                    style={{ filter: "invert(24%) sepia(89%) saturate(707%) hue-rotate(188deg) brightness(90%) contrast(95%)" }}
                  />
                ) : (
                  <span
                    className="text-xl font-black"
                    style={{ color: "#094B92" }}
                  >
                    {reason.iconFallback}
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "#001d3b",
                }}
                className="text-lg font-bold mb-3"
              >
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {reason.description}
              </p>
              <a
                href={reason.href}
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                style={{ color: "#094B92" }}
              >
                {reason.cta}
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Why choose us checklist */}
        <div
          className="mt-12 rounded-2xl p-8 md:p-10 text-white"
          style={{ background: "linear-gradient(135deg, #001d3b 0%, #094B92 100%)" }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-2xl font-bold mb-2"
              >
                Why Choose Security Direct?
              </h3>
              <p className="text-blue-200 text-sm">
                Trusted security specialists with a proven track record since 2008.
              </p>
            </div>
            <ul className="space-y-2.5">
              {[
                "Established in 2008 – trusted local specialists",
                "Serving Alberton and surrounding areas",
                "Professional workmanship with great value for money",
                "Full compliance with SABS safety standards",
                "Expert advice and reliable after-service support",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-blue-100">
                  <svg
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
