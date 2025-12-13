import React from 'react';

const Expertise = () => {
  const expertiseItems = [
    {
      icon: '🧠',
      title: 'Machine Learning Clásico',
      level: 95,
      skills: ['Random Forest', 'SVM', 'Clustering', 'Predictive Analytics']
    },
    {
      icon: '⚡',
      title: 'Transformers',
      level: 92,
      skills: ['Attention Mechanisms', 'BERT', 'GPT', 'Text Processing']
    },
    {
      icon: '📝',
      title: 'Análisis de Texto',
      level: 90,
      skills: ['Sentiment Analysis', 'Text Classification', 'NLP', 'Data Processing']
    },
    {
      icon: '🤖',
      title: 'LLM Integration',
      level: 88,
      skills: ['GPT Models', 'API Integration', 'Custom Prompts', 'Model Fine-tuning']
    },
    {
      icon: '✨',
      title: 'Generación de Texto',
      level: 85,
      skills: ['Content Creation', 'Automated Writing', 'Text Summarization', 'Creative AI']
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="section-header">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Specialized expertise in machine learning, transformers, and AI text generation
          </p>
        </div>
        <div className="expertise-grid">
          {expertiseItems.map((item, index) => (
            <div className="expertise-card" data-aos="fade-up" key={index}>
              <div className="expertise-header">
                <div className="expertise-icon">{item.icon}</div>
                <div className="expertise-info">
                  <h3>{item.title}</h3>
                  <div className="skill-level">
                    <div className="level-bar">
                      <div className="level-fill" style={{width: `${item.level}%`}}></div>
                    </div>
                    <span className="level-text">{item.level}%</span>
                  </div>
                </div>
              </div>
              <div className="skill-tags">
                {item.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;