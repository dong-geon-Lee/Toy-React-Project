import React from "react";
import {
  Container,
  data,
  Text,
  Title,
  Wrapper,
  Head,
  Content,
  Left,
  Right,
  items,
  Progress,
  Box,
} from "./Skill";

const Skill = () => {
  return (
    <Container>
      <Wrapper>
        <Head>
          <Title>Why choose us</Title>
          <Text>Some Of My Skills</Text>
        </Head>

        <Content>
          <Left>
            <Progress>
              {items.map((item) => (
                <Box key={item.id} done={item.done}>
                  <h4>{item.title}</h4>
                  <h4>{item.done} %</h4>
                </Box>
              ))}
            </Progress>
          </Left>

          <Right>
            {data.map((data) => (
              <>
                <h2>{data.title}</h2>
                <p>{data.para}</p>
                <p>{data.para1}</p>
                <button>Hire Me</button>
              </>
            ))}
          </Right>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Skill;
