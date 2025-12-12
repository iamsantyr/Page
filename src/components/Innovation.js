import React from 'react';

const Innovation = () => {
  const methodologies = [
    {
      title: 'Research-Driven Development',
      description: 'Every solution is backed by rigorous research and cutting-edge AI methodologies, ensuring we\'re always at the forefront of technological innovation.'
    },
    {
      title: 'Rapid Prototyping',
      description: 'From concept to working prototype in days, not months. Our agile approach allows for quick iteration and validation of AI concepts.'
    },
    {
      title: 'Production-Ready Deployment',
      description: 'We don\'t just build prototypes - we engineer production-ready systems that scale and perform reliably in real-world environments.'
    }
  ];

  return (
    <section className="innovation-section">
      <div className="innovation-container">
        <div className="innovation-content">
          <div className="innovation-text">
            <h2 className="section-title">Innovation at Our Core</h2>
            <p className="section-subtitle">
              We push the boundaries of what's possible with AI, developing novel approaches 
              that solve complex problems in elegant ways.
            </p>
            <div className="methodologies">
              {methodologies.map((methodology, index) => (
                <div className="methodology" data-aos="fade-up" key={index}>
                  <h4>{methodology.title}</h4>
                  <p>{methodology.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="innovation-visual" data-aos="fade-left">
            <div className="innovation-graphic">
              <div className="innovation-node node-1"></div>
              <div className="innovation-node node-2"></div>
              <div className="innovation-node node-3"></div>
              <div className="innovation-connection conn-1"></div>
              <div className="innovation-connection conn-2"></div>
              <div className="innovation-connection conn-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;