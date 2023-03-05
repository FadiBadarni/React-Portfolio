import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { Tooltip as ReactTooltip } from "react-tooltip";

import "./Skills.scss";
const skills = [
  {
    name: "C++",
    bgColor: "",
    icon: images.cpp,
  },
  {
    name: "React",
    bgColor: "",
    icon: images.react,
  },
  {
    name: "Flutter",
    bgColor: "",
    icon: images.flutter,
  },
  {
    name: "CSS",
    bgColor: "",
    icon: images.css,
  },
  {
    name: "Javascript",
    bgColor: "",
    icon: images.javascript,
  },
];
const experiences = [
  {
    year: 2020 + "-Current",
    works: [
      {
        name: "Software Engineering Student",
        company: "SCE College Of Engineering",
      },
    ],
  },
  {
    year: 2020,
    works: [
      {
        name: "frontend",
        company: "BsFacebook",
        desc: "test",
      },
    ],
  },
];
const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

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
