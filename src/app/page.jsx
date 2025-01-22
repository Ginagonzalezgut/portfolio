import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import "./styles/components/Home.css";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Review from "./components/Review";

export default function Home() {
  return (
    <>
      <div className="container hero">
        <div className="row">
          <div className="col col-5">
            <Profile />
          </div>
          <div className="col col-7">
            <Portfolio />
          </div>
        </div>
      </div>

      <Technologies />
      <Projects />
      <Review />
    </>
  );
}
