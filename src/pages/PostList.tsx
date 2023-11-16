import { useSelector } from "react-redux";
import { useAppDispatch } from "../slices";
import { fetchPosts, selectors } from "../slices/postsSlice";
import { useEffect } from "react";
import PostInterface from "../models/posts.interface";
import Main from "../layouts/Main";
import PostItem from "../components/PostItem";

const PostList = () => {
  const dispatch = useAppDispatch();

  const posts = useSelector(selectors.selectAll);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts);

  return (
    <Main>
      <h1>Posts</h1>
      <ul className="list__main">
        {posts.map((post: PostInterface, index) => (
          <PostItem key={index} post={post} />
        ))}
      </ul>
    </Main>
  );
};

export default PostList;
