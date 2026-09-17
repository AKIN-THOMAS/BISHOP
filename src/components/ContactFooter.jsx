import { contactCta, contactInfo } from '../data/content';
import './ContactFooter.css';

export default function ContactFooter() {
  return (
    <footer id="contact" className="contact-footer">
      <div className="container contact-container">
        <div>
          <p className="eyebrow">{contactCta.eyebrow}</p>
          <h2 className="contact-heading">{contactCta.heading}</h2>
          <div className="contact-links">
            <a href={`mailto:${contactInfo.email}`} className="contact-link tone-accent">
              {contactInfo.email}
            </a>
            <a href={contactInfo.linkedin.href} className="contact-link" target="_blank" rel="noreferrer">
              {contactInfo.linkedin.label}
            </a>
            <a href={contactInfo.github.href} className="contact-link" target="_blank" rel="noreferrer">
              {contactInfo.github.label}
            </a>
          </div>
        </div>
        <div className="contact-bar">
          <div>{contactInfo.location}</div>
          <div>{contactInfo.phone}</div>
        </div>
      </div>
    </footer>
  );
}
