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
    title: "A panel and keypad that suit your home",
    desc: "We fit a control panel and a keypad by the door that are simple to arm and disarm. The setup is matched to the size of your home, so every room you care about is covered.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Motion sensors inside",
    desc: "Sensors in the main rooms and passages pick up movement the second someone is inside who should not be. We place them to see the whole room without missing a corner.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Outdoor beams that warn you early",
    desc: "Beams across the yard and along the perimeter catch movement outside before anyone reaches the house. You get a warning while they are still on the lawn, not once they are at the door.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
  },
  {
    title: "Panic buttons for an emergency",
    desc: "A panic button by the bed or on a remote sends for help straight away. One press and the signal goes out, even if you cannot get to a phone.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "Linked to your armed response",
    desc: "We wire the alarm to signal your armed response company the second it goes off. Help is on the way while the siren is still sounding, whether you are home or not.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 010-7.778m7.778 0a5.5 5.5 0 010 7.778M5.282 19.232a9.5 9.5 0 010-13.436m13.436 0a9.5 9.5 0 010 13.436M12 12h.01" />
      </svg>
    ),
  },
  {
    title: "Backup battery as standard",
    desc: "The alarm stays armed when the power is off. Every install includes a battery, so load shedding never leaves your home sitting there unprotected.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const propertyTypes = [
  {
    title: "Homes",
    desc: "Full cover for a normal house: beams across the yard, sensors through the rooms, a panic button by the bed, and the whole lot linked to armed response.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Estates and complexes",
    desc: "Alarms for units and shared spaces, set up so each home arms and disarms on its own while the common areas stay covered.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5",
  },
  {
    title: "Business and shops",
    desc: "Cover for offices, shops, and yards after hours, with beams on the perimeter and the alarm wired to your security company.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

const steps = [
  {
    num: "01",
    title: "Free on-site visit",
    desc: "We come out, walk the house, and work out where the sensors and beams need to go to cover your doors, rooms, and yard. Then we tell you what it will cost. The visit is free.",
  },
  {
    num: "02",
    title: "A clear, fixed quote",
    desc: "You get the full price in writing. The panel, the sensors, the beams, the panic buttons, the battery, and the labour are all listed. The number you see is the number you pay.",
  },
  {
    num: "03",
    title: "Neat installation",
    desc: "We mount the panel and keypad, place the sensors and beams, run the wiring out of sight, and set up the zones so each part of the house reports on its own.",
  },
  {
    num: "04",
    title: "Setup and handover",
    desc: "We program your codes, link the alarm to your armed response company, test every zone, and show you how to arm it for the night and when you leave.",
  },
];

const responseTips = [
  {
    num: "1",
    title: "Instant signal to armed response",
    desc: "The moment a zone trips, your security company knows about it, day or night.",
  },
  {
    num: "2",
    title: "Panic buttons by the bed and on a remote",
    desc: "Call for help with one press, even if you cannot get to a phone.",
  },
  {
    num: "3",
    title: "Armed right through load shedding",
    desc: "The backup battery keeps the alarm live when the power drops, so there is no quiet window.",
  },
];

const whyUs = [
  {
    title: "We plan the cover around your home",
    desc: "We walk the house first and place the sensors and beams where they actually catch someone, so you are not paying for a sensor staring at a wall.",
  },
  {
    title: "One clear price, fitted and set up",
    desc: "The quote covers the panel, the sensors, the beams, the battery, and the labour. Nothing extra turns up once we have started.",
  },
  {
    title: "Linked up and tested on the day",
    desc: "Before we leave, the alarm is talking to your armed response company and every zone has been checked, so you know the whole thing works.",
  },
  {
    title: "We have done this since 2008",
    desc: "Homes and businesses across Alberton and the East Rand trust us with their security. You get people who have wired up every kind of property.",
  },
];

const faqs = [
  {
    q: "Will my alarm work during load shedding?",
    a: "Yes. Every alarm we fit runs on a backup battery, so the panel stays armed when the power is off. We size the battery to carry the alarm through a normal load shedding slot, and the signal to your armed response company keeps working right through it.",
  },
  {
    q: "Can you link the alarm to my armed response company?",
    a: "Yes. We wire the alarm to signal whichever armed response company you use, so a trip or a panic press sends a car on its way while the siren is still going. If you are not signed up with one yet, we can point you to the companies that cover your area.",
  },
  {
    q: "Do I need beams outside as well as sensors inside?",
    a: "It is worth it. Outdoor beams catch movement in the yard before anyone reaches the house, which gives you a warning while there is still time to react. Indoor sensors are the second layer that covers the rooms if someone does get inside. Most homes we fit use both.",
  },
  {
    q: "Can you add to my existing alarm?",
    a: "In most cases, yes. If your panel is sound, we can add extra sensors, outdoor beams, or panic buttons, and link it up to armed response. We check the panel on the site visit and tell you whether it is worth building on or starting fresh.",
  },
  {
    q: "Wireless or wired, which is better?",
    a: "Both work well. Wired is solid and steady for a new build or a home being renovated. Wireless is quicker to fit and tidier in a home that is already finished, since there is far less cabling. We look at your home and advise which suits it on the visit.",
  },
  {
    q: "What warranty do you give on a new alarm?",
    a: "All new materials carry a 12 month manufacturer warranty, and we back our installation work for 12 months as well. The backup battery is not covered by a warranty, since its life depends on how hard the power cuts run it.",
  },
  {
    q: "How much does an alarm system cost?",
    a: "It comes down to the size of your home and how many sensors, beams, and panic buttons you need. A small flat costs a lot less than a big house with a yard to cover. We work it out on the free site visit and give you a fixed price before any work starts.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Alberton, the East Rand, and Johannesburg South. From Brackenhurst and Meyersdal through to Glenvista, Mulbarton, and Germiston, our team is out there every week. Not sure if we reach you? Give us a quick call.",
  },
];

export default function AlarmInstallationClient() {
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
              src="/images/alarms/installation-hero.png"
              alt="Professional Ajax alarm system keypad installed on a home wall"
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
              Alarm System Installation
            </h1>
            <p className="text-lg text-blue-200 mb-0 md:mb-10 max-w-lg leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
              We fit alarm systems for homes, complexes, and business sites across Alberton and Johannesburg. Indoor sensors, outdoor beams, and panic buttons, all wired to your armed response and armed right through load shedding.
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
                { label: "Indoor & Outdoor Cover", icon: "M3 12l2-2 7-7 7 7 2 2M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" },
                { label: "Armed Response Ready", icon: "M8.111 16.404a5.5 5.5 0 010-7.778m7.778 0a5.5 5.5 0 010 7.778M12 12h.01" },
                { label: "Battery Backup Standard", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
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
              <h2 className="text-3xl font-bold text-navy font-display mb-3">What Goes Into a Proper Alarm</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                A good alarm catches someone early and gets help moving fast. Here is what we fit and set up on every install.
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

        {/* ── Where We Fit Alarms ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Where We Work</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Alarms for Every Kind of Property</h2>
              <p className="text-gray-500 text-sm">A house, a complex, or a business. We plan the cover around how the place is used.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {propertyTypes.map((g) => (
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

        {/* ── Process ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">The Process</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">How We Get Your Alarm Up</h2>
              <p className="text-gray-500 text-sm">Four simple steps, from the first visit to the moment your home is armed and linked up.</p>
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

        {/* ── Armed Response ── */}
        <section className="py-20 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-3">When It Counts</span>
                <h2 className="text-3xl font-bold font-display mb-5">What Happens the Moment Your Alarm Goes Off</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  An alarm that only makes a noise is easy to walk past. We set yours up to do the one thing that matters, which is get help moving the second something is wrong.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  The panel sends a signal straight to your armed response company the instant a zone is tripped or a panic button is pressed. A car is on its way while the siren is still going.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  It keeps working when the power is down too. The backup battery holds the alarm armed through load shedding, so there is no quiet window where the house sits open.
                </p>
              </div>

              <div className="space-y-4">
                {responseTips.map((t) => (
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
              <h2 className="text-3xl font-bold text-navy font-display">Why People Pick Us for a New Alarm</h2>
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
              <h2 className="text-3xl font-bold text-navy font-display">Questions About a New Alarm</h2>
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
              <p className="text-gray-500 text-sm">A lot of our customers sort the whole property out in one go.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {[
                { href: "/alarm-system-repair", title: "Alarm System Repair", desc: "Already have an alarm that is acting up or going off for nothing? We fix all brands across the area." },
                { href: "/cctv", title: "CCTV Cameras", desc: "Pair your alarm with cameras so you can see what set it off, day or night." },
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
        <AreasServed mode="general" />

        {/* ── Final CTA ── */}
        <section className="py-16 bg-gradient-to-r from-navy to-blue text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Secure Your Home?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp and we will set up a free site visit. You get the right cover for your home and a fixed price before any work starts.
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
