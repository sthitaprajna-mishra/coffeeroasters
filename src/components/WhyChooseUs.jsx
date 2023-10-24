import React from "react";

import coffeeBeanIcon from "../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../assets/home/desktop/icon-gift.svg";
import truckIcon from "../assets/home/desktop/icon-truck.svg";

const WhyChooseUs = () => {
  return (
    <>
      <div className="border border-red-500 bg-desktopWhyChooseUs">
        <div className="my-20 pb-20 text-center mx-auto space-y-10">
          <h1 className="text-lightCream text-4xl font-bold font-fraunces w-fit mx-auto">
            Why choose us?
          </h1>
          <p className="font-barlow w-2/5 mx-auto text-lightCream">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>
      <div className="flex gap-x-8 -mt-20 mx-10">
        <div className="bg-darkCyan text-center rounded-lg pt-20 pb-10 space-y-16">
          <div className="mx-auto w-fit">
            <img src={coffeeBeanIcon} alt="coffeeBeanIcon" />
          </div>
          <div className="space-y-8">
            <h2 className="text-lightCream text-2xl font-bold font-fraunces">
              Best quality
            </h2>
            <p className="text-lightCream font-barlow mx-auto w-3/4">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className="bg-darkCyan text-center rounded-lg pt-20 pb-10 space-y-16">
          <div className="mx-auto w-fit">
            <img src={giftIcon} alt="giftIcon" />
          </div>
          <div className="space-y-8">
            <h2 className="text-lightCream text-2xl font-bold font-fraunces">
              Exclusive benefits
            </h2>
            <p className="text-lightCream font-barlow mx-auto w-3/4">
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </div>
        <div className="bg-darkCyan text-center rounded-lg pt-20 pb-10 space-y-16">
          <div className="mx-auto w-fit mt-2">
            <img src={truckIcon} alt="truckIcon" />
          </div>
          <div className="pt-3 space-y-8">
            <h2 className="text-lightCream text-2xl font-bold font-fraunces">
              Free shipping
            </h2>
            <p className="text-lightCream font-barlow mx-auto w-3/4">
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
