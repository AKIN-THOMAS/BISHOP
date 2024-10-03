// src/components/Main.js
import React from 'react';
import HeroSection from './Hero';
import AboutSection from './About';
import ResumeSection from './Resume';
import ProjectsSection from './Portfolio';
import ContactSection from './Contact';
import ProficiencySection from './Skills';

const Main = () => {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProficiencySection />
      <ProjectsSection/>
      <ContactSection />
    </main>
  );
};

export default Main;
