import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Consultoría en IA',
      description: 'Evaluaciones integrales de preparación para IA y hojas de ruta estratégicas.',
      features: [
        'Evaluación de preparación para IA',
        'Planificación estratégica',
        'Análisis de ROI',
        'Evaluación de riesgos'
      ],
      icon: '🎯'
    },
    {
      title: 'Desarrollo de Machine Learning',
      description: 'Modelos ML personalizados adaptados a sus necesidades empresariales específicas.',
      features: [
        'Desarrollo de modelos personalizados',
        'Diseño de pipelines de datos',
        'Entrenamiento y optimización',
        'Monitoreo de rendimiento'
      ],
      icon: '🤖'
    },
    {
      title: 'Procesamiento de Lenguaje Natural',
      description: 'Soluciones NLP avanzadas para análisis de texto y chatbots.',
      features: [
        'Análisis de sentimientos',
        'Clasificación de texto',
        'Desarrollo de chatbots',
        'Traducción de idiomas'
      ],
      icon: '💬'
    },
    {
      title: 'Visión por Computadora',
      description: 'Soluciones de análisis de imágenes y video para automatización.',
      features: [
        'Reconocimiento de imágenes',
        'Detección de objetos',
        'Análisis de video',
        'Soluciones OCR'
      ],
      icon: '👁️'
    },
    {
      title: 'Integración de IA',
      description: 'Integración perfecta de soluciones de IA en sistemas existentes.',
      features: [
        'Integración de sistemas',
        'Desarrollo de APIs',
        'Modernización de sistemas',
        'Despliegue en la nube'
      ],
      icon: '🔗'
    },
    {
      title: 'Capacitación y Soporte',
      description: 'Programas de capacitación integral y soporte continuo.',
      features: [
        'Capacitación de equipos',
        'Documentación',
        'Soporte continuo',
        'Mantenimiento'
      ],
      icon: '📚'
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Nuestros Servicios</h1>
          <p className="page-subtitle">
            Soluciones integrales de inteligencia artificial adaptadas a sus necesidades empresariales específicas.
          </p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <span className="service-category">IA Solutions</span>
                  </div>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-primary">
                    Más Información
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="services-cta-section">
            <div className="cta-content">
              <h2>¿Listo para Transformar su Negocio?</h2>
              <p>
                Discutamos cómo nuestras soluciones de IA pueden impulsar la innovación y el crecimiento de su organización.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Iniciar Proyecto
                </Link>
                <Link to="/portfolio" className="btn btn-secondary btn-large">
                  Ver Nuestro Trabajo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;