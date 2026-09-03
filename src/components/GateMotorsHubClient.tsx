"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import AreasServed from "./AreasServed";

const leadingBrands = [
  {
    name: "Centurion Systems",
    logo: "/images/brands/centurion.png",
    popular: true,
    tagline: "South Africa's Most Fitted Brand",
    link: "/gate-motors/centurion",
    linkText: "View Centurion Range & Specs",
    desc: "Centurion is manufactured in South Africa and leads the market for domestic and commercial gate motors. Known for fast opening speeds, phone app controls with MyCentsys, and ready availability of spare parts everywhere in Gauteng.",
    popularModels: "D3 Smart, D5 Evo, D5 Smart, D10 Smart, Vantage Swing",
  },
  {
    name: "ET Nice (ET Systems)",
    logo: "/images/brands/nice.png",
    popular: false,
    tagline: "Strong Motors and Rolling Code Security",
    link: "/gate-motors/et-nice",
    linkText: "View ET Nice Range & Specs",
    desc: "ET Nice motors offer durable gearboxes, smooth soft start and stop mechanisms, and secure code hopping remotes. They are a solid choice for residential driveways and busy commercial properties alike.",
    popularModels: "ET Drive 500, ET Drive 600, ET Drive 1000",
  },
  {
    name: "Gemini",
    logo: "/images/brands/gemini.png",
    popular: false,
    tagline: "Simple and Dependable Domestic Power",
    link: "/gate-motors/gemini",
    linkText: "View Gemini Range & Specs",
    desc: "Gemini gate motors have powered South African homes for decades. They feature straightforward 24V power systems, quiet operation, and simple battery maintenance. We service all Gemini sliding and swing gate units.",
    popularModels: "Gemini 24V Sliding, Gemini Swing",
  },
  {
    name: "Hansa",
    logo: "/images/brands/hansa.svg",
    popular: false,
    tagline: "Legacy Repairs and Modern Upgrades",
    link: "/gate-motor-repair",
    linkText: "Hansa Service & Upgrades",
    desc: "Many older homes across Alberton and Johannesburg have trusted Hansa gate motors. We carry replacement parts and power packs to repair working units, or help you upgrade to a modern motor using your current rack.",
    popularModels: "Hansa Speedo, Hansa Deluxe, Hansa Swing",
  },
];

const motorTypes = [
  {
    title: "Sliding Gate Motors",
    desc: "Most homes in Gauteng use sliding driveway gates that travel along a ground rail. We fit sliding motors sized to the exact weight of your gate so the motor pulls smoothly without burning out its internal gears.",
    icon: "M4 6h16M4 12h16M4 18h7",
  },
  {
    title: "Swing Gate Motors",
    desc: "Single or double leaf swing gates need linear piston arms or articulated motors mounted directly onto your brick pillars. We set the open and close angles so both gate leaves move quietly together.",
    icon: "M8 7l4-4 4 4m0 10l-4 4-4-4",
  },
  {
    title: "Complex and Commercial Motors",
    desc: "Townhouse complexes, security estates, and business premises need motors built for constant movement. We install high capacity 24V systems that open hundreds of times every day without overheating.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5",
  },
];

const sizingGuide = [
  {
    category: "Light Domestic Gates",
    weight: "Up to 300kg",
    types: "Small steel bar gates, pedestrian gates, or light wire mesh gates",
    recommendation: "Centurion D3 Smart or compact domestic motor",
    priceRange: "From R6 600 fitted",
  },
  {
    category: "Standard Residential Gates",
    weight: "300kg to 500kg",
    types: "Standard family driveway gates with steel frames, timber, or sheet cladding",
    recommendation: "Centurion D5 Smart or ET Drive 500",
    priceRange: "From R7 850 fitted",
  },
  {
    category: "Heavy Residential & Complexes",
    weight: "500kg to 1000kg+",
    types: "Solid steel gates, high security gates, townhouse complexes, and offices",
    recommendation: "Centurion D10 Smart or ET Drive 1000",
    priceRange: "From R11 500 fitted",
  },
];

