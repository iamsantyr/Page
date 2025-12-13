import React from 'react';

const About = () => {
  return (
    <div className="about-page page-transition">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">
            About DualCore
          </h1>
          <p className="page-subtitle">
            Pioneering the future of artificial intelligence
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                At DualCore Intelligence Labs, we believe that artificial intelligence 
                should be accessible, practical, and transformative. Our mission is to 
                bridge the gap between cutting-edge AI research and real-world business applications.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                We envision a future where AI seamlessly integrates with human workflows, 
                enhancing productivity and creativity rather than replacing human potential. 
                Through innovative solutions and expert guidance, we help organizations 
                navigate their AI transformation journey.
              </p>

              <h2>Our Values</h2>
              <ul>
                <li><strong>Innovation:</strong> Pushing the boundaries of what's possible</li>
                <li><strong>Integrity:</strong> Ethical AI development and deployment</li>
                <li><strong>Collaboration:</strong> Working together to achieve extraordinary results</li>
                <li><strong>Excellence:</strong> Delivering high-quality solutions that exceed expectations</li>
              </ul>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h3>5+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>AI Models Deployed</p>
              </div>
              <div className="stat-card">
                <h3>100+</h3>
                <p>Successful Projects</p>
              </div>
              <div className="stat-card">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;