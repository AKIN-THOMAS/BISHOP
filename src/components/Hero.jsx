// src/components/HeroSection.jsx
import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import 'aos/dist/aos.css'; // Import AOS CSS
import bishop from "../assets/BISHOP AKIN-THOMAS.jpg"; // Ensure this path is correct

const HeroSection = () => {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Blockchain Developer"], // Add your strings here
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".typed", options); // Initialize Typed.js on the ".typed" element

    return () => {
      typed.destroy(); // Clean up the instance on component unmount
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section id="hero" className="hero section dark-background">
      <img src={bishop} alt="Hero" data-aos="fade-in" />

      <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
        <h2>THE.BISHOP!</h2>
        <p>
          <span className="typed"></span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
