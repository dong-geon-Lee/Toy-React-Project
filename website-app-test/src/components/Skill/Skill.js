import styled from "styled-components";

export const items = [
  {
    id: 1,
    done: "70",
    title: "HTML",
  },
  {
    id: 2,
    done: "80",
    title: "CSS",
  },
  {
    id: 3,
    done: "90",
    title: "JAVASCRIPT",
  },
  {
    id: 4,
    done: "70",
    title: "REACT",
  },
];

export const data = [
  {
    title: "Every Day is a New Challenge",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.",
    para1:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.",
  },
];

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  padding: 6rem;
`;

export const Head = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

export const Title = styled.h1`
  color: #38d16a;
  font-size: 4rem;
`;

export const Text = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin: 1.6rem 0;
`;

export const Content = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const Left = styled.div`
  flex: 1;
  padding: 0 6rem;
  margin: 3rem 0;
`;

export const Progress = styled.div`
  & h4 {
    font-size: 2rem;
    font-weight: 800;

    & + h4 {
      font-weight: 400;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8.2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0;
    background-color: #eee;
    width: 100%;
    height: 1.8rem;
    border-radius: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0;
    background-color: #38d16a;
    width: ${(props) => (props.done ? `${props.done}%` : "")};
    height: 1.8rem;
    border-radius: 1rem;
  }

  & h4 {
    margin-top: -3rem;
  }
`;

export const Right = styled.div`
  flex: 1;

  & h2 {
    font-size: 2.6rem;
    font-weight: 800;
  }

  & p {
    margin: 2rem 0;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  & button {
    border: none;
    background-color: #38d16a;
    color: #fff;
    padding: 1.4rem 2rem;
    width: 28%;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 0.4rem;
    margin-top: 2rem;

    &:hover {
      background-color: #f54ea2;
    }
  }
`;
