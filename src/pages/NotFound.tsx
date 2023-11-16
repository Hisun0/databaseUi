import Main from "../layouts/Main";
import errorImage from "../assets/404.svg";

const NotFound = () => {
  return (
    <Main>
      <div className="flex-col align-center">
        <img src={errorImage} className="img-fluid" alt="404" />
        <h1 className="color-green">
          Let's back to the{" "}
          <a href="/" className="color-blue">
            main page
          </a>
        </h1>
      </div>
    </Main>
  );
};

export default NotFound;
