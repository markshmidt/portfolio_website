import React, { useRef } from "react";
import "./Header.css";
import { useHeaderScroll } from "./headerScroll";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header = () => {
  const headerRef = useRef(null);
  const showBtnRef = useRef(null);

  useHeaderScroll({
    headerRef,
    showBtnRef,
    breakpointPx: 700,
  });

  const showHeader = () => {
    headerRef.current.style.transform = "translateY(0)";
    headerRef.current.style.opacity = "1";
    showBtnRef.current.classList.remove("visible");
    showBtnRef.current.style.display = "none";
  };

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="header-container">
          <button
            className="logo-btn"
            onClick={() => scrollToSection("mainContent")}
          >
            <img src="/assets/img/logo.png" alt="Logo" className="logo-img" />
          </button>

          <nav>
            <ul className="nav-links">
              <button onClick={() => scrollToSection("experience")}>Experience</button>
              <button onClick={() => scrollToSection("skills")}>Skills</button>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
              <button onClick={() => scrollToSection("interests")}>Interests</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </ul>
          </nav>
        </div>
      </header>

      <button
        id="show-header-btn"
        ref={showBtnRef}
        onClick={showHeader}
        aria-label="Show Header"
      >
        ↑
      </button>
    </>
  );
};

export default Header;
