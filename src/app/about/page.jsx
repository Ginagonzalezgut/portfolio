import React from "react";
import Image from "next/image";
import gina from "../../../public/gina.jpeg";
import "@/styles/components/AboutMe.css";
import Heading from "@/components/Heading";

function About() {
  return (
    <div>
      <div className="about"></div>
      <Heading title="About me" />
      <Image className="about__photo" src={gina} alt="" unoptimized />
      <p>
        One day, I decided to transition from teaching to creating and
        discovered my passion for web development. I love building visually
        appealing and functional products, always paying close attention to
        detail. I enjoy collaborating with others and constantly learning.{" "}
      </p>
      <p>
        When I'm not coding, I find inspiration by exploring specialty coffee
        shops in my city. Want to know more about me or collaborate on a
        project? Feel free to reach out!
      </p>
    </div>
  );
}

export default About;
