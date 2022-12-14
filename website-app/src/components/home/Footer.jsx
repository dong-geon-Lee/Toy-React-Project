import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1">
          <div className="box">
            <img src="./assets/logo1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              tempora necessitatibus incidunt illo, magnam sequi nemo illum iste
              commodi, non molestias labore quis inventore doloremque deleniti
              soluta quia excepturi eligendi?
            </p>
            <div className="socialIcon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter "></i>
              <i className="fab fa-youtube "></i>
            </div>
          </div>

          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div className="box">
            <h2>Recent Post</h2>

            <div className="text">
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span> 28 Feb 2022</span>
            </div>
            <div className="text">
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span> 28 Feb 2022</span>
            </div>
            <div className="text">
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span> 28 Feb 2022</span>
            </div>
          </div>

          <div className="box">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
              <label>Location:27 Division St, New York, NY 10002, USA</label>
            </div>

            <div className="icon">
              <i class="fa fa-phone"></i>
              <label>Phone:+44 014799584</label>
            </div>

            <div className="icon">
              <i class="fa fa-envelope"></i>
              <label>Email:support@fleja.com</label>
            </div>
          </div>
        </div>

        <div className="legal container">
          <p>Copyright @2022. All rights reserved.</p>
          <label htmlFor="">
            Design & Developed by <span>GorkCoder</span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
