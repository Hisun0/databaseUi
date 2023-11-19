import Main from "../layouts/Main";
import errorImage from "../assets/404.svg";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Main>
    <div className="flex-col align-center">
      <img src={errorImage} className="img-fluid" alt="404" />
      <h1 className="color-green">
        Let's back to the{" "}
        <Link to="/" className="color-blue">
          main page
        </Link>
      </h1>
    </div>
  </Main>
);

export default NotFound;
