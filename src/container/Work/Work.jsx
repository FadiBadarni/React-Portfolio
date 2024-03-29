import React from "react";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Work.scss";

const projects = [
  {
    title: "SCE Warehouse Website",
    description:
      "A Virtual Warehouse Management System for the department of visual communication at SCE.",
    imgUrl: images.warehouse,
    repository: "https://github.com/FadiBadarni/V-Warehouse",
    tags: ["Spring", "React"],
  },
  {
    title: "Compiler",
    description:
      "The compiler parses a programming language that resembles a similar syntax to that of the C programming language",
    imgUrl: images.portfolio2,
    repository: "https://github.com/FadiBadarni/Compiler",
    tags: ["C", "Lex", "Yacc"],
  },

  {
    title: "Flight Booking System",
    description:
      "Flight booking system utilizing the latest technologies such as ASP.NET, C# and Firebase to provide an intuitive user experience.",
    imgUrl: images.flight,
    repository: "https://github.com/FadiBadarni/FlyWithMe",
    tags: ["C#", "NoSQL"],
  },
  {
    title: "Medical Diagnosis",
    description:
      "A medical diagnosis program built with Java to take blood test results and give diagnoses, for educational purposes only.",
    imgUrl: images.medical,
    repository: "https://github.com/FadiBadarni/Medical-Diagnosis",
    tags: ["FXML", "JavaFX"],
  },
  {
    title: "Password Manager",
    description:
      "Password protection, database management, and encryption for sensitive data. It requires user registration, generates secure passwords, and encrypts passwords using SHA-512 before saving data in a database.",
    imgUrl: images.password,
    repository: "https://github.com/FadiBadarni/Password-Manager",
    tags: ["MySQL", "FXML"],
  },
  {
    title: "Keylogger Application",
    description:
      "Python app built for Introduction to Cyber Security course to understand keyloggers and spying malware.",
    imgUrl: images.portfolio2,
    repository: "https://github.com/FadiBadarni/KeyLogger",
    tags: ["Python"],
  },
  {
    title: "React Portfolio Website",
    description: "Personal portfolio website using React.",
    imgUrl: images.portfolio2,
    repository: "https://github.com/FadiBadarni/React-Portfolio",
    tags: ["React", "JSX", "SCSS"],
  },
];

const Work = () => {
  const [animateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">
        My <span> Projects </span>Corner
        <br />
      </h2>

      {/* Render the projects */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {projects.map((project, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={project.imgUrl} alt={project.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
              <div className="app__work-tag app__flex">
                {project.tags.map((tag, index) => (
                  <p
                    key={`tag-${index}`}
                    className="p-text app__work-tag-box"
                    style={{ fontWeight: "bold" }}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
