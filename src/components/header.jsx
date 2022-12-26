// import react from 'react';
import "react-bootstrap"
import './header.css';
import './styles.css';
// import Nav from './nav';
import { Link } from 'react-router-dom';
// import { useState } from 'react';


const Header = () => {
    // const [toggle, settoggle] = useState(false)

    // const onclick = () =>{
    //     settoggle(!toggle);
    // }
    return(
        <div>
            <div className="body">
                <header class="header ">
                    <div className="container">
                        <div className="row justified-content-between">
                            <div className="logo">
                                <a href="/">
                                <h3>Abimbola-Made</h3>
                                </a>
                            </div>
                            <Link to="/nav">
                                <div class="hamburger-btn">
                                    <span></span>
                                    {/* {toggle && <Nav />} */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </header> 
            </div>
        </div>
    );
}
export default Header;

// onclick="document.getElementById('nav-menu').style.visibility = 'visible'
//                             document.getElementById('nav-menu').style.opacity = '1'
//                             document.getElementById('nav-menu').style.zIndex = '999'"  class="hamburger-btn">


