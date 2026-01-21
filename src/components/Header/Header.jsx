import { useState } from "react";
import "./Header.css";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header ${open ? "open" : ""}`}>
      <div className="header-top">
        {/* LOGO — LEFT */}
        <button
          className="logo-btn"
          onClick={() => scrollToSection("mainContent")}
          aria-label="Go to top"
        >
          <img src="/assets/img/logo.png" alt="Logo" className="logo-img" />
        </button>

        {/* DESKTOP NAV */}
        <nav className="header-nav desktop-nav">
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("interests")}>Interests</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE NAV */}
      <nav className="header-nav mobile-nav">
        <button onClick={() => scrollToSection("experience")}>Experience</button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("interests")}>Interests</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
    </header>
  );
}
