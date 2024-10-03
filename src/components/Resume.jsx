// src/components/ResumeSection.jsx
import React from "react";

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
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education and Experience</h3>
            <div className="resume-item">
              <h4>Bachelor of Science &amp; Computer Science</h4>
              {/* <h5>2010 - 2014</h5> */}
              <p>
                <em>Landmark University, Kwara State</em>
              </p>
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
            {/* End Resume Item */}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
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
            {/* End Resume Item */}

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
