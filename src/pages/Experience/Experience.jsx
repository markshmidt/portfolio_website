import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

/* =======================
   DATA
======================= */

const journey = [
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
    side: "right",
  },

  {
    title: "George Brown College",
    period: "2023–2026",
    preview: "Computer Programming & Analysis (Advanced Diploma)",
    details: [
      "High academic performance (GPA: 3.8).",
      "Team Lead for 2 years on multiple group projects, coordinating planning, collaboration, and continuos integration.",
      "Designed full-stack systems using MERN stack, Spring Boot (microservices), ASP.NET, and JavaScript.",
      "Developed mobile applications using Flutter and React Native.",
      "Data modeling, indexing, and optimization with MySQL, PostgreSQL, and MongoDB.",
      "Applied data analysis techniques using Pandas, NumPy, Seaborn, Scikit-learn, and Plotly.",
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
    title: "Data Analyst Assistant",
    period: "Nov 2025",
    preview: "York Regional Educational Services (Volunteer Role)",
    details: [
      "Supported data analysis and reporting for volunteer engagement programs using real operational datasets.", 
      "Analyzed volunteer weekly/monthly activity, attendance, coaching sessions cancellations, hours logged, and engagement metrics using Python (Pandas, NumPy) and SQL-joints.", 
      "Created analytical reports and visualizations with Tableu, Plotly, Matplotlib and Seaborn", 
      "Worked extensively with spreadsheets (Excel & Google Sheets), including pivot tables, calculated fields, conditional logic, and data validation."
    
    ],
    side: "left",
  },

  {
    title: "Software Developer",
    period: "Jan 2026",
    preview: "SolarPunk & Dance Radar — full-stack web application",
    details: [
      "Developed backend-focused full-stack application using Next.js, TypeScript, and REST APIs.",
      "Deployed production infrastructure using Vercel.",
      "Focused on scalability, data flows, and maintainable backend architecture.",
    ],
    side: "right",
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
  return (
    <motion.section
      className="journey-section"
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <h2 className="journey-title">Industry Experience</h2>

      <motion.div className="journey-timeline">
        <span className="journey-line" />

        {journey.map((item, index) => (
          <motion.div
            key={index}
            className={`journey-item ${item.side}`}
            variants={itemVariants}
          >
            {/* Timeline dot */}
            <span className="journey-dot" />

            {/* Compact preview */}
            <div className="journey-preview">
              <h3>{item.title}</h3>
              <span className="journey-period">{item.period}</span>
              <p>{item.preview}</p>
            </div>

            {/* Hover modal */}
            <div className={`journey-modal ${item.side}`}>
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
                        <span className="journey-link-oneLine">
                          <span className="journey-link-title">{d.label}</span>
                          {d.meta && (
                            <>
                              <span className="journey-link-sep"> — </span>
                              <span className="journey-link-meta">{d.meta}</span>
                            </>
                          )}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
