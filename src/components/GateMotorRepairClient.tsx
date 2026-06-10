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
    title: "Dead Battery",
    desc: "The most common call-out after load shedding. Frequent outage cycles drain batteries far faster than normal use.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Burned Control Board",
    desc: "Power surges when Eskom restores electricity hit the board directly. One of the most common reasons motors fail completely.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Worn Drive Gears",
    desc: "Years of daily cycling wear down the drive gear and rack. The gate slows down, starts slipping, then stops short.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Limit Switch Drift",
    desc: "These switches tell the motor where to stop. When they drift, the gate stops short or slams the end stops on every cycle.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Obstruction Sensor Faults",
    desc: "When the sensor drifts or takes a surge hit, the gate reverses for no reason. It reads a blockage that is not there.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Water Ingress",
    desc: "Older underground swing gate mechanisms in Alberton properties suffer from this. Water gets into a worn housing and corrodes the internals.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const processSteps = [
  { num: "01", title: "We arrive on time", desc: "A confirmed call-out window, not a vague 'sometime today' slot." },
  { num: "02", title: "Full diagnostic first", desc: "We check the battery, board, gears, limits, and motor before touching anything." },
  { num: "03", title: "Clear quote upfront", desc: "You hear exactly what is wrong and what it will cost before any work begins." },
  { num: "04", title: "Repair on the spot", desc: "We carry spares for CENTURION, ET Systems, BFT and Nice. Most faults are sorted same day." },
  { num: "05", title: "Tested before we leave", desc: "We cycle the gate multiple times to confirm everything is running correctly." },
  { num: "06", title: "Walkthrough with you", desc: "We explain what was wrong, what was replaced, and flag anything worth watching going forward." },
];

const repairReasons = [
  "Motor is under 5 years old",
  "Fault is a battery, board, or gear issue",
  "First or second time it has been looked at",
  "Repair cost is well under half the replacement cost",
];

const replaceReasons = [
  "Motor is 8 years old or more",
  "Two or more repairs in the past 18 months",
  "Direct lightning strike or severe water damage",
  "Repair cost is approaching the replacement cost",
];

const loadshedTips = [
  {
    num: "1",
    title: "Replace the battery on a 3-year cycle",
    desc: "Do it before it fails during an outage, not after you are stuck in the driveway.",
  },
  {
    num: "2",
    title: "Fit a surge protector on the mains supply",
    desc: "A small, inexpensive step that protects the control board from switching surges.",
  },
  {
    num: "3",
    title: "Test your backup every month",
    desc: "Switch off the mains and open the gate. No movement means the battery needs replacing.",
  },
];

const maintenanceTips = [
  { num: "1", title: "Test the battery monthly", desc: "Switch off mains at the DB board and open the gate. No movement means the battery needs replacing." },
  { num: "2", title: "Clean the rack and gear", desc: "Brush off grit every few months and apply a light coat of gear lubricant. Grit accelerates wear more than most people realise." },
  { num: "3", title: "Listen for new sounds", desc: "Grinding or straining usually means something mechanical needs attention before it becomes a bigger fault." },
  { num: "4", title: "Check the end stops", desc: "If the gate hits the end stops hard on every cycle, the limits need adjusting before the damage adds up." },
  { num: "5", title: "Keep the housing sealed", desc: "A cracked or open cover lets dust and water reach the electronics. A replacement cover costs very little." },
  { num: "6", title: "Check gate alignment yearly", desc: "A gate that has shifted on its foundation puts extra load on the motor on every single cycle." },
];

const whyUs = [
  {
    title: "We arrive when we say we will",
    desc: "A gate stuck open or closed is a safety issue. We give you a real time window, not a four-hour wait.",
  },
  {
    title: "A quote before we touch anything",
    desc: "You know the cost upfront. If a repair is not worth it, we will tell you that before starting.",
  },
  {
    title: "Common parts always in the vehicle",
    desc: "We carry batteries, boards, and gears for CENTURION, ET Systems, BFT and Nice. Same-day repairs happen because we come prepared.",
  },
  {
    title: "We know what local conditions do",
    desc: "Load shedding, Highveld lightning, and heavy daily usage are the norm here. Every recommendation is based on real experience in these conditions.",
  },
];

const faqs = [
  {
    q: "How much does gate motor repair cost in Alberton?",
    a: "The cost depends on the specific fault. A battery replacement sits at the lower end. Replacing a burned control board costs more. A diagnostic call-out gives you the exact number before any work starts, and in most cases the call-out fee is included in the repair cost if you go ahead.",
  },
  {
    q: "How long does a gate motor repair take?",
    a: "Most repairs are completed on the same day. We carry common spares for the brands most widely installed in this area, so parts are rarely the delay. When a specific component needs to be ordered in, it usually takes one to two days.",
  },
  {
    q: "Can you repair a gate motor during a load shedding slot?",
    a: "Yes. We do not need mains power for the diagnostic or the repair. We test and confirm the work using the motor's battery backup.",
  },
  {
    q: "My gate reverses for no reason after load shedding. What is causing it?",
    a: "This is usually one of two things: a battery that is no longer holding proper voltage, which causes erratic behaviour, or an obstruction sensor fault triggered by a surge event. A diagnostic call-out will identify which one it is.",
  },
  {
    q: "How do I know when my gate motor battery needs replacing?",
    a: "Switch the mains off at your distribution board and try to open the gate. If it moves slowly or not at all, the battery is weak or has failed. A battery that cannot power the gate through an outage needs replacing before the next one catches you out.",
  },
  {
    q: "My motor is 7 years old and has developed a fault. Is it worth repairing?",
    a: "At 7 years it depends on the fault and the history. A battery or limit switch issue on a motor with no previous work is generally worth repairing. A second or third control board on the same motor in two years is a closer call. We will give you a straight recommendation after the diagnostic.",
  },
  {
    q: "Which gate motor brands do you work on?",
    a: "We work on CENTURION Systems, ET Systems, Nice, BFT, and most other brands in the South African market. CENTURION is the most common across Alberton and the East Rand and we carry spares for the popular models.",
  },
  {
    q: "Do you give a warranty on repair work?",
    a: "Yes. All repairs come with a workmanship warranty. Parts carry the relevant manufacturer's warranty. If something we repaired fails, call us and we will come back and sort it out.",
  },
];

