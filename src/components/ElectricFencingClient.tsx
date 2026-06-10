"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";

export default function ElectricFencingClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const strandOptions = [
    {
      title: "6-Strand Fencing",
      description: "A solid, affordable choice for most residential homes and small business boundaries looking for cost-effective deterrents.",
    },
    {
      title: "8-Strand Fencing",
      description: "Offers extra coverage and higher security for residential and commercial walls, giving you added peace of mind.",
    },
    {
      title: "10-Strand Fencing",
      description: "Designed specifically for industrial sites, warehouses, and factories requiring higher perimeter fencing.",
    },
    {
      title: "12-Strand Fencing",
      description: "Our highest level of protection, custom-fit for secure residential estates and high-risk commercial properties.",
    },
  ];

  const faqs = [
    {
      q: "Do I need a Certificate of Compliance (COC) for my electric fence?",
      a: "Yes. By law in South Africa, all new electric fence installations (or major modifications to existing ones) must have an Electric Fence System Certificate of Compliance (COC). We are registered installers and provide a valid COC with every new installation.",
    },
    {
      q: "Does electric fencing work during load shedding?",
      a: "Yes. All our installations feature an energizer with a built-in backup battery. This keeps the fence powered and pulsing for several hours during blackouts. We also offer heavy-duty backup batteries for extended power outages.",
    },
    {
      q: "What causes an electric fence alarm to keep triggering?",
      a: "False alarms are typically caused by branches or plants touching the wires, loose tensioners, broken insulators causing electricity to arc to the brackets, or a faulty energizer. We offer complete fault-finding and repairs to resolve these issues.",
    },
    {
      q: "Is electric fencing safe for pets and children?",
      a: "The pulse delivered by an electric fence is designed to be a high-voltage, low-amperage shock. It is highly painful and acts as a severe deterrent, but it is non-lethal and safe for children and pets according to international safety standards.",
    },
    {
      q: "Can you repair an old electric fence installed by another company?",
      a: "Absolutely. We repair all types of electric fencing, regardless of who installed it. We replace broken wires, broken insulators, replace worn-out energizers, install backup batteries, and re-tension loose strands.",
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
              src="/images/electric-fence.jpg"
              alt="Electric Fencing Installation"
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
                Perimeter Security
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display order-2 mx-auto md:mx-0">
                We put up electric fencing that <span className="text-yellow-400">keeps people out</span>
              </h1>
              <p className="text-lg text-blue-200 mb-0 md:mb-8 max-w-xl leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
                A strong perimeter is your first line of defence, and electric fencing is one of the best ways to stop someone before they ever reach your home. We install and repair electric fencing for houses, complexes, businesses, and big commercial sites across Johannesburg.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0 order-3 md:order-4 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-start">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-white text-navy font-bold px-8 py-4 rounded-lg text-base hover:bg-blue-pale hover:text-blue transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Get a Free Quote
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

        {/* Fencing Options */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-blue text-sm font-semibold uppercase tracking-widest block mb-2">
                Fencing Solutions
              </span>
              <h2 className="text-3xl font-bold text-navy mb-4 font-display">
                We fit the right fence for the job
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Every property has different security needs and layout constraints. We install SABS compliant fences ranging from 6 to 12 strands to ensure full coverage and maximum protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {strandOptions.map((opt, index) => (
                <div key={index} className="bg-[#f8f7f4] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <span className="text-blue text-2xl font-black block mb-4">
                    {index * 2 + 6} Strands
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2 font-display">{opt.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{opt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance and Detail Section */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue text-sm font-semibold uppercase tracking-widest block mb-2">
                  100% Certified Work
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5 font-display leading-tight">
                  SABS Regulations &amp; Legal Compliance
                </h2>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Every electric fence we install meets strict SABS rules and comes with the legal certificate of compliance (COC) you need. This protects you legally, guarantees that the system is safe, and satisfies home insurance requirements.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-500 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.162 10.206a.75.75 0 01.326.986l-1 2a.75.75 0 11-1.341-.67l1-2a.75.75 0 011.015-.316zm15.676 0a.75.75 0 011.015.316l1 2a.75.75 0 11-1.34-.67l-1-2a.75.75 0 01.325-.986zM3.83 5.378a.75.75 0 011.012-.325l13.5 7.5a.75.75 0 11-.73 1.314l-13.5-7.5a.75.75 0 01-.282-1.012z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-navy">Certified energizers, secure tensioners &amp; warning signs included.</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <span className="text-red-500 text-xs uppercase tracking-widest font-bold block mb-2">
                  Fencing Repairs
                </span>
                <h3 className="text-xl font-bold text-navy mb-4 font-display">
                  Already have a fence that has stopped working?
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  A fence that is not pushing out a charge is just wire on a wall. We repair existing electric fencing too, whether the energizer has failed, a strand has snapped, or the alarm keeps going off for no reason. We will find the fault and get your fence doing its job again.
                </p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-navy hover:bg-blue text-white text-xs font-bold px-5 py-3 rounded-lg transition-colors flex items-center gap-1"
                >
                  Book Fence Repair
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-blue text-sm font-semibold uppercase tracking-widest block mb-2">
                Compliance &amp; Cost
              </span>
              <h2 className="text-3xl font-bold text-navy font-display">
                Fencing FAQs
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
              Protect Your Boundaries Today
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-base">
              Call us for a free quote on electric fencing installations or repairs. Secure your perimeter and protect your property.
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
