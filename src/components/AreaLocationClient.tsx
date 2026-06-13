"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import { areaPages } from "@/data/areaPages";

// Structural catalogue for the service cards. The title, link and icon stay the
// same, but the description is pulled per suburb from area.serviceBlurbs so no two
// pages share the same body copy (keeps us clear of doorway-page territory).
// `fallback` is only used if a suburb is missing a blurb for that service.
const serviceCatalog: { id: string; title: string; href: string; icon: string; fallback: string }[] = [
  {
    id: "gateRepair",
    title: "Gate Motor Repair",
    href: "/gate-motor-repair",
    fallback: "We test the battery, board and gears and fix most gate faults the same day.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    id: "gateInstall",
    title: "Gate Motor Installation",
    href: "/gate-motor-installation",
    fallback: "A new motor sized to your gate, set up properly with remotes and a battery backup.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "fenceInstall",
    title: "Electric Fence Installation",
    href: "/electric-fence-installation",
    fallback: "Electric fencing run neatly along your wall and wired into your alarm.",
    icon: "M4 6h16M4 18h16M7 6v12M12 6v12M17 6v12",
  },
  {
    id: "fenceRepair",
    title: "Electric Fence Repair",
    href: "/electric-fence-repair",
    fallback: "Fence not charging after a storm? We find the break and get the whole line live again.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "garage",
    title: "Garage Doors",
    href: "/garage-door-installation",
    fallback: "Garage door motors fitted and repaired so the whole house opens at the press of a button.",
    icon: "M4 21V9l8-4 8 4v12M4 21h16M8 21v-5h8v5M8 13h8",
  },
  {
    id: "cctv",
    title: "CCTV Cameras",
    href: "/cctv",
    fallback: "Watch your gate and yard from your phone, day or night, with clear cameras.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    id: "alarm",
    title: "Alarm Systems",
    href: "/alarm-system-installation",
    fallback: "Alarms fitted and serviced, with sensors that cover the doors, windows and yard.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
];

const trustItems = [
  { label: "Same-Day Call-Outs", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Local to Alberton", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
  { label: "Quote Before Work", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Power-Cut Backup", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
];

export default function AreaLocationClient({ slug }: { slug: string }) {
  const area = areaPages[slug];
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setActiveFaq(activeFaq === i ? null : i);

  const nearbyAreas = area.nearby
    .map((s) => areaPages[s])
    .filter(Boolean);

  // LocalBusiness schema with areaServed so Google ties us to this suburb.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Security Direct",
    description: area.metaDescription,
    telephone: "+27824981272",
    email: "securitydirect2@gmail.com",
    url: `https://securitydirect.co.za/areas/${area.slug}`,
    areaServed: [
      { "@type": "City", name: area.name },
      { "@type": "City", name: "Alberton" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alberton",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-16">

        {/* ── Hero ── */}
        <section className="relative bg-navy py-20 md:py-32 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={area.image}
              alt={`Gate motor, electric fencing and security work in ${area.name}, Alberton`}
              fill
              className="object-cover opacity-45"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block bg-blue/30 border border-blue/40 text-blue-200 text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-6">
              {area.heroBadge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display max-w-3xl mx-auto md:mx-0">
              Gate Motors &amp; Security in {area.name}
            </h1>
            <p className="text-lg text-blue-200 mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
              {area.heroTagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-start">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-navy font-bold px-8 py-4 rounded-lg text-base hover:bg-blue-pale transition-colors shadow-lg cursor-pointer flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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
              {trustItems.map(({ label, icon }) => (
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

        {/* ── Local Intro ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-3">
                  {area.name}, Alberton
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy font-display mb-6 leading-tight">
                  {area.intro.heading}
                </h2>
                {area.intro.body}
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] w-full">
                <Image
                  src={area.image}
                  alt={`Homes and streets in ${area.name}, Alberton`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
            </div>

            {area.localSections?.length ? (
              <div className="mt-16 max-w-4xl mx-auto space-y-10">
                {area.localSections.map((sec, i) => (
                  <div key={i}>
                    <h3 className="text-xl md:text-2xl font-bold text-navy font-display mb-3">
                      {sec.heading}
                    </h3>
                    <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                      {sec.body}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">What We Do Here</span>
              <h2 className="text-3xl font-bold text-navy font-display mb-3">
                What We Look After in {area.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">{area.servicesIntro}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceCatalog.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-pale flex items-center justify-center mb-4 text-blue">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy mb-2 font-display flex items-center gap-1.5">
                    {s.title}
                    <svg className="w-4 h-4 text-blue opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {area.serviceBlurbs[s.id] ?? s.fallback}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Locals Choose Us ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-xl mx-auto">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Why Us</span>
              <h2 className="text-3xl font-bold text-navy font-display">
                Why People in {area.name} Call Us First
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {area.why.map((w, i) => (
                <div key={i} className="bg-[#f8f7f4] border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="text-blue font-black text-3xl mb-4 font-display">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-bold text-navy mb-2 font-display text-sm">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Directions + Map ── */}
        <section className="py-20 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-3">Finding You</span>
                <h2 className="text-3xl font-bold text-navy font-display mb-6 leading-tight">
                  We Cover Every Street in {area.name}
                </h2>
                {area.directions}

                {/* NAP block */}
                <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-navy font-display text-sm mb-3">Security Direct</h3>
                  <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Serving {area.name} and all of Alberton
                    </li>
                    <li>
                      <a href="tel:0824981272" className="flex items-center gap-3 hover:text-blue transition-colors">
                        <svg className="w-4 h-4 text-blue shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        082 498 1272
                      </a>
                    </li>
                    <li>
                      <a href="mailto:securitydirect2@gmail.com" className="flex items-center gap-3 hover:text-blue transition-colors">
                        <svg className="w-4 h-4 text-blue shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        securitydirect2@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[360px] lg:h-[460px]">
                <iframe
                  title={`Map of ${area.name}, Alberton`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.208329901349!2d28.08473147625867!3d-26.319752768691615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9504e0223defc3%3A0xe5abc6e2fb2ad3f4!2sSecurity%20direct%20-%20Gate%20motors%20and%20electric%20fence%20specialists%20est%202008!5e0!3m2!1sen!2sza!4v1781355977408!5m2!1sen!2sza"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">FAQ</span>
              <h2 className="text-3xl font-bold text-navy font-display">
                Common Questions from {area.name}
              </h2>
            </div>
            <div className="space-y-3">
              {area.faqs.map((faq, i) => (
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

        {/* ── Nearby Areas ── */}
        <section className="py-16 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-blue text-xs font-bold uppercase tracking-widest block mb-2">Nearby</span>
              <h2 className="text-2xl font-bold text-navy font-display mb-2">Other Areas We Serve</h2>
              <p className="text-gray-500 text-sm">
                We look after these suburbs right next to {area.name} as well.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {nearbyAreas.map((n) => (
                <Link
                  key={n.slug}
                  href={`/areas/${n.slug}`}
                  className="flex items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-blue hover:shadow-sm transition-all"
                >
                  <div>
                    <h3 className="font-bold text-navy font-display text-sm mb-1">{n.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Gate motors, electric fencing and home security across {n.name}.
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/areas" className="text-blue font-semibold text-sm hover:underline">
                See all the areas we cover
              </Link>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-16 bg-gradient-to-r from-navy to-blue text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Need a Hand in {area.name}?
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us or send a WhatsApp with your address and we will set up a time quickly. We bring the right parts for the job.
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
