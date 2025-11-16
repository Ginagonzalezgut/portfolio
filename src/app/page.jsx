import Portfolio from "../components/Portfolio";
import Profile from "../components/Profile";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Ux from "../components/Ux";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="row g-0">
          <div className="col-md-5">
            <Profile />
          </div>
          <div className="col-md-7">
            <Portfolio />
          </div>
        </div>
      </div>

      <Technologies />
      <Projects />
      {/* <Ux /> */}
      <Contact />
    </>
  );
}
