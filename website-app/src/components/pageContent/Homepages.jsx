import React from "react";
import About from "../home/about/About";
import Branding from "../home/Branding";
import Home from "../home/homes/Home";
import Service from "../home/services/Service";
import Skill from "../home/Skill";
import Work from "../home/work/Work";
import Wrapper from "../home/Wrapper";
import WrapperOne from "../home/WrapperOne";

const Homepages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Work />
    </>
  );
};

export default Homepages;
