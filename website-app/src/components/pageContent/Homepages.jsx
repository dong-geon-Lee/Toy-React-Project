import React from "react";
import About from "../home/about/About";
import Branding from "../home/Branding";
import Home from "../home/homes/Home";
import Service from "../home/services/Service";

const Homepages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Service />
    </>
  );
};

export default Homepages;
