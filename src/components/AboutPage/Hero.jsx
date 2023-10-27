import React from "react";

const Hero = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-mobileAboutHeroImage rounded-xl md:bg-tabletAboutHeroImage lg:rounded-lg lg:bg-desktopAboutHeroImage">
      <div className="w-full md:w-3/4 lg:w-1/2 py-40 md:py-24 sm:px-8 md:pl-16 md:pr-0">
        <h1 className="text-4xl px-4 md:px-0 text-center md:text-left leading-none tracking-wide font-black font-fraunces text-lightCream">
          About Us
        </h1>
        <div className="mt-12 px-8 text-center md:px-0 md:text-left lg:w-5/6">
          <p className="font-barlow text-lightCream">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
