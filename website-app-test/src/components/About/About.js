import styled from "styled-components";

export const items = [
  {
    title: "Who I Am And What I Do",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
    desc2:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    desc3:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cover: "./assets/about.jpg",
  },
];

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  padding: 8rem 3.2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #38d16a;
`;

export const SubTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  margin: 2rem 0;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const Button = styled.div`
  border: none;
  padding: 1.6rem 1.8rem;
  display: inline-block;
  background-color: #38d16a;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  width: 35%;
  font-size: 1.8rem;
  letter-spacing: 0.4px;
  border-radius: 0.4rem;
  transition: all 0.4s ease;
  text-align: center;
  margin-top: 1.6rem;

  &:hover {
    background-color: #c8232c;
    box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
