import Features from "@/_components/Features";
import Hero from "@/_components/Hero";
import Offerings from "@/_components/Offerings";
import PricingSection from "@/_components/Pricing";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <Features />
      <Offerings />
      <PricingSection/>
    </div>
  );
}
