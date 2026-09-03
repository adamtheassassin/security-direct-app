"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import AreasServed from "./AreasServed";

const geminiModels = [
  {
    name: "Gemini 12V DC Sliding Gate Motor",
    image: "/images/gate-motors/gemini-dc-slider.jpg",
    gateWeight: "Gates up to 500kg",
    speed: "Smooth and dependable travel",
    power: "12V 7Ah battery backup",
    bestFor: "Standard residential driveway gates",
    popular: true,
    summary: "The classic South African domestic gate motor. It is simple to use, easy to maintain, and runs smoothly on its internal battery even when Eskom goes off.",
  },
  {
    name: "Gemini 24V DC Fast Slider",
    image: "/images/gate-motors/gemini-dc-slider.jpg",
    gateWeight: "Gates up to 600kg",
    speed: "Fast 24V DC opening speed",
    power: "24V heavy duty battery backup",
    bestFor: "Busy residential driveways and small complexes",
    popular: false,
    summary: "Built for busy homes that need faster gate opening and longer battery backup during continuous power cuts. It handles daily traffic without breaking a sweat.",
  },
  {
    name: "Gemini Swing Gate Motors",
    image: "/images/gate-motors/d20-smart.jpg",
    gateWeight: "Single and double swing gates",
    speed: "Quiet linear arm drive",
    power: "12V or 24V battery systems",
    bestFor: "Pillar mounted single and double swing gates",
    popular: false,
    summary: "Sturdy linear actuators that push and pull your driveway swing gate leaves smoothly. They mount cleanly to your pillars and keep your property secure.",
  },
  {
    name: "Gemini Anti-Theft Bracket Protection",
    image: "/images/gate-motors/theft-bracket.jpg",
    gateWeight: "Fits all Gemini sliding motors",
    speed: "Solid steel security",
    power: "Hardened steel puck padlock",
    bestFor: "All driveway sliding gate setups",
    popular: false,
    summary: "A heavy gauge steel cage bolted straight into the concrete foundation. It prevents criminals from opening the cover, stealing the battery, or taking the motor.",
  },
];

const geminiFeatures = [
  {
    title: "Proudly made in South Africa",
    desc: "Gemini gate motors are manufactured locally by DMI Engineering. Replacement parts and boards are readily available whenever you need service.",
  },
  {
    title: "Simple and tough mechanics",
    desc: "Gemini motors use straightforward mechanical designs. There are fewer delicate parts to fail, which makes them very reliable in dusty and rainy weather.",
  },
  {
    title: "Long battery backup",
    desc: "The energy saving drive mechanism uses very little power on standby. You get plenty of opening cycles right through long load shedding schedules.",
  },
  {
    title: "Easy manual override release",
    desc: "If you ever need to push the gate by hand, the simple manual release key lets you unlock the drive in just a few seconds.",
  },
];

const serviceOptions = [
  {
    title: "New Gemini motor installations",
    desc: "We supply brand new Gemini gate motors, install solid steel racks, fit base plates, align safety beams, and program your remotes.",
  },
  {
    title: "Prompt on-site repairs",
    desc: "If your Gemini motor is not moving, makes a clicking sound, or stops halfway, our technicians carry genuine Gemini parts to fix it fast.",
  },
  {
    title: "Battery and PCB board replacements",
    desc: "We test your battery voltage, replace aged batteries, and install fresh Gemini control boards if lightning or power surges damage your board.",
  },
  {
    title: "Safety beams and remote programming",
    desc: "We align safety infrared beams to protect children and cars, and program new Gemini code hopping remotes for everyone in your family.",
  },
];

