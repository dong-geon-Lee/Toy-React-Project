import React from "react";
import {
  Container,
  data,
  Wrapper,
  Box,
  Title,
  Desc,
  Text,
  Button,
} from "./Join";

const Join = () => {
  return (
    <Container>
      <Wrapper>
        {data.map((data, index) => (
          <Box key={index}>
            <Title>{data.title}</Title>
            <Desc> {data.heading}</Desc>
            <Text>{data.desc}</Text>

            <Button>Contact Us</Button>
          </Box>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Join;
