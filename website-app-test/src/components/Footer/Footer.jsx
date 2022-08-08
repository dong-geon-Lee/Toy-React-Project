import React from "react";
import {
  Container,
  Wrapper,
  CopyBox,
  GridBox,
  Left,
  Rigth,
  Center,
  End,
} from "./Footer";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <GridBox>
          <Left>
            <img src="./assets/logo1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              vel laudantium distinctio repellat iusto ratione inventore est
              incidunt dolorem perspiciatis voluptate, nesciunt labore cum
              corporis ducimus rem commodi voluptatem animi.
            </p>

            <div className="socialIcon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter "></i>
              <i className="fab fa-youtube "></i>
            </div>
          </Left>

          <Rigth>
            <h1>Quick Links</h1>

            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ'S</li>
            </ul>
          </Rigth>

          <Center>
            <h1>Recent Post</h1>
            <h3>
              3 WooCommerce Plugins to Boost Sales <strong>28 Feb 2022</strong>
            </h3>
            <h3>
              3 WooCommerce Plugins to Boost Sales <strong>28 Feb 2022</strong>
            </h3>
            <h3>
              3 WooCommerce Plugins to Boost Sales <strong>28 Feb 2022</strong>
            </h3>
          </Center>

          <End>
            <h1>Get inTouch</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              beatae laboriosam. Culpa, magni nemo. Eum sit cum sequi similique,
            </p>

            <div>
              <i class="fa-solid fa-location-dot"></i>
              <h3>Location:27 Division St, New York, NY 10002, USA</h3>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <h3>Phone:+44 014799584</h3>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <h3>Email:support@fleja.com</h3>
            </div>
          </End>
        </GridBox>

        <CopyBox>
          <div>
            <p>Copyright @2022. All rights reserved.</p>
            <p>
              Design & Developed by <strong>GorkCoder</strong>
            </p>
          </div>
        </CopyBox>
      </Wrapper>
    </Container>
  );
};

export default Footer;
