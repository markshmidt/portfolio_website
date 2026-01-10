import React, { useState, useRef, useEffect } from "react";
import { FileCode2, BarChart3, ChevronDown } from "lucide-react";
import "./ResumeDropdown.css";

const ResumeDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="resume-dropdown" ref={ref}>
      <button
        className="btn btn-primary resume-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        Resume
        <ChevronDown
          size={18}
          className={`chevron ${open ? "rotate" : ""}`}
        />
      </button>

      {open && (
        <div className="resume-menu">
          <a
            href="/assets/files/MariiaShmidt_SoftwareDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-item"
          >
            <FileCode2 size={18} />
            <span>
              <strong>Software Developer</strong>
              <small>Backend · Frontend · Full-Stack</small>
            </span>
          </a>

          <a
            href="/assets/files/MariiaShmidt_DataAnalytics.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-item"
          >
            <BarChart3 size={18} />
            <span>
              <strong>Data Analytics</strong>
              <small>Python · SQL · Pandas · Dashboards</small>
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumeDropdown;
