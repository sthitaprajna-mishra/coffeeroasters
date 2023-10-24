import React from "react";
import Hero from "./Hero";
import OurCollection from "./OurCollection";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="mt-12">
      <Hero />
      <OurCollection />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
