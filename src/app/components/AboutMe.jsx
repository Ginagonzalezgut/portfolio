import React from "react";
import Image from "next/image";
import foto from "../../../public/ginaaboutme.jpeg";
import "../styles/components/AboutMe.css";

function AboutMe() {
  return (
    <div className="about">
      <div className="about__title">
        About Me
        <div className="about__desc">
          I’m someone who thrives on challenges and is always looking for ways
          to grow and evolve. That’s why I decided to turn the page and begin a
          bold new chapter in my life. In programming, I’ve discovered an
          exciting world where creativity meets logic—a space where I can bring
          ideas to life while letting my passion for aesthetics and attention to
          detail shine. Whether it’s crafting seamless user experiences or
          adding the finishing touches that make a design unforgettable, I’m
          dedicated to creating with purpose and style. Welcome to my
          journey—let’s build something amazing together!
        </div>
      </div>
      <div className="about__photo">
        <Image src={foto} alt="Gina en Dinamarca" />
      </div>
    </div>
  );
}

export default AboutMe;
