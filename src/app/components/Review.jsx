import React from "react";
import Heading from "./Heading";
import "../styles/components/Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ReviewBox from "./ReviewBox";

function Review() {
  return (
    <div className="review__section">
      <Heading title="What people say" />
      <div>
        <div className="review__boxes container">
          <ReviewBox />
          <ReviewBox /> <ReviewBox /> <ReviewBox />
        </div>
      </div>
    </div>
  );
}

export default Review;