const practicalFeatures = [
  {
    title: "Backup batteries for load shedding",
    desc: "You never want to be locked out of your property during a power outage. Every new gate motor comes with a standby battery that keeps your gate working when municipal power drops.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Anti-theft steel brackets and puck locks",
    desc: "Gate motor theft is common across Gauteng. We fit thick steel security cages and high grade puck padlocks around your motor to stop criminals from stealing the motor or its battery.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Infrared safety beams",
    desc: "Safety beams send an invisible light beam across the driveway. If a car, a child, or a family pet crosses while the gate is closing, the motor stops instantly and opens back up.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Mobile phone and remote setup",
    desc: "We supply and program all your handheld remotes on the day. Many modern motors also allow you to open the gate from your smartphone or check battery status from anywhere.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What brands of gate motors do you supply and repair?",
    a: "We work with all leading gate motor brands in South Africa. Our most fitted brand is Centurion Systems, including the D3 Smart, D5 Smart, D10, and Vantage swing arms. We also install, service, and repair ET Nice, Gemini, and Hansa gate motors.",
  },
  {
    q: "How do I know which gate motor is right for my home?",
    a: "The most important factor is the weight and length of your gate, along with how often it opens each day. Standard home driveway gates usually weigh around 300kg to 450kg and run best on a 500kg rated motor like the Centurion D5 Smart or ET Drive 500. A motor with plenty of pulling room runs smoothly and lasts for years.",
  },
  {
    q: "How much does a gate motor cost with complete installation?",
    a: "Our complete gate motor installations start from R6 600 for light gates and R7 850 for standard 500kg family driveway gates. This price includes the brand new motor, a 4 metre steel reinforced rack, a solid base plate, a fresh backup battery, and two programmed remotes.",
  },
  {
    q: "Will my gate motor keep working during load shedding?",
    a: "Yes. Every gate motor we fit includes a 12V or 24V standby battery. When municipal power is on, the battery charges continuously. When power cuts happen, the battery powers the gate automatically so you can drive in and out without delay.",
  },
  {
    q: "Can you fix my broken gate motor or do I have to buy a new one?",
    a: "We always test your motor first to see if a repair makes financial sense. Many gate issues come down to a dead battery, a blown fuse, worn brushes, or damaged safety beams. We carry spare parts in our vehicles and can often fix the issue on the spot.",
  },
  {
    q: "Can I replace my old gate motor and keep my existing track?",
    a: "Yes. If your current steel or nylon gear rack is in good condition, we can mount a new motor directly onto your existing setup. This keeps your installation quick and cost effective.",
  },
  {
    q: "How do you protect gate motors from being stolen?",
    a: "We fit custom steel anti-theft brackets over the motor cover, bolted firmly into the ground base with a solid steel puck padlock. This stops thieves from unbolting the motor or removing the battery and circuit board.",
  },
  {
    q: "What areas in Gauteng do you cover?",
    a: "We service Alberton and Johannesburg South, including Meyersdal, Brackenhurst, Brackendowns, Randhart, Verwoerdpark, Mayberry Park, Glenvista, Bassonia, Mulbarton, Kibler Park, Mondeor, Winchester Hills, and Germiston.",
  },
];

