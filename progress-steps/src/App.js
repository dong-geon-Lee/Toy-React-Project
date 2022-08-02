import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 30rem;
  margin: 2rem auto;
  margin-top: 30rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0%;
    width: 100%;
    transform: translateY(-50%);
    height: 4px;
    background-color: gray;
    z-index: -1;
  }
`;

const Progress = styled.div`
  content: "";
  position: absolute;
  top: 50%;
  left: 0%;
  width: ${(props) => props.bar};
  transform: translateY(-50%);
  height: 4px;
  background-color: skyblue;
  z-index: -1;
  transition: all 0.4s ease;
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 4px solid blueviolet;
  font-size: 1.2rem;
  font-weight: 800;
`;

const Button = styled.button`
  border: none;
  padding: 0.8rem 1.6rem;
  margin: 0 1rem;
  border-radius: 0.6rem;
  background-color: skyblue;
  color: #fff;
  font-family: inherit;
  font-size: 1.2rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #eee;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const datas = [
  {
    id: 1,
    number: 1,
  },
  {
    id: 2,
    number: 2,
  },
  {
    id: 3,
    number: 3,
  },
  {
    id: 4,
    number: 4,
  },
];

const App = () => {
  const [actives, setActives] = useState(0);

  const increseActive = () => {
    setActives(actives + 1);
  };

  const decreseActive = () => {
    setActives(actives - 1);
  };

  let calculate = `${actives * 33.33}%`;

  return (
    <Container>
      <ProgressContainer>
        <Progress bar={calculate}></Progress>

        {datas.map((data) => (
          <Circle key={data.id}>{data.number}</Circle>
        ))}
      </ProgressContainer>

      <BtnBox>
        <Button
          onClick={() => decreseActive()}
          disabled={actives === 0 ? true : false}
        >
          Prev
        </Button>
        <Button
          onClick={() => increseActive()}
          disabled={actives === 3 ? true : false}
        >
          Next
        </Button>
      </BtnBox>
    </Container>
  );
};

export default App;
