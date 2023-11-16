import Button from "./Button";
import React from "react";

import PostInterface from "../models/posts.interface";

interface PostItemProps {
  post: PostInterface;
}

const PostItem: React.FC<PostItemProps> = (props) => {
  const { post } = props;

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Button buttonClass="btn-primary mr-1" id={post.id}>
        Edit post
      </Button>
      <Button buttonClass="btn-danger" id={post.id}>
        Delete
      </Button>
    </div>
  );
};

export default PostItem;
