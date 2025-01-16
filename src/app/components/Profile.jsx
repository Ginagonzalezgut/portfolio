import React from "react";
import "../styles/components/Profile.css";
import Image from "next/image";
import FotodeGina from "../../../public/gina.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">
        {" "}
        <FontAwesomeIcon icon={faUser} className="fa-fw profile__icon" />
        About me
      </h1>
      <div className="profile__photo">
        <Image src={FotodeGina} alt="Gina`s profile photo" />
      </div>

      <div className="profile__desc">
        <p className="profile__name">
          I'm, <br />{" "}
          <span className="profile__fullname">
            Gina <br /> González Gut.
          </span>
        </p>
        <a href="mailto:ginagonzalezgut@gmail.com" className="profile__email">
          ginagonzalezgut@gmail.com{" "}
          <FontAwesomeIcon icon={faEnvelope} className="fa-fw profile__icon" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
