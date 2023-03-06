import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Backend Development",
    imgUrl: images.backend,
  },
  {
    title: "Frontend Development",
    imgUrl: images.frontend,
  },
  {
    title: "Desktop Applications",
    imgUrl: images.desktop,
  },
  {
    title: "Database Management",
    imgUrl: images.database,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Aspiring <span>Software Engineering</span> Student and a{" "}
        <span>Passionate Learner</span>
      </h2>
      <div className="about-me">
        <p className="about-me-text">
          <span className="first-word">As</span> a third-year student majoring
          in software engineering, I have a strong desire to keep learning new
          things and developing my abilities in this quickly-evolving industry.
          I have a strong sense of self-motivation and the capacity to work
          independently. I am a committed team member.
          <br />I enjoy solving complicated issues and have earned a reputation
          for being an effective problem solver. Both in team and self-directed
          settings, my creative mindset and quick learning pace have been useful
          assets. My work ethic is made up primarily of determination and hard
          effort, both of which have contributed to my development as a student
          and potential software engineer.
        </p>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2
              className="bold-text"
              style={{ marginTop: 20, textAlign: "center" }}
            >
              {about.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
