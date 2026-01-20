import React, { useEffect } from "react";
import "./Home.css";
import ResumeDropdown from "../../components/ResumeDropdown/ResumeDropdown";
import profileImage from "/assets/img/profile.png";
import { motion, useAnimation } from "framer-motion";

const Home = ({ startAnimations }) => {
  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (startAnimations) {
      imageControls.start("visible");

      // stagger text AFTER image
      // IMAGE

    // TEXT delay
    setTimeout(() => {
      textControls.start("visible");
    }, 120); 
    }
  }, [startAnimations, imageControls, textControls]);

  return (
    <section className="home-container" id="mainContent">
      <div className="hero-glow" />

      <div className="content">
        {/* IMAGE — FIRST */}
        <motion.div
          className="profile"
          initial="hidden"
          animate={imageControls}
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <motion.img
            src={profileImage}
            alt="Mari Shmidt"
            className="profile-img"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mariia-shmidt-dev",
                "_blank"
              )
            }
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 30px rgba(0,183,255,0.6)",
            }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>

        {/* TEXT — AFTER */}
        <motion.div
          className="info"
          initial="hidden"
          animate={textControls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <h1 className="home-title">
            MARIIA SHMIDT
          </h1>

          <p className="home-eyebrow">
            Software Developer and Data Analyst · Toronto, Canada
          </p>

          <p className="home-subtitle">
            I build web applications with clean logic, thoughtful design,
            and real-world usability — with a strong foundation in data analytics
            and applied data science.
          </p>

          <div className="home-actions">
            <ResumeDropdown />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
