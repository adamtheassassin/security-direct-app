"use client";

import React, { useState } from "react";
import QuoteModal from "./QuoteModal";

// ── CUSTOM SVG ICON COMPONENTS FOR LOCAL LANDMARKS (FOR SMALL GRID TABS) ──

const ClockTowerIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
    <path d="M12 7v5l3.5 2" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 3v1M12 20v1M3 12h1M20 12h1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FernLeafIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22C6 18 18 6 22 2" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 13C8 10 9 7 11 5" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 9C10 8 7 9 5 11" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 17C12 14 13 11 15 9" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 13C14 12 11 13 9 15" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 21C16 18 17 15 19 13" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21 17C18 16 15 17 13 19" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const GardenBenchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14a5 5 0 005-5c0-3.5-3-6-5-6s-5 2.5-5 6a5 5 0 005 5z" strokeWidth="1.5" />
    <path d="M12 14v6" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 17h10M8 17v3M16 17v3M6 20h12" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AntelopeKoppieIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20c4-1.5 8-3 14-3s6 1.5 6 3" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 13h4l2-3.5V6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13v4M12 13v4M14 13.5v3.5" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 6l1-3M14.5 5.5l.5-2" strokeWidth="1" strokeLinecap="round" />
    <circle cx="14" cy="7.5" r="0.5" fill="currentColor" />
  </svg>
);

const SportsShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9h6M9 6v8M15 6v8M12 14v4" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AirplaneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14.5L12 11l8 6.5V15l-8-8.5-5 1.5-3-1z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 20h20M5 20l3-3M19 20l-3-3" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BerriesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c0 4-4 6-4 10" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 6c2 1 4 3 4 6" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="15" r="3" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="14" r="3" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="19" r="2.5" strokeWidth="1.5" fill="none" />
  </svg>
);

const GolfValleyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 18c4-2 7-4 12-4s6 2 8 4" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 21c4-1 9-2 14-2s4 1 6 2" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 6v10" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 6l-5 2.5 5 2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="17" r="1" fill="currentColor" />
  </svg>
);

const CliffHouseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22L22 10" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 22v-8M12 22v-11M18 22v-13" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M12 7l4-3 4 3v4h-8V7z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 11v-2h2v2" strokeWidth="1" />
  </svg>
);

const MedicalShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8v8M8 12h8" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const AcaciaTreeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8c1-1 4-1.5 8-1.5s7 .5 8 1.5c.5.5-1 1-2 1H6c-1 0-2.5-.5-2-1z" strokeWidth="1.5" fill="none" />
    <path d="M6 11c2-.5 4-1 6-1s4 .5 6 1" strokeWidth="1.5" />
    <path d="M12 19v-8M12 15l-4-3M12 14l5-3.5" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 19h18" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SailboatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 17c3-1 5 1 8 0s5-2 8 0 2 1 4 0" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 20c3-1 5 1 8 0s5-2 8 0 2 1 4 0" strokeWidth="1" strokeLinecap="round" />
    <path d="M6 14l1.5 3h9l1.5-3H6z" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <path d="M11.5 5v9M11.5 5L7 13h4.5M12.5 6l3.5 7h-3.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MountainTrailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20l6-10 5 8 6-12 4 14H3z" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <path d="M9 20c1-3 3-4 2-7" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MosqueIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5c-3 0-5 3.5-5 7v4h10v-4c0-3.5-2-7-5-7z" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <path d="M12 5V2" strokeWidth="1.5" />
    <path d="M14 2.5a2 2 0 11-3 0" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M2 20c5-1 15-1 20 0" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 16v-2M12 16v-3M14 16v-2" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Map pin for active details card
const MapPinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// ── SUBURB DATA INTERFACE & ARRAY ──

interface Suburb {
  id: string;
  name: string;
  region: "alberton" | "jhb";
  landmark: string;
  description: string;
  image: string;
  icon: (props: { className?: string }) => React.ReactNode;
}

