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
    title: "The alarm keeps going off for nothing",
    desc: "False alarms at all hours wear everyone down and get ignored. It is usually a low battery, a faulty sensor, or an insect in a beam, and we track down which one.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "Beeping or a trouble light on the keypad",
    desc: "That steady beep or warning light almost always means the backup battery is low or a zone has a fault. We read the panel and clear what is causing it.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "A zone that has stopped detecting",
    desc: "One sensor or beam no longer picks anything up, which leaves a blind spot in your cover. We test the zone and replace the part that has failed.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
  },
  {
    title: "The alarm will not arm",
    desc: "The panel refuses to set, often because a zone is open or playing up. We find what is holding it and get the alarm arming properly again.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Not signalling your armed response",
    desc: "The siren sounds at the house but no signal reaches your security company. We check the communicator and the line so help actually gets called.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 010-7.778m7.778 0a5.5 5.5 0 010 7.778M5.282 19.232a9.5 9.5 0 010-13.436m13.436 0a9.5 9.5 0 010 13.436M12 12h.01" />
      </svg>
    ),
  },
  {
    title: "Dead after a power cut",
    desc: "The alarm is silent and the keypad is blank. A backup battery that has given up is almost always the reason, and it is a quick swap.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const processSteps = [
  { num: "01", title: "We arrive on time", desc: "A confirmed call-out window, not a vague 'sometime today' slot that has you waiting around." },
  { num: "02", title: "We test the panel and every zone", desc: "We read the panel's fault log and walk each sensor, beam, and panic button to find what is actually wrong." },
  { num: "03", title: "Clear quote upfront", desc: "You hear exactly what is wrong and what it will cost before we start. No work begins without your go-ahead." },
  { num: "04", title: "Repair on the spot", desc: "We carry spare sensors, beams, batteries, and panel parts for the common brands, so most faults are sorted the same day." },
  { num: "05", title: "We test the whole system", desc: "We arm the alarm, trip each zone, and confirm the signal reaches your armed response company." },
  { num: "06", title: "Walkthrough", desc: "We show you what was wrong and what we changed, and reset your codes if you need us to." },
];

const repairReasons = [
  "A single faulty sensor, beam, or keypad",
  "A flat backup battery",
  "No signal getting through to armed response",
  "False alarms coming from one zone",
];

const replaceReasons = [
  "A panel so old that spare parts are no longer made",
  "Faults popping up across several zones at once",
  "A dead keypad on a system nobody still supports",
  "You want more zones or cover the old panel cannot handle",
];

const maintenanceTips = [
  { num: "1", title: "Test the alarm every month", desc: "Arm it and walk a zone to set it off. It is the simplest way to know the sensors and the siren still work." },
  { num: "2", title: "Replace the backup battery on time", desc: "Most alarm batteries last around two to three years. Swap it before it dies during an outage and leaves the house open." },
  { num: "3", title: "Keep sensors and beams clean", desc: "Dust and cobwebs across a sensor are a top cause of false alarms. A quick wipe every few months saves a call-out." },
  { num: "4", title: "Trim plants near outdoor beams", desc: "A branch swaying in the wind across a beam will trip the alarm again and again. Keep the beam line clear." },
  { num: "5", title: "Test your panic buttons", desc: "Press them now and then to be sure they still send. Let your armed response company know first so they do not dispatch." },
  { num: "6", title: "Check the armed response signal", desc: "Make sure a real trip actually reaches your security company, not just the siren at the house. We can test this for you." },
];

const whyUs = [
  {
    title: "We arrive when we say we will",
    desc: "An alarm that is down leaves your home open. We give you a real time window, not a four-hour wait that swallows your day.",
  },
  {
    title: "A quote before we touch anything",
    desc: "You know the cost upfront. If a part of the system is past saving, we tell you that before spending your money on it.",
  },
  {
    title: "Common spares in the vehicle",
    desc: "We carry sensors, beams, batteries, and panel parts for the brands found on walls around here, so most repairs happen on the first visit.",
  },
  {
    title: "We know what the conditions do",
    desc: "Load shedding and Highveld lightning are behind most of the faults we see. Every fix is based on real experience in these conditions.",
  },
];

