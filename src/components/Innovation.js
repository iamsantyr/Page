import React from 'react';
import { Link } from 'react-router-dom';

const Innovation = () => {
  const methodologies = [
    {
      title: 'Research-Driven Development',
      description: 'We stay at the forefront of AI research, incorporating the latest breakthroughs into practical solutions for your business.'
    },
    {
      title: 'Iterative Innovation',
      description: 'Our agile approach allows for rapid prototyping and continuous improvement, ensuring your AI solution evolves with your needs.'
    },
    {
      title: 'Ethical AI First',
      description: 'Every solution we build prioritizes fairness, transparency, and ethical considerations to create responsible AI systems.'
    }
  ];

  return (
    <section className="innovation-section">
      <div className="innovation-container">
        <div className="innovation-content">
          <div className="innovation-text">
            <h2 className="section-title">Innovation at Our Core</h2>
            <p className="section-subtitle">
              We don't just implement AI – we innovate, experiment, and push boundaries 
              to create solutions that were previously thought impossible.
            </p>
            
            <div className="methodologies">
              {methodologies.map((method, index) => (
                <div className="methodology" key={index}>
                  <h4>{method.title}</h4>
                  <p>{method.description}</p>
                </div>
              ))}
            </div>

            <div className="innovation-cta">
              <Link to="/about" className="btn btn-primary">
                Learn About Our Process
              </Link>
            </div>
          </div>
          
          <div className="innovation-visual">
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