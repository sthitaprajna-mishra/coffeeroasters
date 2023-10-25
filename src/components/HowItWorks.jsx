import React from "react";

const HowItWorks = () => {
  return (
    <div className="mt-6">
      <div className="font-fraunces font-bold text-2xl text-grey">
        How it works
      </div>
      <div className="grid grid-cols-12 mt-16 ml-4">
        <div className="col-span-4 pb-20 px-8 border border-t-4 border-t-paleOrange relative">
          <div className="w-4 p-3 rounded-full border-2 border-darkCyan absolute -top-4 -left-4 bg-lightCream"></div>
        </div>
        <div className="col-span-4 pb-20 px-8 border border-t-4 border-t-paleOrange relative">
          <div className="w-4 p-3 rounded-full border-2 border-darkCyan absolute -top-4 -left-4 bg-lightCream"></div>
        </div>
        <div className="col-span-4 pb-20 px-8 border relative">
          <div className="w-4 p-3 rounded-full border-2 border-darkCyan absolute -top-4 -left-4 bg-lightCream"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
