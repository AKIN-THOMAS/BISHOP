// src/components/AboutSection.jsx
import React from "react";
import profileImg from "../assets/profileme.jpg"; 
// import resume from 

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="row justify-content-between gy-4">
              <div className="col-lg-5">
                <img src={profileImg} className="img-fluid" alt="Profile" />
              </div>
              <div className="col-lg-7 about-info">
                <p>
                  <strong>Name:</strong>{" "}
                  <span>AKIN-THOMAS Bishop Abimbola</span>
                </p>
                <p>
                  <strong>Profile:</strong>{" "}
                  <span>Frontend & Blockchain Developer</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span>akinthomasbishop25@gmail.com</span>
                </p>
                <p>
                  <strong>Phone:</strong> <span>07012991154</span>
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/17pAoF_nC9QHZ7dZWIAe98iCM3VSBCIOe/view?usp=sharing"
                className="btn"
                style={{
                  backgroundColor: 'var(--accent-color)', 
                  color: 'var(--contrast-color)',         
                }} 
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>

            <div className="skills-content skills-animation">
              {/* <h5>Skills</h5> */}
              {/* You can add skills here */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-me">
              <h4>About Me</h4>
              <p>
                I am a passionate frontend developer and blockchain developer
                with a keen interest in machine learning and artificial
                intelligence.
              </p>
              <p>
                I strive to create innovative web applications that enhance user
                experiences and drive technological advancement.
              </p>
              <p>
                Additionally, I lead the Alpinst Community, a movement dedicated
                to becoming leaders in technology innovation across various
                sectors. Together, we aim to inspire and empower others to
                embrace the future of tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
