import styled from "styled-components";

export const data = [
  {
    title: "LOOKING FOR EXCLUSIVE SERVICES?",
    heading: "Get The Best For Your Business",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  background-color: #08071c;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 50%;
  text-align: center;
`;

export const Title = styled.h1`
  color: #38d16a;
  letter-spacing: 1px;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const Desc = styled.h2`
  color: #fff;
  font-size: 3.6rem;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.7;
  margin: 2rem 0;
`;

export const Button = styled.button`
  border: none;
  padding: 1.6rem 1.8rem;
  display: inline-block;
  background-color: #38d16a;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  width: 30%;
  font-size: 1.8rem;
  letter-spacing: 0.4px;
  border-radius: 0.4rem;
  transition: 0.4s;
  text-align: center;
  margin-top: 1.6rem;

  &:hover {
    background-color: #f54ea2;
  }
`;
