import React from "react";
import "./Post.css";

const Post = ({ img }) => {
  return (
    <div className="post">
      <img src={img} alt="" className="postImg" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iusto
        ea? Asperiores numquam sint voluptas, totam reprehenderit ratione amet
        saepe autem culpa est rem. Sint quis dolor sapiente esse aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Saepe, iusto ea?
        Asperiores numquam sint voluptas, totam reprehenderit ratione amet saepe
        autem culpa est rem. Sint quis dolor sapiente esse aperiam. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Saepe, iusto ea? Asperiores
        numquam sint voluptas, totam reprehenderit ratione amet saepe autem
        culpa est rem. Sint quis dolor sapiente esse aperiam.
      </p>
    </div>
  );
};

export default Post;
