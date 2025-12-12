import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <div className="hero-badge">
            <div className="pulse-ring"></div>
            <span>AI & Automation Studio</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Engineering the future of</span>
            <span className="title-line gradient-text">intelligent automation</span>
          </h1>
          
          <p className="hero-description">
            We build sophisticated AI systems that transform complex challenges 
            into elegant, scalable solutions. From neural networks to cloud-native 
            architectures, we engineer the future of intelligent automation.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary btn-large">
              <span>View Our Projects</span>
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </button>
            <button className="btn btn-secondary btn-large">Let's Talk</button>
          </div>
          
          <div className="hero-metrics">
            <div className="metric">
              <div className="metric-value">50+</div>
              <div className="metric-label">AI Models</div>
            </div>
            <div className="metric">
              <div className="metric-value">2</div>
              <div className="metric-label">Years</div>
            </div>
            <div className="metric">
              <div className="metric-value">100%</div>
              <div className="metric-label">Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual" data-aos="fade-left">
          <div className="neural-network-3d">
            <div className="neural-core">
              <div className="neural-node node-1"></div>
              <div className="neural-node node-2"></div>
              <div className="neural-node node-3"></div>
              <div className="neural-connection conn-1"></div>
              <div className="neural-connection conn-2"></div>
              <div className="neural-connection conn-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;