export default function GateMotorsHubClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Gate Motors");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="Gate motors supplied and installed across Alberton and Johannesburg"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600/90 text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              Gate Motors in Alberton and Johannesburg
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Gate Motors for Sliding and Swing Gates
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              We supply, install, and repair gate motors for homes, complexes, and businesses across Alberton and Johannesburg. We work with leading brands including Centurion, ET Nice, Gemini, and Hansa, ensuring your gate opens quickly with dependable backup battery power during load shedding.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => openQuote("Gate Motors General Quote")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition duration-200 cursor-pointer"
              >
                Get a Free Gate Motor Quote
              </button>
              <a
                href="tel:0824981272"
                className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition duration-200"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 082 498 1272
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Routing Action Cards */}
      <section className="py-10 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-600">
              Explore Gate Motor Services &amp; Options
            </h2>
            <span className="text-xs text-slate-500">Same-day services across Alberton &amp; Johannesburg</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/gate-motors/centurion"
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-400 transition block group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Brand Focus</span>
                <span className="text-slate-400 group-hover:text-blue-600 transition">&rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Centurion Gate Motors</h3>
              <p className="text-sm text-slate-600">
                Explore South Africa's most popular motors: D3 Smart, D5 Smart, D10, and Vantage swing arms with app setup.
              </p>
            </Link>

            <Link
              href="/gate-motor-installation"
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-400 transition block group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Complete Setup</span>
                <span className="text-slate-400 group-hover:text-blue-600 transition">&rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Gate Motor Installation</h3>
              <p className="text-sm text-slate-600">
                Complete fitment packages for all leading brands with steel rack, base plate, battery backup, and anti-theft brackets.
              </p>
            </Link>

            <Link
              href="/gate-motor-repair"
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-400 transition block group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Fast Fixes</span>
                <span className="text-slate-400 group-hover:text-blue-600 transition">&rarr;</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Gate Motor Repair</h3>
              <p className="text-sm text-slate-600">
                Prompt troubleshooting for gate motors that stop, beep, lose power, or grind. Spare parts in stock.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Major Brands</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Gate Motor Brands We Install and Service
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We work on all major gate motor brands across Gauteng. We help you choose the right brand for your gate size, budget, and daily usage requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadingBrands.map((brand, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border flex flex-col justify-between transition hover:shadow-lg ${
                  brand.popular ? "border-blue-500 bg-blue-50/20 ring-2 ring-blue-500/20" : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="h-14 bg-white border border-slate-200/80 rounded-xl px-3.5 py-2 flex items-center shadow-xs">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={140}
                        height={42}
                        className="h-9 w-auto object-contain"
                      />
                    </div>
                    {brand.popular && (
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
                        Most Popular in SA
                      </span>
                    )}
                  </div>

                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{brand.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mt-1">{brand.tagline}</p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{brand.desc}</p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-700 mb-6">
                    <span className="text-slate-400 block mb-1">Common Models:</span>
                    <strong className="text-slate-900">{brand.popularModels}</strong>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <Link
                    href={brand.link}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group"
                  >
                    <span>{brand.linkText}</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                  <button
                    onClick={() => openQuote(`${brand.name} Gate Motor Quote`)}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition cursor-pointer"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gate Types Section (Sliding vs Swing vs Commercial) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Gate Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Motors for Every Style of Driveway Gate
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Every gate moves differently. We inspect your driveway layout to fit the motor mechanism that delivers smooth, reliable operation every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {motorTypes.map((type, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Guide Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Gate Sizing Chart</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              How Gate Weight Dictates Motor Size
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A motor that is too small strains every time it pulls the gate, draining the backup battery faster and wearing out the internal gearbox. We make sure your motor is properly sized for your gate weight.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-900 text-white text-xs uppercase">
                <tr>
                  <th className="px-6 py-4">Gate Category</th>
                  <th className="px-6 py-4">Weight Rating</th>
                  <th className="px-6 py-4">Driveway Gate Examples</th>
                  <th className="px-6 py-4">Recommended Motor Model</th>
                  <th className="px-6 py-4">Price Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sizingGuide.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-bold text-slate-900">{row.category}</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">{row.weight}</td>
                    <td className="px-6 py-4 text-slate-600">{row.types}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{row.recommendation}</td>
                    <td className="px-6 py-4 font-bold text-slate-900">{row.priceRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features: Load Shedding, Anti-Theft, Beams */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Essential Security</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Features Included with Every Installation
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We look after the practical security details that keep your gate operating through power cuts and protected against theft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practicalFeatures.map((feat, idx) => (
              <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Helpful Advice</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Frequently Asked Questions About Gate Motors
            </h2>
            <p className="text-slate-600">
              Clear answers to the questions homeowners and property managers ask us most.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-100 transition cursor-pointer"
                >
                  <span className="text-base md:text-lg">{faq.q}</span>
                  <span className="text-blue-600 text-xl font-bold flex-shrink-0">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <AreasServed />

      {/* CTA Banner */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing or Fixing a Gate Motor?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for straightforward advice and a free quote. We travel across Alberton and Johannesburg to test your gate and install the right motor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openQuote("Gate Motors Quote")}
              className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition cursor-pointer"
            >
              Get a Free Quote
            </button>
            <a
              href="https://wa.me/27824981272"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition flex items-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}
