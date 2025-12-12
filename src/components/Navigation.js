import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-symbol">DC</div>
          <div className="logo-text">
            <span className="main-text">DualCore</span>
            <span className="sub-text">Intelligence Labs</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#expertise" className="nav-link">Expertise</a>
          <a href="#cases" className="nav-link">Case Studies</a>
          <a href="#innovation" className="nav-link">Innovation</a>
          <a href="#clients" className="nav-link">Clients</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#contact" className="nav-link cta-link">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;