const faqs = [
  {
    q: "Why does my alarm keep going off?",
    a: "False alarms usually come down to a few things: a low backup battery, dust or a cobweb across a sensor, an insect inside a beam, a pet moving through a zone, or a sensor that is simply on its way out. We walk the system, find the zone that is tripping it, and put it right so the alarm only goes off when it should.",
  },
  {
    q: "Can you repair an alarm another company installed?",
    a: "Yes. We work on the common alarm brands found in homes and businesses around here, no matter who put the system in. We replace faulty sensors and beams, swap dead batteries, sort out false alarms, and get the signal to your armed response working again.",
  },
  {
    q: "My keypad is beeping or showing a trouble light. What does it mean?",
    a: "A steady beep or a warning light on the keypad is the panel telling you something is off. Most often it is a low backup battery or a fault on one of the zones. We read the panel, find the cause, and clear it so the keypad goes quiet again.",
  },
  {
    q: "How do I know when the backup battery needs replacing?",
    a: "If the alarm goes dead the moment the power cuts, or the keypad has started beeping with a battery warning, the backup battery is on its way out. They generally last two to three years. Replacing it on time keeps the alarm armed right through load shedding.",
  },
  {
    q: "Can you get my alarm signalling armed response again?",
    a: "Yes. If your siren sounds but no car arrives, the communicator that sends the signal to your security company has usually failed or come loose. We test it, fix or replace it, and confirm a real trip gets through before we leave.",
  },
  {
    q: "How much does an alarm repair cost?",
    a: "It depends on the fault. A backup battery or a single sensor sits at the lower end. A new keypad or communicator costs more. A call-out gives you the exact figure before any work starts, and in most cases the call-out fee comes off the repair if you go ahead.",
  },
  {
    q: "How fast can you come out?",
    a: "We aim for a same-day or next-day call-out across Alberton and Johannesburg. An alarm that is down leaves your home unprotected, so we treat it as urgent and give you a confirmed time window rather than leaving you guessing.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Alberton, the East Rand, and Johannesburg South. From Brackenhurst and Meyersdal through to Glenvista, Mulbarton, and Germiston, our team is out there every week. Not sure if we reach you? Give us a quick call.",
  },
];

export default function AlarmRepairClient() {
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
              src="/images/alarms/repair-hero.png"
              alt="Paradox alarm system keypad showing warning indicators for troubleshooting and repair"
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
              Alarm System Repair
            </h1>
            <p className="text-lg text-blue-200 mb-0 md:mb-10 max-w-lg leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
              All brands, fast call-outs, and a clear quote before we touch anything. We track down false alarms, dead zones, and panels that will not arm, and get your home properly covered again.
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
                { label: "All Brands", icon: "M5 13l4 4L19 7" },
                { label: "Quote Before Work", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { label: "False Alarms Fixed", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
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
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Common Alarm Faults</h2>
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
                When to Fix It and When to Upgrade
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Most alarms are well worth fixing. A few are so old that parts are hard to find and good money keeps going into a system that will keep failing. A call-out tells you which one you are dealing with before you spend a rand.
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
                  An Upgrade Makes Sense
                </span>
                <h3 className="text-xl font-bold text-navy font-display mb-6">A new system is the right call when...</h3>
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
                  We come out, test the whole system, and give you a straight answer on whether your alarm is worth fixing or due for an upgrade, with the cost laid out before any work starts.
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
                <h2 className="text-3xl font-bold font-display mb-5">Why Alarms Act Up Here</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  An alarm in Gauteng takes a beating that the manuals never planned for. Two things are behind most of the repair calls we get.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  Load shedding runs the backup battery flat and charges it again, over and over. All that cycling wears the battery out far faster than normal use, so one that should last years can give up in months.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  When the power comes back, the spike can hit the panel and the communicator. Highveld lightning does the same through the line. Without surge protection in place, that is often what kills the system for good.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { num: "1", title: "Replace the battery on time", desc: "Swap it before it dies during an outage and leaves the house open for the night." },
                  { num: "2", title: "Fit surge protection", desc: "A small, cheap step that guards the panel from the spikes that come with storms and power cuts." },
                  { num: "3", title: "Have the system checked yearly", desc: "We test the zones, the battery, and the signal to armed response so a small fault is caught early." },
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
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Keep Your Alarm Working Right</h2>
              <p className="text-gray-500 text-sm">Six easy habits that cut down on false alarms and keep the system doing its job.</p>
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
              <h2 className="text-3xl font-bold text-navy font-display">Questions About Alarm Repairs</h2>
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
                { href: "/alarm-system-installation", title: "Alarm System Installation", desc: "Past fixing, or want more cover? We fit new alarms with indoor sensors, outdoor beams, and panic buttons." },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Alarm Giving You Trouble?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp and we will confirm a call-out time quickly. We bring the right spares for your system and give you the cost before any work starts.
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
