import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostRoutes from "./PostRoutes";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation>
        <Link id="1" to="/">
          Home
        </Link>
        <Link id="2" to="/posts">
          Posts
        </Link>
      </Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/*" element={<PostRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
