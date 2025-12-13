import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <div className="hero-badge">
            <div className="pulse-ring"></div>
            <span>DualCore</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Where ideas evolve into</span>
            <span className="title-line gradient-text">intelligent products</span>
          </h1>
          
          <p className="hero-description">
            We transform innovative concepts into cutting-edge AI solutions. 
            From intelligent automation to advanced machine learning systems, 
            we bring your ideas to life with precision and expertise.
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
              <div className="metric-value">3+</div>
              <div className="metric-label">AI Models</div>
            </div>
            <div className="metric">
              <div className="metric-value">10+</div>
              <div className="metric-label">Projects</div>
            </div>
            <div className="metric">
              <div className="metric-value">90%</div>
              <div className="metric-label">Innovation</div>
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