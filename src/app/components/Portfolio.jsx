import React from "react";
import "../styles/components/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio__title">Portfolio</h1>
      <div className="portfolio__projects">
        <div className="portfolio__project--one  ">
          <video
            className="object-fit-cover w-100 h-100"
            controls
            preload="none"
            poster="spotsbarcelona2.png"
          >
            <source src="/hangoutspots.mov" type=" video/mp4" />
          </video>
        </div>
        <div className="portfolio__project--two">
          <div className="portfolio__project--two__top d-flex justify-content-center align-items-center flex-column">
            {/* <FontAwesomeIcon icon={faTasks} className="fa-fw profile__icon" /> */}
            TO-DO{" "}
            <span className="portfolio__project--two__top__details">
              Application
            </span>
          </div>
          <div className="portfolio__project--two__bottom"></div>
        </div>
        <div className="portfolio__project--three"> </div>
        <div className="portfolio__project--four"></div>
      </div>
    </div>
  );
}

export default Portfolio;
