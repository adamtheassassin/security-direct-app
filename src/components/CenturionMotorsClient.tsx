"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import AreasServed from "./AreasServed";

const centurionModels = [
  {
    name: "Centurion D3 Smart",
    image: "/images/gate-motors/d3-smart.jpg",
    gateWeight: "Gates up to 300kg",
    speed: "24 metres per minute",
    power: "12V battery backup",
    bestFor: "Small townhouses and light home gates",
    price: "From R6 600 fitted",
    summary: "A reliable and affordable motor for standard residential gates. It gives you fast opening speed, long battery life during power outages, and two Nova remotes.",
  },
  {
    name: "Centurion D5 Evo",
    image: "/images/gate-motors/d5-evo.jpg",
    gateWeight: "Gates up to 500kg",
    speed: "22 metres per minute",
    power: "12V battery backup",
    bestFor: "Standard residential sliding gates",
    price: "From R7 400 fitted",
    summary: "The classic South African gate motor workhorse. Proven for over fifteen years across Alberton and Johannesburg. Easy to maintain with widely available spare parts.",
  },
  {
    name: "Centurion D5 Smart",
    image: "/images/gate-motors/d5-evo-smart.jpg",
    gateWeight: "Gates up to 500kg",
    speed: "36 metres per minute",
    power: "24V twin battery backup",
    bestFor: "Modern family homes and busy driveways",
    price: "From R7 850 fitted",
    popular: true,
    summary: "South Africa's top selling smart gate motor. It opens twice as fast as older motors so you drive straight in off the street. Includes phone app diagnostics and intelligent logging.",
  },
  {
    name: "Centurion D10 Smart",
    image: "/images/gate-motors/d10-smart.jpg",
    gateWeight: "Gates up to 1000kg",
    speed: "23 metres per minute",
    power: "24V heavy duty battery backup",
    bestFor: "Large residential, townhouse complexes, and commercial gates",
    price: "From R11 500 fitted",
    summary: "Built for heavy gates and high daily traffic. The motor remains cool even when opening dozens of times every hour. Perfect for busy entrances.",
  },
  {
    name: "Centurion Vantage Swing Motors",
    image: "/images/gate-motors/vantage.jpg",
    gateWeight: "Up to 4m leaf length",
    speed: "Smooth linear arm drive",
    power: "12V or 24V battery systems",
    bestFor: "Single and double swing driveway gates",
    price: "From R8 900 fitted",
    summary: "Sleek piston arms that push and pull swing gates quietly. They mount directly to your pillars and open inward or outward without shaking the gate leaves.",
  },
];

const smartFeatures = [
  {
    title: "MyCentsys mobile app control",
    desc: "You can manage remotes, adjust gate speed, and see real time battery health right from your smartphone over a secure wireless connection.",
  },
  {
    title: "Rapid driveway entry",
    desc: "The D5 Smart moves gates at up to 36 metres per minute. This reduces the time your car sits waiting on the road outside your house.",
  },
  {
    title: "Extended load shedding runtime",
    desc: "Centurion Smart motors use twin 24V battery setups that draw power efficiently, giving you more opening cycles during stage 4 or stage 6 load shedding.",
  },
  {
    title: "Built-in anti-tamper alarms",
    desc: "If an intruder tries to force open the gate or tamper with the cover, the motor triggers an audible buzzer and can alert your home alarm system.",
  },
];

const upgradeBenefits = [
  {
    title: "Direct fit on existing baseplates",
    desc: "Upgrading from an older D5 Evo to a new D5 Smart uses the exact same baseplate footprint. That means no concrete digging and faster installation.",
  },
  {
    title: "Keep your existing gate rack",
    desc: "If your current gate rack is in good shape, we mount the new motor right onto it, keeping your costs lower.",
  },
  {
    title: "Solid anti-theft protection",
    desc: "Every upgrade can include a heavy steel anti-theft cage and puck lock to protect your new investment from theft.",
  },
];

const brandFaqs = [
  {
    q: "Why is Centurion the most popular gate motor brand in South Africa?",
    a: "Centurion Systems is based right here in South Africa. Their motors are designed specifically for our local conditions, including lightning, power cuts, and heavy daily use. Spare parts are always in stock and easy to find.",
  },
  {
    q: "Can I replace my old Centurion D5 Evo with a D5 Smart?",
    a: "Yes. The D5 Smart sits directly on the same mounting bolts and base plate as the older D5 Evo. We can swap the motor, connect your existing rack, and have you up and running with phone control in about an hour.",
  },
  {
    q: "How many remotes can I program to a Centurion Smart motor?",
    a: "Centurion Smart motors have built-in memory for up to 1500 remote buttons. You can name individual remotes on your phone, delete lost remotes instantly, or set specific time windows for garden services.",
  },
  {
    q: "What happens to my Centurion gate motor during long power outages?",
    a: "The motor runs completely off its internal backup battery. A standard battery gives you roughly 30 to 50 gate openings during a power outage. If your area experiences longer outages, we can fit high capacity batteries or connect a solar charging panel.",
  },
  {
    q: "Do you supply original Centurion spare parts for repairs?",
    a: "Yes. We only use genuine Centurion parts, including original circuit boards, replacement power supplies, gear sets, optical encoders, and Nova remotes.",
  },
];

