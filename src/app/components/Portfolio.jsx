import React from "react";
import "../styles/components/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";
import ConnectLinks from "./ConnectLinks";
import Header from "./Header";

function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <Title> Let’s build something amazing together!</Title>
        <p className="portfolio__text">
          In programming, I’ve discovered an exciting world where creativity
          meets logic—a space where I can bring ideas to life while letting my
          passion for aesthetics and attention to detail shine.
        </p>
        <a href="#projects" className="portfolio__link">
          See my projects
          <FontAwesomeIcon icon={faArrowDown} className="fa-fw" />
        </a>
      </div>
      <div className="portfolio__links">
        <ConnectLinks />
      </div>
    </div>
  );
}

export default Portfolio;
