import React from 'react';

const Expertise = () => {
  const expertiseItems = [
    {
      icon: '🧠',
      title: 'Machine Learning',
      level: 95,
      skills: ['Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP']
    },
    {
      icon: '⚙️',
      title: 'Automation Systems',
      level: 90,
      skills: ['Workflow Automation', 'Process Optimization', 'RPA', 'CI/CD']
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture',
      level: 88,
      skills: ['AWS', 'Azure', 'Kubernetes', 'Microservices']
    },
    {
      icon: '🔬',
      title: 'AI Research',
      level: 92,
      skills: ['LLMs', 'GPT Models', 'RAG Systems', 'Fine-tuning']
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="section-header">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Deep technical knowledge across AI, automation, and cloud technologies
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