const suburbsData: Suburb[] = [
  // Alberton Suburbs
  {
    id: "alberton-central",
    name: "Alberton Central",
    region: "alberton",
    landmark: "Alberton City & Town Hall Clock",
    description: "Serving the bustling commercial and residential heart of Alberton. Whether it's securing businesses near Alberton City or repairing gate motors for central apartments, we offer fast same-day response.",
    image: "/images/areas/alberton_central.png",
    icon: (props) => <ClockTowerIcon {...props} />,
  },
  {
    id: "brackenhurst",
    name: "Brackenhurst",
    region: "alberton",
    landmark: "Brackenhurst schools & green avenues",
    description: "From Bracken High to the quiet residential avenues, we keep Brackenhurst homes secure. We specialize in Centurion gate motor repairs and electric fence upgrades for local families.",
    image: "/images/areas/brackenhurst.png",
    icon: (props) => <FernLeafIcon {...props} />,
  },
  {
    id: "brackendowns",
    name: "Brackendowns",
    region: "alberton",
    landmark: "Bracken Gardens & neighborhood parks",
    description: "A peaceful residential area where perimeter security is key. We provide regular maintenance on swing and sliding gate motors and repair fence lines around Brackendowns.",
    image: "/images/areas/brackendowns.png",
    icon: (props) => <GardenBenchIcon {...props} />,
  },
  {
    id: "meyersdal",
    name: "Meyersdal",
    region: "alberton",
    landmark: "Meyersdal Eco Estate & wildlife Koppie",
    description: "Serving the secure estates and residences near the Eco Estate. We understand the high security standards of Meyersdal homes and maintain gate motors, CCTV, and backup batteries.",
    image: "/images/areas/meyersdal_estate.png",
    icon: (props) => <AntelopeKoppieIcon {...props} />,
  },
  {
    id: "randhart",
    name: "Randhart",
    region: "alberton",
    landmark: "Randhart sports clubs & schools",
    description: "Keeping active Randhart families secure. We handle emergency gate repairs and fit battery backups so you're never locked out of your property near the local school and sports clubs.",
    image: "/images/areas/randhart.png",
    icon: (props) => <SportsShieldIcon {...props} />,
  },
  {
    id: "verwoerdpark",
    name: "Verwoerdpark",
    region: "alberton",
    landmark: "Rand Airport runways & Alberton Dam",
    description: "Close to Rand Airport and the Alberton Dam. We've been fixing gate motors and securing properties in Verwoerdpark for over 15 years, ensuring reliability during load shedding.",
    image: "/images/areas/verwoerdpark_dam.png",
    icon: (props) => <AirplaneIcon {...props} />,
  },
  {
    id: "mayberry-park",
    name: "Mayberry Park",
    region: "alberton",
    landmark: "Residential parks & sweet berry avenues",
    description: "A quiet, tight-knit suburb where home security matters. We assist Mayberry Park residents with affordable gate motor services, battery replacements, and security checks.",
    image: "/images/areas/mayberry_park.png",
    icon: (props) => <BerriesIcon {...props} />,
  },
  // Johannesburg South & East
  {
    id: "glenvista",
    name: "Glenvista",
    region: "jhb",
    landmark: "Glenvista Country Club & Golf Course",
    description: "Hilly terrains demand more power from gate motors. We install heavy-duty Centurion motors and repair sliding gates on Glenvista's steep driveways.",
    image: "/images/areas/glenvista_golf.png",
    icon: (props) => <GolfValleyIcon {...props} />,
  },
  {
    id: "bassonia",
    name: "Bassonia",
    region: "jhb",
    landmark: "Bassonia Koppie & cliffside mansions",
    description: "Perched on the steep cliffs and ridges, Bassonia gates work under high mechanical stress. We calibrate motors to handle steep angles and secure these premium properties.",
    image: "/images/areas/bassonia_cliffs.png",
    icon: (props) => <CliffHouseIcon {...props} />,
  },
  {
    id: "mulbarton",
    name: "Mulbarton",
    region: "jhb",
    landmark: "Netcare Mulbarton Hospital",
    description: "Located near the Netcare hospital and local reserves. We provide prompt security system installations and gate repairs to keep Mulbarton families safe.",
    image: "/images/areas/mulbarton.png",
    icon: (props) => <MedicalShieldIcon {...props} />,
  },
  {
    id: "kibler-park",
    name: "Kibler Park",
    region: "jhb",
    landmark: "Klipriviersberg Nature Reserve",
    description: "Right on the edge of the beautiful Klipriviersberg Nature Reserve. We protect properties bordering the reserve with high-tension electric fencing and solar gate backups.",
    image: "/images/areas/kibler_reserve.png",
    icon: (props) => <AcaciaTreeIcon {...props} />,
  },
  {
    id: "germiston",
    name: "Germiston",
    region: "jhb",
    landmark: "Victoria Lake (Germiston Lake)",
    description: "From Germiston Lake to industrial sectors. We provide heavy-duty commercial and residential gate repairs, ensuring fast call-outs to Germiston and surrounds.",
    image: "/images/areas/germiston_lake.png",
    icon: (props) => <SailboatIcon {...props} />,
  },
  {
    id: "mondeor",
    name: "Mondeor",
    region: "jhb",
    landmark: "Mondeor hills & reserve trails",
    description: "Tucked in the south hills. We help Mondeor homeowners maintain gate motors, secure their perimeters, and restore power to backup batteries after load-shedding cycles.",
    image: "/images/areas/mondeor_hills.png",
    icon: (props) => <MountainTrailIcon {...props} />,
  },
  {
    id: "winchester-hills",
    name: "Winchester Hills",
    region: "jhb",
    landmark: "Winchester Mosque & high ridges",
    description: "From the high ridges looking over the south. Winchester Hills properties feature complex gate entries that we service, repair, and secure with modern intercom systems.",
    image: "/images/areas/winchester_mosque.png",
    icon: (props) => <MosqueIcon {...props} />,
  },
];

