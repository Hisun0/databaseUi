import React from "react";
import { Link } from "react-router-dom";

import PostInterface from "../models/posts.interface";

interface PostItemProps {
  post: PostInterface;
  onDeletePost: (id: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onDeletePost }) => (
  <div className="card">
    <h3 className="mb-1">{post.title}</h3>
    <p className="mb-1">{post.body}</p>
    <Link to={`/posts/${post._id}`}>
      <button className="btn btn-primary mr-1">Edit post</button>
    </Link>
    <button className="btn btn-danger" onClick={() => onDeletePost(post._id)}>
      Delete
    </button>
  </div>
);

export default PostItem;
