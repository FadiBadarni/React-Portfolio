import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Backend Development",
    description: "im a great web dev.",
    imgUrl: images.about01,
  },
  {
    title: "Web Design",
    description: "im a great web dev.",
    imgUrl: images.about02,
  },
  {
    title: "Web Animation",
    description: "im a great web dev.",
    imgUrl: images.about03,
  },
  {
    title: "Frontend Development",
    description: "im a great web dev.",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>a Good mindset</span>
        <br />
        means <span>Good mindset</span>
      </h2>

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
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
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
