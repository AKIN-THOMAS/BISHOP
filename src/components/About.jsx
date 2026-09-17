import { about } from '../data/content';
import './About.css';

export default function About() {
  return (
    <section className="section about-section" aria-label="About">
      <div className="container about-container">
        <p className="eyebrow">{about.eyebrow}</p>
        <p className="about-quote">{about.quote}</p>
      </div>
    </section>
  );
}
