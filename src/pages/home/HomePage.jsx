import React from "react";

import HeroSection from "../../components/homepage/HeroSection";
import LastCTA from "../../components/homepage/LastCTA";
import FAQ from "../../components/homepage/FAQ";
import PricingAndPlans from "../../components/homepage/PricingAndPlans";
import Testimonial from "../../components/homepage/Testimonial";
import MoreFeatures from "../../components/homepage/MoreFeatures";
import Features from "../../components/homepage/Features";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <MoreFeatures />
      <Testimonial />
      <PricingAndPlans />
      <FAQ />
      <LastCTA />
    </>
  );
};

export default HomePage;
