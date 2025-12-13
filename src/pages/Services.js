import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';
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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="services-page"
    >
      <div className="page-header">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive AI solutions tailored to your business needs
          </motion.p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="services-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2>Ready to get started?</h2>
            <p>Let's discuss how AI can transform your business</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;