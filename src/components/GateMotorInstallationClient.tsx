"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";

export default function GateMotorInstallationClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const installationFeatures = [
    {
      title: "Battery Backup Built-In",
      description: "Never get locked out during load shedding. All installations feature high-capacity backup batteries for uninterrupted operation.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Anti-Theft Bracket Setup",
      description: "Protect your investment. We install heavy-duty steel anti-theft brackets and high-security padlocks to secure your motor.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Smart Phone Integration",
      description: "Open your gate from anywhere in the world, check open/closed status, and receive alerts directly on your mobile phone.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Safety Beams Alignment",
      description: "Prevent accidents. Optional infrared safety beams detect cars and pedestrians, immediately stopping the gate from closing.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  const brands = [
    { name: "Centurion", model: "D5 Evo / Smart, D10, D24", logo: "/images/gate-motor-d5-evo.png" },
    { name: "FAAC", model: "C720, C721, 746", logo: "/images/gallery-1.png" },
    { name: "ET Nice", model: "Drive 500, Drive 600, Wingo", logo: "/images/gallery-2.png" },
    { name: "Gemini", model: "Sliding 220V, 12V", logo: "/images/gallery-3.jpg" },
  ];

  const steps = [
    {
      num: "01",
      title: "Free On-Site Assessment",
      description: "We inspect your gate track, wheels, overall balance, and electrical point to recommend the perfect motor model for your specific gate size.",
    },
    {
      num: "02",
      title: "Detailed Quotation",
      description: "You receive a clear, upfront quote detailing the motor, accessories, backup battery, and all labor costs with absolutely no hidden fees.",
    },
    {
      num: "03",
      title: "Professional Installation",
      description: "Our certified technicians secure the foundation, mount the rack, wire the system, and secure the motor with anti-theft brackets.",
    },
    {
      num: "04",
      title: "Testing & Handover",
      description: "We program your remotes, align safety beams, test the automatic setup, and guide you through operations, emergency manual overrides, and app setup.",
    },
  ];

  const faqs = [
    {
      q: "What is the best gate motor brand for home use in South Africa?",
      a: "Centurion is the market leader in South Africa, specifically the Centurion D5 Evo and the newer D5 Smart. They are exceptionally reliable, offer high speed, have excellent backup battery systems for load shedding, and parts are widely available. We also install and service FAAC, ET Nice, and Gemini.",
    },
    {
      q: "Will my gate motor work when the power is out (during load shedding)?",
      a: "Yes. All our gate motor installations include a 12V backup battery (or 24V for heavy-duty motors). During a power outage, the motor runs entirely on battery power. The D5 Smart is highly energy-efficient and can handle dozens of operations on battery power alone.",
    },
    {
      q: "How long does a typical gate motor installation take?",
      a: "A standard installation on a gate that is already manually working smoothly takes approximately 2 to 4 hours. This includes securing the motor, welding or securing the rack, wiring the power supply, programming remotes, and configuring safety settings.",
    },
    {
      q: "Do you automate existing manual sliding and swing gates?",
      a: "Absolutely. As long as your manual gate is structurally sound, moves smoothly, and has a solid track, we can automate it. If the gate has worn wheels or a damaged track, we can repair those first as part of the installation package.",
    },
    {
      q: "What warranties do you provide on new installations?",
      a: "We provide a standard 12 to 24-month manufacturer warranty on the gate motor unit (depending on the brand) and a 12-month warranty on our workmanship. We pride ourselves on installing systems that last.",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-16">
        {/* Service Hero */}
        <section className="relative bg-navy py-20 md:py-32 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gate-motor-feature.jpg"
              alt="Automatic Gate Motor Installation"
              fill
              className="object-cover opacity-45"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block bg-blue-light/20 border border-blue-light/30 text-blue-pale text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full mb-5 order-1">
                Professional Automation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display order-2 mx-auto md:mx-0">
                We fit gate motors that <span className="text-yellow-400">keep working for years</span>
              </h1>
              <p className="text-lg text-blue-200 mb-0 md:mb-8 max-w-2xl leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
                A good gate motor installation is the difference between a gate that runs quietly for years and one that gives you trouble from the first month. We take the time to fit yours properly, set it up right, and make sure it suits your gate and how often you use it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0 order-3 md:order-4 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-start">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-white text-navy font-bold px-8 py-4 rounded-lg text-base hover:bg-blue-pale hover:text-blue transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Request a Free Quote
                </button>
                <a
                  href="tel:0824981272"
                  className="bg-blue hover:bg-blue-light text-white font-bold px-8 py-4 rounded-lg text-base transition-colors shadow-lg flex justify-center items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: 082 498 1272
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Value Props */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy mb-4 font-display">
                Complete Setup &amp; Access Control
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                We also handle the small things that make a gate easy to live with, like extra remotes for the whole family, a keypad at the gate, and battery backup so your gate still opens when the power is out. With load shedding still part of life here, that backup is one of the first things our customers ask about, and we are happy to set it up for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {installationFeatures.map((feat, index) => (
                <div key={index} className="bg-[#f8f7f4] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center mb-5">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 font-display">{feat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-blue text-sm font-semibold uppercase tracking-widest block mb-2">
                  Premium Brands &amp; Setup
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5 font-display leading-tight">
                  Trusted Brands Fitted Right
                </h2>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  We install gate motors for both sliding and swing gates, and we fit trusted brands like the Centurion D5 Evo, the D10, and FAAC. If you are not sure which motor is right for your gate, we will walk you through it in plain language and help you pick one that matches your gate size and your budget. Every install comes with a warranty, so you are covered well after we leave.
                </p>
                <div className="flex gap-6 items-center">
                  <div className="flex -space-x-3">
                    <span className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-bold border-2 border-[#f8f7f4] text-xs">17+</span>
                    <span className="w-10 h-10 rounded-full bg-blue-light text-white flex items-center justify-center font-bold border-2 border-[#f8f7f4] text-xs">Yrs</span>
                  </div>
                  <p className="text-sm font-semibold text-navy">
                    Serving Alberton & Johannesburg since 2008.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {brands.map((brand, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-[#f8f7f4] rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-base">{brand.name}</h4>
                      <p className="text-gray-400 text-xs mt-0.5">{brand.model}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <span className="text-blue text-sm font-semibold uppercase tracking-widest block mb-2">
                Simple & Efficient
              </span>
              <h2 className="text-3xl font-bold text-navy mb-4 font-display">
                Our Installation Process
              </h2>
              <p className="text-gray-500">
                How we deliver a seamless, hassle-free gate automation setup for your property.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Process line for desktop */}
              <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-blue-pale z-0" />

              {steps.map((step, index) => (
                <div key={index} className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-blue text-white font-bold text-lg flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3 font-display">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-blue text-sm font-semibold uppercase tracking-widest block mb-2">
                Got Questions?
              </span>
              <h2 className="text-3xl font-bold text-navy font-display">
                Installation FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-navy hover:text-blue transition-colors focus:outline-none"
                    >
                      <span className="font-display pr-4 text-sm md:text-base">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-blue-light transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50/50 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-navy to-blue text-white text-center relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Ready to Automate Your Gate?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-base">
              Get a custom, no-obligation quote today. Our team is ready to deliver premium security at value-for-money pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-navy font-bold px-8 py-3.5 rounded-lg text-sm hover:bg-blue-pale hover:text-blue transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
              >
                Request a Callback
              </button>
              <a
                href="https://wa.me/+27824981272"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-lg flex justify-center items-center gap-2"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <Footer />
    </>
  );
}
