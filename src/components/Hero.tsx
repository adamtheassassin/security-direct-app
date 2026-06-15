"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

export default function Hero() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,18,36,0.96) 0%, rgba(0,29,59,0.90) 50%, rgba(0,10,24,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pt-36 md:pt-48 pb-36 md:pb-48 flex flex-col items-center">

        <h1
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-white order-1"
        >
          Gate Motor Repair, Electric Fencing &amp; Garage Door Repair
          <span className="text-yellow-400 font-bold block mt-1">in Alberton &amp; Johannesburg</span>
        </h1>

        <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-0 md:mb-8 leading-relaxed order-3 md:order-2">
          When your gate stops opening or you want your home better protected, you want someone reliable who actually shows up. We install and repair gate motors, put up electric fencing, fit CCTV, and sort out garage doors across Alberton and the whole of Johannesburg. We have been doing this since 2008, so you are dealing with people who have seen just about every gate and fence problem there is.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-0 order-2 md:order-3 w-full sm:w-auto items-center">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-lg text-base hover:bg-blue-pale hover:text-blue transition-colors shadow-xl cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Get Free Quote
          </button>
          <a
            href="https://wa.me/+27824981272"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-base transition-colors shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Now
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-white/20 pt-8 order-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">17+ years</div>
            <div className="text-blue-200 text-xs mt-1 uppercase tracking-wide">doing this</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">Thousands</div>
            <div className="text-blue-200 text-xs mt-1 uppercase tracking-wide">of installs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">SABS</div>
            <div className="text-blue-200 text-xs mt-1 uppercase tracking-wide">certified</div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

      {/* Scroll indicator */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
