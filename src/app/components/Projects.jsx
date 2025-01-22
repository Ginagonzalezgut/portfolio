import React from "react";
import Image from "next/image";

import spotsBarcelona from "../../../public/spotsBarcelona.png";
import "../styles/components/Projects.css";
import taskMaster from "../../../public/taskMaster.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Projects() {
  return (
    <div className="projects">
      <div className="projects__intro">
        <h2 className="projects__title">
          <span className="projects__subtitle">
            The Best of My Creativity and Code
          </span>
          Explore my latest Projects
        </h2>
        <div className="projects__decoration"></div>
      </div>

      <div className="projects__boxes">
        <div className="project">
          <Image className="project__image" src={taskMaster} alt="" />
        </div>
        <div className="project">
          <Image className="project__image" src={spotsBarcelona} alt="" />
        </div>
      </div>
      <button className="projects__button bg-brand rounded-full w-60 py-2 text-white">
        View All Projects <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Projects;
