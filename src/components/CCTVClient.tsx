"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import AreasServed from "./AreasServed";

const features = [
  {
    title: "Watch from your phone",
    desc: "See your cameras live from anywhere on your phone. Check the gate before you open it, or look in on the house while you are away for the weekend.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AHD and IP cameras",
    desc: "We install both. AHD runs on coax cable and keeps the cost down, while IP runs on network cable for sharper detail and smarter features. We help you pick what suits the job.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Day and night vision",
    desc: "The cameras switch to infrared in the dark on their own, so you get a clear picture of your yard at two in the morning instead of a black screen.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: "Footage that goes back weeks",
    desc: "Everything records to a hard drive on the recorder. A normal setup holds two to four weeks before it writes over the oldest clips, so there is time to go back and check.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Smart detection alerts",
    desc: "The system can pick out a person or a vehicle and leave the cat and the moving tree alone. You get an alert when it counts instead of one buzzing all night.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
      </svg>
    ),
  },
  {
    title: "Backup power for outages",
    desc: "We can add a UPS that keeps the cameras and the recorder running through load shedding, so the gap in your footage does not line up with the gap in the power.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const cameras = [
  {
    name: "Bullet cameras",
    image: "/images/cctv/bullet-camera.png",
    rating: "Driveways & walls",
    desc: "The long camera you see pointing down a driveway or wall. Easy to spot, which puts people off, and made to watch a long, straight stretch like your perimeter.",
  },
  {
    name: "Turret & dome cameras",
    image: "/images/cctv/turret-camera.webp",
    rating: "Entrances & indoors",
    desc: "A compact, rounded camera that sits neat against a wall or ceiling. Hard to knock out of line and a good fit for entrances, patios, and indoor spots.",
    popular: true,
  },
  {
    name: "Smart AI cameras",
    image: "/images/cctv/smart-detection.png",
    rating: "Person & vehicle alerts",
    desc: "These tell the difference between a person, a car, and a stray animal, so you only get an alert that matters. Less noise on your phone and footage that is quick to search.",
  },
];

const ahdReasons = [
  "You want strong value for money",
  "You are replacing older cameras on existing coax cable",
  "A clear HD picture is all you need",
  "You are covering a normal home or small business",
];

const ipReasons = [
  "You want the sharpest detail and room to zoom in",
  "You want smart person and vehicle detection",
  "You are running new cable anyway",
  "You are covering a larger or higher-risk site",
];

const steps = [
  {
    num: "01",
    title: "Free on-site visit",
    desc: "We come out, walk the property, and work out where the cameras need to go to cover your gates, doors, and blind spots. Then we tell you what it will cost.",
  },
  {
    num: "02",
    title: "A clear, fixed quote",
    desc: "You get the full price in writing. The cameras, the recorder, the cabling, and the labour are all listed. The number you see is the number you pay.",
  },
  {
    num: "03",
    title: "Neat installation",
    desc: "We run the cabling cleanly, mount the cameras, set up the recorder, and aim each one so it covers what it should with no wasted view.",
  },
  {
    num: "04",
    title: "Setup and walkthrough",
    desc: "We load the app on your phone, show you how to view live and play back footage, and make sure every camera is clear before we leave.",
  },
];

