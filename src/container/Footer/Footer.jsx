import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { useState } from "react";
import * as Yup from "yup";

import "./Footer.scss";

const validationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Footer = () => {
  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const form = useRef();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user_name, user_email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        setLoading(true);
        emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            setIsFormSubmitted(true);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
      })
      .catch((err) => {
        let formErrors = {};
        err.inner.forEach((error) => {
          formErrors[error.path] = error.message;
        });
        setErrors(formErrors);
      });
  };

  return (
    <>
      <h2 className="head-text">Let's Get in Touch!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:fadybd1@gmail.com" className="p-text">
            fadybd1@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+972524183083" className="p-text">
            0524183083
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form ref={form} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className={`p-text ${errors.user_name && "input-error"}`}
              type="text"
              placeholder={errors.user_name || "Your Name"}
              name="user_name"
              value={user_name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className={`p-text ${errors.user_email && "input-error"}`}
              type="email"
              placeholder={errors.user_email || "Your Email"}
              name="user_email"
              value={user_email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className={`p-text ${errors.message && "input-error"}`}
              placeholder={errors.message || "Your Message"}
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={sendEmail}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primary"
);
