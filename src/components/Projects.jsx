import React from "react";
import Image from "next/image";
import spotsBarcelona from "../../public/spotsBarcelona.webp";
import fitEnCasa from "../../public/fit-en-casa.jpg";
import "../styles/components/Projects.css";
import taskMaster from "../../public/taskMaster.png";
import Heading from "./Heading";
import ButtonLink from "./ButtonLink";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <Heading
          title="Explore my latest projects"
          subtitle="The best of my creativity and code"
        />

        <div className="projects__boxes">
          <div className="project">
            <a href="https://fitencasa.site/" target="blank">
              <Image
                className="project__image"
                src={fitEnCasa}
                alt="A screenshot of a web app to exercise at home"
                unoptimized
              />
            </a>
          </div>
          <div className="project">
            <a
              href="https://coffee-web-one.vercel.app/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image
                className="project__image"
                src={spotsBarcelona}
                alt="A screenshot of a web app to find nice spots in Barcelona"
                unoptimized
              />
            </a>
          </div>
          <div className="project">
            <a
              href="https://ginagonzalezgut.github.io/To-do-list/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image
                className="project__image"
                src={taskMaster}
                alt="A screenshot of a web app to manage lists of tasks"
                unoptimized
              />
            </a>
          </div>
        </div>
        <ButtonLink
          href="https://github.com/Ginagonzalezgut?tab=repositories"
          target="_blank"
        >
          Discover My Projects
        </ButtonLink>
      </div>
    </div>
  );
}

export default Projects;
