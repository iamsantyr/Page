import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'TechCorp',
      title: 'AI-Powered Customer Service',
      description: 'Implemented an intelligent chatbot system that reduced response times by 80% and improved customer satisfaction.',
      metrics: [
        { label: 'Response Time', value: '80% reduction' },
        { label: 'Customer Satisfaction', value: '95% positive' }
      ],
      results: [
        'Automated 10,000+ customer inquiries monthly',
        'Reduced operational costs by $500K annually',
        '24/7 availability with 99.9% uptime'
      ],
      technologies: ['GPT-4', 'Azure OpenAI', 'React', 'Node.js']
    },
    {
      company: 'FinanceFlow',
      title: 'Automated Fraud Detection',
      description: 'Built a machine learning system that detects fraudulent transactions in real-time with 99.7% accuracy.',
      metrics: [
        { label: 'Detection Accuracy', value: '99.7%' },
        { label: 'False Positives', value: '0.3% reduction' }
      ],
      results: [
        'Prevented $2M in fraudulent transactions',
        'Real-time processing of 1M+ transactions daily',
        'Improved regulatory compliance'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'PostgreSQL']
    },
    {
      company: 'HealthTech Solutions',
      title: 'Medical Image Analysis',
      description: 'Developed AI system for automated medical image analysis, assisting radiologists in faster diagnosis.',
      metrics: [
        { label: 'Diagnosis Speed', value: '70% faster' },
        { label: 'Accuracy Rate', value: '96.8%' }
      ],
      results: [
        'Analyzed 50,000+ medical images',
        'Reduced diagnosis time from 30 to 9 minutes',
        'Improved early detection rates by 40%'
      ],
      technologies: ['PyTorch', 'OpenCV', 'FastAPI', 'Docker']
    }
  ];

  return (
    <section className="cases-section">
      <div className="cases-container">
        <div className="section-header">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Real-world AI implementations delivering measurable business value
          </p>
        </div>
        <div className="cases-grid">
          {caseStudies.map((caseStudy, index) => (
            <div className="case-card" data-aos="fade-up" key={index}>
              <div className="case-header">
                <div className="case-image">
                  <div className="case-overlay">
                    <div className="case-company">{caseStudy.company}</div>
                  </div>
                </div>
              </div>
              <div className="case-content">
                <h3 className="case-title">{caseStudy.title}</h3>
                <p>{caseStudy.description}</p>
                
                <div className="case-metrics">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <div className="metric-item" key={metricIndex}>
                      <strong>{metric.label}</strong>
                      <p>{metric.value}</p>
                    </div>
                  ))}
                </div>
                
                <div className="results-list">
                  <h4>Key Results:</h4>
                  <ul>
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex}>{result}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="case-tech">
                  {caseStudy.technologies.map((tech, techIndex) => (
                    <span className="tech-badge" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;