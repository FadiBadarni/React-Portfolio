import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { faFacebook } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter></BsTwitter>
      </div>
      <div>
        <faFacebook></faFacebook>
      </div>
      <div>
        <BsInstagram></BsInstagram>
      </div>
    </div>
  );
};

export default SocialMedia;
