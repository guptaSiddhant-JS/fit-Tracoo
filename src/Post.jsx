import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageURL }) {
  return (
    <div className="post">
      {/*Header --> avatar --> username  */}
      <div className="post__header">
        <Avatar className="post__avatar" alt="siddbull" src="" />
        <h3>{username}</h3>
      </div>

      {/* img */}
      <img className="post__image" src={imageURL} alt="" srcset="" />

      {/* username + caption */}
      <h4 className="post__text">
        <strong>{username} :</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
