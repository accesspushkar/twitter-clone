import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({ displayName, userName, text, avatar, replies, retweets, likes }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}<span className="post__headerSpecial">{userName}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <div className="post__footer">
          <span><ChatBubbleOutline fontSize="small" />{` ${replies}`}</span>
          <span><Repeat fontSize="small" />{` ${retweets}`}</span>
          <span><FavoriteBorder fontSize="small" />{` ${likes}`}</span>
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;