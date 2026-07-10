import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gate Motor Installation", href: "/gate-motor-installation" },
  { label: "Gate Motor Repair", href: "/gate-motor-repair" },
  { label: "Electric Fence Installation", href: "/electric-fence-installation" },
  { label: "Electric Fence Repair", href: "/electric-fence-repair" },
  { label: "Garage Door Installation", href: "/garage-door-installation" },
  { label: "Garage Door Repair", href: "/garage-door-repair" },
  { label: "CCTV", href: "/cctv" },
  { label: "Alarm System Installation", href: "/alarm-system-installation" },
  { label: "Alarm System Repair", href: "/alarm-system-repair" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#001d3b" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4 bg-white px-5 py-2.5 rounded-2xl shadow-md transition-transform hover:scale-[1.02]">
              <Image
                src="/images/security direct logo.png"
                alt="Security Direct Logo"
                width={900}
                height={300}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              <strong>Security Direct Gate Motor Repair and Garage Door Repair</strong> is a certified installer of gate motors, electric fencing, CCTV, and garage door motors. Serving Alberton and Johannesburg since 2008.
            </p>
            <a
              href="https://www.facebook.com/gatemotors123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.google.com/maps?q=33+Waboom+St,+Alberton,+1449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-blue-200 hover:text-white transition-colors"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(71,120,173,0.2)" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-sm">33 Waboom St, Alberton, Gauteng, 1449</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0824981272"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors group"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(71,120,173,0.2)" }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <span className="text-sm">082 498 1272</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:securitydirect2@gmail.com"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(71,120,173,0.2)" }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <span className="text-sm">securitydirect2@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+27824981272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-700"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span className="text-sm">WhatsApp Us Now</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-4 px-6"
        style={{ borderColor: "rgba(71,120,173,0.2)" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-400 text-xs">
            &copy; {new Date().getFullYear()} Security Direct Gate Motor Repair and Garage Door Repair. All rights reserved.
            Serving Alberton &amp; Johannesburg since 2008.
          </p>
        </div>
      </div>
    </footer>
  );
}
