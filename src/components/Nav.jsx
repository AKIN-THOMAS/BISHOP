import { nav } from '../data/content';
import './Nav.css';

function SignatureGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 1L21 11L11 21L1 11L11 1Z" stroke="var(--accent)" strokeWidth="1.1" />
      <circle cx="11" cy="11" r="2.4" fill="var(--accent)" />
    </svg>
  );
}

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="nav-brand" aria-label="Home">
        <SignatureGlyph />
        <span className="nav-name">{nav.name}</span>
      </a>
      <div className="nav-links">
        {nav.links.map((link) => (
          <a key={link.href} className="nav-link" href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-outline-accent">
          Let's talk
        </a>
      </div>
    </nav>
  );
}
