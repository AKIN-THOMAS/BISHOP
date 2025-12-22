// src/components/ResumeSection.jsx

const ResumeSection = () => {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Check me out!</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education and Experience</h3>
            <div className="resume-item">
              <h4>Skills</h4>
              <ul>
                <li>
                  <strong>Languages:</strong> JavaScript, TypeScript, Solidity,
                  Rust, Python
                </li>
                <li>
                  <strong>Frameworks & Libraries:</strong> Anchor, Web3,
                  Hardhat, Ethers.js, React.js, Next.js, Thirdweb, Truffle
                </li>
                <li>
                  <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Redis
                </li>
                <li>
                  <strong>Testing:</strong> Jest, Cypress, Vitest, React Testing
                  Library, Thirdweb
                </li>
                <li>
                  <strong>Dev Tools & Platforms:</strong> Ethereum, Solana,
                  Hedera Hashgraph, Git, GitHub, Webpack, Postman, VS Code,
                  IPFS, Fleek
                </li>
                <li>
                  <strong>Practices:</strong> Agile, Scrum, Smart Contract
                  Auditing, Gas Optimization, dApp Development
                </li>
                <li>
                  <strong>Soft Skills:</strong> Communication, Ownership,
                  Problem Solving, Team Collaboration, Documentation
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Software Developer Intern</h4>
              <h5>March 2025 – December 2025</h5>
              <p>
                <em>
                  Pensions Transitional Arrangement Directorate (PTAD), Abuja,
                  Nigeria
                </em>
              </p>
              <ul>
                <li>
                  Contributed to digitization of pension verification workflows
                  across departments, improving data accuracy and traceability.
                </li>
                <li>
                  Built internal tools using React and TypeScript to increase
                  administrative efficiency by ~40%.
                </li>
                <li>
                  Collaborated with cybersecurity teams to implement
                  authentication layers and strengthen platform security.
                </li>
                <li>
                  Automated report generation using Python to reduce manual work
                  by over 50%.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Blockchain Developer / Smart Contract Engineer</h4>
              <h5>January 2025 – December 2025</h5>
              <p>
                <em>Obsidian Technology (Remote, UK)</em>
              </p>
              <ul>
                <li>
                  Designed, developed, and deployed smart contracts using
                  Solidity and Rust; implemented token and governance logic.
                </li>
                <li>
                  Optimized smart contract gas usage and participated in
                  security reviews and audits.
                </li>
                <li>
                  Integrated on-chain components with web frontends and backend
                  APIs to deliver production-grade dApps.
                </li>
                <li>
                  Collaborated with backend developers to ensure seamless API
                  integration and user authentication flows.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Supply Chain Management DApp Project</h4>
              <h5>2024</h5>
              <p>{/* <em>HNG Internship</em> */}</p>
              <ul>
                <li>
                  Tech Stack: Next.js, JavaScript, Chakra UI, Thirdweb,
                  Solidity, Hardh
                </li>
                <li>
                  Built a decentralized application for agricultural supply
                  chain management, focusing on enhancing transparency and
                  secure payments via blockchain
                </li>
                <li>
                  Implemented smart contracts that ensured 100% transparent
                  transactions, reducing fraud risks in the payment process
                </li>
                <li>
                  Impact: Improved payment processing efficiency by 40% and
                  increased stakeholder trust through verifiable on-chain
                  transactions.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Software Developer and AI intern</h4>
              <h5>7 months (2023)</h5>
              <p>
                <em>
                  National Center for Artificial Intelligence and Robotics
                  (NCAIR) | NITDA Abuja, Nigeria | March 2023 – September 2023
                </em>
              </p>
              <ul>
                <li>
                  Engineered a sophisticated AI chatbot for customer service
                  support that processed over 5,000 inquiries monthly, enhancing
                  user experience and leading to a 25% increase in customer
                  satisfaction ratings within three .
                </li>
                <li>
                  Drove the integration of blockchain solutions that enhanced
                  documentation processes, leading to a 50% decrease in data
                  discrepancies and fostering a culture of transparency and
                  trust within the organization
                </li>
                <li>
                  Participated in Kaggle tournaments, achieving a top 20%
                  ranking in multiple competitions, which expanded my knowledge
                  in data science and AI.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>LoanLink (Hedera Hashgraph Hackathon)</h4>
              <h5>2023</h5>
              <p>{/* <em>HNG Internship</em> */}</p>
              <ul>
                <li>Tech Stack: React, Solidity, JavaScript, Chakra UI</li>
                <li>
                  Designed a cutting-edge decentralized loan solution that
                  leveraged blockchain technology, resulting in a user-friendly
                  interface and enabling real-time tracking of loan status for
                  over 150 active users in the first month
                </li>
                <li>
                  Successfully implemented within the hackathon timeframe,
                  earning recognition for innovation in financial technology
                </li>
                <li>
                  Impact: Streamlined loan processing by 50%, reducing manual
                  paperwork and cutting approval times from weeks to days
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>2023</h5>
              <p>
                <em>HNG Internship</em>
              </p>
              <ul>
                <li>
                  Achieved the completion of a rigorous 10-stage remote
                  internship in frontend development, producing a portfolio of
                  five unique projects that showcased skills in HTML, CSS, and
                  JavaScript, leading to increased visibility in the tech
                  community.
                </li>
                <li>
                  Contributed to a 25% improvement in project delivery time by
                  optimizing the codebase and streamlining the development
                  process, resulting in a smoother and faster user interface
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Bachelor of Science &amp; Computer Science</h4>
              {/* <h5>2010 - 2014</h5> */}
              <p>
                <em>Landmark University, Kwara State</em>
              </p>
            </div>

            {/* End Resume Item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
