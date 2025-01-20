import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/components/Technologies.css";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

function Technologies() {
  return (
    <>
      <div>
        <div></div>
        <div className="technologies__icons">
          <FontAwesomeIcon icon={faNodeJs} className="fa-fw" />
          <FontAwesomeIcon icon={faHtml5} className="fa-fw" />
          <FontAwesomeIcon icon={faReact} className="fa-fw" />
          <FontAwesomeIcon icon={faCss} className="fa-fw" />
          <FontAwesomeIcon icon={faBootstrap} className="fa-fw" />
          <FontAwesomeIcon icon={faJs} className="fa-fw" />
          <FontAwesomeIcon icon={faDatabase} className="fa-fw" />
          <FontAwesomeIcon icon={faSass} className="fa-fw" />

          <FontAwesomeIcon icon={faGithub} className="fa-fw" />
          <FontAwesomeIcon icon={faGit} className="fa-fw" />
        </div>
      </div>
    </>
  );
}

export default Technologies;
