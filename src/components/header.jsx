// // import react from 'react';
// import "react-bootstrap";
// import "../styles/header.css";
// import "../styles/styles.css";
// // import Nav from './nav';
// import { Link } from "react-router-dom";
// // import { useState } from 'react';

// const Header = () => {
//   // const [toggle, settoggle] = useState(false)

//   // const onclick = () =>{
//   //     settoggle(!toggle);
//   // }
//   return (
//     <div>
//       <div className="body">
//         <header class="header ">
//           <div className="container">
//             <div className="header_content">
//               <div className="logo">
//                 <a href="/">
//                   <h3>ALPINIST!</h3>
//                 </a>
//               </div>
//               <Link to="/nav">
//                 <div class="hamburger-btn">
//                   <span></span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };
// export default Header;

// src/components/Header.js
// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1 className="sitename">ALPINIST!</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            {/* <li><a href="#services">Services</a></li> */}
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </div>
    </header>
  );
};

export default Header;
