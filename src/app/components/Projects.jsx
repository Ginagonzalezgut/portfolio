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
          <p className="project__title">Task List Application</p>
          <p className="project__text">
            Online tool to manage and organize your daily tasks.
          </p>
          <a className="project__link" href="#">
            View <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="project">
          <Image className="project__image" src={spotsBarcelona} alt="" />
          <p className="project__title"> Best Spots in Barcelona</p>
          <p className="project__text">
            A web guide to discover the best places in Barcelona.
          </p>
          <a className="project__link" href="#">
            View <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
      <button className="bg-brand rounded-full w-40 py-2 text-white">
        View All Projects <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Projects;
