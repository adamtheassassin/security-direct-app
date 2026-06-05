"use client";

import Script from "next/script";

export default function Reviews() {
  return (
    <section className="relative z-20 -mt-20 md:-mt-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-3xl pt-6 pb-2 px-6 md:pt-8 md:pb-4 md:px-8 shadow-xl md:shadow-2xl border border-gray-100/80">
        {/* Elfsight Google Reviews Widget Script */}
        <Script 
          src="https://elfsightcdn.com/platform.js" 
          strategy="afterInteractive" 
        />
        
        {/* Elfsight Widget Container */}
        <div 
          className="elfsight-app-c73d2bb1-8cbd-49e3-a0d4-771277ac6173" 
          data-elfsight-app-lazy="true"
        />
      </div>
    </section>
  );
}
