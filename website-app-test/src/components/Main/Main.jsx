import React from "react";
import {
  Container,
  Wrapper,
  Image,
  ImgBox,
  Content,
  IconBox,
  Title,
  Text,
  Button,
} from "./Main";

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <ImgBox>
          <Image src="assets/home.png" alt="" />
        </ImgBox>

        <Content>
          <Title>I am a web designer</Title>

          <IconBox>
            <i className="fab fa-facebook-f facebook"></i>
            <i className="fab fa-instagram instagram"></i>
            <i className="fab fa-twitter twitter"></i>
            <i className="fab fa-youtube youtube"></i>
            <i className="fab fa-pinterest pinterest"></i>
            <i className="fab fa-dribbble dribble"></i>
          </IconBox>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta
            aliquid similique, excepturi sequi mollitia velit. Nostrum
            voluptates similique minima sapiente repellat mollitia delectus
            aliquam cupiditate! Asperiores impedit eaque minima?
          </Text>

          <Button>Contact Us</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Main;
