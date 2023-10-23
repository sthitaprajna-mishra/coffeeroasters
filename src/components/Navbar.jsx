import React from "react";
import logo from "../assets/shared/desktop/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="mt-12 mx-16 col-span-12 h-fit flex justify-between items-center border-1 border-red-500">
        <div>
          <img src={logo} />
        </div>

        <div className="uppercase font-barlow text-grey font-bold text-xs">
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
