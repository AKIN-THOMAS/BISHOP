import React, {useRef} from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';


const Nav = () => {
    const navref = useRef();
    return(
        <body>
            <nav className="nav-menu" id="nav-menu">
                {/* <div class="close-menu">&times;</div> */}
                <div className="nav-menu-inner" ref={navref}>
                    <ul>
                        <li><Link to='/' spy={true} smooth={true} offset={-100} duration={500} delay={1000} className='link-item'>Home</Link></li>
                        <li><Link to='/about' spy={true} smooth={true} offset={-100} duration={500} delay={1000} className='link-item'>About</Link></li>
                        <li><Link to='/portfolio' spy={true} smooth={true} offset={-100} duration={500} delay={1000} className='link-item'>Works</Link></li>
                        <li><Link to='/contact' spy={true} smooth={true} offset={-100} duration={500} delay={1000} className='link-item'>Contact me</Link></li>
                    </ul>
                </div>
                <p className="copyright-text"> &copy; 2022 Abimbola-Made</p>
            </nav>
        </body>
    );
}
export default Nav;