const faults = [
  {
    title: "A camera screen has gone black",
    desc: "A camera that was working and is now a black box usually points to a power or cable fault, or the camera itself has failed.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "The system stopped recording",
    desc: "You go to check footage and there is nothing there. A full or failed hard drive is the most common reason behind it.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Lightning or surge damage",
    desc: "A Highveld storm can take out cameras, the recorder, or the power supply in one hit. We find what got hit and replace it.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "You cannot view on your phone",
    desc: "The cameras record fine but the app will not connect. This is usually a network or settings issue, and we get it talking to your phone again.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Night vision not working",
    desc: "The picture is fine by day and useless at night. The infrared has often failed, or dirt and a spider web on the lens are throwing it off.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: "Picture is blurry or flickering",
    desc: "A soft or jumpy image points to a loose cable, a tired power supply, or a camera on its way out. We track down which one it is.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const backupTips = [
  {
    num: "1",
    title: "UPS backup power",
    desc: "Keeps the cameras and recorder on through load shedding, so the footage never cuts out.",
  },
  {
    num: "2",
    title: "Surge protection fitted",
    desc: "Guards the system against the spikes that come with storms and the power switching back on.",
  },
  {
    num: "3",
    title: "A yearly check-up",
    desc: "We clean the lenses, test the recording, and check the backup so nothing has quietly failed.",
  },
];

const whyUs = [
  {
    title: "We place cameras where they earn their keep",
    desc: "We plan the angles around your real weak spots, the gate, the doors, the dark corner of the yard, so you are not paying for a camera pointed at a wall.",
  },
  {
    title: "One clear price, fitted and set up",
    desc: "The quote covers the cameras, the recorder, the cabling, and the labour. Nothing extra appears once we have started.",
  },
  {
    title: "We install and we repair",
    desc: "A fresh system or a fix on an old one, it is the same team. We work on AHD and IP setups and the common brands already on walls around here.",
  },
  {
    title: "We have done this since 2008",
    desc: "Homes and businesses across Alberton and the East Rand trust us with their security. You get people who have wired up every kind of property.",
  },
];

const faqs = [
  {
    q: "Do I need internet at home for a CCTV system?",
    a: "No. The system records to the hard drive on the recorder whether you have internet or not. You only need a stable connection, like fibre or LTE, if you want to watch the live cameras or play back footage on your phone while you are away from home.",
  },
  {
    q: "What is the difference between AHD and IP cameras?",
    a: "AHD cameras run on coax cable back to a DVR and keep the cost down, which makes them a solid choice for most homes. IP cameras run on network cable back to an NVR and give you higher detail, more room to zoom in, and smart features like person and vehicle detection. We help you weigh up which one fits your property and budget.",
  },
  {
    q: "How many days of footage does the system keep?",
    a: "It depends on the size of the hard drive and how many cameras you have. A standard setup holds two to four weeks of footage. Once the drive is full, it writes over the oldest clips on its own, so you always have the most recent weeks on hand.",
  },
  {
    q: "Will my cameras work during load shedding?",
    a: "On mains power alone they switch off with everything else. We can fit a UPS backup that keeps the cameras and the recorder running straight through a normal two to four hour outage, so your footage carries on without a gap.",
  },
  {
    q: "What warranty do you give on CCTV work?",
    a: "All new materials carry a 12 month manufacturer warranty, and we back our installation work for 12 months as well. Batteries and repair work do not carry a warranty, since a battery's life depends on how hard the power cuts run it, and a repair deals with parts that are already worn.",
  },
  {
    q: "How much does a CCTV system cost?",
    a: "It comes down to how many cameras you need, whether you go with AHD or IP, the length of the cable runs, and the size of the hard drive. We work all of that out on the free site visit and give you a fixed price before any work starts.",
  },
  {
    q: "Which camera brand do you fit?",
    a: "We fit Provision-ISR cameras for new installs, in both AHD and IP, with night vision as standard. For repairs we work on the common CCTV brands already installed around here, so you do not need to track down the original installer.",
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Alberton, the East Rand, and Johannesburg South. From Brackenhurst and Meyersdal through to Glenvista, Mulbarton, and Germiston, our team is out there every week. Not sure if we reach you? Give us a quick call.",
  },
];

export default function CCTVClient() {
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
              src="/images/gallery-1.png"
              alt="CCTV cameras watching over a home in Alberton"
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
              CCTV Installation &amp; Repair
            </h1>
            <p className="text-lg text-blue-200 mb-0 md:mb-10 max-w-lg leading-relaxed order-4 md:order-3 mx-auto md:mx-0">
              We fit and repair AHD and IP CCTV cameras across Alberton and Johannesburg, so you can see your home from your phone day or night. Every system can run through load shedding on a backup power supply.
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
                { label: "View From Your Phone", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
                { label: "Day & Night Vision", icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" },
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

        {/* ── What You Get ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">What You Get</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">A System That Earns Its Place on the Wall</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                A camera is only worth having if you can see what it sees and trust the footage when you need it. Here is what we set up on every install.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
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

        {/* ── Cameras We Fit ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
                Cameras We Fit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-4">The Right Camera for Each Spot</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We fit Provision-ISR cameras with night vision as standard. Most homes end up with a mix, since a long driveway and a front door each call for a different camera.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {cameras.map((c) => (
                <div
                  key={c.name}
                  className={`relative bg-white rounded-3xl border overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 ${
                    c.popular ? "border-blue ring-2 ring-blue/15" : "border-gray-100"
                  }`}
                >
                  {c.popular && (
                    <span className="absolute top-4 right-4 z-10 bg-blue text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="relative aspect-[4/3] bg-[#f8f7f4] flex items-center justify-center p-6 border-b border-gray-50">
                    <Image
                      src={c.image}
                      alt={`${c.name} for home and business CCTV`}
                      width={260}
                      height={260}
                      className="object-contain max-h-full w-auto"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-blue text-[11px] font-bold uppercase tracking-wider mb-1">{c.rating}</span>
                    <h3 className="font-bold text-navy font-display text-lg mb-2">{c.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{c.desc}</p>
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-blue hover:bg-blue-light text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer w-full"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AHD vs IP ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
                AHD or IP
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-4">Two Ways to Build Your System</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Both give you a clear picture you can watch from your phone. The difference is in the detail and the cost, and we help you land on the right one on the site visit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* AHD */}
              <div className="bg-white border border-blue-100/50 border-t-4 border-t-blue rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="inline-flex items-center gap-1.5 bg-blue-pale text-blue text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                  AHD Cameras
                </span>
                <h3 className="text-xl font-bold text-navy font-display mb-6">AHD is a good fit when...</h3>
                <div className="space-y-4">
                  {ahdReasons.map((r, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-100/80 last:border-b-0 last:pb-0">
                      <div className="w-6 h-6 rounded-full bg-blue-pale text-blue flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 leading-snug">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* IP */}
              <div className="bg-white border border-navy/10 border-t-4 border-t-navy rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="inline-flex items-center gap-1.5 bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                  IP Cameras
                </span>
                <h3 className="text-xl font-bold text-navy font-display mb-6">IP is worth it when...</h3>
                <div className="space-y-4">
                  {ipReasons.map((r, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-100/80 last:border-b-0 last:pb-0">
                      <div className="w-6 h-6 rounded-full bg-navy/5 text-navy flex items-center justify-center shrink-0 mt-0.5">
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
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">The Process</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">How We Get Your Cameras Up</h2>
              <p className="text-gray-500 text-sm">Four simple steps, from the first visit to the day you are watching your home from your phone.</p>
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
              <h2 className="text-3xl font-bold text-navy font-display mb-3">Common CCTV Faults</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                These are the problems we get called out for most often across Alberton and Johannesburg. We work on systems no matter who installed them.
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
                <h2 className="text-3xl font-bold font-display mb-5">Cameras Are No Use If They Switch Off With the Power</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  A camera system runs on mains power, so without a backup it goes dark the moment load shedding starts. That is often the exact window someone is counting on.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  We can fit a UPS that keeps the cameras and the recorder running straight through a normal two to four hour outage. Your footage carries on without a gap in it.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Highveld storms are the other thing we plan for. A surge down the power or network line can wipe out the whole system, so we fit protection that takes the hit instead of your cameras.
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
              <h2 className="text-3xl font-bold text-navy font-display">Why People Pick Us for Their Cameras</h2>
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
              <h2 className="text-3xl font-bold text-navy font-display">Questions About CCTV</h2>
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
                { href: "/electric-fence-installation", title: "Electric Fencing", desc: "Add a live fence on your boundary wall so the perimeter is covered before anyone reaches the cameras." },
                { href: "/gate-motor-installation", title: "Gate Motor Installation", desc: "New Centurion motors fitted to your gate, sized right and set up to run from day one." },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Keep an Eye on Your Property?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp and we will set up a free site visit. You get the right cameras for your property and a fixed price before any work starts.
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
