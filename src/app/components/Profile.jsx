import React from "react";
import "../styles/components/Profile.css";
import Image from "next/image";
import FotodeGina from "../../../public/gina.jpg";

function Profile() {
  return (
    <div className="profile">
      <Image
        className="profile__photo"
        src={FotodeGina}
        alt="Gina`s profile photo"
      />
      <div className="profile__desc">
        <h2 className="profile__name">Im,</h2>
        <span className="profile__fullname">Gina González Gut.</span>
      </div>
      <h3 className="profile__email">ginagonzalezgut@gmail.com</h3>
    </div>
  );
}

export default Profile;
