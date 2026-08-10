import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Origin from "@/components/Origin";
import Craft from "@/components/Craft";
import Network from "@/components/Network";
import Facility from "@/components/Facility";
import Process from "@/components/Process";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Delpo Ltd",
    "url": "https://www.delpo.online",
    "logo": "https://www.delpo.online/images/logo-delpo.png",
    "description": "OEM manufacturing and quality-control partner for technical activewear brands.",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hong Kong",
      "addressCountry": "HK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@delpo.online"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Hero />
      <Marquee />
      <Origin />
      <div className="flag-divider dark" />
      <Craft />
      <Network />
      <div className="flag-divider dark" />
      <Facility />
      <Process />
      <div className="flag-divider dark" />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
}
