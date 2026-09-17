import { researchIntro, research } from '../data/content';
import './ResearchList.css';

export default function ResearchList() {
  return (
    <section id="research" className="section research-section">
      <div className="container">
        <p className="eyebrow">{researchIntro.eyebrow}</p>
        <h2 className="research-heading">{researchIntro.heading}</h2>

        <div className="research-list">
          {research.map((item, i) => (
            <div key={item.title}>
              <div className={i === 0 ? 'research-row research-row-first' : 'research-row research-row-last'}>
                <div>
                  <div className="research-title">{item.title}</div>
                  <div className="research-meta">{item.meta}</div>
                </div>
                <div className={`research-year tone-${item.tone}`}>{item.year}</div>
              </div>
              {i < research.length - 1 && <hr className="divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
