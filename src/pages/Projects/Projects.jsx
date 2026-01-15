// src/components/Projects/Projects.jsx
import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Gomoku Game",
    description:
      "A fully functional web-based Gomoku game featuring PvP and AI modes. Built with a Java Spring Boot backend and vanilla JavaScript frontend, optimized for desktop and mobile.",
    image: "/assets/img/gomoku.gif",
    github:
      "https://github.com/markshmidt/projects/tree/main/JavaProjects/gomoku-web",
    play: "https://mariia-shmidt-portfolio.com/gomoku",
  },
  {
    title: "Coffee Island POS",
    description:
      "A full-stack Point of Sale (POS) web application built with Django. Includes order management, menu configuration, loyalty points, receipts, and admin analytics.",
    image: "/assets/img/coffeeshopapp.png",
    github: "https://github.com/markshmidt/coffee-shop-app",
    play: "https://mariia-shmidt-portfolio.com/coffeeshopapp",
  },
  {
    title: "Kamisado Game",
    description:
      "Interactive digital version of the strategic board game Kamisado using Python OOP and Pygame.",
    image: "/assets/img/kamisado.gif",
    github:
      "https://github.com/markshmidt/projects/tree/main/PythonProjects/kamisado",
  },
  // {
  //   title: "Tic-Tac-Toe Game",
  //   description:
  //     "A strategic Tic-Tac-Toe game deployed on Tomcat using Java Servlets and JSP, demonstrating HTTP request handling and server-side rendering.",
  //   image: "/assets/img/tic-tac-toe.gif",
  //   github:
  //     "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-servlet",
  // },

  /* --- UNUSED / ARCHIVED PROJECTS ---
  
  {
    title: "Kamisado Game",
    description:
      "Interactive digital version of the strategic board game Kamisado using Python OOP and Pygame.",
    image: "/assets/img/kamisado.gif",
    github:
      "https://github.com/markshmidt/projects/tree/main/PythonProjects/kamisado",
  },
  {
    title: "Racing Game",
    description:
      "A JavaFX racing game built with JavaRush graphics engine.",
    image: "/assets/img/project-maven.gif",
    github:
      "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-maven",
  },
  {
    title: "HRM & Payroll System",
    description:
      "JavaFX-based HRM and Payroll system with reporting features.",
    image: "/assets/img/management.gif",
    github:
      "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-management",
  },

  */
];

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2>Featured Projects</h2>

      <p className="projects-description">
        A curated selection of projects showcasing my experience in full-stack
        development, backend systems, and interactive web applications.
      </p>

      <div className="project-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="project-actions">
                {project.play ? (
                  <a
                    className="project-btn primary"
                    href={project.play}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try it live
                  </a>
                ) : (
                  <a
                    className="project-btn primary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Planned Release
                  </a>
                )}

                <a
                  className="project-btn secondary"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
          <a
          className="project-btn github-cta"
          href="https://github.com/markshmidt/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects on GitHub →
        </a>
      </div>
    </section>
  );
};

export default Projects;
