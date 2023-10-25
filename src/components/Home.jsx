import React from "react";
import Hero from "./Hero";
import OurCollection from "./OurCollection";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div className="mt-12">
      <Hero />
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
};

export default Home;
