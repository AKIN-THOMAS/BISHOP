// import react from 'react';
import "react-bootstrap";
import "../styles/header.css";
import "../styles/styles.css";
// import Nav from './nav';
import { Link } from "react-router-dom";
// import { useState } from 'react';

const Header = () => {
  // const [toggle, settoggle] = useState(false)

  // const onclick = () =>{
  //     settoggle(!toggle);
  // }
  return (
    <div>
      <div className="body">
        <header class="header ">
          <div className="container">
            <div className="header_content">
              <div className="logo">
                <a href="/">
                  <h3>Abimbola-Made</h3>
                </a>
              </div>
              <Link to="/nav">
                <div class="hamburger-btn">
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Header;
