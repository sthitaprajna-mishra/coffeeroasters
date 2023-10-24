import React from "react";
import dekstopHeroImage from "../assets/home/desktop/image-hero-coffeepress.jpg";
import tabletHeroImage from "../assets/home/tablet/image-hero-coffeepress.jpg";
import mobileHeroImage from "../assets/home/mobile/image-hero-coffeepress.jpg";

const Home = () => {
  return (
    <div className="border-1 h-full border-green-500 mt-12 bg-cover bg-no-repeat bg-mobileHeroImage rounded-2xl md:rounded-xl md:bg-tabletHeroImage lg:rounded-lg lg:bg-desktopHeroImage">
      <div className="md:w-3/4 lg:w-1/2 py-16 pl-16">
        <h1 className="md:text-6xl lg:text-7xl leading-none font-black font-fraunces text-lightCream">
          Great coffee made simple.
        </h1>
      </div>
    </div>
  );
};

export default Home;
