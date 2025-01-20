import React from "react";
import Image from "next/image";
import setProject from "../../../public/setProject.png";
import spotsBarcelona from "../../../public/spotsbarcelona2.png";
import "../styles/components/Projects.css";
import taskMaster from "../../../public/taskMaster.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Projects() {
  return (
    <div className="projects">
      <div className="projects__intro">
        <p className="projects__tittle">Recent Projects</p>
        <button className="bg-brand rounded-full w-40 py-2 text-white	">
          View All Projects <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="projects__boxes">
        <div className="project">
          <Image
            className="project__image"
            src={setProject}
            alt="photo of Project"
          />
        </div>
        <div className="project">
          <Image className="project__image" src={spotsBarcelona} alt="" />
        </div>
        <div className="project">
          <Image className="project__image" src={taskMaster} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
