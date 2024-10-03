// src/components/ProjectsSection.jsx
import React from "react";
import chainproj from "../assets/img/alpinistchain.png";
import loanlinkproj from "../assets/img/loanlink.webp";
import movie from "../assets/img/movie.webp";
import raffle from "../assets/img/raffle (1).webp";
import nft from "../assets/img/gallery.webp";

const projects = [
  {
    title: "Alpinist Chain",
    // description:
    //   "A brief description of what Project One does and its main features.",
    githubLink: "https://github.com/AKIN-THOMAS/SupplyChain-Dapp",
    hostedLink: "https://alpinistchain.vercel.app",
    image: chainproj,
  },
  {
    title: "LoanLink",
    // description:
    //   "An overview of Project Two, highlighting its unique features and technologies used.",
    githubLink:
      "https://github.com/orgs/LoanLink-Hedera-Hackaton/repositories?type=source",
    hostedLink: "https://loanlink.vercel.app/",
    image: loanlinkproj,
  },
  {
    title: "HNG Movie App",
    // description:
    //   "Details about Project Three and what problems it solves for users.",
    githubLink: "https://github.com/AKIN-THOMAS/Movie-App",
    hostedLink: "https://thebishopmovie.vercel.app/",
    image: movie,
  },
  {
    title: "Raffle Dapp",
    // description: "Insight into Project Four and its impactful solutions.",
    githubLink: "https://github.com/AKIN-THOMAS/nextjs-raffle",
    hostedLink: "https://bishopraffle.on.fleek.co/",
    image: raffle,
  },
  {
    title: "NFT Gallery",
    // description: "Overview of Project Five and the technologies behind it.",
    githubLink: "https://github.com/AKIN-THOMAS/DnD-Gallery",
    hostedLink: "https://thebishopgallery.vercel.app/",
    image: nft,
  },
  //   {
  //     title: 'Project Six',
  //     description: 'Description of Project Six and its main features.',
  //     githubLink: 'https://github.com/yourusername/project-six',
  //     hostedLink: 'https://yourprojectsix.com',
  //     image: 'assets/img/portfolio/app-6.jpg', // Path to your project image
  //   },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Explore some of the projects I've worked on.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {projects.map((project, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={`${100 + index * 100}`}
              key={index}
            >
              <div className="project-item position-relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.githubLink}
                      className="btn "
                      style={{
                        backgroundColor: "var(--accent-color)",
                        color: "var(--contrast-color)",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.hostedLink}
                      className="btn"
                      style={{
                        backgroundColor: "var(--accent-color)",
                        color: "var(--contrast-color)",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a
            href="https://github.com/AKIN-THOMAS"
            className="btn "
            style={{
              backgroundColor: "var(--accent-color)",
              color: "var(--contrast-color)",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
