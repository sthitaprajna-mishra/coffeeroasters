import React from "react";

import coffeeBeanIcon from "../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../assets/home/desktop/icon-gift.svg";
import truckIcon from "../assets/home/desktop/icon-truck.svg";

const WhyChooseUs = () => {
  return (
    <>
      <div className="border border-transparent bg-cover bg-desktopWhyChooseUs md:pb-60 lg:pb-0">
        <div className="my-20 pb-20 text-center mx-auto space-y-10">
          <h1 className="text-lightCream text-4xl font-bold font-fraunces w-fit mx-auto">
            Why choose us?
          </h1>
          <p className="font-barlow md:w-3/5 lg:w-2/5 mx-auto text-lightCream">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>
      <div className="flex md:flex-col lg:flex-row gap-x-8 -mt-20 mx-10 md:-mt-80 lg:-mt-20">
        <div className="bg-darkCyan rounded-lg pt-10 pb-10 md:flex md:items-center md:mb-10 lg:text-center lg:pt-20 lg:space-y-16 lg:block">
          <div className="mx-auto w-fit">
            <img src={coffeeBeanIcon} alt="coffeeBeanIcon" />
          </div>
          <div className="space-y-8 md:w-3/5 lg:w-full">
            <h2 className="text-lightCream text-2xl font-bold font-fraunces">
              Best quality
            </h2>
            <p className="text-lightCream font-barlow md:pr-10 lg:pr-0 lg:w-3/4 lg:mx-auto">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className="bg-darkCyan rounded-lg pt-10 pb-10 md:flex md:items-center md:mb-10 lg:text-center lg:pt-20 lg:space-y-16 lg:block">
          <div className="mx-auto w-fit">
            <img src={giftIcon} alt="giftIcon" />
          </div>
          <div className="space-y-8 md:w-3/5 lg:w-full">
            <h2 className="text-lightCream text-2xl font-bold font-fraunces">
              Exclusive benefits
            </h2>
            <p className="text-lightCream font-barlow md:pr-10 lg:pr-0 lg:w-3/4 lg:mx-auto">
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </div>
        <div className="bg-darkCyan rounded-lg pt-10 pb-10 md:flex md:items-center md:mb-10 lg:text-center lg:pt-20 lg:space-y-16 lg:block">
          <div className="mx-auto w-fit mt-2">
            <img src={truckIcon} alt="truckIcon" />
          </div>
          <div className="pt-3 space-y-8  md:w-3/5 lg:w-full">
            <h2 className="text-lightCream text-2xl font-bold font-fraunces">
              Free shipping
            </h2>
            <p className="text-lightCream font-barlow md:pr-10 lg:pr-0 lg:w-3/4 lg:mx-auto">
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
