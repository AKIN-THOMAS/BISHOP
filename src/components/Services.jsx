// src/components/ServicesSection.jsx
import React from "react";
import Contact from "./../pages/contact";

const ServicesSection = () => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Frontend Development and testing</h3>
              </a>
            </div>
          </div> */}

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Smart Contract Testing and Auditing</h3>
              </a>
              <p>
                This service ensures that smart contracts operate correctly and securely through comprehensive testing strategies and audit processes.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Blockchain Development</h3>
              </a>
              <p>
                This service involves creating decentralized applications (dApps) and implementing blockchain solutions for various industries.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>ML Engineering</h3>
              </a>
              <p>
                Machine Learning Engineering involves developing algorithms that enable computers to learn from and make predictions based on data.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Frontend Development and Testing</h3>
              </a>
              <p>
                This service focuses on creating user-friendly interfaces and
                ensuring their functionality through rigorous testing, enhancing
                user experience.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-chat-square-text"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Smart Contarct Integration</h3>
              </a>
              <p>
                This service involves integrating smart contracts into existing
                applications to enable automated transactions without
                intermediaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
