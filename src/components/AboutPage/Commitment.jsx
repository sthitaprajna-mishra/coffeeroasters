import React from "react";
import desktopCommitment from "../../assets/about/desktop/image-commitment.jpg";
import tabletCommitment from "../../assets/about/tablet/image-commitment.jpg";
import mobileCommitment from "../../assets/about/mobile/image-commitment.jpg";

const Commitment = () => {
  return (
    <div className="mt-40 grid grid-cols-12 place-items-center text-center md:text-left md:space-x-6 lg:space-x-6">
      <div className="col-span-12 mb-12 md:mb-0 md:col-span-6">
        <img
          className="hidden lg:block rounded-lg"
          src={desktopCommitment}
          alt="desktopCommitment"
        />
        <img
          className="hidden md:block lg:hidden rounded-lg"
          src={tabletCommitment}
          alt="tabletCommitment"
        />
        <img
          className="block md:hidden rounded-lg"
          src={mobileCommitment}
          alt="mobileCommitment"
        />
      </div>
      <div className="col-span-12 md:col-span-6 my-auto space-y-12">
        <div className="font-fraunces font-bold text-4xl">Our commitment</div>
        <p className="font-barlow text-grey">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
  );
};

export default Commitment;
