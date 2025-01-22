import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ReviewBox() {
  return (
    <div className="review__box">
      <FontAwesomeIcon className="review__icon" icon={faQuoteLeft} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        distinctio, laboriosam eveniet iusto excepturi blanditiis libero facere
        id tempore. Veniam porro aspernatur aut laboriosam necessitatibus
        doloremque eum velit nulla! Aliquid.
      </p>
      <div className="review__decoration"></div>
    </div>
  );
}

export default ReviewBox;
