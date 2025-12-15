import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Motor de Recomendaciones IA para E-Commerce',
      company: 'RetailCorp',
      description: 'Implementamos un sistema de recomendación sofisticado que aumentó las ventas en 35% y mejoró el engagement.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      results: [
        '35% aumento en ventas',
        '50% mejora en CTR',
        'Personalización en tiempo real',
        '25% reducción en abandono de carrito'
      ],
      category: 'Machine Learning'
    },
    {
      title: 'Procesamiento Inteligente de Documentos',
      company: 'LegalTech Solutions',
      description: 'Sistema automatizado de análisis y extracción de documentos que redujo el tiempo de procesamiento en 80%.',
      technologies: ['PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
      results: [
        '80% reducción en tiempo de procesamiento',
        '99.2% precisión en extracción',
        'Clasificación automatizada',
        'Ahorro de $2M anuales'
      ],
      category: 'Computer Vision'
    },
    {
      title: 'Soporte al Cliente con IA',
      company: 'TechSupport Inc',
      description: 'Sistema de chatbot inteligente que maneja automáticamente el 70% de consultas de clientes.',
      technologies: ['GPT-4', 'Azure OpenAI', 'Node.js', 'MongoDB'],
      results: [
        '70% resolución automatizada',
        'Disponibilidad 24/7',
        '90% satisfacción del cliente',
        '60% reducción en costos de soporte'
      ],
      category: 'Natural Language Processing'
    },
    {
      title: 'Sistema de Mantenimiento Predictivo',
      company: 'ManufacturingPlus',
      description: 'Sistema IoT de mantenimiento predictivo que previene fallas de equipos.',
      technologies: ['Python', 'scikit-learn', 'IoT', 'InfluxDB'],
      results: [
        '90% reducción en downtime no planificado',
        '25% ahorro en costos de mantenimiento',
        'Detección temprana de fallas',
        'Mayor vida útil de equipos'
      ],
      category: 'IoT & ML'
    },
    {
      title: 'Detección de Fraude Financiero',
      company: 'SecureBank',
      description: 'Sistema de detección de fraude en tiempo real con 99.8% de precisión.',
      technologies: ['Python', 'XGBoost', 'Apache Kafka', 'PostgreSQL'],
      results: [
        '99.8% precisión de detección',
        'Procesamiento en tiempo real',
        '60% reducción en falsos positivos',
        'Protegió $50M en transacciones'
      ],
      category: 'Machine Learning'
    },
    {
      title: 'Análisis de Imágenes Médicas',
      company: 'HealthAI Diagnostics',
      description: 'Sistema de IA para análisis automatizado de imágenes médicas y detección temprana de enfermedades.',
      technologies: ['PyTorch', 'DICOM', 'Flask', 'Docker'],
      results: [
        '95% precisión diagnóstica',
        '70% diagnóstico más rápido',
        'Capacidades de detección temprana',
        'Mejores resultados para pacientes'
      ],
      category: 'Computer Vision'
    }
  ];

  const categories = ['Todos', 'Machine Learning', 'Computer Vision', 'Natural Language Processing', 'IoT & ML'];

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="portfolio-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Nuestro Portafolio</h1>
          <p className="page-subtitle">
            Casos de éxito que demuestran nuestra experiencia en implementaciones de IA exitosas en diversas industrias.
          </p>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="container">
          <div className="portfolio-categories">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>{project.category}</h4>
                      <p>Proyecto #{index + 1}</p>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-company">Cliente: {project.company}</p>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="portfolio-tag">{tech}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="portfolio-link">
                    Ver Detalles →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-cta-section">
            <div className="cta-content">
              <h2>¿Listo para Crear su Historia de Éxito?</h2>
              <p>
                Discutamos cómo podemos ayudar a transformar su negocio con soluciones de IA de vanguardia.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Iniciar Proyecto
                </Link>
                <Link to="/services" className="btn btn-secondary btn-large">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;