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
    technologies: ["WordPress", "Elementor", "CSS", "RankMath SEO"],
  },
  {
    href: "https://coffee-web-one.vercel.app/",
    img: spotsBarcelona,
    alt: "A screenshot of a web app to find nice spots in Barcelona",
    title: "Barcelona Restaurant Guide",
    desc: "Interactive directory with restaurant reviews.",
    rel: "noopener noreferrer",
    technologies: [
      "React",
      "SASS",
      "React Router",
      "Node JS",
      "Express JS",
      "MySQL",
    ],
  },
  {
    href: "https://ginagonzalezgut.github.io/To-do-list/",
    img: taskMaster,
    alt: "A screenshot of a web app to manage lists of tasks",
    title: "To-Do List App",
    desc: "Task management app with features like adding, editing, and deleting tasks.",
    rel: "noopener noreferrer",
    technologies: ["React", "SASS", "React Router"],
  },
  {
    href: "https://lightslategray-starling-659461.hostingersite.com/",
    img: DrTaylorSmith,
    alt: "A screenshot of Dr. Sebastian Taylor-Smith's website",
    title: "Medical Clinic — Professional Website",
    desc: "Professional website for Dr. Sebastian Taylor-Smith's medical clinic.",
    rel: "noopener noreferrer",
    technologies: ["WordPress", "Elementor", "Figma"],
    figma:
      "https://www.figma.com/design/TKBRt4IkWat5bdbuDzXbcv/Medicine?node-id=0-1&t=BX7iBgHhFlF1plgp-1",
  },
  {
    href: "https://lightgreen-fox-145679.hostingersite.com",
    img: weddingInvitation,
    alt: "A screenshot of a wedding invitation web app",
    title: "Wedding Website",
    desc: "Elegant wedding website featuring a photo gallery and RSVP functionality.",
    technologies: ["Angular", "SASS", "Figma"],
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
                <h3 className="project__title">
                  <a
                    href={project.href}
                    target="blank"
                    {...(project.rel ? { rel: project.rel } : {})}
                  >
                    {project.title}
                  </a>
                </h3>
                {project.technologies && (
                  <p className="project__tech">
                    {project.technologies.join(" · ")}
                  </p>
                )}
                <p className="project__desc">{project.desc}</p>
                {project.figma && (
                  <a
                    className="project__link"
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Design
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
