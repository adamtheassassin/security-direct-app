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
    title: "A Nemtek energizer sized to your wall",
    desc: "The energizer is what pushes the charge through the wires. We fit a Nemtek unit matched to the length of your wall, so every strand carries a strong pulse all the way around.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Backup battery fitted as standard",
    desc: "Your fence stays live when the power goes off. Every install includes a battery, so a round of load shedding never leaves your wall sitting there with no charge on it.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Galvanised wire and proper tensioners",
    desc: "We run galvanised strands and tension each one so it sits tight and straight. A loose wire sags onto the one below it and trips the alarm, so we take the time to get this right.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Warning signs along every run",
    desc: "The law says a live fence needs warning signs, and they also tell anyone walking past that the wall is not worth climbing. We fit them along each section of the fence.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "An alarm you can link up",
    desc: "The fence sounds an alarm at your house and sends a signal to your armed response company the moment a wire is cut or pulled apart. You hear about it the second it happens.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "A certificate of compliance",
    desc: "Every new fence comes with the SABS certificate of compliance you are legally required to have. You need it for your home insurance and again the day you sell the property.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const strands = [
  {
    count: "6 Strand",
    title: "6-Strand Fencing",
    desc: "The go-to choice for most homes. Six live wires along the top of your boundary wall give a real deterrent at a price that suits a normal house.",
  },
  {
    count: "8 Strand",
    title: "8-Strand Fencing",
    desc: "A bit more cover for homes and businesses that want extra height on the wires. A common pick where people want more than the basic setup.",
  },
  {
    count: "10 Strand",
    title: "10-Strand Fencing",
    desc: "Built for factories, warehouses, and yards. More strands mean a taller live section that is far harder for anyone to get over.",
  },
  {
    count: "12 Strand",
    title: "12-Strand Fencing",
    desc: "The most cover we fit. Made for estates and high-risk commercial sites where the wall needs the strongest barrier on its own.",
  },
];

const propertyTypes = [
  {
    title: "Homes",
    desc: "A live top on your boundary wall stops most people before they ever try to climb it. We fit and certify fences for houses right across the area.",
    image: "/images/electric-fencing/residential-wall.jpg",
    alt: "6 strand electric fence installed on a residential boundary wall in Alberton",
  },
  {
    title: "Estates and complexes",
    desc: "Long shared walls and gated entrances need a fence that holds an even charge over a big perimeter. We plan the runs and the zones so the whole line stays strong.",
    image: "/images/electric-fencing/sliding-gate.jpg",
    alt: "Electric fence above a sliding gate at a residential complex in Johannesburg",
  },
  {
    title: "Business and industrial",
    desc: "Factories, warehouses, and yards get a taller, higher-strand fence wired into your alarm and access control, so the perimeter is covered day and night.",
    image: "/images/electric-fencing/commercial.jpg",
    alt: "Electric fence on a commercial property perimeter in Johannesburg",
  },
];

const steps = [
  {
    num: "01",
    title: "Free on-site visit",
    desc: "We come out, measure your wall, and work out the right number of strands for what you are protecting. Then we tell you what it needs and what the job will cost. The visit costs you nothing.",
  },
  {
    num: "02",
    title: "A clear, fixed quote",
    desc: "You get the full price in writing. The energizer, the wire, the battery, the warning signs, and the labour are all listed. The number you see is the number you pay.",
  },
  {
    num: "03",
    title: "Neat installation",
    desc: "Our team mounts the brackets, runs and tensions every strand, wires in the energizer and battery, and puts up the warning signs. We keep the work tidy.",
  },
  {
    num: "04",
    title: "Test, certify, and hand over",
    desc: "We power it up, walk the line to check the voltage holds the whole way round, hand you the SABS certificate, and show you how to arm and disarm it.",
  },
];

const backupTips = [
  {
    num: "1",
    title: "Backup battery as standard",
    desc: "The fence stays live right through load shedding, so there is no gap in cover when the power drops.",
  },
  {
    num: "2",
    title: "Surge protection on the energizer",
    desc: "We shield the unit from the spike that hits when the power comes back, which is what kills most energizers.",
  },
  {
    num: "3",
    title: "Battery sized for our outages",
    desc: "We pick a battery with the capacity to carry your wall through a normal load shedding slot with room to spare.",
  },
];

