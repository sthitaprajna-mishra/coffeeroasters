import React from "react";

const Hero = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-mobileHeroImage rounded-xl md:bg-tabletHeroImage lg:rounded-lg lg:bg-desktopHeroImage">
      <div className="w-full md:w-3/4 lg:w-1/2 py-40 md:py-24 sm:px-8 md:pl-16 md:pr-0">
        <h1 className="text-4xl px-4 md:px-0 md:text-6xl text-center md:text-left lg:text-7xl leading-none tracking-wide font-black font-fraunces text-lightCream">
          Great coffee made simple.
        </h1>
        <div className="mt-12 px-8 text-center md:px-0 md:text-left lg:w-5/6">
          <p className="font-barlow text-lightCream">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
        </div>
        <div
          className="mt-8 mx-auto md:mx-0 bg-darkCyan w-fit px-6 py-3 text-lg font-fraunces text-lightCream font-bold rounded-lg 
        hover:cursor-pointer transition-all hover:bg-lightCyan"
        >
          <button>Create your plan</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
