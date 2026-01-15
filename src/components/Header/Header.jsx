import React from 'react';
import './Header.css';
import { useEffect, useRef } from 'react';
import { useHeaderScroll } from './headerScroll.js';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


const Header = () => {
    const headerRef = useRef(null);
    const showBtnRef = useRef(null);
  
    useEffect(() => {
      const header = headerRef.current;
      const showBtn = showBtnRef.current;
  
      if (!header || !showBtn) return;
  
      let lastScrollTop = 0;
      let headerVisible = true;
  
      const onScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (scrollTop > lastScrollTop && scrollTop > 100 && headerVisible) {
          header.style.transform = "translateY(-100%)";
          header.style.opacity = "0";
          showBtn.classList.add("visible");
          showBtn.style.display = "block";
          headerVisible = false;
        } else if (scrollTop < lastScrollTop && !headerVisible) {
          header.style.transform = "translateY(0)";
          header.style.opacity = "1";
          showBtn.classList.remove("visible");
          showBtn.style.display = "none";
          headerVisible = true;
        }
  
        lastScrollTop = Math.max(0, scrollTop);
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    const showHeader = () => {
      if (headerRef.current && showBtnRef.current) {
        headerRef.current.style.transform = "translateY(0)";
        headerRef.current.style.opacity = "1";
        showBtnRef.current.style.display = "none";
        showBtnRef.current.classList.remove("visible");
      }
    };
  return (
    <>
    <header className="header fixed" ref={headerRef}>
  <div className="header-container">
  <button
      className="logo-btn"
      onClick={() => scrollToSection("mainContent")}
      aria-label="Go to top"
    >
      <img
        src="/assets/img/logo.png"
        alt="Mariia Shmidt"
        className="logo-img"
      />
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
        style={{ display: 'none' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 3.293l5.354 5.353-.708.708L8 4.707l-4.646 4.647-.708-.708z" />
        </svg>
      </button>
    </>
    
  );
};

export default Header;
