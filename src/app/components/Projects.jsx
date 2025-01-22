import React from "react";
import Image from "next/image";
import spotsBarcelona from "../../../public/spotsBarcelona.png";
import "../styles/components/Projects.css";
import taskMaster from "../../../public/taskMaster.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Heading from "./Heading";
function Projects() {
  return (
    <div className="projects">
      <Heading
        title="Explore my latest projects"
        subtitle="The best of my creativity and code"
      />

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
