import Hero from "./components/Hero";
import NotAnAgency from "./components/NotAnAgency";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <a href="#" className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
            POSITIONING <span className="text-[var(--accent)]">PEAK</span>
          </a>
          <div className="items-center gap-3 flex">
          <a
            href="#services"
            className="px-5 hidden md:block py-2.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-full hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#faq"
            className="px-5 hidden md:block py-2.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-full hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-300"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[var(--accent)] text-[var(--background)] font-medium rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300"
          >
            Book a Call
          </a>
          </div>
        </div>
      </header>
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
