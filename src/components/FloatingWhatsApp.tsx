"use client";

import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the hero section (~400px)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/+27824981272"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
      >
        <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 4.987L2 22l5.176-1.358a9.92 9.92 0 004.836 1.246c5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm5.522 14.072c-.225.63-.884 1.15-1.523 1.275-.54.105-1.24.165-3.6-.825-3.04-1.275-5.01-4.38-5.16-4.59-.15-.21-1.21-1.605-1.21-3.06 0-1.455.765-2.175 1.035-2.46.225-.24.585-.33.885-.33h.84c.255 0 .48.015.69.525.27.645.93 2.265 1.005 2.415.075.15.135.33.03.54-.105.21-.21.345-.375.525-.15.18-.33.405-.45.54-.15.15-.3.315-.12.615.18.3.795 1.29 1.71 2.1 1.185 1.05 2.19 1.38 2.505 1.53.315.15.495.12.675-.09.18-.21.78-.9 1-1.215.18-.225.435-.18.705-.075.27.105 1.71.81 2.01.96.3.15.495.225.57.345.075.12.075.69-.15 1.365z" />
      </svg>
        WhatsApp Us Now
      </a>
    </div>
  );
}
