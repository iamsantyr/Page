import React from 'react';

const ProofPoints = () => {
  const proofItems = [
    {
      icon: '🚀',
      title: 'Proven Track Record',
      description: '50+ successful AI implementations across multiple industries'
    },
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: 'From concept to production in 30 days average'
    },
    {
      icon: '🎯',
      title: 'Precision Engineering',
      description: '99.9% accuracy in our AI models and automation systems'
    },
    {
      icon: '🌟',
      title: 'Innovation First',
      description: 'Cutting-edge solutions using latest AI frameworks'
    }
  ];

  return (
    <section className="proof-section">
      <div className="proof-container">
        <div className="proof-grid">
          {proofItems.map((item, index) => (
            <div className="proof-item" data-aos="fade-up" key={index}>
              <div className="proof-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;