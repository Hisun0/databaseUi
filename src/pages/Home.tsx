import Main from "../layouts/Main";
import databaseSvg from "../assets/database.svg";

const Home = () => (
  <Main>
    <div className="flex-row">
      <div className="position-relative">
        <h1>
          Welcome to Database<span className="color-blue">UI</span>
        </h1>
        <h2>Your data, your way</h2>
        <button className="btn btn-primary btn-large position-bottom">
          Start editing
        </button>
      </div>
      <img src={databaseSvg} className="img-fluid" alt="databaseImage" />
    </div>
  </Main>
);

export default Home;
