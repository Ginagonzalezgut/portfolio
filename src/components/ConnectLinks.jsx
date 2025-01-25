import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ConnectLinks() {
  return (
    <div className="container">
      <div className="row  g-3 g-md-0">
        <div className="col-12 col-md">
          <a
            className="portfolio__connect__link"
            href="https://github.com/Ginagonzalezgut"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-fw" /> Github
          </a>
        </div>

        <div className="col-12 col-md">
          <a
            className="portfolio__connect__link"
            href="https://www.linkedin.com/in/ginagonzalezgut/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-fw" /> Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectLinks;
