import React from "react";
import "./Experience.css";

const journey = [
    {
        title: "Courses & Certifications",
        period: "2023–2025",
        preview: "Supplementary technical courses & self-directed learning",
        details: [
          {
            label: "Full Stack Software Developer",
            url: "https://coursera.org/share/5038679b6eb1651106cd9b0e89f03652",
            meta: "Coursera / IBM"
          },
          {
            label: "Google Data Analytics",
            url: "/assets/files/datacertificate.pdf",
            meta: "Google"
          },
          {
            label: "Java Developer Professional",
            url: "/assets/files/javarush.pdf",
            meta: "JavaRush"
          },
        //   {
        //     label: "Django Application Development with SQL and Databases",
        //     url: "https://coursera.org/share/7c5be8cafe1246318f18cccce5d9785f",
        //     meta: "Coursera / IBM"
        //   },
        //   {
        //     label: "Developing AI Applications with Python and Flask",
        //     url: "https://coursera.org/share/f937d642412a75f5724fa9d985c678b5",
        //     meta: "Coursera / IBM"
        //   }
        ],
        side: "right",
      },
      
    {
      title: "George Brown College",
      period: "2023–2026",
      preview: "Computer Programming & Analysis (Advanced Diploma)",
      details: [
        "High academic performance (GPA: 3.8).",
        "Team Lead for 2 years on multiple group projects, coordinating task planning, collaboration and continuous integration.",
        "Designed full-stack web applications using MERN stack, Spring Boot + microservices, ASP.NET. + Js, and mobile applications with Fluuter/React-Native",
        "Data modeling, indexing, and query optimization with MySQL, PostgreSQL, MongoDB.",
        "Hands-on experience with data analysis using Pandas, NumPy, Seaborn, Scikit-learn, Plotly.",
      ],
      side: "left",
    },
  
  
    {
        title: "GTHost Mobile Application Developer",
        period: "Sep 2025 – Apr 2026",
        preview: "Cross-platform mobile app for hosting service management",
        details: [
            "Developed a Flutter (Dart) mobile app for Android and iOS enabling GTHost clients to manage servers, billing, and support.",
            "Integrated REST APIs using Dio with JWT authentication, interceptors, and secure token storage.",
            "Designed clean architecture reusable UI components.",
            "Acted as Team Lead and Project Coordinator, managing task distribution and technical alignment between front/backend"
          ],          
        side: "right",
      },      
  
      {
        title: "Data Analyst Assistant",
        period: "Nov 2025",
        preview: "York Regional Educational Services",
        details: [
          "Supported data analysis and reporting for volunteer engagement programs using real operational datasets.",
          "Analyzed volunteer weekly/monthly activity, attendance, coaching sessions cancellations, hours logged, and engagement metrics using Python (Pandas, NumPy) and SQL-joints.",
          "Created analytical reports and visualizations with Tableu, Plotly, Matplotlib and Seaborn",
          "Worked extensively with spreadsheets (Excel & Google Sheets), including pivot tables, calculated fields, conditional logic, and data validation.",
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
      
                  <ul className="journey-list">
                    {item.details.map((d, i) => (
                        <li key={i} className="journey-li">
                        {typeof d === "string" ? (
                            d
                        ) : (
                            <a
                                className="journey-link"
                                href={d.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span className="journey-link-oneLine">
                                    <span className="journey-link-title">{d.label}</span>
                                    {d.meta && <span className="journey-link-sep"> — </span>}
                                    {d.meta && <span className="journey-link-meta">{d.meta}</span>}
                                </span>
                            </a>

                        )}
                        </li>
                    ))}
                    </ul>

                </div>
              </div>
            ))}
          </div>
        </section>
      );
      
}
