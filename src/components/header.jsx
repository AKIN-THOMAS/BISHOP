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
