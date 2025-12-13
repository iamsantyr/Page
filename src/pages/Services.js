import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI readiness assessments and strategic roadmaps for your organization.',
      features: [
        'AI readiness assessment',
        'Strategic planning',
        'ROI analysis',
        'Risk evaluation'
      ],
      icon: '🎯'
    },
    {
      title: 'Machine Learning Development',
      description: 'Custom ML models tailored to your specific business needs and data requirements.',
      features: [
        'Custom model development',
        'Data pipeline design',
        'Model training & optimization',
        'Performance monitoring'
      ],
      icon: '🤖'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
      features: [
        'Sentiment analysis',
        'Text classification',
        'Chatbot development',
        'Language translation'
      ],
      icon: '💬'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and insights.',
      features: [
        'Image recognition',
        'Object detection',
        'Video analysis',
        'OCR solutions'
      ],
      icon: '👁️'
    },
    {
      title: 'AI Integration',
      description: 'Seamless integration of AI solutions into your existing systems and workflows.',
      features: [
        'System integration',
        'API development',
        'Legacy system modernization',
        'Cloud deployment'
      ],
      icon: '🔗'
    },
    {
      title: 'AI Training & Support',
      description: 'Comprehensive training programs and ongoing support for your team.',
      features: [
        'Team training',
        'Documentation',
        'Ongoing support',
        'Maintenance'
      ],
      icon: '📚'
    }
  ];

  return (
    <div className="services-page page-transition">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">
            Our Services
          </h1>
          <p className="page-subtitle">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <h2>Ready to get started?</h2>
            <p>Let's discuss how AI can transform your business</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;