import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";

import "./styles/components/Home.css";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";

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
        <AboutMe />
      </div>
    </>
  );
}
