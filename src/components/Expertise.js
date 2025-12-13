import React from 'react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: '🤖',
      title: 'Machine Learning',
      level: 95,
      description: 'Advanced ML algorithms for predictive analytics and automation',
      skills: ['Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'Ensemble Methods']
    },
    {
      icon: '💬',
      title: 'Natural Language Processing',
      level: 90,
      description: 'Text analysis, sentiment detection, and conversational AI',
      skills: ['GPT Models', 'BERT', 'Text Classification', 'Named Entity Recognition']
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      level: 88,
      description: 'Image recognition, object detection, and video analysis',
      skills: ['CNN', 'Object Detection', 'Image Segmentation', 'OCR']
    },
    {
      icon: '📊',
      title: 'Data Science',
      level: 92,
      description: 'Statistical analysis, data visualization, and insights generation',
      skills: ['Statistical Modeling', 'Time Series', 'A/B Testing', 'Big Data Analytics']
    },
    {
      icon: '☁️',
      title: 'Cloud & Infrastructure',
      level: 85,
      description: 'Scalable cloud deployments and infrastructure management',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes']
    },
    {
      icon: '🔒',
      title: 'AI Security & Ethics',
      level: 87,
      description: 'Responsible AI development and security best practices',
      skills: ['AI Safety', 'Bias Detection', 'Privacy-Preserving AI', 'Ethical AI']
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="section-header">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Cutting-edge technologies and proven methodologies
          </p>
        </div>
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div className="expertise-card" key={index}>
              <div className="expertise-header">
                <div className="expertise-icon">{area.icon}</div>
                <div className="expertise-info">
                  <h3>{area.title}</h3>
                  <div className="skill-level">
                    <div className="level-bar">
                      <div 
                        className="level-fill" 
                        style={{ width: `${area.level}%` }}
                      ></div>
                    </div>
                    <span className="level-text">{area.level}%</span>
                  </div>
                </div>
              </div>
              <p className="expertise-description">{area.description}</p>
              <div className="skill-tags">
                {area.skills.map((skill, skillIndex) => (
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