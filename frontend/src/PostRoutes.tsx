import { Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";

const PostRoutes = () => {
  return (
    <Routes>
      <Route index element={<PostList />} />
      <Route path=":id" element={<Post />} />
      <Route path="new" element={<NewPost />} />
    </Routes>
  );
};

export default PostRoutes;
