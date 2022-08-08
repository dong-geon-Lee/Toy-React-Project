import styled from "styled-components";

export const data = [
  {
    num: "520%",
    text: "AWARDS WINNING",
  },
  {
    num: "99%",
    text: "SATISFIED CLIENTS",
  },
  {
    num: "3325",
    text: "CREATIVE PROJECTS",
  },
  {
    num: "54380",
    text: "LINES OF CODE ",
  },
];

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  padding: 9rem;
  background-color: #38d16a;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Box = styled.div`
  color: #fff;
  text-align: center;

  & h1 {
    font-size: 3.6rem;
    font-weight: 800;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-bottom: 0.4rem;
  }

  & small {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    opacity: 0.8;
  }
`;
