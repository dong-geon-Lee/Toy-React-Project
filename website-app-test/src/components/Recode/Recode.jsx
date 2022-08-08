import React from "react";
import { Container, Content, data, Wrapper, Box } from "./Recode";

const Recode = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          {data.map((data, index) => (
            <Box key={index}>
              <h1>{data.num}</h1>
              <small>{data.text}</small>
            </Box>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Recode;
