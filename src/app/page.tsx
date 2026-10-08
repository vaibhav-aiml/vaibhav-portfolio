import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import TrustStrip from "@/components/ui/TrustStrip";
import MandalaDivider from "@/components/ui/MandalaDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
        <TrustStrip />
      </div>
      <MandalaDivider />
      <About />
      <MandalaDivider />
      <Projects />
      <MandalaDivider />
      <Experience />
      <MandalaDivider />
      <Skills />
      <MandalaDivider />
      <Achievements />
      <Services />
      <MandalaDivider />
      <Contact />
      <Footer />
    </>
  );
}