const brandFaqs = [
  {
    q: "Why should I pick a Gemini gate motor?",
    a: "Gemini motors are locally built for South African conditions. They are affordable, very sturdy, simple to maintain, and spare parts are always easy to find.",
  },
  {
    q: "Can you repair an older Gemini gate motor in Alberton?",
    a: "Yes. We carry replacement Gemini PC boards, limit switches, pinions, transformers, and batteries in our service vans. We can fix most Gemini motor issues on the spot.",
  },
  {
    q: "Will my Gemini gate motor open during load shedding?",
    a: "Yes. Every Gemini sliding motor runs off a rechargeable backup battery. When the mains power fails, the battery keeps your gate running without interruption.",
  },
  {
    q: "How long does a new Gemini gate motor installation take?",
    a: "A standard install on a gate that rolls smoothly takes between two and three hours. This includes mounting the unit, laying the rack, and testing all remotes.",
  },
  {
    q: "Can I use my existing remotes with a new Gemini motor?",
    a: "Yes. We can either program your existing code hopping remotes or install an external receiver so all your current remotes keep working seamlessly.",
  },
  {
    q: "Which areas do you cover for Gemini gate motor services?",
    a: "We service homes and businesses across Alberton, Brackenhurst, Meyersdal, New Redruth, Verwoerdpark, Germiston, Glenvista, and Johannesburg South.",
  },
];

