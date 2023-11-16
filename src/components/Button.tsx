import { Link } from "react-router-dom";
import { useAppDispatch } from "../slices";
import { deletePost } from "../slices/postsSlice";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  buttonClass: string;
  id: string | number;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { buttonClass, id, children } = props;
  const dispatch = useAppDispatch();

  const handleDeletePost = (id: string | number) => dispatch(deletePost(id));

  if (buttonClass.includes("btn-primary")) {
    return (
      <Link to={`/posts/${id}`}>
        <button className={`btn ${buttonClass}`}>{children}</button>
      </Link>
    );
  }
  return (
    <button
      className={`btn ${buttonClass}`}
      onClick={() => handleDeletePost(id)}
    >
      {children}
    </button>
  );
};

export default Button;
