import Nav from './components/Nav';
import Hero from './components/Hero';
import ImpactStrip from './components/ImpactStrip';
import WorkGrid from './components/WorkGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import ResearchList from './components/ResearchList';
import SkillsGrid from './components/SkillsGrid';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <hr className="divider" />
        <ImpactStrip />
        <WorkGrid />
        <ExperienceTimeline />
        <ResearchList />
        <SkillsGrid />
        <About />
      </main>
      <ContactFooter />
    </>
  );
}
