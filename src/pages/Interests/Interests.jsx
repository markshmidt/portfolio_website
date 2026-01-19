import { useState } from "react";
import "./Interests.css";

const facts = [
  {
    title: "Chess",
    content:
      "I enjoy strategic thinking, long-term planning, and measuring progress over time (yes, I track ELO).",
  },
  {
    title: "Reading",
    content:
      "Mostly tech, psychology, and fiction. I like turning ideas into notes, systems, and better habits (and yes — I still love paper books).",
  },
  {
    title: "Figure Skating",
    content:
      "I love the mix of discipline and creativity — consistent practice, small improvements, and performing under pressure. I also have a first-class degree in figure skating.",
  },
  {
    title: "Movies",
    content:
      "Quiet evenings with movies recharge me. Favorite genres include detective stories and science fiction — both train logical thinking.",
  },
];

export default function Interests() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggle = (index) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <section className="facts-section" id="interests">
      <h2 className="facts-title">SOME FACTS ABOUT ME</h2>

      <div className="facts-grid">
        {/* LEFT */}
        <div className="facts-left">
          <p className="facts-intro">
            There are a few things that keep me curious, focused, and motivated —
            and that, oddly enough, help me work as a developer.
          </p>

          <div className="fun-facts">
            <h3>Fun facts:</h3>
            <ul>
              <li>I love building UI that feels “smooth” like skating.</li>
              <li>I enjoy debugging because it feels like solving puzzles.</li>
              <li>I’m happiest when I can measure progress (stats, charts, or ELO).</li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="facts-right">
          {facts.map((item, index) => {
            const isOpen = openItems.has(index);

            return (
              <div key={item.title} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggle(index)}
                >
                  <span className={`accordion-icon ${isOpen ? "is-open" : ""}`}>
                  +
                  </span>
                  <span className="accordion-title">{item.title}</span>
                </button>

                {isOpen && (
                  <div className="accordion-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
