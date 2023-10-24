import React from "react";
import logo from "../assets/shared/desktop/logo.svg";
import hamburgericon from "../assets/shared/mobile/icon-hamburger.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center border-1 border-red-500">
        <div>
          <img src={logo} />
        </div>

        <div className="block md:hidden">
          <img src={hamburgericon} />
        </div>
        <div className="hidden uppercase font-barlow text-grey font-bold text-xs md:block">
          <ul className="flex items-center space-x-4 tracking-wide">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Create your plan</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
