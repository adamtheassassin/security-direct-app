import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.png", alt: "Security installation" },
  { src: "/images/gallery-2.png", alt: "Security system setup" },
  { src: "/images/gallery-3.jpg", alt: "Professional security work" },
  { src: "/images/gate-motor-feature.jpg", alt: "Gate motor installation" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p
            style={{ color: "#094B92" }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Our Work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#001d3b",
            }}
            className="text-3xl md:text-4xl font-bold"
          >
            Exceptional Workmanship,
            <br />
            Unmatched Service
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1/1" : "1/1" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(9,75,146,0.4)" }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">
            We only use the highest-quality products available to guarantee your
            security needs are met with excellence.
          </p>
          <p
            className="font-bold text-sm uppercase tracking-widest"
            style={{ color: "#094B92" }}
          >
            Keeping Homes and Businesses Safe Since 2008
          </p>
        </div>
      </div>
    </section>
  );
}
