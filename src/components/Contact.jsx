// src/components/ContactSection.jsx
import React from "react";
import { FaLocationArrow, FaPhone,  FaEnvelope } from "react-icons/fa";


const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to reach out for any inquiries or collaborations!</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0">
                <FaLocationArrow size={30} color="#333" />
                </i>
                <div>
                  <h3>Address</h3>
                  <p>Pentville Estate, Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0">
                <FaPhone size={30} color="#333" />
                </i>
                <div>
                  <h3>Call</h3>
                  <p>+234 7012991154</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0">
                <FaEnvelope size={30} color="#333" />
                </i>
                <div>
                  <h3>Email</h3>
                  <p>akinthomasbishop25@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
