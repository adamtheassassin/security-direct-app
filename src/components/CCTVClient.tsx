"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";

export default function CCTVClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const cctvFeatures = [
    {
      title: "Watch from Your Phone",
      description: "Check in on your property from anywhere in the world. Access live video streams and playback recordings directly from your mobile device.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "AHD & IP Cameras",
      description: "We install both cost-effective high-definition Analog (AHD) cameras and ultra-sharp digital Network (IP) systems for crystal clear detail.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Night Vision Enabled",
      description: "Day or night, you are covered. Automatic infrared smart night vision ensures clear surveillance even in pitch-black conditions.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      title: "Repairs & Diagnostics",
      description: "If your cameras have gone blank, stopped recording, or suffered lightning damage, we troubleshoot cables, power supplies, and DVR/NVR units.",
      icon: (
        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "Do I need internet at home for a CCTV camera system?",
      a: "No. The system will record perfectly fine to the hard drive on your DVR or NVR without internet. However, if you want to watch the live cameras or play back recordings on your mobile phone when you are away from home, you will need a stable internet connection (like Fibre or LTE WiFi) for the DVR/NVR to connect to.",
    },
    {
      q: "What is the difference between AHD and IP cameras?",
      a: "AHD (Analog High Definition) uses coaxial cables and is very cost-effective, running back to a DVR. IP (Internet Protocol) cameras are digital, using network cables to run back to an NVR. IP systems offer higher resolutions, better detail zoom, and smart AI features (like human or vehicle detection), but are slightly more expensive.",
    },
    {
      q: "How many days of video can the system save before overwriting?",
      a: "This depends entirely on the size of the hard drive installed and the number of cameras. Typically, our standard systems are configured to save between 2 to 4 weeks of continuous or motion-triggered video. Once the hard drive is full, it automatically overwrites the oldest footage.",
    },
    {
      q: "Will my cameras work during load shedding?",
      a: "By default, CCTV systems run on mains power and will turn off during load shedding. However, we can easily install a CCTV battery backup power supply (UPS) that keeps the DVR/NVR and all cameras powered up and recording straight through a 2 to 4-hour blackout.",
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
              src="/images/gallery-1.png"
              alt="CCTV Security System"
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
                Surveillance Systems
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display order-2 mx-auto md:mx-0">
                We install and repair <span className="text-yellow-400">CCTV cameras</span>
              </h1>
              <p className="text-lg text-blue-200 mb-0 md:mb-8 max-w-xl leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
                While we are known for gate motors and electric fencing, we look after the rest of your security too. We install and repair AHD and IP CCTV cameras so you can check on your home from your phone, day or night, even when you are away. Seeing what is happening at your gate or front door is a real comfort, and we make it simple to set up.
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

        {/* CCTV Value Props */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-navy mb-4 font-display">
                Professional Camera Installation
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Keep an eye on what matters most with high-definition security camera systems tailored for your home or business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cctvFeatures.map((feat, index) => (
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
                Camera Systems
              </span>
              <h2 className="text-3xl font-bold text-navy font-display">
                CCTV FAQs
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
              Get an Eye on Your Property
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-base">
              Call us today for a free on-site survey and quotation. Professional, reliable camera solutions at value-for-money prices.
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
