import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet.
          <span className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </span>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iste
          aperiam dignissimos animi inventore eveniet ut fugit blanditiis eaque
          praesentium, nisi sapiente deleniti beatae sequi. Voluptates modi odit
          fuga libero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem iste aperiam dignissimos animi inventore eveniet ut fugit
          blanditiis eaque praesentium, nisi sapiente deleniti beatae sequi.
          Voluptates modi odit fuga libero! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem iste aperiam dignissimos animi
          inventore eveniet ut fugit blanditiis eaque praesentium, nisi sapiente
          deleniti beatae sequi. Voluptates modi odit fuga libero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolorem iste aperiam
          dignissimos animi inventore eveniet ut fugit blanditiis eaque
          praesentium, nisi sapiente deleniti beatae sequi. Voluptates modi odit
          fuga libero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem iste aperiam dignissimos animi inventore eveniet ut fugit
          blanditiis eaque praesentium, nisi sapiente deleniti beatae sequi.
          Voluptates modi odit fuga libero! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem iste aperiam dignissimos animi
          inventore eveniet ut fugit blanditiis eaque praesentium, nisi sapiente
          deleniti beatae sequi. Voluptates modi odit fuga libero!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
