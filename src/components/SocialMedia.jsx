import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/FadiBadarni">
          <BsGithub></BsGithub>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/fadi-badarni-235030236/">
          <BsLinkedin></BsLinkedin>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
