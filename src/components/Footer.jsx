// src/components/Footer.js
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center"></div>
          <div
            className="social-icons"
            style={{ display: "flex", gap: "20px" }}
          >
            <a
              href="https://github.com/AKIN-THOMAS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} color="#333" />
            </a>
            <a
              href="https://linkedin.com/in/bishopabimbola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} color="#333" />
            </a>
            <a
              href="https://twitter.com/Bishopakint"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} color="#333" />
            </a>
            <a
              href="https://instagram.com/akinthomasbishop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} color="#333" />
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
