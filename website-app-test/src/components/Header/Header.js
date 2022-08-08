import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 9vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  position: relative;
  z-index: 2;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.6rem;
  transition: all 0.3s ease;

  & a {
    text-decoration: none;
    color: #000;
    line-height: 1.5;
  }

  @media (max-width: 830px) {
    display: ${(props) => (props.sidebar ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #eee;
    width: ${(props) => (props.sidebar ? "30vw" : "0vw")};
    height: ${(props) => (props.sidebar ? "100vh" : "0vh")};
    padding: 20% 3%;

    & a {
      display: block;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;

export const Text = styled.h2`
  font-size: 1.7rem;
  transition: all 0.3s ease;

  &:hover {
    color: green;
    font-weight: 800;
  }
`;

export const ImgBox = styled.div`
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LogoBox = styled.div`
  display: flex;
  gap: 1rem;

  & svg {
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 830px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #000;

  & svg {
    font-size: 3.2rem;
    padding: 0.6rem;
    width: 4.8rem;
    height: 4.8rem;
  }

  @media (max-width: 830px) {
    display: block;
  }
`;
