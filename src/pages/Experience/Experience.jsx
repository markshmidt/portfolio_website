import React, { useState } from "react";
import "./Experience.css";

const journey = [
  {
    title: "British College of Banking and Finance",
    period: "2023–2025",
    short: "Finance fundamentals and data analytics foundation.",
    details: [
      "Financial analysis fundamentals",
      "Intro to data analytics",
      "Business-oriented problem solving",
    ],
    side: "right",
  },
  {
    title: "George Brown College",
    period: "2023–2026",
    short: "Computer Programming & Analysis (Advanced Diploma).",
    details: [
      "Full-stack development",
      "Databases & APIs",
      "Software engineering principles",
    ],
    side: "left",
  },
  {
    title: "Java Developer Intern",
    period: "2024–2025",
    short: "Backend development using Java and Spring Boot.",
    details: [
      "REST APIs",
      "Spring Boot, Hibernate",
      "Agile workflows",
    ],
    side: "right",
  },
];

export default function JourneyTimeline() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="journey-section">
      <h2 className="journey-title">MY EDUCATIONAL JOURNEY</h2>

      <div className="journey-timeline">
        <span className="journey-line" />

        {journey.map((item, index) => {
          const open = openIndex === index;

          return (
            <div
              key={index}
              className={`journey-item ${item.side} ${
                open ? "open" : ""
              }`}
              onClick={() =>
                setOpenIndex(open ? null : index)
              }
            >
              <div className="journey-card">
                <h3>{item.title}</h3>
                <span className="journey-period">
                  {item.period}
                </span>
                <p className="journey-short">{item.short}</p>
              </div>

              {/* SIDE EXPAND PANEL */}
              <div className="journey-expand">
                <ul>
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>

              <span className="journey-dot" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
