import { useState } from "react";
import "./Interests.css";

const facts = [
  {
    title: "Chess",
    content:
      "I fell in love with analyzing positions and thinking several moves ahead at the age of six, when my parents gave me the Harry Potter Magic Chess Set. I later won several school and college championships. Current ELO: 1600–1700.",
  },
  {
    title: "Reading",
    content:
      "When I was two, I begged my parents to teach me how to read because I got bored by just looking at books' pictures. Today, I cannot go to sleep without reading at least 50 pages — and yes, I still prefer paper books.",
  },
  {
    title: "Figure Skating",
    content:
      "I may no longer jump axels or perform Biellmann spins, but I still carry the values figure skating taught me: discipline, creativity, consistent practice, and performing under pressure. I also hold a first-class degree in synchronized figure skating.",
  },
  {
    title: "Movies",
    content:
      "Quiet movie nights recharge me, while packed theaters energize me. My favorite genres are detective films, thrillers, and science fiction — five stars on Letterboxd if it either blows my mind or makes me feel something real.",
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
            There are a few things that keep me curious, focused, and motivated -
            and that, oddly enough, help me at work too.
          </p>

          <div className="fun-facts">
            <h3>Fun facts:</h3>
            <ul>
              <li>I enjoy building LEGO sets - they are my reminder that even the most complex results start with simple blocks.</li>
              <li>I’m happiest when I can measure progress through stats, charts, or ELO ratings.</li>
              <li>I have a soft spot for things that combine logic and creativity. I used to dream about publishing a detective novel.</li>
              <li>Besides English, I also know Russian, Ukranian, German, French and a bit of ASL.</li>
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
