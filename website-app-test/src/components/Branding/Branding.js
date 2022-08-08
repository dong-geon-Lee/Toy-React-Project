import styled from "styled-components";

export const data = [
  {
    id: "01",
    heading: "Digital Branding",
    desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
  },
  {
    id: "02",
    heading: "Team Management",
    desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
  },
  {
    id: "03",
    heading: "Creative Mind",
    desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
  },
];

export const Container = styled.div`
  background-color: #08071c;
  padding: 6rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: baseline;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 800;
  color: #38d16a;
  margin-right: 1rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    margin-bottom: 1.4rem;
  }

  & h2 {
    line-height: 1.5;
    opacity: 0.8;
  }
`;
