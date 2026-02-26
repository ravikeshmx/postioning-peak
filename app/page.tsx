import Hero from "./components/Hero";
import NotAnAgency from "./components/NotAnAgency";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <NotAnAgency />
        <WhatWeDo />
        <WhoWeWorkWith />
        <Services />
        <HowItWorks />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
