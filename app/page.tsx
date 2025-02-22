"use client";

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";
import { useEffect } from "react";

export default function Home() {
  function scrollToHash(attempts = 0, maxAttempts = 50) {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < maxAttempts) {
        // Try again in 100ms if element not found
        setTimeout(() => scrollToHash(attempts + 1), 100);
      }
    }
  }

  // Use in useEffect
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <>
      <Hero />
      <SectionDivider />
      <Contact />
    </>
  );
}
