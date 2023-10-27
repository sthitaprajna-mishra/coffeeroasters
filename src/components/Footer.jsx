import React from "react";
import logowhite from "../assets/logo-white.png";

import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-darkGreyBlue flex flex-col lg:flex-row px-16 py-12 justify-between items-center mt-32 mb-16">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div>
          <img
            className="lg:w-[237px] lg:h-[27px]"
            src={logowhite}
            alt="logowhite"
          />
        </div>
        <div className="uppercase font-barlow text-grey font-bold text-xs mt-8 lg:mt-2">
          <ul className="flex flex-col text-center space-y-4 md:space-y-0 md:text-left md:flex-row md:space-x-8">
            <li className="hover:text-lightCream hover:cursor-pointer transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-lightCream hover:cursor-pointer transition-all">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-lightCream hover:cursor-pointer transition-all">
              <Link to="/plan">Create your plan</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex space-x-8 mt-16 lg:mt-0">
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
