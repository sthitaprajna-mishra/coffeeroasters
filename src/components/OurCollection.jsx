import React from "react";

import imageGranEspresso from "../assets/home/desktop/image-gran-espresso.png";
import imagePlanalto from "../assets/home/desktop/image-planalto.png";
import imagePiccollo from "../assets/home/desktop/image-piccollo.png";
import imageDanche from "../assets/home/desktop/image-danche.png";

const OurCollection = () => {
  return (
    <div className="my-40">
      <div className="text-center">
        <h1
          className="text-4xl md:text-8xl lg:text-[10rem] font-fraunces tracking-wider font-black bg-clip-text 
        text-transparent bg-gradient-to-b from-grey to-lightCream border-1 border-red-500"
        >
          our collection
        </h1>
      </div>
      <div className="grid grid-cols-12 mt-10 md:-mt-10">
        <div className="col-span-12 space-y-6 md:space-y-12 mb-12 md:mb-0 md:col-span-3">
          <div>
            <img
              className="mx-auto"
              src={imageGranEspresso}
              alt="imageGranEspresso"
            />
          </div>
          <div className="text-center space-y-6 w-4/5 mx-auto">
            <h2 className="text-2xl font-bold font-fraunces">Gran Espresso</h2>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
        </div>
        <div className="col-span-12 space-y-6 md:space-y-12 mb-12 md:mb-0 md:col-span-3">
          <div>
            <img className="mx-auto" src={imagePlanalto} alt="imagePlanalto" />
          </div>
          <div className="text-center  space-y-6">
            <h2 className="text-2xl font-bold font-fraunces">Planalto</h2>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
        </div>
        <div className="col-span-12 space-y-6 md:space-y-12 mb-12 md:mb-0 md:col-span-3">
          <div>
            <img className="mx-auto" src={imagePiccollo} alt="imagePiccollo" />
          </div>
          <div className="text-center space-y-6 w-4/5 mx-auto">
            <h2 className="text-2xl font-bold font-fraunces">Piccollo</h2>
            <p className="font-barlow">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
        </div>
        <div className="col-span-12 space-y-6 md:space-y-12 mb-12 md:mb-0 md:col-span-3">
          <div>
            <img className="mx-auto" src={imageDanche} alt="imageDanche" />
          </div>
          <div className="text-center space-y-6 w-4/5 mx-auto">
            <h2 className="text-2xl font-bold font-fraunces">Danche</h2>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
