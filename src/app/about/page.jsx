import React from "react";
import Image from "next/image";
import gina from "../../../public/gina.jpeg";
import "@/styles/components/About.css";
import Title from "@/components/Title";
import Heading from "@/components/Heading";

function About() {
  return (
    <div className="about">
      <div className="about__hero">
        <div className="container">
          <Title>About Me</Title>
        </div>
      </div>

      <div className="about__info">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Image className="about__photo" src={gina} alt="" unoptimized />
            </div>
            <div className="col-md-9">
              <div className="about__desc">
                <Heading title="The story behind Gina" />
                <p>
                  One day, I decided to transition from teaching to creating and
                  discovered my passion for web development. I love building
                  visually appealing and functional products, always paying
                  close attention to detail. I enjoy collaborating with others
                  and constantly learning.{" "}
                </p>
                <p>
                  When I'm not coding, I find inspiration by exploring specialty
                  coffee shops in my city. Want to know more about me or
                  collaborate on a project? Feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
