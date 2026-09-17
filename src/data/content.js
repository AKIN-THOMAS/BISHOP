export const nav = {
  name: 'Bishop Akin-Thomas',
  links: [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#research', label: 'Research' },
    { href: '#contact', label: 'Contact' },
  ],
};

export const contactInfo = {
  email: 'akinthomasbishop25@gmail.com',
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bishopabimbola/' },
  github: { label: 'GitHub', href: 'https://github.com/AKIN-THOMAS' },
  location: 'Bishop Akin-Thomas — Abuja, Nigeria',
  phone: '+234 701 299 1154',
};

export const hero = {
  eyebrow: 'Digital Transformation Consultant — Software & Blockchain Engineer',
  headline: 'I help organizations modernize how they work, then build the systems that make it real.',
  subhead:
    'Abuja, Nigeria — currently shipping client-facing digital and blockchain systems at First Dynamic-Links, while completing an M.Sc. in Digital Transformation. 3+ years across pension-system digitization, smart-contract engineering, and applied research.',
};

export const impactStats = [
  { value: '3+ yrs', label: 'Shipping production systems', tone: 'accent' },
  { value: '~40%', label: 'Efficiency gain, PTAD verification tool', tone: 'accent-2' },
  { value: '1', label: 'IEEE publication, GCPC 2026 poster', tone: 'accent' },
  { value: 'M.Sc.', label: 'Digital Transformation, in progress', tone: 'accent-2' },
];

export const workIntro = {
  eyebrow: 'Selected work',
  heading: "Two case studies on outcomes, two builds on how it's done.",
};

export const caseStudies = [
  {
    kind: 'case-study',
    tag: 'Case study — Public sector',
    title: 'Pension verification, digitized',
    body: 'PTAD ran identity verification across departments on manual, error-prone paper workflows. I built an internal image-verification tool in React and TypeScript and worked with the cybersecurity team on the authentication layer.',
    result: 'Result: ~40% increase in administrative efficiency; automated reporting cut manual report work by over 50%.',
  },
  {
    kind: 'case-study',
    tag: 'Case study — Consulting',
    title: 'Client digital & blockchain systems',
    body: 'At First Dynamic-Links, I design and build software and blockchain-based systems for client organizations spanning internet service provision and other business domains — prioritizing transparency and automation.',
    // Placeholder — revisit once a specific, shareable client outcome is cleared.
    result: '[Add a specific client outcome here once cleared to share]',
    resultPlaceholder: true,
  },
];

export const builds = [
  {
    kind: 'build',
    tag: 'Build — Blockchain',
    title: 'Smart contract & dApp engineering',
    body: 'Designed, gas-optimized, and audited Solidity and Rust contracts covering token and governance logic at Obsidian Technology; integrated on-chain components with production frontends and backend APIs.',
    stack: 'Solidity · Rust · Anchor · Hardhat · Foundry',
  },
  {
    kind: 'build',
    tag: 'Build — Applied AI',
    title: 'Chatbot analytics & document tracking',
    body: 'At NCAIR, built an interactive analytics dashboard for chatbot metrics and a blockchain-backed document tracking flow, with reusable React components for the frontend team.',
    stack: 'React · Node.js · Blockchain',
  },
];

export const experienceIntro = {
  eyebrow: 'Experience',
  heading: 'Where this was built.',
};

export const experience = [
  {
    dates: 'Dec 2025 — Present',
    role: 'Software Engineer / Blockchain Developer — First Dynamic-Links Nig Tech',
    outcome: 'Design and build scalable software and blockchain-based systems across client engagements in ISP and other business domains.',
  },
  {
    dates: 'Jan 2025 — Mar 2026',
    role: 'Blockchain Developer / Smart Contract Engineer — Obsidian Technology (Remote, UK)',
    outcome: 'Solidity/Rust contract design, gas optimization, security review, and on-chain/off-chain integration for production dApps.',
  },
  {
    dates: 'Mar 2025 — Dec 2025',
    role: 'Software Developer — PTAD, Abuja',
    outcome: 'Digitized pension verification workflows; built the image-verification tool; automated reporting with Python.',
  },
  {
    dates: 'Mar 2023 — Oct 2023',
    role: 'Frontend Developer / AI Intern — NCAIR, Abuja',
    outcome: 'Built the chatbot analytics dashboard and blockchain-backed document tracking; reusable component library.',
  },
];

export const researchIntro = {
  eyebrow: 'Research & writing',
  heading: 'The evidence-based half of the consulting story.',
};

export const research = [
  {
    title: 'Blockchain in Supply Chains: A Dual Perspective on Transparency and Efficiency',
    meta: 'Akin-Thomas, B., et al. (2024) — IEEE International Conference on Science, Engineering and Business for Driving SDGs. Available via IEEE Xplore.',
    year: '2024',
    tone: 'accent',
  },
  {
    title: "Decentralized Trust: Blockchain-Based Digital Product Passports for Africa's Informal E-Waste Sector",
    meta: 'Accepted for poster presentation — 2nd Global Cleaner Production Conference (GCPC 2026), Elsevier, Sitges, Spain.',
    year: 'Oct 2026',
    tone: 'accent-2',
  },
];

export const skillsIntro = {
  eyebrow: 'Capabilities',
  heading: 'Three pillars, one practice.',
};

export const skillColumns = [
  {
    title: 'Consulting & Strategy',
    rule: 'accent',
    items: ['Digital transformation strategy', 'Systems thinking', 'Digital product passports', 'Agile / Scrum delivery', 'Industry 4.0'],
  },
  {
    title: 'Software Engineering',
    rule: 'neutral',
    items: ['JavaScript, TypeScript, Python', 'React.js, Next.js, Node.js', 'REST APIs', 'MongoDB, PostgreSQL, Redis', 'AWS, Azure'],
  },
  {
    title: 'Blockchain & Web3',
    rule: 'accent-2',
    items: ['Solidity, Rust', 'Anchor, Hardhat, Foundry, Truffle', 'Smart contract auditing', 'Gas optimization', 'IPFS, Ethers.js, Thirdweb'],
  },
];

export const about = {
  eyebrow: 'About',
  quote:
    "I'm a systems-oriented engineer who ended up in consulting the honest way — by being the person organizations called on to both diagnose a broken workflow and build the thing that fixes it. That's carried me from pension-verification systems to smart contracts to peer-reviewed research on blockchain and the informal economy. Outside client work, I founded Alpinist Hub, an innovation ecosystem that has reached 500+ people across Africa through programs and hackathons.",
};

export const contactCta = {
  eyebrow: 'Contact',
  heading: "Let's talk about what you're trying to modernize.",
};
