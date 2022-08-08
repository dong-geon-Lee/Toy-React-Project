import React from "react";
import {
  Container,
  data,
  GridBox,
  Head,
  Text,
  Title,
  Wrapper,
  Content,
  Image,
  Overlay,
  Box,
} from "./Work";

const Work = () => {
  return (
    <Container>
      <Wrapper>
        <Head>
          <Title>My Works</Title>
          <Text>Some of My Competed Projects</Text>
        </Head>

        <GridBox>
          {data.map((data) => (
            <Content key={data.id}>
              <Image src={data.cover} alt={data.title} />

              <Overlay>
                <Box>
                  <h2> {data.title}</h2>
                  <p>{data.desc}</p>
                </Box>
              </Overlay>
            </Content>
          ))}
        </GridBox>
      </Wrapper>
    </Container>
  );
};

export default Work;
