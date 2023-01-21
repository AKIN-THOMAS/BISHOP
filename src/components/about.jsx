import bishop2 from '../photos/13.jpg'
import resume from '../photos/Bishop_AkinThomas_Resume.pdf';
import Header from './header';
import { Link } from 'react-router-dom';
import { BsInstagram, BsWhatsapp, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import './styles.css';

const About = () =>{
    return(
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
                    <a href="https://www.instagram.com/_abim.bola_/"><BsInstagram/></a>
                        <a href="https://twitter.com/Bishopakint"> <BsTwitter /></a>
                        <a href="https://api.whatsapp.com/send?phone=%2B2347012991154&text&app_absent=0"><BsWhatsapp/></a>
                        <a href="https://www.linkedin.com/in/bishop-akin-thomas-b32477232/"> <BsLinkedin /></a>
                        <a href="https://github.com/AKIN-THOMAS"> <BsGithub /></a>
                    </div>
                    
                </div>
                <div className="about-info">
                <p>
                    <span>
                    Hi!! My name is Akin-Thomas Bishop Abimbola, a Front-End
                    Developer and a rising Blockchain Engineer        
                    </span> <br /> With over two years of expertise who knows how to build applications with React, 
                     among other technologies. I appreciate 
                    resolving issues, increasing customer satisfaction, 
                    and working with other developers to add 
                    value, and I'm always willing to learn more.
                </p>
                <div style={{marginTop: 30}}>
                    <a href={resume} target= '_blank' class="mee" rel='noreferrer'>Download CV</a>
                    <Link to='/contact' className="mee link-item">Hire me</Link>
                </div>
                </div>
            </div>
            <div class="row">
                <div className="about-tabs">
                <span className="tab-item  " data-target=".skill" >Skill</span>
                <span className="tab-item active" data-target=".experience" >Experience</span>
                <span className="tab-item" data-target=".education" >Education</span>
                </div>
            </div>
            <div className="row bars">
                <ul className="skills tab-content" id="skills">
                    <strong className="skill-item">
                        HTML
                    </strong>
                    <strong className="skill-item">
                        CSS
                    </strong>
                    <strong className="skill-item">
                        JavaScript
                    </strong>
                    <strong className="skill-item" >
                        Bootstrap
                    </strong>
                    <strong className="skill-item" >
                        EJS
                    </strong>
                    <strong className="skill-item" >
                        ReactJs
                    </strong>
                    <strong className="skill-item">
                        GrapeJs
                    </strong>
                    {/* <strong className="skill-item" >
                        ReactNative
                    </strong> */}
                    <strong className="skill-item" >
                        Git
                    </strong>
                    <strong className="skill-item" >
                        Solidity
                    </strong>
                </ul>
            </div>
            
            <div className="row">
                <div className="experience tab-content" id="experience">
                <div className="row">
                    <div className="timeline">
                    <div className="row">
                        <div className="timeline-item">
                        <div className="timeline-item-inner">
                            <i className="bi bi-briefcase"></i>
                            <span>May, 2022 - Aug, 2022</span>
                            <h3>Full-Stack Developer (Front-End)</h3>
                            <h4>Zuri Training (Full-Time)</h4>
                            <p>
                            </p>
                        </div>
                        </div>
                        
                        <div className="timeline-item">
                        <div className="timeline-item-inner">
                            <i className="bi bi-briefcase"></i>
                            <span>May, 2022 - Aug, 2022</span>
                            <h3>Frontend Intern</h3>
                            <h4>HNG Zuri Internship</h4>
                            <p>
                                Worked on some projects,
                                Check the Portfolio page or github to view
                            </p>
                        </div>
                        </div>
                        
                        <div className="timeline-item">
                        <div className="timeline-item-inner" >
                            <i className="bi bi-briefcase"></i>
                            <span>Oct, 2022</span>
                            <h3>Web3 Dev</h3>
                            <h4>Polygon Bootcamp </h4>
                            <p>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
                
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
                            <p>
                            </p>
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
}
export default About;