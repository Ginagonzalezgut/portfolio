import React from "react";
import Heading from "./Heading";
import "../styles/components/Review.css";
import ReviewBox from "./ReviewBox";

function Review() {
  return (
    <div className="review__section">
      <Heading title="What people say" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {" "}
            <ReviewBox />
          </div>
          <div className="col-md-4">
            {" "}
            <ReviewBox />
          </div>{" "}
          <div className="col-md-4">
            {" "}
            <ReviewBox />
          </div>{" "}
        </div>
        <div className="row">
          {" "}
          <div className="col-md-4 offset-md-4">
            {" "}
            <ReviewBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
