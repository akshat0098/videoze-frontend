import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Action from "../Component/Action";
import FeaturesSection from "../Component/FeaturesSection";
import SmartDiscovery from "../Component/SmartDiscovery";
import HowItWorks from "../Component/HowItWorks";
import PricingPlans from "../Component/PricingPlans";
import Testimonials from "../Component/Testimonials";
import FAQ from "../Component/FAQ";
import Footer from "../Component/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      
      <main className="flex flex-col space-y-16">
        <Hero />
        <Action />
        <FeaturesSection />
        <SmartDiscovery />
        <HowItWorks />
        <PricingPlans />
        <Testimonials />
        <FAQ />
      </main>

    </div>
  );
};


export default LandingPage;
