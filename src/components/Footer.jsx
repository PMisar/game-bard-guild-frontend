// src/components/Footer.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import Button from "react-bootstrap/Button";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/PMisar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/pejvl_label/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://linkedin.com/in/pavel-m404"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="centered-content">
        <button
          className="footer-button"
          onClick={handleScrollToTop}
        >
          Back to Top
        </button>
      </div>
      <p className="centered-paragraph">Created by Pavel Misař</p>
    </footer>
  );
};

export default Footer;
