import React from "react";
import "../styles/components/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <h1 className="portfolio__title">
          Let’s build something amazing together!
        </h1>
        <p className="portfolio__text">
          In programming, I’ve discovered an exciting world where creativity
          meets logic—a space where I can bring ideas to life while letting my
          passion for aesthetics and attention to detail shine.
        </p>
        <span className="portfolio__link">
          See my projects
          <FontAwesomeIcon icon={faArrowDown} className="fa-fw" />
        </span>
      </div>
      <div className="portfolio__connect">
        <a
          className="portfolio__connect__link"
          href="https://github.com/Ginagonzalezgut"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="fa-fw" /> Github
        </a>
        <a
          className="portfolio__connect__link"
          href="https://www.linkedin.com/in/ginagonzalezgut/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="fa-fw" /> Linkedin
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
