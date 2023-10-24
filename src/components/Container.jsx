import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const Container = () => {
  return (
    <div className="col-span-12 mt-12 mx-8 md:mx-16 lg:mx-20">
      <Navbar />
      <Home />
    </div>
  );
};

export default Container;
