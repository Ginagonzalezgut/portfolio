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
            <ReviewBox
              author={"Griselda Gomez"}
              profession={"Frontend Developer"}
            >
              Gina ha sido una excelente compañera de proyecto. Trabajar con
              ella ha sido un verdadero placer, ya que demuestra un gran
              compromiso, responsabilidad y disposición para colaborar. Su
              actitud positiva y su capacidad de trabajo en equipo hacen que
              cualquier tarea sea más llevadera y productiva. ¡Sin duda, una
              gran aliada en cualquier proyecto! 😊
            </ReviewBox>
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
