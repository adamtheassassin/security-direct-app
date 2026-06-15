import { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { buildBusinessJsonLd } from "@/lib/nap";

export const metadata: Metadata = {
  title: "Contact Us | Security Direct | Gate Motors & Electric Fencing Alberton",
  description:
    "Get in touch with Security Direct. Call 082 498 1272 or WhatsApp us for gate motor installation, repairs, electric fencing, and CCTV in Alberton and Johannesburg.",
  keywords:
    "contact security direct, gate motor repair contact, electric fence installer phone, Security Direct Alberton contact",
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBusinessJsonLd({ url: "https://securitydirect.co.za/contact-us" })
          ),
        }}
      />
      <Header />
      <main className="flex-grow pt-16">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
