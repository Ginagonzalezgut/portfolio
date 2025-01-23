import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/components/ButtonLink.css";

function ButtonLink({ children }) {
  return (
    <a className="button-link">
      {children} <FontAwesomeIcon icon={faArrowRight} />
    </a>
  );
}

export default ButtonLink;
