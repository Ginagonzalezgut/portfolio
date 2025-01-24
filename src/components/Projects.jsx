import React from "react";
import Image from "next/image";
import spotsBarcelona from "../../public/spotsBarcelona.png";
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
            <Image
              className="project__image"
              src={taskMaster}
              alt=""
              unoptimized
            />
          </div>
          <div className="project">
            <Image
              className="project__image"
              src={spotsBarcelona}
              alt=""
              unoptimized
            />
          </div>
        </div>
        <ButtonLink>Discover My Projects</ButtonLink>
      </div>
    </div>
  );
}

export default Projects;
