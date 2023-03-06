import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Skills.scss";
const skills = [
  {
    name: "Advanced",
    bgColor: "",
    icon: images.java,
  },
  {
    name: "Advanced",
    bgColor: "",
    icon: images.python,
  },
  {
    name: "Advanced",
    bgColor: "",
    icon: images.html,
  },
  {
    name: "Advanced",
    bgColor: "",
    icon: images.css,
  },
  {
    name: "Intermediate",
    bgColor: "",
    icon: images.javascript,
  },
  {
    name: "Intermediate",
    bgColor: "",
    icon: images.cpp,
  },
  {
    name: "Intermediate",
    bgColor: "",
    icon: images.cLanguage,
  },

  {
    name: "Beginner",
    bgColor: "",
    icon: images.react,
  },
  {
    name: "Beginner",
    bgColor: "",
    icon: images.node,
  },
  {
    name: "Beginner",
    bgColor: "",
    icon: images.spring,
  },
];
const experiences = [
  {
    year: 2020 + "-Current",
    works: [
      {
        name: "BSc in Software Engineering",
        company: "SCE College Of Engineering",
      },
    ],
  },
];
const Skills = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const handleHover = (letter) => {
    setHoveredLetter(letter);
  };

  const handleLeave = () => {
    setHoveredLetter(null);
  };
  return (
    <>
      <h2 className="head-text">
        <div className="letters">
          <span
            className={hoveredLetter === "s" ? "hovered" : ""}
            onMouseEnter={() => handleHover("s")}
            onMouseLeave={handleLeave}
          >
            s
          </span>
          <span
            className={hoveredLetter === "k" ? "hovered" : ""}
            onMouseEnter={() => handleHover("k")}
            onMouseLeave={handleLeave}
          >
            k
          </span>
          <span
            className={hoveredLetter === "i" ? "hovered" : ""}
            onMouseEnter={() => handleHover("i")}
            onMouseLeave={handleLeave}
          >
            i
          </span>
          <span
            className={hoveredLetter === "l" ? "hovered" : ""}
            onMouseEnter={() => handleHover("l")}
            onMouseLeave={handleLeave}
          >
            l
          </span>
          <span
            className={hoveredLetter === "l2" ? "hovered" : ""}
            onMouseEnter={() => handleHover("l2")}
            onMouseLeave={handleLeave}
          >
            l
          </span>
          <span
            className={hoveredLetter === "s2" ? "hovered" : ""}
            onMouseEnter={() => handleHover("s2")}
            onMouseLeave={handleLeave}
          >
            s
          </span>
        </div>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          <div
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textAlign: "center",
              marginLeft: 80,
              marginBottom: 20,
            }}
          >
            <b>Experience</b>
          </div>
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
