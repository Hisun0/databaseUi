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
        <Link to="/" className="a__header">
          Home
        </Link>
        <Link to="/posts" className="a__header">
          Posts
        </Link>
      </Navigation>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/posts/*" Component={PostRoutes} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
