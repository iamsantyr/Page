import React from 'react';

const ProofPoints = () => {
  const proofPoints = [
    {
      icon: '🚀',
      title: 'Proven Track Record',
      description: 'Successfully delivered 50+ AI projects across various industries with measurable business impact.'
    },
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: 'From concept to deployment in weeks, not months. Our agile approach ensures fast time-to-market.'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance with industry standards to protect your data.'
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'AI systems that grow with your business, handling increasing workloads efficiently.'
    },
    {
      icon: '🤝',
      title: 'Expert Team',
      description: 'PhD-level researchers and industry veterans with deep expertise in AI/ML technologies.'
    },
    {
      icon: '🔄',
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support to ensure your AI systems run optimally.'
    }
  ];

  return (
    <section className="proof-section">
      <div className="proof-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose DualCore?</h2>
          <p className="section-subtitle">
            We combine cutting-edge technology with practical business insights
          </p>
        </div>
        <div className="proof-grid">
          {proofPoints.map((point, index) => (
            <div className="proof-item" key={index}>
              <div className="proof-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;