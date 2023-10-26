import React from "react";
import logo from "../assets/shared/desktop/logo.svg";
import hamburgericon from "../assets/shared/mobile/icon-hamburger.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} />
        </div>

        <div className="block md:hidden">
          <img src={hamburgericon} />
        </div>
        <div className="hidden uppercase font-barlow text-grey font-bold text-xs md:block">
          <ul className="flex items-center space-x-4 tracking-wider">
            <li className="hover:text-darkGreyBlue hover:cursor-pointer transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-darkGreyBlue hover:cursor-pointer transition-all">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-darkGreyBlue hover:cursor-pointer transition-all">
              <Link to="/plan">Create your plan</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
