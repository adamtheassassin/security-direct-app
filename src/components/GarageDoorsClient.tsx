"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import AreasServed from "./AreasServed";

const services = [
  {
    title: "Automate a manual door",
    desc: "We fit a motor to your manual door so it opens from the car with a remote. No more climbing out in the rain to lift it by hand.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "New motor installs",
    desc: "Old motor given up? We fit a new Centurion or ET motor matched to the size and weight of your door, set the limits, and program your remotes.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Broken spring replacement",
    desc: "A snapped spring makes the door dead heavy and unsafe to run. We supply and fit the right tension springs for roll-up and sectional doors on site.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Cables, pulleys, and tracks",
    desc: "Frayed cables and bent tracks make the door jam or hang skew. We replace the worn parts and line the door back up so it runs straight.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12" />
      </svg>
    ),
  },
  {
    title: "Backup battery fitted",
    desc: "The door keeps working through load shedding. Every motor we install runs off a battery when the power is down.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Yearly service",
    desc: "We tension the springs, reset the motor limits, tighten the brackets, and oil the moving parts so small problems get caught before they leave you stuck.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const doorTypes = [
  {
    title: "Sectional doors",
    desc: "The panelled door that lifts up and folds flat under the ceiling. We automate and repair these every week, and most homes built in the last twenty years have one.",
    icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
  },
  {
    title: "Roll-up doors",
    desc: "The single sheet that rolls into a drum above the opening. Common on older homes and many double garages. We fit roll-up motors and replace the springs inside the drum.",
    icon: "M4 7h16M4 7a2 2 0 012-2h12a2 2 0 012 2M4 7v0M7 11h10M7 15h10M7 19h10",
  },
  {
    title: "Tip-up doors",
    desc: "The one-piece door that swings out and up as a single panel. Older, but still around on plenty of homes. We can automate a sound one or repair the mechanism.",
    icon: "M4 18h16M6 18l3-9 3 4 3-7 3 12",
  },
];

const motors = [
  {
    name: "Centurion Sectional",
    image: "/images/garage-doors/centurion-sectional.webp",
    rating: "Sectional doors",
    desc: "A strong, quiet motor for sectional doors, with a soft start and stop that is easy on the door. Comes with remotes and a backup battery.",
  },
  {
    name: "Centurion Roll-Up",
    image: "/images/garage-doors/centurion-rollup.webp",
    rating: "Roll-up doors",
    desc: "Made to drive roll-up doors smoothly off the drum. A reliable pick from a brand you find on gates and garages all over the country.",
    popular: true,
  },
  {
    name: "ET DC Blue Sectional",
    image: "/images/garage-doors/et-sectional.jpg",
    rating: "Sectional doors",
    desc: "A popular sectional motor with battery backup built in, so the door keeps running when the power fails. Good value and simple to live with.",
  },
  {
    name: "ET DC Blue Roll-Up",
    image: "/images/garage-doors/et-rollup.webp",
    rating: "Roll-up doors",
    desc: "Drives roll-up doors with the same battery backup built in. A solid choice for an older single or double garage.",
  },
];

const steps = [
  {
    num: "01",
    title: "Free on-site visit",
    desc: "We come out, measure your door, check how it runs, and see what it weighs. Then we tell you what it needs and what it will cost. The visit is free.",
  },
  {
    num: "02",
    title: "A clear, fixed quote",
    desc: "You get the full price in writing. The motor, any parts, the battery, and the labour are all listed. The number you see is the number you pay.",
  },
  {
    num: "03",
    title: "Neat installation",
    desc: "We mount the motor, fit or replace the springs and cables where needed, wire it in, and set the limits so the door stops in the right spot every time.",
  },
  {
    num: "04",
    title: "Test and hand over",
    desc: "We run the door a few times, program your remotes, and show you the manual release. We make sure you are happy with it before we go.",
  },
];

