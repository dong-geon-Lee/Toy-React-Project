import React from "react";
import {
  Container,
  Content,
  data,
  Head,
  Image,
  ImgBox,
  Text,
  Title,
  Wrapper,
  GridBox,
  TextBox,
} from "./Blog";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";

const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <Head>
          <Title>Latest Blog</Title>
          <Text>Read Inspirational Story Every Week</Text>
        </Head>

        <GridBox>
          {data.map((data) => (
            <Content key={data.id}>
              <ImgBox>
                <Image src={data.cover} alt={data.category} />
              </ImgBox>

              <TextBox>
                <h3>{data.date}</h3>
                <h1>{data.title}</h1>
                <a href="/">
                  Read More <KeyboardDoubleArrowRight />
                </a>
              </TextBox>
            </Content>
          ))}
        </GridBox>
      </Wrapper>
    </Container>
  );
};

export default Blog;
