import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function ConnectLinks() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <a
            className="portfolio__connect__link"
            href="https://github.com/Ginagonzalezgut"
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-fw" />{" "}
            <span className="portfolio__name-links">GitHub</span>
          </a>
        </div>

        <div className="col">
          <a
            className="portfolio__connect__link"
            href="https://www.linkedin.com/in/ginagonzalezgut/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-fw" />
            <span className="portfolio__name-links"> LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectLinks;
