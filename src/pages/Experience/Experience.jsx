import React from "react";
import "./Experience.css";

const journey = [
    {
        title: "Programming Courses & Certifications",
        period: "2023–2025",
        preview: "Supplementary technical courses & self-directed learning",
        details: [
          "Completed additional programming courses alongside college studies to strengthen core fundamentals.",
          "Focused on data structures, algorithms, and problem-solving techniques.",
          "Expanded practical knowledge in Python, Java, and JavaScript beyond academic requirements.",
          "Strengthened understanding of databases, APIs, and backend logic through hands-on exercises.",
          "These courses reinforced long-term interest in both software development and data analytics.",
        ],
        side: "right",
      },
    {
      title: "George Brown College",
      period: "2023–2026",
      preview: "Computer Programming & Analysis (Advanced Diploma)",
      details: [
        "Advanced Diploma program focused on full-stack software development and applied computer science.",
        "Consistently high academic performance (GPA: 3.8).",
        "Team Lead on multiple group projects, coordinating task planning, code reviews, and integration.",
        "Built full-stack web applications using React, Node.js, Spring Boot, and Django.",
        "Worked with relational and NoSQL databases (MySQL, PostgreSQL, MongoDB).",
        "Applied software engineering principles, clean architecture, and version control in collaborative environments.",
      ],
      side: "left",
    },
  
  
    {
      title: "GTHost Mobile Application",
      period: "2025–2026",
      preview: "Mobile app development for hosting services platform",
      details: [
        "Designed and developed a mobile application for the GTHost platform.",
        "Worked on frontend UI and application logic with a focus on usability and clean architecture.",
        "Integrated backend services and APIs for real-time data communication.",
        "Collaborated with team members to align mobile features with backend microservices.",
        "Gained hands-on experience in mobile-first design and production-level application workflows.",
      ],
      side: "right",
    },
  
    {
      title: "Data Analyst Assistant",
      period: "Nov 2025",
      preview: "York Regional Educational Services",
      details: [
        "Assisted with data analysis and reporting for educational and volunteer programs.",
        "Worked with real-world datasets to clean, analyze, and interpret information.",
        "Created structured reports and visual insights to support decision-making.",
        "Applied Python, SQL, and spreadsheet-based analytics techniques.",
        "Strengthened ability to translate raw data into actionable insights.",
      ],
      side: "left",
    },
  
    {
      title: "Full-Stack Developer",
      period: "Jan 2026",
      preview: "Dance Radar – Web application project",
      details: [
        "Developed a full-stack web application focused on event discovery and user interaction.",
        "Implemented frontend interfaces with modern JavaScript frameworks.",
        "Built backend logic and APIs to support dynamic data flows.",
        "Worked with databases and authentication flows.",
        "Focused on clean UI/UX, scalability, and real-world usability.",
      ],
      side: "right",
    },
  ];
  

export default function JourneyTimeline() {
    return (
        <section className="journey-section">
          <h2 className="journey-title">Industry Experience</h2>
      
          <div className="journey-timeline">
            <span className="journey-line" />
      
            {journey.map((item, index) => (
              <div
                key={index}
                className={`journey-item ${item.side}`}
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
      
                  <ul>
                    {item.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
      
}
