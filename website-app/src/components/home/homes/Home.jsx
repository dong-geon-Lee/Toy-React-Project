import React from "react";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src="./assets/home.png" alt="" />
            </div>
          </div>

          <div className="right topMargin just">
            <h1>
              I AM A <br /> WEB DESIGNER
            </h1>
            <div className="socialIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-youtube youtube"></i>
              <i className="fab fa-pinterest pinterest"></i>
              <i className="fab fa-dribbble dribble"></i>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab
              consectetur vel quam sunt velit corporis nam consequuntur,
              aliquid, esse ratione doloribus enim rem alias tempore non odio
              iusto cumque.
            </p>
            <button className="primary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
