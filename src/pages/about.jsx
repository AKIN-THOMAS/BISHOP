import bishop2 from "../assets/13.webp";
import resume from "../assets/Akin-Thomas_Bishop_Resume.pdf";
import Header from "../components/header";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsWhatsapp,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import "../styles/styles.css";
import ExperienceSection from "../components/ExperienceSection";
const About = () => {
  return (
    <div>
      <Header />
      <div className="about-section section" id="about">
        <div className="container">
          <div className="row">
            <div className="about-title">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-img">
              <div className="img-box">
                <img src={bishop2} alt="bishop's" />
              </div>

              <div className="social-links">
                <a href="https://www.instagram.com/_abim.bola_/">
                  <BsInstagram />
                </a>
                <a href="https://twitter.com/Bishopakint">
                  {" "}
                  <BsTwitter />
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B2347012991154&text&app_absent=0">
                  <BsWhatsapp />
                </a>
                <a href="https://www.linkedin.com/in/bishopabimbola/">
                  {" "}
                  <BsLinkedin />
                </a>
                <a href="https://github.com/AKIN-THOMAS">
                  {" "}
                  <BsGithub />
                </a>
              </div>
            </div>
            <div className="about-info">
              <p>
                <span>
                  Hello! 👋 I'm Akin-Thomas Bishop Abimbola, a passionate
                  frontend developer with an insatiable appetite for learning
                  and innovation. My journey in the tech world has led me to
                  explore a multitude of exciting domains, making me not just a
                  web developer but also an aspirant blockchain developer and an
                  enthusiastic data science and AI enthusiast.
                </span>{" "}
                <br />
                🌐 My Tech Odyssey: I embarked on this tech odyssey with a solid
                foundation in web development, crafting visually appealing and
                highly functional user interfaces. My goal has always been to
                create exceptional user experiences that leave a lasting impact.
                <br />
                🚀 Pushing Boundaries: What truly fuels my passion is the
                relentless pursuit of cutting-edge technologies. I thrive on the
                thrill of pushing the boundaries of what's possible in the
                digital realm. Whether it's experimenting with blockchain to
                revolutionize industries or diving deep into the world of data
                science and AI, I'm always eager to explore the uncharted
                territory.
                <br /> 🎓 Academic Journey: I'm currently a student at Landmark
                University, where I have the privilege of honing my skills and
                knowledge in the ever-evolving tech landscape. It's a place
                where theory meets practice, and where I continue to expand my
                horizons.
                <br />
                🌟 What's Next: As I continue to evolve and grow in the tech
                sphere, I'm excited about the endless possibilities that lie
                ahead. My journey is an ongoing quest for innovation and
                excellence, and I'm thrilled to be part of a vibrant and dynamic
                tech community. Join me on this exciting journey as we explore
                the fascinating world of technology, one innovation at a time.
                <br />
                <br /> Let's connect and share our experiences and insights!
                🚀💻🌐 #TechEnthusiast #WebDevelopment #Blockchain #DataScience
                #AI #Innovation
              </p>
              <div style={{ marginTop: 30 }}>
                <a href={resume} target="_blank" class="mee" rel="noreferrer">
                  Download CV
                </a>
                <Link to="/contact" className="mee link-item">
                  Hire me
                </Link>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="about-tabs">
              <span className="tab-item  " data-target=".skill">
                Skill
              </span>
              <span className="tab-item active" data-target=".experience">
                Experience
              </span>
              <span className="tab-item" data-target=".education">
                Education
              </span>
            </div>
          </div>
          <div className="row bars">
            <ul className="skills tab-content" id="skills">
              <strong className="skill-item">JavaScript</strong>
              <strong className="skill-item">TypeScript</strong>
              <strong className="skill-item">Solidity</strong>
              <strong className="skill-item">ReactJs</strong>
              <strong className="skill-item">NextJs</strong>
              <strong className="skill-item">Chakra UI</strong>
              <strong className="skill-item">Bootstrap</strong>
              <strong className="skill-item">GrapeJs</strong>
              <strong className="skill-item">HTML</strong>
              <strong className="skill-item">CSS</strong>
              <strong className="skill-item">EJS</strong>
              <strong className="skill-item">Git</strong>
              <strong className="skill-item">Python (Data Science, AI)</strong>
              <strong className="skill-item">Blockchain Engineeing</strong>
            </ul>
          </div>
          <ExperienceSection />

          <div className="row">
            <div className="education tab-content" id="education">
              <div className="row">
                <div className="timeline">
                  <div className="row">
                    <div className="timeline-item">
                      <div className="timeline-item-inner">
                        <i className="bi bi-mortarboard"></i>
                        <span>Jan, 2021 - 2024</span>
                        <h3>B.sc Computer Science</h3>
                        <h4>Landmark University </h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
