import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub></BsGithub>
      </div>
      <div>
        <BsLinkedin></BsLinkedin>
      </div>
    </div>
  );
};

export default SocialMedia;
