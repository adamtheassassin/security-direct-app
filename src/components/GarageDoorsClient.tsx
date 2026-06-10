"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";

export default function GarageDoorsClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const garageFeatures = [
    {
      title: "Garage Door Automation",
      description: "Convert your manual roll-up, sectional, or tip-up garage door into a smooth, motorized system with handy remote control access.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Spring Replacements",
      description: "Broken springs make doors heavy and dangerous. We supply and fit high-tension roll-up and sectional springs on-site.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: "Cable & Pulley Repairs",
      description: "Frayed or snapped cables cause garage doors to jam or hang skew. We replace cables, pulleys, and shafts to restore alignment.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12" />
        </svg>
      ),
    },
    {
      title: "Battery Backups",
      description: "Stay automated during blackouts. We fit high-quality motor systems with reliable backup batteries so your garage door always opens.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "Can you automate my existing manual garage door?",
      a: "Yes. As long as your manual door is structurally sound, balanced, and slides smoothly in its tracks, we can easily install a garage door motor to automate it. We automate roll-up, sectional, and tip-up doors.",
    },
    {
      q: "Why is my garage door motor making a clicking sound but not opening?",
      a: "This is usually a sign of a broken torsion spring, or a motor gear stripped due to lifting a heavy, unbalanced door. Sectional springs lift 90% of the door's weight. When they snap, the motor cannot lift the door on its own. We recommend not running the motor in this state and letting us replace the springs first.",
    },
    {
      q: "Will my garage door motor work during load shedding?",
      a: "Our modern garage door motors feature built-in battery backups or can be upgraded with them. This allows the door to run on battery power for several operations during a blackout. Alternatively, every garage door has a manual override cord that allows you to release the door and lift it by hand.",
    },
    {
      q: "How often should I service my garage door and motor?",
      a: "We recommend a basic service once a year. This involves checking the tension of the springs, adjusting the limits on the motor, re-tensioning hinges and brackets, and lubricating tracks, springs, and bearings to prevent premature wear.",
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
              src="/images/garage-door.jpg"
              alt="Garage Door Automation"
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
                Garage Automations
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display order-2 mx-auto md:mx-0">
                We automate and repair <span className="text-yellow-400">garage doors</span>
              </h1>
              <p className="text-lg text-blue-200 mb-0 md:mb-8 max-w-xl leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
                While we are known for gate motors and electric fencing, we look after the rest of your security too. We install, repair, and automate garage doors of every kind. Whether your garage door is manual and you want it motorized, or your current motor has packed up, we get it opening and closing the way it should.
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

        {/* Garage Door Value Props */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-navy mb-4 font-display">
                Professional Garage Services
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We handle manual door setups, spring repairs, track realignment, and motor installations to keep your garage safe and functional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {garageFeatures.map((feat, index) => (
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

        {/* FAQ Section */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-blue text-sm font-semibold uppercase tracking-widest block mb-2">
                Garage Motors
              </span>
              <h2 className="text-3xl font-bold text-navy font-display">
                Garage Door FAQs
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
              Secure and Automate Your Garage
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-base">
              Call us today for a free on-site survey and quote on garage door motor installations or spring replacements. Fast response across Alberton and Johannesburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0824981272"
                className="bg-white text-navy font-bold px-8 py-3.5 rounded-lg text-sm hover:bg-blue-pale hover:text-blue transition-colors shadow-lg flex justify-center items-center gap-2"
              >
                Call: 082 498 1272
              </a>
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
