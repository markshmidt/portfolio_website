import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { useState, useEffect, useRef } from "react";

/* =======================
   DATA
======================= */

const journey = [
  {
    title: "Fullstack Developer & Data Analyst",
    period: "Jan 2026 - Today",
    preview: "SolarPunk & Dance Radar — data-driven full-stack platform",
    details: [
      "Contributed to full-stack platform development using Next.js, React, TypeScript and Vercel.",
      "Implemented product analytics (PostHog API) and event-driven workflows (Inngest) to track engagement and user behavior.",
      "Engineered GraphDB models (Neo4j), enabling recommendations, similarity queries and interest trends.",
      "Integrated PostgreSQL, MongoDB, and Airtable for structured and semi-structured data storage and querying.",
      "Developed an admin analytics dashboard combining 5+ data sources into a unified dataset for KPI tracking across the platform.",
    ],
    side: "right",
  },
  {
    title: "Data Analyst Assistant",
    period: "Nov 2025 - Today",
    preview: "York Regional Educational Services (Volunteer Role)",
    details: [
      "Supported data analysis and reporting for volunteer engagement programs.",
      "Analyzed volunteer weekly/monthly activity, attendance, and coaching sessions cancellations using Python (Pandas, NumPy) and SQL-joints / DuckDB.",
      "Produced regional and national reports on volunteer participation rates, and engagement metrics, helping stakeholders track program performance across locations.",
      "Created analytical reports and visualizations with Tableu, PowerBI, Plotly, Matplotlib and Seaborn",
      "Worked extensively with spreadsheets (Excel & Google Sheets), including pivot tables, conditional logic, and data validation."

    ],
    side: "left",
  },
  {
    title: "GTHost Mobile Application Developer",
    period: "Sep 2025 – Apr 2026",
    preview: "Cross-platform mobile app for hosting service management",
    details: [
      "Developed Flutter (Dart) mobile application for Android and iOS.",
      "Implemented REST API integration using Dio with JWT authentication and secure token handling.",
      "Designed clean architecture and reusable UI components.",
      "Team Lead and Project Coordinator — aligned frontend and backend development.",
    ],
    side: "right",
  },
  {
    title: "Freelance Python Developer",
    period: "Sep 2024 - Today",
    preview: "Data platforms, AI systems & analytics-driven applications",
    details: [
      "Built a modular data platform for CaRMS using PostgreSQL, SQLAlchemy, Dagster, and FastAPI for data ingestion and processing and prototyped Langchain AI-based workflow.",
      "Developed a POS full-stack application for Coffee Island with analytics layer, implementing schema design and reporting queries for sales, product performance, and KPI tracking.",
      "Built NLP/survey analysis workflows for Compass for Good, cleaning inconsistent responses, and contributing to a web dashboard",
      "Developed an AI decision engine (Minimax + Alpha-Beta pruning) with optimized ML performance and heuristic evaluation logic.",
    ],
    side: "left",
  },
  {
    title: "George Brown College",
    period: "2023–2026",
    preview: "Computer Programming & Analysis (Advanced Diploma)",
    details: [
      "High academic performance (GPA: 3.8). Five times Dean's List of Honor Laureate.",
      "Team Lead for 2 years on multiple group projects, coordinating planning & collaboration.",
      "Designed full-stack systems using MERN stack, Spring Boot (microservices), ASP.NET, and JavaScript.",
      "Data modeling, indexing, and optimization with MySQL, PostgreSQL, and MongoDB.",
      "Applied data analysis and science techniques using Pandas, NumPy, Seaborn, Scikit-learn, Tensorflow, PyTorch, Keras.",
    ],
    side: "right",
  },

  {
    title: "Courses & Certifications",
    period: "2023–2025",
    preview: "Supplementary technical courses & self-directed learning",
    details: [
      {
        label: "Full Stack Software Developer",
        url: "https://coursera.org/share/5038679b6eb1651106cd9b0e89f03652",
        meta: "Coursera / IBM",
      },
      {
        label: "Google Data Analytics",
        url: "/assets/files/datacertificate.pdf",
        meta: "Google",
      },
      {
        label: "Java Developer Professional",
        url: "/assets/files/javarush.pdf",
        meta: "JavaRush",
      },
    ],
    side: "left",
  },

];

/* =======================
   ANIMATIONS
======================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.28,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* =======================
   COMPONENT
======================= */
export default function JourneyTimeline() {
  const [openIndex, setOpenIndex] = useState(null);
  const modalRef = useRef(null);

  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  useEffect(() => {
    if (!isMobile) return;

    const handleOutside = (e) => {
      if (openIndex === null) return;
      if (modalRef.current?.contains(e.target)) return;
      setOpenIndex(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, [isMobile, openIndex]);

  return (
    <motion.section
      className="journey-section"
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <h2 className="journey-title">Experience & Education</h2>

      <motion.div className="journey-timeline">
        <span className="journey-line" />

        {journey.map((item, index) => (
          <motion.div
            key={index}
            className={`journey-item ${item.side} ${isMobile && openIndex === index ? "active" : ""
              }`}
            variants={itemVariants}
          >
            <span className="journey-dot" />

            {/* HOVER CONTAINER */}
            <div
              className="journey-card"
              onClick={(e) => {
                if (!isMobile) return;
                e.stopPropagation();
                setOpenIndex(index);
              }}
            >

              {/* PREVIEW */}
              <div className="journey-preview">
                <h3>{item.title}</h3>
                <span className="journey-period">{item.period}</span>
                <p>{item.preview}</p>
              </div>

              {/* MODAL */}
              <div
                ref={openIndex === index ? modalRef : null}
                className={`journey-modal ${item.side}`}
              >
                {isMobile && (
                  <button
                    type="button"
                    className="journey-close"
                    aria-label="Close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenIndex(null);
                    }}
                  >
                    ×
                  </button>
                )}

                <h3>{item.title}</h3>
                <span className="journey-period">{item.period}</span>

                <div className="journey-divider" />

                <ul className="journey-list">
                  {item.details.map((d, i) => (
                    <li key={i} className="journey-li">
                      {typeof d === "string" ? (
                        d
                      ) : (
                        <a
                          href={d.url}
                          className="journey-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="journey-link-title">{d.label}</span>
                          {d.meta && (
                            <span className="journey-link-meta">
                              {" "}
                              — {d.meta}
                            </span>
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
