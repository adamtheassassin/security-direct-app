"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

export default function ContactSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details & Business Hours */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mb-4 leading-tight">
              Get in Touch with <span className="text-blue">Security Direct</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Whether you need an urgent gate motor repair, a brand new electric fence installation, or just have a question, our team is ready to help. Reach out via phone, WhatsApp, email, or request a free quote below.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Address Card */}
              <a
                href="https://www.google.com/maps?q=33+Waboom+St,+Alberton,+1449"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-[#f8f7f4] hover:border-blue/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">Visit Us</span>
                  <span className="font-bold text-navy text-base">33 Waboom St, Alberton, Gauteng, 1449</span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:0824981272"
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-[#f8f7f4] hover:border-blue/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">Call Us Direct</span>
                  <span className="font-bold text-navy text-base">082 498 1272</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/+27824981272"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-[#f8f7f4] hover:border-green-600/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">WhatsApp Us Now</span>
                  <span className="font-bold text-navy text-base">Chat on WhatsApp</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:securitydirect2@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-[#f8f7f4] hover:border-blue/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">Email Us</span>
                  <span className="font-bold text-navy text-base">securitydirect2@gmail.com</span>
                </div>
              </a>
            </div>

            {/* Operating Hours & Action */}
            <div className="bg-[#f8f7f4] border border-gray-100 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-navy font-display text-sm mb-3">Hours of Operation</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-navy">07:00 - 17:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span>Saturday</span>
                  <span className="font-semibold text-navy">08:00 - 13:00</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Sunday &amp; Public Holidays</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full bg-blue hover:bg-blue-light text-white font-bold py-4 px-6 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Request a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[400px] sm:h-[500px] lg:h-[580px] relative">
              <iframe
                title="Security Direct Google Business Profile Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.208329901349!2d28.08473147625867!3d-26.319752768691615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9504e0223defc3%3A0xe5abc6e2fb2ad3f4!2sSecurity%20direct%20-%20Gate%20motors%20and%20electric%20fence%20specialists%20est%202008!5e0!3m2!1sen!2sza!4v1781355977408!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-400 text-xs italic text-center mt-4">
              Security Direct — Gate motors and electric fence specialists, est 2008. Located in Alberton, Gauteng.
            </p>
          </div>

        </div>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </section>
  );
}