const faults = [
  {
    title: "Motor clicks but the door stays put",
    desc: "Usually a snapped spring. The springs carry most of the door's weight, and once one goes the motor cannot lift the door on its own.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "Broken or stretched springs",
    desc: "A loud bang from the garage is often a spring letting go. The door turns heavy and unsafe to run until it is replaced.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 13c4 0 4 3 8 3s4-3 8-3M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Frayed or snapped cables",
    desc: "The cables lift the door evenly on each side. When one frays or breaks, the door hangs skew and can jam in the track.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12" />
      </svg>
    ),
  },
  {
    title: "Door jams or runs crooked",
    desc: "Bent tracks, worn rollers, or a loose bracket pull the door off line. We straighten it up and swap out the worn parts.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 6l2 14h12l2-14M9 10v6M15 10v6" />
      </svg>
    ),
  },
  {
    title: "Dead backup battery",
    desc: "The door will not open during load shedding. A battery that no longer holds its charge is the usual reason, and it is a quick swap.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Remotes or limits playing up",
    desc: "The door stops short, slams down, or the remote stops working. We reset the limits and reprogram or replace the remotes.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const backupTips = [
  {
    num: "1",
    title: "Backup battery as standard",
    desc: "The door keeps running through load shedding with no extra steps from you.",
  },
  {
    num: "2",
    title: "A manual release on every door",
    desc: "Pull the cord and lift the door by hand if the battery is ever flat.",
  },
  {
    num: "3",
    title: "Surge protection on request",
    desc: "We can guard the motor board against the spike that hits when the power comes back.",
  },
];

const whyUs = [
  {
    title: "We work on every type of door",
    desc: "Sectional, roll-up, or tip-up, we automate and repair all of them. You do not need to hunt for a specialist for your kind of door.",
  },
  {
    title: "One clear price, fitted and done",
    desc: "The quote covers the motor, the parts, the battery, and the labour. Nothing extra appears once the work is under way.",
  },
  {
    title: "New parts carry a 12 month warranty",
    desc: "Every new part we fit is covered for 12 months by the maker, and we back our installation work for 12 months too.",
  },
  {
    title: "We have done this since 2008",
    desc: "Garage doors across Alberton and the East Rand are part of our week. You get people who know how these doors fail and how to keep them running.",
  },
];

const faqs = [
  {
    q: "Can you automate my existing manual garage door?",
    a: "In most cases, yes. As long as the door is in good shape, balanced, and slides smoothly in its tracks, we can fit a motor and automate it. We do this for roll-up, sectional, and tip-up doors. If the springs or rollers need work first, we sort that out as part of the job.",
  },
  {
    q: "My motor clicks but the door will not open. What is wrong?",
    a: "This is almost always a broken spring. The springs carry most of the door's weight, so when one snaps the motor is left trying to lift the full door on its own and cannot manage it. Running the motor like this strips the gears, so it is best to stop and let us replace the spring first.",
  },
  {
    q: "Will my garage door work during load shedding?",
    a: "Yes. Every motor we fit runs on a backup battery, so the door keeps opening and closing through an outage. The motors we use draw very little power, which gives you a good run of trips before the battery needs the mains again. If it ever does go flat, every door has a manual release cord so you can lift it by hand.",
  },
  {
    q: "How often should I service my garage door?",
    a: "Once a year is a good rule. A service covers checking the spring tension, resetting the motor limits, tightening the hinges and brackets, and oiling the tracks, springs, and bearings. It catches the small things before they turn into a door that will not open.",
  },
  {
    q: "What warranty do you give on garage door work?",
    a: "All new materials carry a 12 month manufacturer warranty, and we back our installation work for 12 months as well. Batteries and repair work do not carry a warranty, since a battery's life depends on how hard the power cuts run it, and a repair deals with parts that are already worn.",
  },
  {
    q: "How much does a garage door motor cost?",
    a: "It comes down to the size and weight of your door, whether it is a roll-up or a sectional, and whether you need a fresh motor or a repair. We measure on the free site visit and give you a fixed price before any work starts.",
  },
  {
    q: "Which brands do you fit and repair?",
    a: "We fit Centurion and ET DC Blue motors on new installs, both with battery backup. For repairs we work on all the common garage door motor brands found in this area, so you do not need to track down the original installer.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Alberton, the East Rand, and Johannesburg South. From Brackenhurst and Meyersdal through to Glenvista, Mulbarton, and Germiston, our team is out there every week. Not sure if we reach you? Give us a quick call.",
  },
];

