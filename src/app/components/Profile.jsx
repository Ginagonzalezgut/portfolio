import React from "react";
import "../styles/components/Profile.css";
import Image from "next/image";
import FotodeGina from "../../../public/gina.jpg";

function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <Image
        className="profile_photo"
        src={FotodeGina}
        alt="Gina`s profile photo"
      />
      <h2>I am Gina</h2>
    </div>
  );
}

export default Profile;
