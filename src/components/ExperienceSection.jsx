import React from "react";
import Experience from "./Experience";

const ExperienceSection = () => {
  return (
    <div className="row">
      <div className="experience tab-content" id="experience">
        <div className="row">
          <div className="timeline">
            <div className="row">
              <Experience
                timeline={"Sep 2023 - Present"}
                position={"Frontend Intern"}
                work={"HNG Zuri Internship"}
                overview={""}
              />

              <Experience
                timeline={"Mar 2023 - Sep 2023"}
                position={"SIWES Intern"}
                work={
                  "National Center for Artificial Intelligence and Robotics, NCAIR || NITDA"
                }
                overview={
                  "During my SIWES training, I competed in Kaggle tournaments,worked on real-world projects, such as the NCAIR chatbotcreated utilizing NLP (Langchain) and other deep learning technologies, and learned about data science and AI. I personallyincreased my understanding of blockchain development These projects improved communication and collaboration within NCAIR."
                }
              />
              <Experience
                timeline={"Jun 2023 – Jul 2023"}
                position={"Frontend Developer, Blockchain Developer"}
                work={"Hedera Hashgraph Hackathon, Remote"}
                overview={
                  "On the hedera blockchain, I partook in a hackathon with a team where a real-world project named “LoanLink” was created"
                }
              />
              <Experience
                timeline={"May,2023"}
                position={"Decentralized Raffle Project"}
                work={"Personal Project"}
                overview={
                  "Created a decentralized lottery application and a fund raising application using solidity to write the smart contracts, Hardhat (Javascript framework) to test and deploy on the sepolia testnet."
                }
              />

              <Experience
                timeline={"May, 2022 - Aug, 2022"}
                position={"Frontend Intern"}
                work={"HNG Zuri Internship"}
                overview={
                  " Worked on some projects, Check the Portfolio page or github to view"
                }
              />
              <Experience
                timeline={"May, 2022 - Aug, 2022"}
                position={"Full-Stack Developer (Front-End)"}
                work={"Zuri Training (Full-Time)"}
                // overview={
                //   " Worked on some projects, Check the Portfolio page or github to view"
                // }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
