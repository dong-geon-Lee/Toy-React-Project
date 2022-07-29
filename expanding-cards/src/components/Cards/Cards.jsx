import React from "react";
import { datas } from "../../dummyData";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ active }) => {
  return (
    <>
      {active ? (
        <h2>아래 카드에 마우스 커서를 옮기면 확장됩니다</h2>
      ) : (
        <h2>카드 비활성 상태입니다 버튼을 눌러주세요</h2>
      )}

      <div className="card-wrapper">
        {datas.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            link={data.link}
            active={active}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
