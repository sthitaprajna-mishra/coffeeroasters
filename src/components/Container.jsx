import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

const Container = () => {
  return (
    <div className="col-span-12 mt-12 mx-8 md:mx-16 lg:mx-20">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Container;
