import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  padding: 8rem;
  background-color: #eee;
`;

export const Head = styled.div`
  text-align: center;
  margin-bottom: 4.8rem;
`;

export const Title = styled.h2`
  color: #38d16a;
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export const Text = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

export const Content = styled.div``;

export const ImgBox = styled.div``;

export const TextBox = styled.div`
  background-color: #fff;
  padding: 2.4rem;

  & h3 {
    color: gray;
  }

  & h1 {
    margin: 1.6rem 0;
  }

  & a {
    text-decoration: none;
    color: #38d16a;
    font-size: 1.6rem;
    display: flex;
    align-items: center;

    & svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const data = [
  {
    id: 1,
    date: "26 FEB, 2019",
    title: "The Most Popular New top Business Apps",
    cover: "./assets/blog/blog1.jpg",
    category: "Technology",
  },
  {
    id: 2,
    date: "27 FEB, 2019",
    title: "The Best Marketing top Management Tools",
    cover: "./assets/blog/blog2.jpg",
    category: "Agency",
  },
  {
    id: 3,
    date: "28 FEB, 2019",
    title: "3 WooCommerce Plugins to Boost Sales",
    cover: "./assets/blog/blog3.jpg",
    category: "IT",
  },
];
