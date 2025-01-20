import React from "react";
import Image from "next/image";
import setProject from "../../../public/setProject.png";
import spotsBarcelona from "../../../public/spotsbarcelona.png";
import "../styles/components/Projects.css";
import taskMaster from "../../../public/taskMaster.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Projects() {
  return (
    <div className="projects">
      <div className="projects__intro">
        <h2 className="text-4xl">
          Recent <span className="projects__fulltittle">Projects</span>
        </h2>
        <button className="bg-brand rounded-full w-40 py-2 text-white	">
          View All Projects <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="projects__boxes">
        <div className="project">
          <Image className="project__image" src={spotsBarcelona} alt="" />
          <p className="project__title">Task List Application</p>
          <p className="project__text">
            Online tool to manage and organize your daily tasks.
            <br /> Stack: React - Vite - SASS - React Router
          </p>
        </div>
        <div className="project">
          <Image className="project__image" src={taskMaster} alt="" />
          <p className="project__title"> Best Spots in Barcelona</p>
          <p className="project__text">
            A web guide to discover the best places in Barcelona. <br />
            Stack: React - Vite - SASS - React Router - MySQL - Express
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
