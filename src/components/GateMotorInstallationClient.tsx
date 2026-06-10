"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import AreasServed from "./AreasServed";

const included = [
  {
    title: "A motor sized to your gate",
    desc: "We weigh up your gate first and pick a Centurion that pulls it with room to spare. A motor that never strains is a motor that lasts.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Backup battery fitted as standard",
    desc: "Your gate still opens when the power is out. Every install comes with a backup battery, so load shedding never leaves you locked in or stuck on the driveway.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Rack, base plate, and two remotes",
    desc: "The standard install includes a 4 metre rack, a solid base plate, and two remotes set up and ready. Everything you need to use the gate from the first day.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Anti-theft bracket option",
    desc: "Gate motor theft is a real problem here. We fit a heavy steel bracket and lock around the motor so yours stays exactly where you put it.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Safety beams to stop accidents",
    desc: "Infrared beams sit across the gate opening and catch a car or a person, stopping the gate from closing on them. Worth fitting if you have kids or pets at home.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Keypad and intercom add-ons",
    desc: "Want to open the gate with a code, or see who is at the gate before you let them in? We can add a keypad or a video intercom while we are there.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const gateTypes = [
  {
    title: "Sliding gates",
    desc: "Most homes here run a sliding gate. We fit the motor, lay the rack along the gate, and set the travel so it opens far enough and stops in the right spot on every cycle.",
    icon: "M4 6h16M4 12h16M4 18h7",
  },
  {
    title: "Swing gates",
    desc: "Single or double swing gates get their own ram-style motors. We mount them level, set the open and close angles, and make sure both leaves move together without grinding.",
    icon: "M8 7l4-4 4 4m0 10l-4 4-4-4",
  },
  {
    title: "Commercial and estate gates",
    desc: "Gates at complexes, businesses, and estates open far more often. We fit heavy-duty motors built for that daily traffic and wire them into your access control.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5",
  },
];

const range = [
  {
    name: "Centurion D3 Smart",
    image: "/images/gate-motors/d3-smart.jpg",
    rating: "Gates under 300kg",
    price: "From R6 600",
    note: "installed",
    desc: "A solid, good-value choice for a normal home gate. You get the 4m rack, base plate, and two remotes, all fitted and tested.",
  },
  {
    name: "Centurion D5 Evo Smart",
    image: "/images/gate-motors/d5-evo-smart.jpg",
    rating: "Gates under 500kg",
    price: "From R7 850",
    note: "installed",
    desc: "Our most popular home motor. It runs quiet and quick, and it links up easily with an intercom or CCTV later on.",
    popular: true,
  },
  {
    name: "Centurion D6 Smart",
    image: "/images/gate-motors/d6-smart.jpg",
    rating: "Gates under 600kg",
    price: "From R8 850",
    note: "installed",
    desc: "Built for busy gates at complexes and multi-unit stands where the gate opens all day. It handles the extra traffic without trouble.",
  },
  {
    name: "Centurion D10 Smart",
    image: "/images/gate-motors/d10-smart.jpg",
    rating: "Gates under 1000kg",
    price: "From R14 850",
    note: "installed",
    desc: "A heavy-duty motor for long, heavy gates. Strong enough for large homes and commercial entrances that get plenty of use.",
  },
  {
    name: "Centurion D20 Smart",
    image: "/images/gate-motors/d20-smart.jpg",
    rating: "Heavy industrial gates",
    price: "From R15 800",
    note: "installed",
    desc: "The workhorse of the range. Made for the biggest gates on industrial sites that open and close all day, every day.",
  },
  {
    name: "Anti-Theft Bracket",
    image: "/images/gate-motors/theft-bracket.jpg",
    rating: "Add-on for any motor",
    price: "From R1 100",
    note: "installed",
    desc: "A heavy steel cage and lock around the motor. With gate motor theft on the rise, this is one of the cheapest ways to protect your new setup.",
  },
];

const steps = [
  {
    num: "01",
    title: "Free on-site visit",
    desc: "We come out, look at your gate, check how it runs, and measure up. Then we tell you which motor suits it and what the job will cost. The visit costs you nothing.",
  },
  {
    num: "02",
    title: "A clear, fixed quote",
    desc: "You get the full price in writing. The motor, the rack, the battery, the remotes, and the labour are all listed. The number you see is the number you pay.",
  },
  {
    num: "03",
    title: "Neat installation",
    desc: "Our team sets the foundation, fits the rack, wires it in, and mounts the motor with an anti-theft bracket. We keep the work tidy and stay out of your way.",
  },
  {
    num: "04",
    title: "Setup and handover",
    desc: "We program your remotes, line up the safety beams, and run the gate a few times to be sure. Then we show you how it all works, including the manual release.",
  },
];

const backupTips = [
  {
    num: "1",
    title: "Backup battery as standard",
    desc: "You never get stuck at the gate. It runs off its own battery whenever Eskom is off.",
  },
  {
    num: "2",
    title: "Surge protection on the mains",
    desc: "We guard the control board against the spikes that hit when the power comes back on.",
  },
  {
    num: "3",
    title: "Low-draw Smart motors",
    desc: "The Centurion Smart range is gentle on the battery, so it lasts longer between charges.",
  },
];

const whyUs = [
  {
    title: "We size the motor right the first time",
    desc: "A motor that is too small burns out early. We weigh your gate properly and fit one that opens it with room to spare.",
  },
  {
    title: "One clear price, fitted and done",
    desc: "The quote covers the motor, the rack, the battery, the remotes, and the labour. No surprise extras once the work has started.",
  },
  {
    title: "We have fitted these since 2008",
    desc: "Centurion gates across Alberton and the East Rand are what we do all day. You get a team that has seen every gate and every setup.",
  },
  {
    title: "We set it up and show you everything",
    desc: "Before we leave, your remotes work, the safety beams are lined up, and you know how to open the gate by hand if you ever need to.",
  },
];

const faqs = [
  {
    q: "How much does it cost to install a gate motor in Alberton?",
    a: "A standard Centurion install starts at R6 600 for the D3 Smart on a normal home gate. The D5 Evo Smart, our most popular motor, starts at R7 850. Bigger and heavier gates need a stronger motor, so the price moves up from there. Every quote is fixed and includes the 4m rack, two remotes, the base plate, and the labour.",
  },
  {
    q: "Which Centurion motor is right for my gate?",
    a: "It comes down to gate weight. Under 300kg, the D3 Smart is plenty. Up to 500kg, most homes go with the D5 Evo Smart. Complexes and very long gates need the D6, D10, or D20. We weigh it up on the free site visit and tell you which one fits.",
  },
  {
    q: "Will the gate still open during load shedding?",
    a: "Yes. Every install includes a backup battery, so the motor runs off battery when the power is out. The Smart range uses very little power, which means you get plenty of open and close cycles before it needs the mains again.",
  },
  {
    q: "Can you automate my existing manual gate?",
    a: "In most cases, yes. As long as the gate rolls or swings smoothly and the track is sound, we can fit a motor to it. If the wheels or track need work first, we can sort that out as part of the install.",
  },
  {
    q: "How long does an installation take?",
    a: "A straightforward install on a gate that already moves well takes about two to four hours. That covers mounting the motor, fitting the rack, wiring the power, programming the remotes, and setting up the safety beams.",
  },
  {
    q: "Do you fit the anti-theft bracket?",
    a: "Yes, and we recommend it. Gate motor theft is common in the area, so for around R1 100 we fit a heavy steel bracket and lock around the motor that makes it far harder to grab.",
  },
  {
    q: "What warranty do I get on a new installation?",
    a: "Every install carries a workmanship warranty from us, and the motor itself carries the manufacturer's warranty on the unit. If anything plays up, you call us and we come back to sort it out.",
  },
  {
    q: "Which areas do you install in?",
    a: "We cover Alberton, the East Rand, and Johannesburg South. From Brackenhurst and Meyersdal through to Glenvista, Mulbarton, and Germiston, the install team is out there every week. Not sure if we reach you? Give us a quick call.",
  },
];

export default function GateMotorInstallationClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <>
      <Header />

      <main className="flex-grow pt-16">

        {/* ── Hero ── */}
        <section className="relative bg-navy py-20 md:py-32 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gate-motor-feature.jpg"
              alt="New Centurion gate motor installed on a sliding gate in Alberton"
              fill
              className="object-cover opacity-45"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block bg-blue/30 border border-blue/40 text-blue-200 text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-6 order-1">
              Alberton &amp; Johannesburg
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display max-w-2xl order-2 mx-auto md:mx-0">
              Gate Motor Installation
            </h1>
            <p className="text-lg text-blue-200 mb-0 md:mb-10 max-w-lg leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
              New Centurion motors fitted to your gate, sized right, set up properly, and running from day one. Prices from R6 600 installed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-0 order-3 md:order-4 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-start">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-navy font-bold px-8 py-4 rounded-lg text-base hover:bg-blue-pale transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Call 082 498 1272
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <div className="bg-blue py-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Free Site Assessment", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { label: "From R6 600 Installed", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
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

        {/* ── What's Included ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">What You Get</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">What Goes Into a Proper Install</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                A good install is the difference between a gate that runs quietly for years and one that gives trouble from the first month. Here is what we fit and set up on every job.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map((f) => (
                <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-blue-pale flex items-center justify-center mb-4 text-blue">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-navy mb-2 font-display">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gate Types ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Gates We Automate</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">We Fit Motors on Every Type of Gate</h2>
              <p className="text-gray-500 text-sm">Sliding, swing, or a big gate at a complex or business. We have the right motor for each one.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gateTypes.map((g) => (
                <div key={g.title} className="bg-[#f8f7f4] border border-gray-100 rounded-2xl p-7">
                  <div className="w-12 h-12 rounded-xl bg-blue text-white flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={g.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy mb-2 font-display">{g.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Range & Pricing ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
                Motors &amp; Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-4">The Centurion Smart Range</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We fit the full Centurion Smart line, from a small home gate to a heavy industrial one. Every price below covers the motor, a 4m rack, a base plate, two remotes, and the install. The right one for you comes down to how heavy your gate is.
              </p>
            </div>

            {/* Range banner */}
            <div className="relative w-full rounded-3xl overflow-hidden mb-12 shadow-sm border border-gray-100">
              <Image
                src="/images/gate-motors/install-hero.jpg"
                alt="Centurion D3, D5 Evo and D6 Smart gate motors for residential and commercial gates"
                width={1127}
                height={376}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {range.map((m) => (
                <div
                  key={m.name}
                  className={`relative bg-white rounded-3xl border overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 ${
                    m.popular ? "border-blue ring-2 ring-blue/15" : "border-gray-100"
                  }`}
                >
                  {m.popular && (
                    <span className="absolute top-4 right-4 z-10 bg-blue text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-6 border-b border-gray-50">
                    <Image
                      src={m.image}
                      alt={`${m.name} gate motor`}
                      width={220}
                      height={220}
                      className="object-contain max-h-full w-auto"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-blue text-[11px] font-bold uppercase tracking-wider mb-1">{m.rating}</span>
                    <h3 className="font-bold text-navy font-display text-lg mb-2">{m.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{m.desc}</p>
                    <div className="flex items-end justify-between border-t border-gray-100 pt-4">
                      <div>
                        <span className="block text-2xl font-bold text-navy font-display leading-none">{m.price}</span>
                        <span className="text-gray-400 text-xs">{m.note}</span>
                      </div>
                      <button
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="bg-blue hover:bg-blue-light text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer shrink-0"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-xs mt-8 max-w-xl mx-auto leading-relaxed">
              Prices are a starting point for a standard install. The final figure depends on your gate, the cabling run, and any extras like a keypad or intercom. You get the exact number on the free site visit, with nothing owed until you say go ahead.
            </p>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">The Process</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">How We Get Your Gate Running</h2>
              <p className="text-gray-500 text-sm">Four simple steps, from the first visit to the moment your gate is running on its own.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-blue-pale z-0" />
              {steps.map((s) => (
                <div key={s.num} className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-blue text-white font-bold text-lg flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3 font-display">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Load Shedding / Backup ── */}
        <section className="py-20 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-3">Built for Our Conditions</span>
                <h2 className="text-3xl font-bold font-display mb-5">Your New Gate Has to Cope With Load Shedding</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  A gate motor in Gauteng lives a hard life. The power comes and goes all day, and that is often the exact moment you need the gate to open. We plan for that on every single install.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  Every motor we fit gets a backup battery, so the gate keeps working right through an outage. The Centurion Smart range draws very little power, which gives you a good run of open and close cycles on battery alone.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  We also fit surge protection on the supply. When the power snaps back on, that spike can kill an unprotected control board. A small bit of protection up front saves you a call-out down the line.
                </p>
              </div>

              <div className="space-y-4">
                {backupTips.map((t) => (
                  <div key={t.num} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="w-9 h-9 rounded-lg bg-blue text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {t.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{t.title}</h4>
                      <p className="text-blue-300 text-xs leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Why Us</span>
              <h2 className="text-3xl font-bold text-navy font-display">Why People Pick Us to Fit Their Gate</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyUs.map((w, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="text-blue font-black text-3xl mb-4 font-display">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-bold text-navy mb-2 font-display text-sm">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">FAQ</span>
              <h2 className="text-3xl font-bold text-navy font-display">Questions About a New Install</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
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
                    <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Services ── */}
        <section className="py-16 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Also Available</span>
              <h2 className="text-2xl font-bold text-navy font-display mb-2">Other Work We Can Do at the Same Time</h2>
              <p className="text-gray-500 text-sm">Plenty of our customers sort these out while we are already on site.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {[
                { href: "/gate-motor-repair", title: "Gate Motor Repair", desc: "Already have a motor that is playing up? We repair all brands across Alberton and Johannesburg, often the same day." },
                { href: "/electric-fencing", title: "Electric Fencing", desc: "Pair your new gate with a secure perimeter. Installation and repairs for homes across the area." },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-blue hover:shadow-sm transition-all"
                >
                  <div>
                    <h3 className="font-bold text-navy font-display text-sm mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Areas ── */}
        <AreasServed mode="installation" />

        {/* ── Final CTA ── */}
        <section className="py-16 bg-gradient-to-r from-navy to-blue text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Automate Your Gate?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp and we will set up a free site visit. You get the right motor for your gate and a fixed price before any work starts.
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
                href="https://wa.me/+27824981272"
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

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <Footer />
    </>
  );
}
