import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Text,
  CardTitle,
  CardText,
  items,
  Content,
  Image,
  Box,
  CardBox,
} from "./Product";

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <Title>My Services</Title>
        <Text>Interactive Services Offered Me</Text>

        <Content>
          {items.map((item, index) => (
            <Box key={index}>
              <Image src={item.cover}></Image>

              <CardBox>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.desc}</CardText>
              </CardBox>
            </Box>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Product;