export default function GeminiMotorsClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Gemini Gate Motor Installation");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const openQuote = (serviceName?: string) => {
    setSelectedService(serviceName || "Gemini Gate Motor Service");
    setIsQuoteModalOpen(true);
  };

  const toggleFaq = (i: number) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <>
      <Header />

      <main className="flex-grow pt-16">
        {/* ── Hero ── */}
        <section className="relative bg-navy py-16 md:py-24 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Information & Actions */}
              <div className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block bg-blue/30 border border-blue/40 text-blue-200 text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">
                    Alberton &amp; Johannesburg
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
                    <Image
                      src="/images/brands/gemini.png"
                      alt="Gemini Official Brand"
                      width={45}
                      height={18}
                      className="h-3.5 w-auto object-contain brightness-0 invert"
                    />
                    Gemini Automation
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
                  Gemini Gate Motors
                </h1>

                <p className="text-base md:text-lg text-blue-200 mb-8 max-w-xl leading-relaxed">
                  We supply, install, and repair Gemini sliding and swing gate motors across Alberton and Johannesburg. You get reliable South African gate automation, fast battery backup, and honest local support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => openQuote("Gemini Gate Motor Free Quote")}
                    className="bg-white text-navy font-bold px-8 py-4 rounded-lg text-base hover:bg-blue-pale transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Get Free Quote
                  </button>
                  <a
                    href="tel:0824981272"
                    className="bg-blue hover:bg-blue-light text-white font-bold px-8 py-4 rounded-lg text-base transition-colors shadow-lg flex justify-center items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call 082 498 1272
                  </a>
                </div>
              </div>

              {/* Right Column: Framed Product Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex items-center justify-center aspect-[4/3]">
                  <Image
                    src="/images/brands/Gemini-12V-DC-Slider-7Ah.webp"
                    alt="Gemini 12V DC sliding gate motor supplied and installed by Security Direct"
                    width={420}
                    height={320}
                    className="object-contain max-h-full w-auto"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <div className="bg-blue py-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Free On-Site Assessment", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { label: "Original Gemini Parts", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Battery Backup Standard", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { label: "Fitted Since 2008", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
              ].map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-2.5 text-white">
                  <svg className="w-5 h-5 opacity-90 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={icon} />
                  </svg>
                  <span className="font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Product Models Grid ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Gemini Range</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-4">
                Gemini Gate Motors We Supply and Install
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Gemini motors are built right here in South Africa for dependable daily performance. Explore our popular Gemini sliding and swing gate systems below.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {geminiModels.map((m) => (
                <div
                  key={m.name}
                  className={`bg-white rounded-3xl border p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
                    m.popular ? "border-blue ring-2 ring-blue/15" : "border-gray-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="bg-blue-pale text-blue text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                        {m.gateWeight}
                      </span>
                      {m.popular && (
                        <span className="bg-blue text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <div className="relative h-48 w-full mb-6 bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                      <Image
                        src={m.image}
                        alt={`${m.name} installed in Alberton and Johannesburg`}
                        width={240}
                        height={180}
                        className="object-contain max-h-full w-auto"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-navy font-display mb-3">{m.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{m.summary}</p>

                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 bg-slate-50 p-4 rounded-xl mb-6">
                      <div>
                        <span className="font-semibold text-navy block">Speed:</span>
                        {m.speed}
                      </div>
                      <div>
                        <span className="font-semibold text-navy block">Power Backup:</span>
                        {m.power}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-5">
                    <button
                      onClick={() => openQuote(`${m.name} Installation Quote`)}
                      className="bg-navy hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-lg transition-colors cursor-pointer"
                    >
                      Get Free Quote
                    </button>
                    <a
                      href={`https://wa.me/+27824981272?text=${encodeURIComponent(
                        `Hi Security Direct, I am interested in an installation or repair quote for the ${m.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 4.987L2 22l5.176-1.358a9.92 9.92 0 004.836 1.246c5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm5.522 14.072c-.225.63-.884 1.15-1.523 1.275-.54.105-1.24.165-3.6-.825-3.04-1.275-5.01-4.38-5.16-4.59-.15-.21-1.21-1.605-1.21-3.06 0-1.455.765-2.175 1.035-2.46.225-.24.585-.33.885-.33h.84c.255 0 .48.015.69.525.27.645.93 2.265 1.005 2.415.075.15.135.33.03.54-.105.21-.21.345-.375.525-.15.18-.33.405-.45.54-.15.15-.3.315-.12.615.18.3.795 1.29 1.71 2.1 1.185 1.05 2.19 1.38 2.505 1.53.315.15.495.12.675-.09.18-.21.78-.9 1-1.215.18-.225.435-.18.705-.075.27.105 1.71.81 2.01.96.3.15.495.225.57.345.075.12.075.69-.15 1.365z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Advantages ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Why Gemini</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">
                Simple, Tough and Locally Supported
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Gemini automation delivers no nonsense reliability for homeowners who want a motor that simply works year after year.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {geminiFeatures.map((f) => (
                <div key={f.title} className="bg-[#f8f7f4] border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-blue-pale text-blue flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy mb-2 font-display text-base">{f.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Services for Gemini ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Complete Services</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">
                What We Do for Gemini Gate Motors
              </h2>
              <p className="text-gray-500 text-sm">
                Our technicians handle everything from new gate installations to emergency repairs and routine servicing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceOptions.map((s, i) => (
                <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-blue font-bold text-2xl mb-3 font-display">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-bold text-navy mb-2 font-display text-base">{s.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">{s.desc}</p>
                  </div>
                  <button
                    onClick={() => openQuote(`${s.title} Quote`)}
                    className="text-blue font-bold text-xs hover:underline flex items-center gap-1 cursor-pointer pt-2"
                  >
                    Request this service &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Frequently Asked Questions</span>
              <h2 className="text-3xl font-bold text-navy font-display">
                Questions About Gemini Gate Motors
              </h2>
            </div>

            <div className="space-y-3">
              {brandFaqs.map((faq, i) => (
                <div key={i} className="bg-[#f8f7f4] border border-gray-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-navy hover:text-blue transition-colors focus:outline-none"
                  >
                    <span className="font-display pr-4 text-sm md:text-base">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-blue-light shrink-0 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interlinking Hub ── */}
        <section className="py-16 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Gate Motor Hub</span>
              <h2 className="text-2xl font-bold text-navy font-display mb-2">Explore Related Gate Motor Solutions</h2>
              <p className="text-gray-500 text-sm">Compare other leading gate motors or request urgent repairs.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                { href: "/gate-motors/centurion", title: "Centurion Gate Motors", desc: "Explore South Africa's popular D5 Smart, D10 Smart, and Vantage swing arms." },
                { href: "/gate-motors/et-nice", title: "ET Nice Gate Motors", desc: "Discover ET Drive 500, 600, and 1000 motors with smooth soft start technology." },
                { href: "/gate-motor-repair", title: "Emergency Gate Motor Repair", desc: "Fast on-site repairs for all gate motor brands across Alberton and Johannesburg." },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-blue hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-navy font-display text-sm mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{s.desc}</p>
                  </div>
                  <span className="text-blue font-bold text-xs flex items-center gap-1">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Areas Served ── */}
        <AreasServed mode="installation" />

        {/* ── CTA Banner ── */}
        <section className="py-16 bg-gradient-to-r from-navy to-blue text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Need Help With a Gemini Gate Motor?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp message today. We provide free on-site inspections and fixed written quotes before any work begins.
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
                href="https://wa.me/+27824981272?text=Hi%20Security%20Direct,%20I%20need%20help%20with%20a%20Gemini%20gate%20motor."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-lg flex justify-center items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={selectedService}
      />
      <Footer />
    </>
  );
}