interface AreasServedProps {
  mode?: "general" | "repair";
  customTitle?: string;
  customSubtitle?: string;
}

export default function AreasServed({
  mode = "general",
  customTitle,
  customSubtitle,
}: AreasServedProps) {
  const [activeRegion, setActiveRegion] = useState<"alberton" | "jhb">("alberton");
  const [selectedAreaId, setSelectedAreaId] = useState<string>("alberton-central");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Switch region tab and auto-select the first suburb in that region
  const handleRegionChange = (region: "alberton" | "jhb") => {
    setActiveRegion(region);
    const firstOfRegion = suburbsData.find((s) => s.region === region);
    if (firstOfRegion) {
      setSelectedAreaId(firstOfRegion.id);
    }
  };

  const visibleSuburbs = suburbsData.filter((s) => s.region === activeRegion);
  const selectedSuburb =
    suburbsData.find((s) => s.id === selectedAreaId) || suburbsData[0];

  // Title configurations based on page
  const defaultTitle =
    mode === "repair"
      ? "Gate Motor Repairs in Your Neighborhood"
      : "Professional Security in Your Neighborhood";
  const defaultSubtitle =
    mode === "repair"
      ? "We are proud to provide fast, same-day gate motor repairs and diagnostic services across Alberton and Johannesburg. Choose your suburb below to check availability and book."
      : "We are proud to bring reliable, prompt, and SABS-certified gate motor, electric fencing, and access control installations directly to your doorstep. Select your area to learn more.";

  const title = customTitle || defaultTitle;
  const subtitle = customSubtitle || defaultSubtitle;

  return (
    <section className="py-20" style={{ backgroundColor: "#f8f7f4" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* ── LEFT DETAIL CARD (DYNAMIC SCENERY BACKGROUND & DATA) ── */}
          <div className="lg:col-span-5 flex flex-col h-full justify-center">
            <div 
              className="rounded-3xl text-white shadow-xl border border-white/5 relative overflow-hidden flex flex-col justify-end aspect-[4/5] min-h-[480px] max-w-md mx-auto w-full transition-all duration-500 bg-cover bg-center bg-no-repeat p-4 sm:p-6"
              style={{ backgroundImage: `url('${selectedSuburb.image}')` }}
            >
              
              {/* Dark overlay at the bottom for smooth blending and readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent pointer-events-none" />

              {/* Text overlay card at the bottom */}
              <div className="bg-white text-navy rounded-2xl p-6 shadow-2xl border border-gray-100/50 relative z-10 w-full">
                <span className="text-[10px] font-bold text-blue uppercase tracking-widest mb-1.5 flex items-center gap-1">
                  <MapPinIcon className="w-3 h-3 text-blue" />
                  Landmark: {selectedSuburb.landmark}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold font-display text-navy mb-2.5">
                  {selectedSuburb.name}
                </h3>
                
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5 min-h-[64px]">
                  {selectedSuburb.description}
                </p>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-blue hover:bg-blue-light text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  {mode === "repair" ? (
                    <>
                      Book Repair in {selectedSuburb.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Get a Quote for {selectedSuburb.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT ACCORDION/GRID TABS ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header info */}
            <div className="mb-8">
              <span className="bg-blue-pale text-blue font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full w-fit mb-4 inline-block">
                Areas We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mb-4 leading-tight">
                {title.split("In Your Neighborhood")[0]}
                <span className="text-blue">In Your Neighborhood</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
                {subtitle}
              </p>
            </div>

            {/* Region Toggle Tabs */}
            <div className="flex p-1 bg-gray-200/60 backdrop-blur-sm rounded-xl mb-6 w-fit border border-gray-300/30">
              <button
                onClick={() => handleRegionChange("alberton")}
                className={`py-2.5 px-5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeRegion === "alberton"
                    ? "bg-white text-navy shadow-sm"
                    : "text-gray-500 hover:text-navy font-semibold"
                }`}
              >
                Alberton &amp; Surrounds
              </button>
              <button
                onClick={() => handleRegionChange("jhb")}
                className={`py-2.5 px-5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeRegion === "jhb"
                    ? "bg-white text-navy shadow-sm"
                    : "text-gray-500 hover:text-navy font-semibold"
                }`}
              >
                Johannesburg South &amp; East
              </button>
            </div>

            {/* Suburb Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {visibleSuburbs.map((suburb) => {
                const isSelected = suburb.id === selectedAreaId;
                return (
                  <button
                    key={suburb.id}
                    onClick={() => setSelectedAreaId(suburb.id)}
                    className={`flex items-center gap-3.5 p-4 rounded-xl border text-left w-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-white border-blue shadow-md ring-2 ring-blue/10"
                        : "bg-white border-gray-100 hover:border-blue/30 hover:shadow-sm"
                    }`}
                  >
                    {/* Small Icon Container */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? "bg-blue text-white"
                          : "bg-gray-50 text-gray-400 group-hover:text-blue"
                      }`}
                    >
                      {suburb.icon({ className: "w-5 h-5" })}
                    </div>

                    {/* Suburb Name Only (Landmark subtext removed) */}
                    <div>
                      <span className="font-bold text-sm text-navy block leading-tight">
                        {suburb.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Phone help link at the bottom */}
            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <p className="text-gray-400 text-xs italic">
                Don't see your suburb listed? We cover most areas in Johannesburg South and East. 
                {" "}<a href="tel:0824981272" className="text-blue hover:underline font-semibold not-italic">Call 082 498 1272</a> to confirm coverage.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </section>
  );
}
