import "./Skills.css"

const PythonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2048 2048"
    className="skill-icon python-icon"
  >
    {/* Top snake */}
    <path
      fill="currentColor"
      d="M1510 274v465q0 51-19 96t-52 79t-77 54t-96 20H778q-61 0-116 24t-98 66t-67 96t-25 117v223H305q-57 0-100-20t-74-54t-53-79t-33-95q-15-61-25-123t-10-126q0-63 10-125t25-122q14-56 41-101t67-78t88-51t109-18h672v-62H534V274q0-66 14-110t45-72t76-44t109-28Q835 9 894 5t117-5q64 0 128 4t127 16q48 9 92 30t77 53t54 76t21 95m-763 62q19 0 36-7t29-20t20-30t7-36q0-19-7-35t-20-30t-29-20t-36-8q-19 0-36 7t-29 20t-20 30t-7 36q0 19 7 36t19 29t30 20t36 8"
    />

    {/* Bottom snake */}
    <path
      fill="currentColor"
      d="M2037 1037q0 117-38 229q-16 47-34 92t-47 79t-67 56t-97 21h-732v62h488v187q0 56-24 98t-65 75t-91 53t-106 35t-108 18t-96 6q-43 0-95-6t-107-19t-105-35t-91-53t-64-74t-24-98v-466q0-50 19-95t53-79t77-54t95-20h488q62 0 117-25t97-68t66-99t25-118V522h183q57 0 97 20t69 55t48 80t31 93q17 66 27 132t11 135m-740 663q-19 0-36 7t-29 20t-20 30t-7 36q0 19 7 36t19 30t29 20t37 8q19 0 35-7t29-21t20-30t7-36q0-19-7-35t-19-30t-29-20t-36-8"
    />
  </svg>
);

const skills = [
  {
    title: "PYTHON",
    text:
      "Django, Flask, FastAPI • NumPy, Pandas • Matplotlib/Plotly • Scikit-learn, TensorFlow, PyTorch, Keras ",
      icon: PythonIcon,
    
  },
  {
    title: "Data Analysis & Data Science",
    text:
      "Excel/Google Sheets (pivots, XLOOKUP) • Tableau dashboards • R programming for visualization • data cleaning, modeling, indexing • Relational and NoSQL databases",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 3v18h18M7 15l3-3 4 4 5-6" />
      </svg>
    ),
  },
  {
    title: "Frontend",
    text:
    "React + TypeScript / JS • responsive UI • component-driven layouts • accessibility basics",
    icon: (
      <svg viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M9 9l-2 2 2 2" />
      <path d="M15 9l2 2-2 2" />
    </svg>
    ),
  },

  {
    title: "Backend",
    text:
      "Next.js / Express • REST APIs • authentication/authorization • SQL/ORM • deployment with Nginx + Gunicorn & Vercel",
    icon: (
      <svg viewBox="0 0 24 24">
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </svg>
    ),
  },
  {
    title: "Teamwork & Leadership",
    text:
      "Team lead experience • Sprint planning • Agile/Scrum ceremonies • GitHub / GitLab • code reviews + PR feedback • Slack / Linear",
    icon: (
      <svg viewBox="0 0 24 24">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <path d="M2 20c0-3 4-5 7-5" />
      <path d="M15 15c3 0 7 2 7 5" />
    </svg>
    ),
  },
  {
    title: "Problem Solving & Adaptability",
    text:
      "Debugging + root-cause analysis • break down requirements into tasks • fast onboarding to new tools  or stack",
    icon: (
      <svg viewBox="0 0 24 24">
      <path d="M12 3a6 6 0 0 1 6 6c0 2-1 3-2 4s-1.5 1.5-1.5 3H9.5c0-1.5-.5-2-1.5-3S6 11 6 9a6 6 0 0 1 6-6Z" />
      <path d="M9 20h6" />
      <path d="M10 23h4" />
      <path d="M9.5 10.5h5" />
    </svg>
    ),
  }
  
];
import { useEffect, useRef } from "react";
import "./Skills.css";

export default function Skills() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Experience</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-card"
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-content">
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
