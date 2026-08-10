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
  return (
    <>
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
