import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Services from "@/components/Services";
import MonthlySpecial from "@/components/MonthlySpecial";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import AreasServed from "@/components/AreasServed";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
