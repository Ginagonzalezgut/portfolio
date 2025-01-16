import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import "./styles/components/Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-5">
            <Profile />
          </div>
          <div className="col col-7">
            <Portfolio />
          </div>
        </div>
        <Technologies />
      </div>
    </>
  );
}
