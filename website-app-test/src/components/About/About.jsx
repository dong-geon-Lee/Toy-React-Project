import React from "react";
import {
  Container,
  items,
  Left,
  Right,
  Title,
  Wrapper,
  SubTitle,
  Text,
  Content,
  Button,
  Image,
} from "./About";

const About = () => {
  return (
    <Container>
      <Wrapper>
        {items.map((item, index) => (
          <Content key={index}>
            <Left>
              <Title>About me</Title>
              <SubTitle>{item.title}</SubTitle>
              <Text>{item.desc1}</Text>
              <Text>{item.desc2}</Text>
              <Text>{item.desc3}</Text>
              <Button>Download CV</Button>
            </Left>

            <Right>
              <Image src="assets/about.jpg" alt="" />
            </Right>
          </Content>
        ))}
      </Wrapper>
    </Container>
  );
};

export default About;
