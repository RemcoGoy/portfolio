"use client";

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";
import { useEffect, useCallback } from "react";

export default function Home() {
  const scrollToHash = useCallback((attempts = 0, maxAttempts = 50) => {
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
  }, []); // Empty dependency array since this function doesn't depend on any props or state

  // Use in useEffect
  useEffect(() => {
    scrollToHash();
  }, [scrollToHash]);

  return (
    <>
      <Hero />
      <SectionDivider />
      <Contact />
    </>
  );
}
