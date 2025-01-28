import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/components/ButtonLink.css";

function ButtonLink({ children, href, target }) {
  return (
    <a href={href} className="button-link" target={target}>
      {children} <FontAwesomeIcon icon={faArrowRight} />
    </a>
  );
}

export default ButtonLink;
