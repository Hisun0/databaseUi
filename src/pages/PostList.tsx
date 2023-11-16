import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../slices";
import { fetchPosts, selectors } from "../slices/postsSlice";
import { useEffect } from "react";
import Main from "../layouts/Main";
import PostItem from "../components/PostItem";
import LoadingSpinner from "../components/LoadingSpinner";

const PostList = () => {
  const dispatch = useAppDispatch();

  const loadingStatus = useAppSelector((state) => state.posts.loadingStatus);

  const posts = useSelector(selectors.selectAll);

  const renderContent = () => {
    switch (loadingStatus) {
      case "loading":
        return <LoadingSpinner />;
      case "failed":
        return <p>Error loading user</p>;
      case "idle":
      default:
        return posts.map((post, index) => <PostItem key={index} post={post} />);
    }
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Main>
      <h1>Posts</h1>
      <ul className="list__main">{renderContent()}</ul>
    </Main>
  );
};

export default PostList;
