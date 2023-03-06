import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { ReactComponent as MySvg } from "../../assets/polygon.svg";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <p className="p-text">Hey!, I'm</p>
              <h1>Fadi</h1>
            </div>
          </div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles2"
          >
            {[images.java, images.python, images.javascript, images.html].map(
              (circle, index) => (
                <motion.div
                  key={`circle-${index}`}
                  className="circle-cmp app__flex"
                  animate={{
                    y: [0, -10 + index * 5, 0, 10 - index * 5, 0],
                    rotate: [0, 5 + index * 5, 0, -5 - index * 5, 0],
                  }}
                  transition={{
                    duration: 5 + index,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1],
                    repeat: Infinity,
                  }}
                >
                  <img src={circle} alt="circle" />
                </motion.div>
              )
            )}
          </motion.div>
          <div className="tag-cmp button-54 app__flex">
            <p className="cv-box  p-text">
              <a href="https://docdro.id/rLxbomX" download>
                View CV
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.fadi} alt="profile_pic" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_pic_circle"
        ></motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.java, images.python, images.javascript, images.html].map(
          (circle, index) => (
            <motion.div
              key={`circle-${index}`}
              className="circle-cmp app__flex"
              animate={{
                y: [0, -10 + index * 5, 0, 10 - index * 5, 0],
                rotate: [0, 5 + index * 5, 0, -5 - index * 5, 0],
              }}
              transition={{
                duration: 5 + index,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
              }}
            >
              <img src={circle} alt="circle" />
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
