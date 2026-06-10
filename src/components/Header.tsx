"use client";

import { useState } from "react";
import Link from "next/link";

interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Gate Motors",
    href: "#",
    subLinks: [
      { label: "Gate Motor Installation", href: "/gate-motor-installation" },
      { label: "Gate Motor Repair", href: "/gate-motor-repair" },
    ],
  },
  { label: "Electric Fencing", href: "/electric-fencing" },
  { label: "Garage Doors & Motors", href: "/garage-doors-motors" },
  { label: "CCTV", href: "/cctv" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gateMotorsOpen, setGateMotorsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main navigation */}
      <nav style={{ backgroundColor: "#094B92" }} className="shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight">
              <span
                style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
                className="text-white text-xl font-semibold tracking-wide"
              >
                Security Direct
              </span>
              <span className="text-blue-200 text-xs font-medium tracking-widest uppercase">
                Electric Fence &amp; Gate Motors
              </span>
            </Link>

            {/* Desktop nav & Contact options */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  if (link.subLinks) {
                    return (
                      <li key={link.label} className="relative group py-2">
                        <button
                          className="text-white text-sm font-medium px-3 py-2 rounded hover:bg-white/10 transition-colors whitespace-nowrap flex items-center gap-1 cursor-default focus:outline-none"
                        >
                          {link.label}
                          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 text-sm font-medium text-navy hover:bg-blue-pale hover:text-blue transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white text-sm font-medium px-3 py-2 rounded hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Divider */}
              <span className="h-6 w-px bg-white/20" />

              <div className="flex items-center gap-4">
                <a
                  href="tel:0824981272"
                  className="flex items-center gap-1.5 bg-white hover:bg-blue-pale text-blue text-xs font-semibold px-4 py-2 rounded-full transition-colors shadow-sm whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 text-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  082 498 1272
                </a>
                <a
                  href="https://wa.me/+27824981272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "#001d3b" }} className="lg:hidden border-t border-white/10">
            <ul className="py-2 px-4 divide-y divide-white/5">
              {navLinks.map((link) => {
                if (link.subLinks) {
                  return (
                    <li key={link.label} className="py-2.5">
                      <button
                        onClick={() => setGateMotorsOpen(!gateMotorsOpen)}
                        className="w-full flex items-center justify-between text-white text-sm hover:text-blue-300 transition-colors focus:outline-none"
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
                            gateMotorsOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {gateMotorsOpen && (
                        <ul className="mt-2 pl-4 space-y-2 border-l border-white/10">
                          {link.subLinks.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block text-blue-200 py-1.5 text-sm hover:text-white transition-colors"
                                onClick={() => setMenuOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-white py-2.5 text-sm hover:text-blue-300 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              
              {/* Mobile CTA section */}
              <li className="py-4 flex flex-col gap-3">
                <a
                  href="tel:0824981272"
                  className="flex items-center justify-center gap-2 bg-white text-navy font-bold py-2.5 rounded-lg text-sm hover:bg-blue-pale hover:text-blue transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4 text-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: 082 498 1272
                </a>
                <a
                  href="https://wa.me/+27824981272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
