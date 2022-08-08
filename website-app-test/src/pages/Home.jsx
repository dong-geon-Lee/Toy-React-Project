import React from "react";
import About from "../components/About/About.jsx";
import Blog from "../components/Blog/Blog.jsx";
import Branding from "../components/Branding/Branding.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Join from "../components/Join/Join.jsx";
import Main from "../components/Main/Main.jsx";
import Product from "../components/Product/Product.jsx";
import Recode from "../components/Recode/Recode.jsx";
import Skill from "../components/Skill/Skill.jsx";
import Work from "../components/Work/Work.jsx";

const Home = () => {
  return (
    <>
      <Main />
      <Branding />
      <About />
      <Product />
      <Join />
      <Skill />
      <Recode />
      <Work />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
