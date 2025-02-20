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
        <div className="row align-items-center text-center g-5 g-md-0">
          <div className="col-12 col-md text-md-start">
            <Image
              className="footer__logo"
              src={ginaLogo}
              alt="Gina`s Logo"
              unoptimized
            />
          </div>
          <div className="col-12 col-md">
            {" "}
            <Menu />
          </div>

          <div className="col-12 col-md">
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
            </nav>
          </div>
        </div>
      </div>
      <p className="footer__copyright m-0 mt-5">
        Copyright © 2025 Gina González Gutiérrez
      </p>
    </footer>
  );
}

export default Footer;
