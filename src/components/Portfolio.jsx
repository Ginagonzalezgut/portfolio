import React from "react";
import "../styles/components/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";
import ConnectLinks from "./ConnectLinks";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__intro">
          <div className="portfolio__deco"></div> <p>frontend developer</p>
          <div className="portfolio__deco"></div>
        </div>
        <Title>Hello! I'm Gina González Gut. </Title>
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
