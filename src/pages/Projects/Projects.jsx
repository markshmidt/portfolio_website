import React, { useState } from "react";
import "./Projects.css";

const CATEGORIES = ["All", "Software Dev", "Data & Analytics"];

const projectsData = [
  {
    title: "Gomoku Game",
    description:
      "A fully functional web-based Gomoku game featuring PvP and AI modes. Built with a Java Spring Boot backend and vanilla JavaScript frontend, optimized for desktop and mobile.",
    image: "/assets/img/gomoku.gif",
    github:
      "https://github.com/markshmidt/projects/tree/main/JavaProjects/gomoku-web",
    play: "https://mariia-shmidt-portfolio.com/gomoku",
    category: "Software Dev",
    stack: ["Java", "Spring Boot", "JavaScript"],
  },
  {
    title: "Coffee Island POS",
    description:
      "A full-stack Point of Sale (POS) web application built with Django. Includes order management, menu configuration, loyalty points, receipts, and admin analytics. Please see GitHub page for login details.",
    image: "/assets/img/coffeeshop.gif",
    github: "https://github.com/markshmidt/coffee-shop-app",
    play: "https://mariia-shmidt-portfolio.com/coffeeshopapp/",
    category: "Software Dev",
    stack: ["Python", "Django", "PostgreSQL"],
  },
  {
    title: "Kamisado Game",
    description:
      "Interactive digital version of the strategic board game Kamisado using Python OOP and Pygame.",
    image: "/assets/img/kamisado.gif",
    github:
      "https://github.com/markshmidt/projects/tree/main/PythonProjects/kamisado",
    category: "Software Dev",
    stack: ["Python", "Pygame", "OOP"],
  },
  {
    title: "CaRMS Data Platform",
    description:
      "AI-enabled data platform for Canadian medical residency programs. Features Dagster ETL pipelines, vector search with pgvector, a RAG assistant powered by LangChain, and an interactive Streamlit dashboard.",
    image: "/assets/img/placeholder-carms.svg",
    github: "https://github.com/markshmidt/carms-data-platform",
    category: "Data & Analytics",
    stack: ["Dagster", "PostgreSQL", "FastAPI", "LangChain", "Streamlit"],
  },
  {
    title: "Canada Summer Jobs Pipeline",
    description:
      "Data pipeline transforming 137,000+ government grant records into clean Delta tables using medallion architecture. Orchestrated with Apache Airflow and visualized through Power BI dashboards for YRES.",
    image: "/assets/img/placeholder-summerjobs.svg",
    github: "https://github.com/markshmidt/summer-jobs-yres-data-platform",
    category: "Data & Analytics",
    stack: ["Airflow", "Databricks", "PySpark", "Delta Lake", "Power BI"],
  },
  {
    title: "Data Warehouse",
    description:
      "End-to-end data warehouse with bronze/silver/gold medallion architecture. Implements star schema modeling with dimension and fact tables, optimized for BI tools like Tableau and Power BI.",
    image: "/assets/img/placeholder-warehouse.svg",
    github: "https://github.com/markshmidt/datawarehouse-project",
    category: "Data & Analytics",
    stack: ["PostgreSQL", "Docker", "SQL", "Star Schema"],
  },
];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section className="projects-container" id="projects">
      <h2>Featured Projects</h2>

      <div className="project-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-list">
        {filtered.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} loading="lazy" />

            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              {project.stack && (
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

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
          className=" btn"
          href="https://github.com/markshmidt/"
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
