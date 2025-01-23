import React from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Footer.css";

function Footer() {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row">
          <div className="col">Logo</div>
          <div className="col">
            {" "}
            <Menu />
          </div>

          <div className="col">
            <nav className="footer__icons">
              <a href="https://www.linkedin.com/in/ginagonzalezgut/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Ginagonzalezgut">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:ginagonzalezgut@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://www.instagram.com/ginagonzalezgut/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </nav>
          </div>
        </div>
        <div className="row footer__copyright">
          <p>Copyright © 2025 Gina González Gutiérrez</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
