import React from "react";
import "../styles/components/AboutMe.css";
import Heading from "./Heading";
import Image from "next/image";
import gina from "../../public/gina.jpeg";

export default function AboutMe() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
            <Image
              className="img-fluid"
              src={gina}
              alt="Gina holding a green cup with the word 'cronicas' engraved, wearing a blue checkered dress and red nail polish."
              style={{ height: "auto", borderRadius: 20 }}
              unoptimized
            />
          </div>
          <div className="col-lg-8 text-start ps-lg-5">
            <Heading title="About me" subtitle="The story behind Gina" />
            <p className="mb-4">
              One day, I decided to transition from teaching to creating and
              discovered my passion for web development. I love building
              visually appealing and functional products, always paying close
              attention to detail. I enjoy collaborating with others and
              constantly learning.
            </p>
            <p>
              When I'm not coding, I find inspiration by exploring specialty
              coffee shops in my city. Want to know more about me or collaborate
              on a project? Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
