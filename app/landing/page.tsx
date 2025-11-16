"use client";

import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CoverSection from "./CoverSection";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import "./style.css";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coverTitles = ["Explore Connections", "Next-Gen Interface", "Global Community", "Stay Connected Everywhere"];

  return (
    <div className="landingPage">
      <HeroSection scrollY={scrollY} />
      <FeaturesSection />
      <div style={{margin: '50px'}}></div>
      {coverTitles.map((title, i) => (
        <CoverSection key={i} scrollY={scrollY} title={title} index={i} />
      ))}
      <div style={{margin: '50px'}}></div>
      <PricingSection />
      <div style={{margin: '50px'}}></div>
      <TestimonialsSection />
      <div style={{margin: '50px'}}></div>
      <CTASection />
      {/* Keep the same CSS styles in pages/index.tsx or move to a global CSS */}
    </div>
  );
}
