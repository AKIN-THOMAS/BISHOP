import React, {useRef} from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const Nav = () => {
    const navref = useRef();
    return(
        <body>
            <nav className="nav-menu" id="nav-menu">
                {/* <div class="close-menu">&times;</div> */}
                <div className="nav-menu-inner" ref={navref}>
                    <ul>
                        <li><Link to='/' className='link-item'>Home</Link></li>
                        <li><Link to='/about' className='link-item'>About</Link></li>
                        <li><Link to='/portfolio' className='link-item'>Works</Link></li>
                        <li><Link to='/contact' className='link-item'>Contact me</Link></li>
                    </ul>
                </div>
                <p className="copyright-text">&copy; Abimbola-Made</p>
            </nav>
        </body>
    );
}
export default Nav;