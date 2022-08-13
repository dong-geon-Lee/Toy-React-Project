import React from "react";
import "./Single.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";

const Single = () => {
  return (
    <div className="single">
      {/* post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
