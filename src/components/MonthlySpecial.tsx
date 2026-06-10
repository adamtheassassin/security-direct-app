import Image from "next/image";

export default function MonthlySpecial() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #001d3b 0%, #094B92 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="text-white order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-5 uppercase tracking-wide">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              This Month&apos;s Crazy Special
            </div>

            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white"
            >
              Swap your old Centurion D3 or D5 for the new D5 EVO Smart
            </h2>

            <p className="text-xl text-yellow-300 font-bold mb-4">
              Fully installed for R6 499 with nothing hidden.
            </p>

            <p className="text-blue-100 mb-8 leading-relaxed max-w-xl">
              You open and close your gate from your phone wherever you are, it runs quietly, and we handle the whole install for you. This covers Alberton and Johannesburg.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/+27824981272"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us Now
              </a>
              <a
                href="/gate-motor-installation"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors backdrop-blur-sm"
              >
                See All Specials
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gate-motor-d5-evo.png"
                alt="Centurion D5 EVO Smart gate motor"
                width={860}
                height={537}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Price tag overlay */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 font-black px-4 py-2 rounded-xl text-center shadow-lg rotate-3">
                <div className="text-xs uppercase tracking-wide">Special</div>
                <div className="text-2xl leading-none">R6 499</div>
                <div className="text-xs">installed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
