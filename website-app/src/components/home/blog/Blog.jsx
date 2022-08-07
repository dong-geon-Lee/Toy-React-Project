import React from "react";
import Blogdata from "./Blogdata";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";

const Blog = () => {
  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>

          <div className="contain grid topMargin">
            {Blogdata.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>

                <div className="text">
                  <span>{val.date}</span>
                  <h2>{val.title}</h2>
                  <a href="/">
                    Read More <KeyboardDoubleArrowRight className="icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
