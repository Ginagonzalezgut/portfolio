import React from "react";
import Image from "next/image";
import spotsBarcelona from "../../public/spotsBarcelona.webp";
import fitEnCasa from "../../public/fit-en-casa.jpg";
import "../styles/components/Projects.css";
import taskMaster from "../../public/taskMaster.png";
import DrTaylorSmith from "../../public/DrTaylorSmith.png";
import Heading from "./Heading";
import ButtonLink from "./ButtonLink";
import weddingInvitation from "../../public/weddingInvitation.png";

const projects = [
  {
    href: "https://fitencasa.site/",
    img: fitEnCasa,
    alt: "A screenshot of a web app to exercise at home",
    title: "Fit en casa",
    desc: "Web platform offering personalized home workout routines.",
    rel: undefined,
  },
  {
    href: "https://coffee-web-one.vercel.app/",
    img: spotsBarcelona,
    alt: "A screenshot of a web app to find nice spots in Barcelona",
    title: "Barcelona Restaurant Guide",
    desc: "Interactive directory with restaurant reviews.",
    rel: "noopener noreferrer",
  },
  {
    href: "https://ginagonzalezgut.github.io/To-do-list/",
    img: taskMaster,
    alt: "A screenshot of a web app to manage lists of tasks",
    title: "To-Do List App",
    desc: "Task management app with features like adding, editing, and deleting tasks.",
    rel: "noopener noreferrer",
  },
  {
    href: "https://lightslategray-starling-659461.hostingersite.com/",
    img: DrTaylorSmith,
    alt: "A screenshot of Dr. Sebastian Taylor-Smith's website",
    title: "Medical Clinic — Professional Website",
    desc: "Professional website for Dr. Sebastian Taylor-Smith's medical clinic.",
    rel: "noopener noreferrer",
  },
  {
    href: "https://lightgreen-fox-145679.hostingersite.com",
    img: weddingInvitation,
    alt: "A screenshot of a wedding invitation web app",
    title: "Wedding Website",
    desc: "Elegant wedding website featuring a photo gallery and RSVP functionality.",
    rel: undefined,
  },
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <Heading
          title="Explore my latest projects"
          subtitle="The best of my creativity and code"
        />

        <div className="projects__boxes">
          {projects.map((project, idx) => (
            <div className="project" key={idx}>
              <a
                href={project.href}
                target="blank"
                {...(project.rel ? { rel: project.rel } : {})}
              >
                <Image
                  className="project__image"
                  src={project.img}
                  alt={project.alt}
                  unoptimized
                />
              </a>
              <div className="project__text">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__desc">{project.desc}</p>
              </div>
            </div>
          ))}
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
