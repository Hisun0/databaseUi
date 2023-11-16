import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostRoutes from "./PostRoutes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navigation>
        <Link id="1" to="/" className="a__header">
          Home
        </Link>
        <Link id="2" to="/posts" className="a__header">
          Posts
        </Link>
      </Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/*" element={<PostRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
