import React from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <div>Logo</div>
      <Menu />
      <div>
        <nav>
          <a href="https://www.linkedin.com/in/ginagonzalezgut/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Ginagonzalezgut">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:ginagonzalezgut@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </nav>
        <p>Copyright © 2025 Gina González Gutiérrez</p>
      </div>
    </div>
  );
}

export default Footer;