const whyUs = [
  {
    title: "We measure before we quote",
    desc: "A fence priced off a photo is a guess. We walk your wall first and quote the real job, so the number does not move on you later.",
  },
  {
    title: "One clear price, fitted and certified",
    desc: "The quote covers the energizer, the wire, the battery, the signs, the labour, and the COC. Nothing extra turns up once we have started.",
  },
  {
    title: "Galvanised wire, tensioned to last",
    desc: "We use galvanised strands and tension each one so it stays tight and even. A fence put up properly gives you far fewer false alarms down the line.",
  },
  {
    title: "We have done this since 2008",
    desc: "Boundary walls across Alberton and the East Rand are what we work on every week. You get people who know how to set a fence up so it lasts.",
  },
];

const faqs = [
  {
    q: "Do I need a Certificate of Compliance for my electric fence?",
    a: "Yes. By law, every electric fence put up or changed since 2012 must have an Electric Fence System Certificate of Compliance. We are registered to issue it, and you get a valid COC with every new fence. You also need this document for your insurance and again when you sell the property.",
  },
  {
    q: "Does electric fencing keep working during load shedding?",
    a: "Yes. Every fence we fit runs on a backup battery, so the wires stay live when the power is off. We size the battery to carry your wall through a normal load shedding slot with room to spare, and for longer outages we can fit a bigger one.",
  },
  {
    q: "What warranty do you give on a new fence?",
    a: "All new materials carry a 12 month manufacturer warranty, and we back our installation work for 12 months as well. The backup battery is not covered by a warranty, since its life depends on how hard the power cuts run it.",
  },
  {
    q: "Is electric fencing safe for children and pets?",
    a: "Yes. The fence gives a sharp, high-voltage shock that carries very little current. It hurts enough to push someone back and acts as a strong deterrent, but it is built to be non-lethal and is safe for children and pets under the standards it has to meet.",
  },
  {
    q: "How long does an installation take?",
    a: "A standard home wall is usually done in a day. The time depends on how long your boundary is, how many strands you are putting up, and whether the brackets go onto a plaster wall, palisade, or precast. We give you a clear idea of timing on the site visit.",
  },
  {
    q: "Can you install on any type of boundary?",
    a: "In most cases, yes. We fit electric fencing on brick and plaster walls, palisade fencing, and precast walls. We work out the right brackets and strand spacing for your boundary on the site visit so the fence sits neat and holds its charge.",
  },
  {
    q: "How much does electric fencing cost in Alberton?",
    a: "It comes down to the length of your wall and the number of strands you go with. A short home wall costs a lot less than a long estate or commercial perimeter. We measure on the free site visit and give you a fixed price before any work starts.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Alberton, the East Rand, and Johannesburg South. From Brackenhurst and Meyersdal through to Glenvista, Mulbarton, and Germiston, our team is out there every week. Not sure if we reach you? Give us a quick call.",
  },
];

