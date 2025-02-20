import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ReviewBox({ children, author, profession }) {
  return (
    <div className="review__box">
      <FontAwesomeIcon className="review__icon" icon={faQuoteLeft} />
      <p>{children}</p>
      <div className="review__decoration"></div>
      <p>{author}</p>
      <p>{profession}</p>
    </div>
  );
}

export default ReviewBox;
