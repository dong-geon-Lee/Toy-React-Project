import styled from "styled-components";

export const items = [
  {
    id: 1,
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
    cover: "./assets/services/services-1.jpg",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
    cover: "./assets/services/services-2.jpg",
  },
  {
    id: 3,
    title: "Photography",
    desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
    cover: "./assets/services/services-3.jpg",
  },
  {
    id: 4,
    title: "Live Support",
    desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
    cover: "./assets/services/services-4.jpg",
  },
  {
    id: 5,
    title: "Content Writing",
    desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
    cover: "./assets/services/services-5.jpg",
  },
  {
    id: 6,
    title: "Timely Deliverables",
    desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
    cover: "./assets/services/services-6.jpg",
  },
];

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  background-color: #f8f9fe;
  padding: 8rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: 800;
  letter-spacing: 0.6px;
  color: #38d16a;
`;

export const Text = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin: 2rem 0 5.4rem 0;
  letter-spacing: 0.6px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover div {
    opacity: 1;
  }

  &:hover img {
    filter: brightness(40%);
    background-color: rgba(18, 22, 25, 0.925);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardBox = styled.div`
  background-color: transparent;
  padding: 2rem;
  margin-top: -3.6rem;
  width: 80%;
  text-align: left;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
  color: #fff;
  cursor: pointer;
`;

export const CardTitle = styled.h1`
  margin-bottom: 1.2rem;
`;

export const CardText = styled.p`
  font-size: 1.6rem;
`;
