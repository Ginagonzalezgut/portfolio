import React from "react";
import "../styles/components/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

function Contact() {
  return (
    <div className="contact">
      <Title> Let`s create your next big idea</Title>

      <div className="contac__buttons">
        <button className="contact__button">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>
        <button className="contact__button">linkedin</button>
      </div>
    </div>
  );
}

export default Contact;
