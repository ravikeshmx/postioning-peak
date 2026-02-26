"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight"
        >
          Positioning <span className="text-[var(--accent)]">Peak</span>
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
  );
}
