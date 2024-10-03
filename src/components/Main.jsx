// src/components/Main.js
import React from 'react';
import HeroSection from './Hero';
import AboutSection from './About';
import ResumeSection from './Resume';
// import ServicesSection from './Services';
// import Portfolio from '../pages/portfolio';
import ProjectsSection from './Portfolio';
import ContactSection from './Contact';
import ProficiencySection from './Skills';

const Main = () => {
  return (
    <main className="main">
      {/* <Portfolio /> */}
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProficiencySection />
      {/* <ServicesSection/> */}
      <ProjectsSection/>
      <ContactSection />
    </main>
  );
};

export default Main;
