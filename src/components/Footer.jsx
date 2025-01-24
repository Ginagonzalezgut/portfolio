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
import Image from "next/image";
import ginaLogo from "../../public/ginaLogo2.png";

function Footer() {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <Image className="footer__logo" src={ginaLogo} alt="Gina`s Logo" />
          </div>
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
      </div>
      <p className="footer__copyright">
        Copyright © 2025 Gina González Gutiérrez
      </p>
    </footer>
  );
}

export default Footer;
