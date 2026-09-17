import { hero, contactInfo } from '../data/content';
import NodeGraph from './NodeGraph';
import './Hero.css';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>
        <h1 className="hero-headline">{hero.headline}</h1>
        <p className="hero-subhead">{hero.subhead}</p>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-fill">
            View selected work
          </a>
          <a href={`mailto:${contactInfo.email}`} className="btn btn-line">
            {contactInfo.email}
          </a>
        </div>
      </div>
      <div className="hero-graphic" aria-hidden="true">
        <NodeGraph />
      </div>
    </header>
  );
}
