import React from "react";
import "../styles/components/Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="profile">
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
