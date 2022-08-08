import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  background-color: #08071c;
  padding: 8rem;
`;

export const Head = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  color: #38d16a;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.6px;
`;

export const Text = styled.h1`
  color: #fff;
  font-size: 3.2rem;
  line-height: 1.8;
  letter-spacing: 1px;
`;

export const Content = styled.section`
  color: #fff;
  position: relative;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);

  & section:hover div {
    opacity: 1;
  }

  & section:nth-child(1) {
    grid-column: 1 / 5;
    grid-row: 1 / 3;
  }

  & section:nth-child(2) {
    grid-column: 5 / 7;
    grid-row: 1 / 3;
  }

  & section:nth-child(3) {
    grid-column: 7 / 9;
    grid-row: 1 / 3;
  }

  & section:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 3 / 5;
  }

  & section:nth-child(5) {
    grid-column: 3 / 5;
    grid-row: 3 / 5;
  }

  & section:nth-child(6) {
    grid-column: 5 / 9;
    grid-row: 3 / 5;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #08071c;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;

  & h2 {
    color: #fff;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: 1px;
  }

  & p {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.4px;
  }
`;

export const data = [
  {
    id: 1,
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cover: "./assets/work/work1.jpg",
  },
  {
    id: 2,
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cover: "./assets/work/work2.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cover: "./assets/work/work3.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cover: "./assets/work/work4.jpg",
  },
  {
    id: 5,
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cover: "./assets/work/work5.jpg",
  },
  {
    id: 6,
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cover: "./assets/work/work6.jpg",
  },
];
