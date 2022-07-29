import React from "react";
import "./Card.css";

const Card = ({ title, link, active }) => {
  return (
    <div className={`${active ? "card active" : "card"}`}>
      <div className="box">
        <h3 className="title">{title}</h3>
        <img src={link} alt="card-image" className="card-image" />
      </div>
    </div>
  );
};

export default Card;
