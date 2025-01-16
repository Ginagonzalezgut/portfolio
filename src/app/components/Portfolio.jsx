import React from "react";
import "../styles/components/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss, faGithub, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>
      <div className="portfolio__projects">
        <div className="portfolio__project--one  ">
          Frontend <br /> <span>Developer</span>
        </div>
        <div className="portfolio__project--two">
          <div className="portfolio__project--two__top d-flex justify-content-center align-items-center flex-column">
            {/* <FontAwesomeIcon icon={faTasks} className="fa-fw profile__icon" /> */}
            TO-DO{" "}
            <span className="portfolio__project--two__top__details">
              Application
            </span>
          </div>
          <div className="portfolio__project--two__bottom">
            Junior Full-Stack
          </div>
        </div>
        <div className="portfolio__project--three">
          <FontAwesomeIcon
            icon={faHtml5}
            className="fa-fw portfolio__project--three__icon"
          />
        </div>
        <div className="portfolio__project--four">
          <div className="portfolio__project--four__left"></div>
          <div className="portfolio__project--four__right">
            <FontAwesomeIcon icon={faCss} className="fa-fw " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
