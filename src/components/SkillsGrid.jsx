import { skillsIntro, skillColumns } from '../data/content';
import './SkillsGrid.css';

export default function SkillsGrid() {
  return (
    <section className="section skills-section" aria-label="Capabilities">
      <div className="container">
        <p className="eyebrow">{skillsIntro.eyebrow}</p>
        <h2 className="skills-heading">{skillsIntro.heading}</h2>

        <div className="skills-grid">
          {skillColumns.map((col) => (
            <div key={col.title} className={`skills-col rule-${col.rule}`}>
              <div className="skills-col-title">{col.title}</div>
              <div className="skills-col-items">
                {col.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < col.items.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