export default function CenturionMotorsClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Centurion Gate Motors");
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
            alt="Centurion gate motors installed across Alberton and Johannesburg"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/gate-motors" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                &larr; All Gate Motors
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300 text-sm">Centurion</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Centurion Gate Motors Supplied, Installed &amp; Repaired
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              We install and service the complete range of Centurion sliding and swing gate motors across Alberton and Johannesburg. From fast home motors like the D5 Smart to heavy commercial motors like the D10, we get your gate moving smoothly with backup battery power.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => openQuote("Centurion Gate Motor Fitting")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition duration-200 cursor-pointer"
              >
                Get a Centurion Motor Quote
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

      {/* Model Range Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Official Centurion Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Centurion Gate Motor Models We Install &amp; Service
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Every motor below comes with genuine factory parts, steel reinforced rack, backup battery power, and professional installation.
            </p>
          </div>

          <div className="space-y-8">
            {centurionModels.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-2xl border flex flex-col md:flex-row gap-8 items-center ${
                  item.popular ? "border-blue-500 bg-blue-50/20 ring-2 ring-blue-500/20" : "border-slate-200 bg-white"
                }`}
              >
                <div className="w-full md:w-56 h-48 bg-slate-100 rounded-xl flex items-center justify-center p-4 flex-shrink-0 relative">
                  <Image
                    src={item.image}
                    alt={`${item.name} Centurion gate motor`}
                    width={200}
                    height={160}
                    className="object-contain max-h-40"
                  />
                  {item.popular && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{item.name}</h3>
                    <span className="text-lg font-extrabold text-blue-600">{item.price}</span>
                  </div>
                  <p className="text-xs text-blue-700 font-semibold uppercase tracking-wide mb-3">{item.bestFor}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.summary}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-700">
                    <div>
                      <span className="text-slate-400 block">Gate Capacity</span>
                      <strong className="text-slate-900">{item.gateWeight}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Speed</span>
                      <strong className="text-slate-900">{item.speed}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Battery System</span>
                      <strong className="text-slate-900">{item.power}</strong>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto flex-shrink-0 flex flex-col gap-3">
                  <button
                    onClick={() => openQuote(`${item.name} Booking`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition cursor-pointer text-sm whitespace-nowrap text-center"
                  >
                    Book This Motor
                  </button>
                  <Link
                    href="/gate-motor-installation"
                    className="text-center text-xs text-slate-600 hover:text-blue-600 font-medium py-1"
                  >
                    Installation Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Technology Features */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Smart Technology</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Why Centurion Smart Motors Make Daily Life Easier
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The new generation of Centurion Smart motors gives you complete control from your phone, faster gate movement, and smart battery management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrading Older Motors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Easy Upgrades</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Upgrading from an Old Gate Motor to a Centurion Smart
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                If your old gate motor is slow, noisy, or constantly running out of battery during load shedding, you can upgrade to a brand new Centurion D5 Smart without replacing your whole driveway setup.
              </p>

              <div className="space-y-4">
                {upgradeBenefits.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      &check;
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => openQuote("Centurion Upgrade Quote")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition cursor-pointer"
                >
                  Get an Upgrade Quote
                </button>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
              <span className="text-blue-400 font-semibold text-xs uppercase tracking-wider block mb-2">
                Fast Same Day Replacements
              </span>
              <h3 className="text-2xl font-bold mb-4">We Service All Parts of Alberton &amp; Johannesburg</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Our technicians travel with new Centurion motors, mounting brackets, backup batteries, remotes, and safety beams ready in our vehicles.
              </p>
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 mb-6 space-y-2 text-sm text-slate-200">
                <div className="flex justify-between">
                  <span>Standard Installation Time:</span>
                  <span className="font-bold text-blue-300">2 to 3 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Warranty:</span>
                  <span className="font-bold text-blue-300">Full Manufacturer Backed</span>
                </div>
                <div className="flex justify-between">
                  <span>Call Out Response:</span>
                  <span className="font-bold text-blue-300">Same Day Booking</span>
                </div>
              </div>
              <a
                href="tel:0824981272"
                className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition"
              >
                Call for Immediate Service: 082 498 1272
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Helpful Advice</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Centurion Gate Motor Questions &amp; Answers
            </h2>
            <p className="text-slate-600">
              Clear answers to the questions our customers ask most about Centurion motors.
            </p>
          </div>

          <div className="space-y-4">
            {brandFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition cursor-pointer"
                >
                  <span className="text-base md:text-lg">{faq.q}</span>
                  <span className="text-blue-600 text-xl font-bold flex-shrink-0">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
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

      {/* Footer Banner */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fit or Repair Your Centurion Gate Motor?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a fast quote or to book a technician. We come out promptly to help you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openQuote("Centurion Gate Motors Direct")}
              className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition cursor-pointer"
            >
              Request a Free Quote
            </button>
            <a
              href="https://wa.me/27824981272"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition flex items-center gap-2"
            >
              WhatsApp Us Now
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
