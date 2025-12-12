import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Ready to Build the Future?</h2>
            <p className="contact-description">
              Let's discuss how AI can transform your business. From initial consultation 
              to full deployment, we're here to guide your AI journey.
            </p>
            <div className="contact-metrics">
              <div className="contact-metric" data-aos="fade-up">
                <span className="metric-number">24/7</span>
                <span className="metric-label">Support Available</span>
              </div>
              <div className="contact-metric" data-aos="fade-up" data-aos-delay="100">
                <span className="metric-number">&lt; 24h</span>
                <span className="metric-label">Response Time</span>
              </div>
            </div>
            <div className="contact-actions">
              <button className="btn btn-primary btn-large">Start Your Project</button>
              <button className="btn btn-secondary btn-large">Schedule a Call</button>
            </div>
          </div>
          <div className="contact-visual" data-aos="fade-left">
            <div className="contact-graphic">
              <div className="contact-node node-1"></div>
              <div className="contact-node node-2"></div>
              <div className="contact-connection conn-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;