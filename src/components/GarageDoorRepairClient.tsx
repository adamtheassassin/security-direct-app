"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import AreasServed from "./AreasServed";

const faults = [
  {
    title: "Motor runs but the door stays put",
    desc: "Usually a snapped spring. The springs carry most of the door's weight, and once one goes the motor cannot lift the door on its own.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Broken or stretched springs",
    desc: "A loud bang from the garage is often a spring letting go. The door turns dead heavy and unsafe to run until the spring is replaced.",
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
    desc: "The door stops short, slams down, or the remote has stopped working. We reset the limits and reprogram or replace the remotes.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const processSteps = [
  { num: "01", title: "We arrive on time", desc: "A confirmed call-out window, not a vague 'sometime today' slot that has you waiting around." },
  { num: "02", title: "We check the whole door", desc: "We test the springs, cables, tracks, rollers, motor, and limits to find what is actually causing the trouble." },
  { num: "03", title: "Clear quote upfront", desc: "You hear exactly what is wrong and what it will cost before we start. No work begins without your go-ahead." },
  { num: "04", title: "Repair on the spot", desc: "We carry spare springs, cables, rollers, batteries, and motor parts for the common brands, so most jobs are sorted the same day." },
  { num: "05", title: "We test the door", desc: "We run the door several times, check the balance and the auto-reverse, and make sure it stops in the right spot." },
  { num: "06", title: "Walkthrough", desc: "We show you what was wrong and what we changed, and flag anything worth keeping an eye on going forward." },
];

const repairReasons = [
  "A snapped spring or a frayed cable",
  "A flat backup battery",
  "Worn rollers or a track knocked out of line",
  "Limits or remotes that need resetting",
];

const replaceReasons = [
  "A motor many years old with parts no longer made",
  "Repeated breakdowns on the same motor",
  "A repair bill creeping up near the price of a new motor",
  "A door panel that is rusted or warped out of shape",
];

const maintenanceTips = [
  { num: "1", title: "Oil the moving parts", desc: "A light coat on the tracks, rollers, springs, and hinges every few months keeps the door running quietly and cuts down on wear." },
  { num: "2", title: "Test the balance", desc: "Pull the manual release and lift the door halfway by hand. If it drops or shoots up, the springs are out and need attention." },
  { num: "3", title: "Listen for new sounds", desc: "Grinding, banging, or a new rattle usually means something mechanical needs a look before it turns into a bigger fault." },
  { num: "4", title: "Check the auto-reverse", desc: "Put something low in the doorway and close the door. It should stop and pull back. If it does not, the safety needs setting." },
  { num: "5", title: "Replace the backup battery on time", desc: "Most last around two to three years. Swap it before it dies during an outage and leaves you stuck on the driveway." },
  { num: "6", title: "Keep the tracks clear", desc: "Grit and stones in the track make the door jam and wear the rollers. A quick brush-out now and then goes a long way." },
];

const whyUs = [
  {
    title: "We arrive when we say we will",
    desc: "A door stuck open or shut is a real problem. We give you a proper time window, not a four-hour wait that swallows your day.",
  },
  {
    title: "A quote before we touch anything",
    desc: "You know the cost upfront. If a motor is past saving, we tell you that before spending your money on a repair that will not last.",
  },
  {
    title: "Common spares in the vehicle",
    desc: "We carry springs, cables, rollers, batteries, and motor parts for the brands found on doors around here, so most repairs happen on the first visit.",
  },
  {
    title: "We work on every brand and door",
    desc: "Sectional, roll-up, or tip-up, and whatever motor is on it, we have seen it. You do not need to track down the original installer.",
  },
];

const faqs = [
  {
    q: "My motor runs but the door will not open. What is wrong?",
    a: "This is almost always a broken spring. The springs carry most of the door's weight, so when one snaps the motor is left trying to lift the full door on its own and cannot manage it. Running the motor like that strips the gears, so it is best to stop and let us replace the spring first.",
  },
  {
    q: "How much does a garage door repair cost?",
    a: "It depends on the fault. A backup battery or a set of rollers sits at the lower end. A pair of springs or a new motor board costs more. A call-out gives you the exact figure before any work starts, and in most cases the call-out fee comes off the repair if you go ahead.",
  },
  {
    q: "How fast can you come out?",
    a: "We aim for a same-day or next-day call-out across Alberton and Johannesburg. A door stuck shut can trap your car inside, so we treat it as urgent and give you a confirmed time window rather than leaving you guessing.",
  },
  {
    q: "Can you repair a door another company installed?",
    a: "Yes. We work on every type of door and the common motor brands found around here, no matter who fitted it. We replace springs and cables, sort out jammed and crooked doors, swap dead batteries, and fix motors and remotes.",
  },
  {
    q: "Why does my door jam or run crooked?",
    a: "It usually comes down to a frayed cable lifting one side unevenly, a bent track, or worn rollers pulling the door off line. We find which one it is, replace the worn parts, and line the door back up so it runs straight again.",
  },
  {
    q: "How do I know when the backup battery needs replacing?",
    a: "If the door will not open during load shedding but runs fine on mains power, the backup battery has had it. They generally last two to three years. Replacing it on time keeps the door working right through an outage.",
  },
  {
    q: "Is my motor worth repairing or should I replace it?",
    a: "A spring, cable, battery, or limit fault on a motor that is otherwise sound is well worth fixing. A motor many years old with parts no longer made, or one breaking down again and again, is usually better replaced. We give you a straight recommendation after we have looked at it.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Alberton, the East Rand, and Johannesburg South. From Brackenhurst and Meyersdal through to Glenvista, Mulbarton, and Germiston, our team is out there every week. Not sure if we reach you? Give us a quick call.",
  },
];

export default function GarageDoorRepairClient() {
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
              src="/images/garage-doors/repair-hero.png"
              alt="Centurion garage door motor installed on a garage ceiling during a repair job"
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
              Garage Door Repair
            </h1>
            <p className="text-lg text-blue-200 mb-0 md:mb-10 max-w-lg leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
              All brands, fast call-outs, and a clear quote before we touch anything. We fix broken springs, frayed cables, jammed doors, and dead motors, and get your garage opening properly again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-0 order-3 md:order-4 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-start">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-navy font-bold px-8 py-4 rounded-lg text-base hover:bg-blue-pale transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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
                { label: "Same-Day Call-Outs", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "All Brands & Doors", icon: "M5 13l4 4L19 7" },
                { label: "Quote Before Work", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { label: "Spares On the Van", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" },
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

        {/* ── How It Works ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">The Process</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">How a Repair Call-Out Works</h2>
              <p className="text-gray-500 text-sm">No surprises, no parts you do not need, and no work started without your say-so.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {processSteps.map((s) => (
                <div key={s.num} className="flex gap-4 items-start bg-[#f8f7f4] rounded-2xl p-5 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue text-white font-black text-sm flex items-center justify-center shrink-0">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1 font-display text-sm">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Repair vs Replace ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
                Repair or Replace
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-4">
                When to Fix It and When to Replace
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Most doors are well worth fixing. A few have a motor so old or a panel so far gone that good money keeps going into something that will keep failing. A call-out tells you which one you are dealing with before you spend a rand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Repair */}
              <div className="bg-white border border-emerald-100/50 border-t-4 border-t-emerald-500 rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-200/20 mb-6">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  A Repair Makes Sense
                </span>
                <h3 className="text-xl font-bold text-navy font-display mb-6">Fixing it is the right call when...</h3>
                <div className="space-y-4">
                  {repairReasons.map((r, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-100/80 last:border-b-0 last:pb-0">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 leading-snug">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Replace */}
              <div className="bg-white border border-amber-100/50 border-t-4 border-t-amber-500 rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-200/20 mb-6">
                  <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.706 9H18.5" />
                  </svg>
                  A New Motor Makes Sense
                </span>
                <h3 className="text-xl font-bold text-navy font-display mb-6">Replacing it is the right call when...</h3>
                <div className="space-y-4">
                  {replaceReasons.map((r, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-100/80 last:border-b-0 last:pb-0">
                      <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.706 9H18.5" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 leading-snug">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-navy to-[#00274f] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue/20 blur-2xl pointer-events-none" />
              <div className="relative z-10 max-w-lg text-left">
                <h4 className="text-lg font-bold font-display text-white mb-2">Not Sure Which Way to Go?</h4>
                <p className="text-blue-200 text-xs md:text-sm leading-relaxed">
                  We come out, check the whole door, and give you a straight answer on whether it is worth fixing or due for a new motor, with the cost laid out before any work starts.
                </p>
              </div>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="relative z-10 bg-white hover:bg-blue-pale text-navy font-bold py-3.5 px-7 rounded-xl text-xs md:text-sm transition-all duration-300 shadow-md whitespace-nowrap cursor-pointer hover:shadow-lg active:scale-95 shrink-0"
              >
                Book a Call-Out
              </button>
            </div>
          </div>
        </section>

        {/* ── Conditions ── */}
        <section className="py-20 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-3">South African Conditions</span>
                <h2 className="text-3xl font-bold font-display mb-5">Why Garage Doors Give Trouble Here</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  A garage door motor in Gauteng works harder than most. A couple of local conditions are behind a good share of the repair calls we get.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  Load shedding runs the backup battery flat and charges it again, day after day. All that cycling wears the battery out far faster than normal use, so one that should last years can give up in months.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  When the power comes back, the spike can hit the motor board. Highveld lightning does the same. Without surge protection in place, that is often what kills the board and leaves the door dead.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { num: "1", title: "Replace the battery on time", desc: "Swap it before it dies during an outage and traps your car in the garage." },
                  { num: "2", title: "Fit surge protection", desc: "A small, cheap step that guards the motor board from the spikes that come with storms and power cuts." },
                  { num: "3", title: "Have the door serviced yearly", desc: "We oil the moving parts, check the springs and balance, and catch small faults before they leave you stuck." },
                ].map((t) => (
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

        {/* ── Maintenance ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Maintenance</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Keep Your Door Running Longer</h2>
              <p className="text-gray-500 text-sm">Six easy habits that add years to the life of your door and motor.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {maintenanceTips.map((t) => (
                <div key={t.num} className="flex gap-4 items-start bg-[#f8f7f4] border border-gray-100 rounded-2xl p-5">
                  <div className="w-9 h-9 rounded-lg bg-navy text-yellow-400 font-bold text-sm flex items-center justify-center shrink-0">
                    {t.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy font-display text-sm mb-1">{t.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Why Us</span>
              <h2 className="text-3xl font-bold text-navy font-display">Why Homeowners Call Us First</h2>
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
              <h2 className="text-3xl font-bold text-navy font-display">Questions About Garage Door Repairs</h2>
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
                { href: "/garage-door-installation", title: "Garage Door Installation", desc: "Past fixing, or want to automate a manual door? We fit new Centurion and ET motors with battery backup." },
                { href: "/gate-motor-repair", title: "Gate Motor Repair", desc: "Gate motor playing up too? We repair all brands across Alberton and Johannesburg, often the same day." },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Garage Door Giving You Trouble?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp and we will confirm a call-out time quickly. We bring the right spares for your door and give you the cost before any work starts.
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
