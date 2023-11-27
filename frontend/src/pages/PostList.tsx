import { useAppDispatch, useAppSelector } from "../slices";
import { deletePost, fetchPosts } from "../slices/postsSlice";
import { useEffect } from "react";
import Main from "../layouts/Main";
import PostItem from "../components/PostItem";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "./NotFound";
import { selectAllPosts } from "../slices/selectors";
import emptyImage from "../assets/empty.svg";
import PageHeader from "../layouts/PageHeader";

const PostList = () => {
  const dispatch = useAppDispatch();

  const loadingStatus = useAppSelector((state) => state.posts.loadingStatus);

  const posts = useAppSelector(selectAllPosts);

  const handleDeletePost = (id: string) => {
    dispatch(deletePost(id));
    return;
  };

  const renderContent = () => {
    switch (loadingStatus) {
      case "loading":
        return <LoadingSpinner />;
      case "failed":
        return <NotFound />;
      case "idle":
      default:
        return posts.length !== 0 ? (
          <ul className="list__main">
            {posts.map((post, index) => (
              <PostItem
                key={index}
                post={post}
                onDeletePost={handleDeletePost}
              />
            ))}
          </ul>
        ) : (
          <div className="flex-col align-center">
            <img src={emptyImage} className="img-fluid" alt="posts are empty" />
          </div>
        );
    }
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Main>
      <PageHeader buttonText="Create new posts" navigatePath="/posts/new">
        <h1>Posts</h1>
      </PageHeader>
      {renderContent()}
    </Main>
  );
};

export default PostList;
