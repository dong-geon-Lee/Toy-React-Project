import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  background-color: #08071c;
  padding: 6rem 8rem 2rem 8rem;
  display: flex;
  flex-direction: column;
`;

export const GridBox = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #fff;
  margin-bottom: 4rem;
  gap: 2.6rem;
`;

export const Left = styled.div`
  & p {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6;
    margin: 2rem 0;
  }

  & div {
    display: flex;
    gap: 1.4rem;

    & i {
      border: 1px solid #fff;
      border-radius: 50%;
      font-size: 1.8rem;
      padding: 0.6rem;
      cursor: pointer;
    }
  }
`;

export const Rigth = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 4rem;

  & h1 {
    font-size: 2.6rem;
  }

  & ul {
    list-style: none;
    margin-top: 2.4rem;

    & li {
      font-size: 1.6rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }

  & h3 {
    font-size: 1.6rem;
    line-height: 1.5;
    margin-bottom: 1.4rem;
    opacity: 0.9;
  }

  & strong {
    color: #38d16a;
  }
`;

export const End = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 2.6rem;
  }

  & p {
    margin: 3rem 0;
    line-height: 1.5;
    font-size: 1.4rem;
  }

  & div {
    display: flex;
    gap: 1.6rem;
    margin-bottom: 1.6rem;

    & i {
      font-size: 1.6rem;
      color: #38d16a;
    }

    & h3 {
      font-size: 1.4rem;
      line-height: 1.5;
    }
  }
`;

export const CopyBox = styled.footer`
  color: #fff;

  & div {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #fff;

    & p {
      font-size: 1.6rem;
      margin-top: 3.6rem;
    }

    & strong {
      color: #38d16a;
    }
  }
`;
