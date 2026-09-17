import { workIntro, caseStudies, builds } from '../data/content';
import './WorkGrid.css';

function CaseStudyCard({ item }) {
  return (
    <article className="work-card work-card-case">
      <div className="work-tag tone-accent">{item.tag}</div>
      <h3 className="work-title work-title-lg">{item.title}</h3>
      <p className="work-body">{item.body}</p>
      <p className={item.resultPlaceholder ? 'work-result work-result-placeholder' : 'work-result'}>{item.result}</p>
    </article>
  );
}

function BuildCard({ item }) {
  return (
    <article className="work-card work-card-build">
      <div className="work-tag tone-accent-2">{item.tag}</div>
      <h3 className="work-title work-title-sm">{item.title}</h3>
      <p className="work-body">{item.body}</p>
      <div className="work-stack">{item.stack}</div>
    </article>
  );
}

export default function WorkGrid() {
  return (
    <section id="work" className="section work-section">
      <div className="container">
        <p className="eyebrow">{workIntro.eyebrow}</p>
        <h2 className="work-heading">{workIntro.heading}</h2>

        <div className="work-row">
          {caseStudies.map((item) => (
            <CaseStudyCard key={item.title} item={item} />
          ))}
        </div>
        <div className="work-row">
          {builds.map((item) => (
            <BuildCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