export default function GateMotorRepairClient() {
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
              src="/images/Centurion D10 Installation 260605.jpg"
              alt="Gate motor repair technician in Alberton"
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
              Gate Motor Repair
            </h1>
            <p className="text-lg text-blue-200 mb-0 md:mb-10 max-w-lg leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
              All brands. Same-day call-outs. A clear quote before we touch anything.
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
                { label: "Same-Day Repairs", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "All Brands", icon: "M5 13l4 4L19 7" },
                { label: "Quote Before Work", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { label: "Local Experts", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
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
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Common Gate Motor Faults</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Most faults are sorted on the same day. These are the ones we deal with most often across Alberton and Johannesburg.
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
              <p className="text-gray-500 text-sm">No surprises, no unnecessary parts, no work started without your go-ahead.</p>
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
            
            {/* Header info */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
                Repair vs Replace
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-4">
                How to Know Which Way to Go
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                If you are not sure whether your motor is worth fixing, a diagnostic call-out gives you the answer before you spend a rand.
              </p>
            </div>

            {/* Comparison panels */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Repair Option Card */}
              <div className="bg-white border border-emerald-100/50 border-t-4 border-t-emerald-500 rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-200/20 mb-6">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Repair Option
                  </span>
                  <h3 className="text-xl font-bold text-navy font-display mb-6">Repair makes more sense when...</h3>
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
              </div>

              {/* Replace Option Card */}
              <div className="bg-white border border-amber-100/50 border-t-4 border-t-amber-500 rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-200/20 mb-6">
                    <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.706 9H18.5" />
                    </svg>
                    Replace Option
                  </span>
                  <h3 className="text-xl font-bold text-navy font-display mb-6">Replacement makes more sense when...</h3>
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

            </div>

            {/* Diagnostic CTA Block */}
            <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-navy to-[#00274f] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue/20 blur-2xl pointer-events-none" />
              <div className="relative z-10 max-w-lg text-left">
                <h4 className="text-lg font-bold font-display text-white mb-2">Still Not Sure Which Path to Take?</h4>
                <p className="text-blue-200 text-xs md:text-sm leading-relaxed">
                  Let our professional technicians run a full diagnostic on your gate motor. We will provide a clear, upfront recommendation on whether to repair or replace before any work begins.
                </p>
              </div>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="relative z-10 bg-white hover:bg-blue-pale text-navy font-bold py-3.5 px-7 rounded-xl text-xs md:text-sm transition-all duration-300 shadow-md whitespace-nowrap cursor-pointer hover:shadow-lg active:scale-95 shrink-0"
              >
                Book Diagnostic Now
              </button>
            </div>

          </div>
        </section>

        {/* ── Load Shedding ── */}
        <section className="py-20 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              <div>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-3">South African Conditions</span>
                <h2 className="text-3xl font-bold font-display mb-5">What Load Shedding Does to Your Gate Motor</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  Gate motors in Gauteng deal with conditions most manufacturer guidelines were not written for. Load shedding puts your motor under strain in two specific ways.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  Every outage is a deep discharge cycle for the battery. Frequent load shedding burns through those charge cycles far faster than normal use. A battery that might last four years can fail in under two.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  When Eskom restores power, the voltage does not always return cleanly. Those switching surges hit the control board directly if there is no surge protector on the supply line. After enough of them, the board fails.
                </p>
              </div>

              <div className="space-y-4">
                {loadshedTips.map((t) => (
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
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Keep Your Gate Motor Running Longer</h2>
              <p className="text-gray-500 text-sm">Six straightforward habits that add years to the life of your motor.</p>
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
              <h2 className="text-3xl font-bold text-navy font-display">Why Homeowners in Alberton Call Us First</h2>
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
              <h2 className="text-3xl font-bold text-navy font-display">Questions We Hear Most Often</h2>
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
              <h2 className="text-2xl font-bold text-navy font-display mb-2">Other Services for Your Property</h2>
              <p className="text-gray-500 text-sm">A lot of our clients ask about these once their gate is sorted.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {[
                { href: "/electric-fencing", title: "Electric Fencing", desc: "Installation and repairs for residential properties across Alberton and Johannesburg." },
                { href: "/home-automation", title: "Home Automation", desc: "Remote gate access, video intercoms, and CCTV cameras for your home." },
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
        <AreasServed mode="repair" />

        {/* ── Final CTA ── */}
        <section className="py-16 bg-gradient-to-r from-navy to-blue text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Get Your Gate Sorted?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp and we will confirm a call-out time quickly. We bring the right parts for your motor brand.
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
