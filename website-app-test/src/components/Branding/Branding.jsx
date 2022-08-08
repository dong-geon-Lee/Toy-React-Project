import React from "react";
import { Container, data, Wrapper, Box, Title, TextBox } from "./Branding";

const Branding = () => {
  return (
    <Container>
      <Wrapper>
        {data.map((data, index) => (
          <Box key={index}>
            <Title>{data.id}</Title>

            <TextBox>
              <h1>{data.heading}</h1>
              <h2>{data.desc}</h2>
            </TextBox>
          </Box>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Branding;
