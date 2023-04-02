import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/devMK.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUser">Murshid K</span>
            <span className="postDate">15 mins ago...</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">This is my first post here:)</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" />
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people like it.</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
