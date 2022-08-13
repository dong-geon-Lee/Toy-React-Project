import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/write">
              WRITEd
            </Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        <Link className="link" to="/settings">
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </Link>

        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
