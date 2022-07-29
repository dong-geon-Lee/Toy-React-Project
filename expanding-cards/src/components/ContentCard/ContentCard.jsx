import React, { useState } from "react";
import Cards from "../Cards/Cards";
import "./ContentCard.css";

const ContentCard = () => {
  const [active, setActive] = useState(false);

  const cardActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="container">
      <button onClick={() => cardActive()} className="btn">
        Card Active
      </button>

      <Cards active={active} />
    </div>
  );
};

export default ContentCard;
