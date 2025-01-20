import React from "react";
import "../styles/components/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faHtml5,
  faJava,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { mali, quicksand } from "../fonts";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">Frontend Developer</h1>
      <div className="portfolio__projects">
        <div className="portfolio__project--one text-start d-flex justify-content-between flex-column">
          <p className="portfolio__project--one__tittle">Discover my work</p>
          <p className="portfolio__project--one__text">Read more!</p>
        </div>
        <div className="portfolio__project--two">
          <div className="portfolio__project--two__top d-flex justify-content-center align-items-center flex-column">
            {/* <FontAwesomeIcon icon={faTasks} className="fa-fw profile__icon" /> */}

            <span className="portfolio__project--two__top__details"></span>
          </div>
          <div className="portfolio__project--two__bottom">
            <FontAwesomeIcon
              icon={faNodeJs}
              className="fa-fw portfolio__project--icons"
            />
          </div>
        </div>
        <div className="portfolio__project--three">
          <FontAwesomeIcon
            icon={faHtml5}
            className="fa-fw portfolio__project--icons"
          />
        </div>
        <div className="portfolio__project--four">
          <div className="portfolio__project--four__left">
            <FontAwesomeIcon
              icon={faReact}
              className="fa-fw portfolio__project--icons"
            />
          </div>
          <div className="portfolio__project--four__right">
            <FontAwesomeIcon
              icon={faCss}
              className="fa-fw portfolio__project--icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
