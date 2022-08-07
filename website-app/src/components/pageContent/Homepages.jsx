import React from "react";
import About from "../home/about/About";
import Branding from "../home/Branding";
import Home from "../home/homes/Home";
import Service from "../home/services/Service";
import Skill from "../home/Skill";
import Wrapper from "../home/Wrapper";

const Homepages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
      <Skill />
    </>
  );
};

export default Homepages;
