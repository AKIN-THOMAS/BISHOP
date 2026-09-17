import { impactStats } from '../data/content';
import './ImpactStrip.css';

export default function ImpactStrip() {
  return (
    <section className="impact-strip" aria-label="Impact highlights">
      <div className="container impact-strip-grid">
        {impactStats.map((stat) => (
          <div key={stat.label}>
            <div className={`impact-value tone-${stat.tone}`}>{stat.value}</div>
            <div className="impact-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
