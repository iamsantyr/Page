import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce AI Recommendation Engine',
      company: 'RetailCorp',
      description: 'Implemented a sophisticated recommendation system that increased sales by 35% and improved customer engagement.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      results: [
        '35% increase in sales',
        '50% improvement in click-through rates',
        'Real-time personalization',
        'Reduced cart abandonment by 25%'
      ],
      category: 'Machine Learning'
    },
    {
      title: 'Intelligent Document Processing',
      company: 'LegalTech Solutions',
      description: 'Automated document analysis and extraction system that reduced processing time by 80%.',
      technologies: ['PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
      results: [
        '80% reduction in processing time',
        '99.2% accuracy in text extraction',
        'Automated classification',
        'Cost savings of $2M annually'
      ],
      category: 'Computer Vision'
    },
    {
      title: 'AI-Powered Customer Support',
      company: 'TechSupport Inc',
      description: 'Intelligent chatbot system that handles 70% of customer inquiries automatically.',
      technologies: ['GPT-4', 'Azure OpenAI', 'Node.js', 'MongoDB'],
      results: [
        '70% automated query resolution',
        '24/7 availability',
        '90% customer satisfaction',
        '60% reduction in support costs'
      ],
      category: 'Natural Language Processing'
    },
    {
      title: 'Predictive Maintenance System',
      company: 'ManufacturingPlus',
      description: 'IoT-based predictive maintenance system that prevents equipment failures.',
      technologies: ['Python', 'scikit-learn', 'IoT', 'InfluxDB'],
      results: [
        '90% reduction in unplanned downtime',
        '25% maintenance cost savings',
        'Early fault detection',
        'Improved equipment lifespan'
      ],
      category: 'IoT & ML'
    },
    {
      title: 'Financial Fraud Detection',
      company: 'SecureBank',
      description: 'Real-time fraud detection system with 99.8% accuracy and minimal false positives.',
      technologies: ['Python', 'XGBoost', 'Apache Kafka', 'PostgreSQL'],
      results: [
        '99.8% detection accuracy',
        'Real-time processing',
        '60% reduction in false positives',
        'Protected $50M in transactions'
      ],
      category: 'Machine Learning'
    },
    {
      title: 'Medical Image Analysis',
      company: 'HealthAI Diagnostics',
      description: 'AI system for automated medical image analysis and early disease detection.',
      technologies: ['PyTorch', 'DICOM', 'Flask', 'Docker'],
      results: [
        '95% diagnostic accuracy',
        '70% faster diagnosis',
        'Early detection capabilities',
        'Improved patient outcomes'
      ],
      category: 'Computer Vision'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Computer Vision', 'Natural Language Processing', 'IoT & ML'];

  return (
    <div className="portfolio-page page-transition">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">
            Our Portfolio
          </h1>
          <p className="page-subtitle">
            Showcasing successful AI implementations across industries
          </p>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map((category, index) => (
              <button 
                key={index}
                className="filter-btn"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="portfolio-card"
              >
                <div className="portfolio-image">
                  <div className="placeholder-image">
                    <span>📊</span>
                  </div>
                  <div className="portfolio-overlay">
                    <span className="category-tag">{project.category}</span>
                  </div>
                </div>
                
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p className="company">{project.company}</p>
                  <p className="description">{project.description}</p>
                  
                  <div className="portfolio-results">
                    <h4>Key Results:</h4>
                    <ul>
                      {project.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex}>{result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="portfolio-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-cta">
            <h2>Ready to start your AI project?</h2>
            <p>Let's discuss how we can help transform your business</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;