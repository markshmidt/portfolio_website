import React, { useEffect } from "react";
import "./Interests.css";
const ChessIcon = () => (
    <svg viewBox="0 0 24 24" className="interest-icon">
      <path d="M7 21h10v-2H7v2Zm2-4h6l-1-5 2-3V7a3 3 0 1 0-6 0v1l2 3-1 5Z" />
    </svg>
  );
  
  const BookIcon = () => (
    <svg viewBox="0 0 24 24" className="interest-icon">
      <path d="M4 5a3 3 0 0 1 3-3h12v18H7a3 3 0 0 0-3 3V5Z" />
      <path d="M7 2v18" />
    </svg>
  );
  
  const SkateIcon = () => (
    <svg viewBox="0 0 24 24" className="interest-icon">
      <path d="M3 14h13l3-4h2" />
      <path d="M6 18a1 1 0 1 0 0 .01" />
      <path d="M11 18a1 1 0 1 0 0 .01" />
      <path d="M16 18a1 1 0 1 0 0 .01" />
    </svg>
  );
  
const interests = [
  {
    title: "Chess ♟️",
    text: "I enjoy strategy and pattern recognition — chess is my favorite way to train focus, planning, and calm decision-making.",
    tag: "Strategy mindset",
  },
  {
    title: "Reading 📚",
    text: "Mostly tech + psychology + fiction. I like turning ideas into notes, systems, and better habits (and yes — I still love paper books).",
    tag: "Curiosity & learning",
  },
  {
    title: "Figure Skating ⛸️",
    text: "I love the mix of discipline and creativity — consistent practice, small improvements, and performing under pressure.",
    tag: "Consistency",
  },
];

export default function Interests() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("active");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="interests" id="interests">
      <div className="interests-inner">
        <h2 className="interests-title reveal">Beyond Code</h2>

        <p className="interests-subtitle reveal">
          A few things that keep me curious, focused, and motivated — and that
          surprisingly help my work as a developer.
        </p>

        <div className="interests-grid">
          {interests.map((item, idx) => (
            <article
              key={item.title}
              className={`interest-card reveal delay-${idx + 1}`}
            >
              <div className="interest-top">
                <h2>{item.title}</h2>
                <span className="interest-tag">{item.tag}</span>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="interests-facts reveal">
          <div className="fact-pill">☕ Fun fact: I love building UI that feels “smooth” like skating.</div>
          <div className="fact-pill">🧩 I’m the person who enjoys debugging because it feels like puzzles.</div>
          <div className="fact-pill">🎯 I’m happiest when I can measure progress (stats, charts, or ELO).</div>
        </div>
      </div>
    </section>
  );
}