export default function GarageDoorsClient() {
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
              src="/images/garage-door.jpg"
              alt="Automated garage door on a home in Alberton"
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
              Garage Door Automation &amp; Repair
            </h1>
            <p className="text-lg text-blue-200 mb-0 md:mb-10 max-w-lg leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
              We automate manual garage doors and fix motors that have packed up, on sectional, roll-up, and tip-up doors across Alberton and Johannesburg. Every install comes with a backup battery so the door still opens when the power is off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-0 order-3 md:order-4 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-start">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-navy font-bold px-8 py-4 rounded-lg text-base hover:bg-blue-pale transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Free Quote
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
                { label: "All Door Types", icon: "M5 13l4 4L19 7" },
                { label: "Battery Backup Standard", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { label: "Install & Repair", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
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

        {/* ── What We Do ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">What We Do</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Everything Your Garage Door Needs</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                A new motor, a snapped spring, or a door that has started jamming. We handle the lot, and most jobs are sorted in a single visit.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((f) => (
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

        {/* ── Door Types ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Doors We Work On</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">We Automate and Repair Every Kind of Door</h2>
              <p className="text-gray-500 text-sm">Sectional, roll-up, or tip-up. We have the right motor and the right parts for each one.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {doorTypes.map((g) => (
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

        {/* ── Motors We Fit ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
                Motors We Fit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-4">Centurion and ET DC Blue Motors</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We fit motors from two brands we trust on garage doors, both with a backup battery so the door keeps running through load shedding. The right one for you comes down to whether your door is a sectional or a roll-up, and how heavy it is.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {motors.map((m) => (
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
                      alt={`${m.name} garage door motor`}
                      width={220}
                      height={220}
                      className="object-contain max-h-full w-auto"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-blue text-[11px] font-bold uppercase tracking-wider mb-1">{m.rating}</span>
                    <h3 className="font-bold text-navy font-display text-lg mb-2">{m.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{m.desc}</p>
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-blue hover:bg-blue-light text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer w-full"
                    >
                      Get Free Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-xs mt-8 max-w-xl mx-auto leading-relaxed">
              Not sure which motor suits your door? We work that out on the free site visit, measure up, and give you a fixed price before any work starts.
            </p>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">The Process</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">How We Get Your Door Running</h2>
              <p className="text-gray-500 text-sm">Four simple steps, from the first visit to the moment your door opens on its own.</p>
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

        {/* ── Common Faults ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">What We Fix</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Common Garage Door Faults</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                These are the problems we get called out for most often across Alberton and Johannesburg. Most of them we sort out on the same visit.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {faults.map((f) => (
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

        {/* ── Load Shedding / Backup ── */}
        <section className="py-20 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-3">Built for Our Conditions</span>
                <h2 className="text-3xl font-bold font-display mb-5">Your Garage Door Has to Open When the Power Is Off</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  The garage is how most people get in and out of the house, so a dead motor during load shedding turns into a real headache fast. We plan for that on every job.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  Every motor we fit runs on a backup battery, so the door keeps opening and closing through an outage. The motors we use draw very little power, which gives you a good number of trips before the battery needs the mains again.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  If you ever do run flat, every door has a manual release cord. We show you how to use it on handover, so you are never locked out of your own garage.
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
              <h2 className="text-3xl font-bold text-navy font-display">Why People Pick Us for Their Garage Door</h2>
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
              <h2 className="text-3xl font-bold text-navy font-display">Questions About Garage Doors</h2>
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
                { href: "/gate-motor-installation", title: "Gate Motor Installation", desc: "New Centurion motors fitted to your gate, sized right and set up to run from day one." },
                { href: "/electric-fence-installation", title: "Electric Fencing", desc: "Secure the perimeter with a live fence on your boundary wall, installed with a SABS certificate." },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Sort Your Garage Door?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp and we will set up a free site visit. You get the right motor for your door and a fixed price before any work starts.
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
