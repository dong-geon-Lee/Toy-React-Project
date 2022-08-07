import React from "react";

const data = [
  {
    num: "520%",
    text: "AWARDS WINNING",
  },
  {
    num: "99%",
    text: "SATISFIED CLIENTS",
  },
  {
    num: "3325",
    text: "CREATIVE PROJECTS",
  },
  {
    num: "54380",
    text: "LINES OF CODE ",
  },
];

const WrapperOne = () => {
  return (
    <div>
      <section className="branding wrapperOne">
        <div className="container grid1">
          {data.map((val) => (
            <div className="box">
              <h1>{val.num}</h1>
              <p>{val.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WrapperOne;
