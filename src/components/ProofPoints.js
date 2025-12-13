import React from 'react';

const ProofPoints = () => {
  const proofItems = [
    {
      icon: '🎯',
      title: 'AI Specialization',
      description: 'Expert focus on machine learning, transformers, and LLM integration'
    },
    {
      icon: '⚡',
      title: 'Rapid Development',
      description: 'Efficient project delivery with agile methodologies and clean architecture'
    },
    {
      icon: '🔧',
      title: 'Full-Stack Excellence',
      description: 'Complete solution development from AI models to production deployment'
    },
    {
      icon: '📚',
      title: 'Quality-Driven',
      description: 'Comprehensive testing and documentation for reliable, maintainable solutions'
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