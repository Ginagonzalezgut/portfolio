import Portfolio from "../components/Portfolio";
import Profile from "../components/Profile";
import "../styles/components/Home.css";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="row g-0">
          <div className="col col-md-5">
            <Profile />
          </div>
          <div className="col col-md-7">
            <Portfolio />
          </div>
        </div>
      </div>

      <Technologies />
      <Projects />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}
