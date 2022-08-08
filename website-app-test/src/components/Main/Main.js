import styled from "styled-components";

export const Container = styled.div`
  max-width: 90%;
  height: 91vh;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.4rem;
  align-items: center;
  padding: 13.3rem 0;
`;

export const ImgBox = styled.div`
  display: flex;
  max-width: 50rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3%;
`;

export const Title = styled.h1`
  font-size: 6.4rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;

  & i {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    font-size: 1.8rem;
    line-height: 1.9;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  & i.facebook {
    color: #4267b2;
    border: 1px solid #4267b2;

    &:hover {
      background-color: #4267b2;
      color: #fff;
    }
  }

  & i.instagram {
    color: #dc2743;
    border: 1px solid #dc2743;

    &:hover {
      background-color: #dc2743;
      color: #fff;
    }
  }

  & i.twitter {
    color: #38a1f3;
    border: 1px solid #38a1f3;

    &:hover {
      background-color: #38a1f3;
      color: #fff;
    }
  }

  & i.youtube {
    color: #e92525;
    border: 1px solid #e92525;

    &:hover {
      background-color: #e92525;
      color: #fff;
    }
  }

  & i.pinterest {
    color: #c8232c;
    border: 1px solid #c8232c;

    &:hover {
      background-color: #c8232c;
      color: #fff;
    }
  }

  & i.dribble {
    color: #ee72a2;
    border: 1px solid #ee72a2;

    &:hover {
      background-color: #ee72a2;
      color: #fff;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.6px;
  color: #000;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  border: none;
  padding: 1.6rem 2rem;
  display: inline-block;
  background-color: #38d16a;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  width: 35%;
  font-size: 1.6rem;
  border-radius: 0.8rem;
  transition: all 0.4s ease;

  &:hover {
    background-color: #c8232c;
    box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.1);
  }
`;
