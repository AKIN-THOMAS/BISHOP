import { experienceIntro, experience } from '../data/content';
import './ExperienceTimeline.css';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <p className="eyebrow">{experienceIntro.eyebrow}</p>
        <h2 className="experience-heading">{experienceIntro.heading}</h2>

        <div className="timeline">
          {experience.map((entry, i) => (
            <div key={entry.role}>
              <div className="timeline-row">
                <div className="timeline-dates">{entry.dates}</div>
                <div>
                  <div className="timeline-role">{entry.role}</div>
                  <div className="timeline-outcome">{entry.outcome}</div>
                </div>
              </div>
              {i < experience.length - 1 && <hr className="divider" />}
            </div>
          ))}
          <hr className="divider" />
        </div>
      </div>
    </section>
  );
}
