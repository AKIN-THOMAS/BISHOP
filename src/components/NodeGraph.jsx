export default function NodeGraph() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 480 560" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <line x1="60" y1="90" x2="190" y2="60" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
      <line x1="190" y1="60" x2="330" y2="120" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
      <line x1="330" y1="120" x2="420" y2="70" stroke="var(--accent-2)" strokeWidth="1" opacity="0.4" />
      <line x1="190" y1="60" x2="150" y2="200" stroke="var(--accent-2)" strokeWidth="1" opacity="0.35" />
      <line x1="150" y1="200" x2="60" y2="90" stroke="var(--accent)" strokeWidth="1" opacity="0.2" />
      <line x1="150" y1="200" x2="300" y2="250" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
      <line x1="300" y1="250" x2="330" y2="120" stroke="var(--accent-2)" strokeWidth="1" opacity="0.3" />
      <line x1="300" y1="250" x2="260" y2="400" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
      <line x1="260" y1="400" x2="120" y2="440" stroke="var(--accent-2)" strokeWidth="1" opacity="0.35" />
      <line x1="260" y1="400" x2="380" y2="460" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
      <line x1="150" y1="200" x2="80" y2="330" stroke="var(--accent)" strokeWidth="1" opacity="0.2" />
      <line x1="80" y1="330" x2="120" y2="440" stroke="var(--accent-2)" strokeWidth="1" opacity="0.25" />
      <circle cx="60" cy="90" r="4" fill="var(--accent)" />
      <circle cx="190" cy="60" r="6" fill="var(--accent)" />
      <circle cx="330" cy="120" r="5" fill="var(--accent-2)" />
      <circle cx="420" cy="70" r="3.5" fill="var(--accent-2)" opacity="0.8" />
      <circle cx="150" cy="200" r="7" fill="var(--accent)" />
      <circle cx="300" cy="250" r="5" fill="var(--accent-2)" />
      <circle cx="80" cy="330" r="3.5" fill="var(--accent)" opacity="0.7" />
      <circle cx="260" cy="400" r="6" fill="var(--accent)" />
      <circle cx="120" cy="440" r="4.5" fill="var(--accent-2)" />
      <circle cx="380" cy="460" r="4" fill="var(--accent)" opacity="0.8" />
    </svg>
  );
}
