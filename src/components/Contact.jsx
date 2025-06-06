import React from "react";
import "../styles/components/Contact.css";
import Title from "./Title";
import ButtonLink from "./ButtonLink";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        {" "}
        <Title>Let's create your next big idea</Title>
        <p className="mb-4">
          Let's turn your vision into reality! Together, we'll design and build
          innovative solutions tailored to your goals.
        </p>
        <ButtonLink href="mailto:ginagonzalezgut@gmail.com">
          Email me
        </ButtonLink>
      </div>
    </div>
  );
}

export default Contact;