export default function ElectricFenceInstallationClient() {
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
              src="/images/electric-fencing/hero.jpg"
              alt="New electric fence installed on a residential boundary wall in Alberton"
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
              Electric Fence Installation
            </h1>
            <p className="text-lg text-blue-200 mb-0 md:mb-10 max-w-lg leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
              We put up new electric fencing for homes, complexes, and business sites across Alberton and Johannesburg. Every fence comes with a backup battery and a SABS certificate of compliance, set up and ready from the first day.
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
                { label: "SABS COC Provided", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
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
              <h2 className="text-3xl font-bold text-navy font-display mb-3">What Goes Into a Proper Fence</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                A good fence is the difference between a wall that stops people and a few wires that look the part. Here is what we fit and set up on every new install.
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

        {/* ── Strand Options ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
                Fencing Options
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-4">We Fit the Right Fence for the Job</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Every wall is a different height and a different risk. We install 6, 8, 10, and 12-strand fences so the cover matches what you are actually trying to protect. The right one for you comes out of the site visit.
              </p>
            </div>

            <div className="relative w-full rounded-3xl overflow-hidden mb-12 shadow-sm border border-gray-100">
              <Image
                src="/images/electric-fencing/boundary-wall.jpg"
                alt="Multi-strand electric fence running along a long boundary wall in Alberton"
                width={1127}
                height={420}
                className="w-full h-[260px] md:h-[340px] object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {strands.map((s) => (
                <div key={s.title} className="bg-[#f8f7f4] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col">
                  <span className="text-blue text-2xl font-black font-display block mb-4">{s.count}</span>
                  <h3 className="text-lg font-bold text-navy mb-2 font-display">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Where We Install ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Where We Work</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Fences for Every Kind of Property</h2>
              <p className="text-gray-500 text-sm">A house, a complex, or a big commercial yard. We size and certify a fence that fits the wall.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {propertyTypes.map((p) => (
                <div key={p.title} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-navy mb-2 font-display text-lg">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">The Process</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">How We Get Your Fence Up</h2>
              <p className="text-gray-500 text-sm">Four simple steps, from the first visit to the moment your wall is live and certified.</p>
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

        {/* ── Compliance / COC ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Certified Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-5 leading-tight">
                  Your Fence Has to Be Legal, Not Just Live
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                  In South Africa, every electric fence put up since 2012 has to carry an Electric Fence System Certificate of Compliance. It is the law, and it is the first thing your insurer asks for after a claim.
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                  We are registered to issue that certificate. When we finish your fence, the COC goes into your hand. If you are selling your home, you also need this document before the sale can go through, so it pays to have a valid one on file.
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                  Every install is wired to meet the SABS rules, from the height of the live wires to the spacing of the warning signs, so your fence passes on the day and keeps you covered.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 flex items-center">
                    <Image
                      src="/images/electric-fencing/sabs-logo.png"
                      alt="SABS ISO 9001 standards mark"
                      width={90}
                      height={60}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 flex items-center">
                    <Image
                      src="/images/electric-fencing/dept-labour.jpg"
                      alt="South African Department of Labour"
                      width={90}
                      height={60}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <span className="text-blue text-xs uppercase tracking-widest font-bold block mb-2">
                  New Installations
                </span>
                <h3 className="text-xl font-bold text-navy mb-4 font-display">
                  Want it sorted properly the first time?
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  We start with a free site visit, measure your wall, and give you a fixed price for the whole job. The energizer, the wire, the battery, the warning signs, and the certificate are all in the quote, so you know the full cost before we lift a tool.
                </p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-navy hover:bg-blue text-white text-xs font-bold px-5 py-3 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  Book a Free Site Visit
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Load Shedding / Backup ── */}
        <section className="py-20 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-3">Built for Our Conditions</span>
                <h2 className="text-3xl font-bold font-display mb-5">Your Fence Has to Keep Working When the Power Does Not</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  An electric fence in Gauteng deals with a lot. The power cuts out most days, and that is often the exact moment your wall matters most. We plan for that on every install.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  Every fence we fit runs on a backup battery, so the wires stay live right through an outage. We pick a battery with enough capacity to carry your wall through a normal load shedding slot with room over the top.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  We also guard the energizer against surges. When the power comes back, that spike can take out an unprotected unit, so a bit of protection up front saves you a call-out later.
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
              <h2 className="text-3xl font-bold text-navy font-display">Why People Pick Us for a New Fence</h2>
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
              <h2 className="text-3xl font-bold text-navy font-display">Questions About a New Fence</h2>
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
                { href: "/electric-fence-repair", title: "Electric Fence Repair", desc: "Already have a fence that has stopped pushing out a charge? We fix all brands and get it doing its job again." },
                { href: "/gate-motor-installation", title: "Gate Motor Installation", desc: "Pair your new fence with an automated gate. New Centurion motors fitted and set up to run from day one." },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Secure Your Perimeter?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp and we will set up a free site visit. You get the right fence for your wall and a fixed price before any work starts.
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
