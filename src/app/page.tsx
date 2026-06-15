import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Services from "@/components/Services";
import MonthlySpecial from "@/components/MonthlySpecial";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import AreasServed from "@/components/AreasServed";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { buildBusinessJsonLd } from "@/lib/nap";

export default function Home() {
  const jsonLd = buildBusinessJsonLd();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Reviews />
        <About />
        <Services />
        <MonthlySpecial />
        <WhyChooseUs />
        <Gallery />
        <AreasServed />
        <ContactSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

