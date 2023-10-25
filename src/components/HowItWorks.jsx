import React from "react";

const HowItWorks = () => {
  return (
    <div className="mt-6">
      <div className="font-fraunces text-center md:text-left font-bold text-2xl text-grey">
        How it works
      </div>
      <div className="grid grid-cols-12 md:mt-16 ml-4">
        <div className="col-span-12 md:col-span-4 md:border-t-4 border-t-paleOrange relative">
          <div className="hidden md:block w-4 p-3 rounded-full border-2 border-darkCyan absolute -top-4 -left-4 bg-lightCream"></div>
          <div className="flex flex-col text-center md:text-left -ml-4 mt-24 space-y-12">
            <div className="text-paleOrange text-7xl font-bold font-fraunces">
              01
            </div>
            <div className="font-fraunces text-4xl font-bold md:w-2/3">
              Pick your coffee
            </div>
            <div className="font-barlow md:w-11/12">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:border-t-4 border-t-paleOrange relative">
          <div className="hidden md:block w-4 p-3 rounded-full border-2 border-darkCyan absolute -top-4 -left-4 bg-lightCream"></div>
          <div className="flex flex-col text-center md:text-left -ml-2 mt-24 space-y-12">
            <div className="text-paleOrange text-7xl font-bold font-fraunces">
              02
            </div>
            <div className="font-fraunces text-4xl font-bold md:w-2/3">
              Choose the frequency
            </div>
            <div className="font-barlow md:w-11/12">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 relative">
          <div className="hidden md:block w-4 p-3 rounded-full border-2 border-darkCyan absolute -top-4 -left-4 bg-lightCream"></div>
          <div className="flex flex-col text-center md:text-left -ml-2 mt-24 pt-1 space-y-12">
            <div className="text-paleOrange text-7xl font-bold font-fraunces">
              03
            </div>
            <div className="font-fraunces text-4xl font-bold md:w-2/3">
              Receive and enjoy!
            </div>
            <div className="font-barlow md:w-11/12">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
