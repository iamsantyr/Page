import React from 'react';

// Components
import Team from '../components/Team';
import Expertise from '../components/Expertise';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Sobre Nosotros</h1>
          <p className="page-subtitle">
            Conoce la historia, misión y visión de DualCore Intelligence Labs. 
            Somos un equipo apasionado de expertos en inteligencia artificial y tecnología.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <div className="about-section">
                <h2>Nuestra Historia</h2>
                <p>
                  DualCore Intelligence Labs nació de la visión de revolucionar la manera en que las empresas 
                  interactúan con la tecnología. Fundada por un equipo de expertos en inteligencia artificial, 
                  nos especializamos en crear soluciones innovadoras que impulsan el crecimiento empresarial.
                </p>
              </div>

              <div className="about-section">
                <h2>Nuestra Misión</h2>
                <p>
                  Democratizar el acceso a la inteligencia artificial avanzada, proporcionando soluciones 
                  tecnológicas de clase mundial que permitan a las empresas competir en la era digital.
                </p>
              </div>

              <div className="about-section">
                <h2>Nuestros Valores</h2>
                <ul className="values-list">
                  <li>
                    <strong>Innovación:</strong> Siempre buscamos la vanguardia tecnológica
                  </li>
                  <li>
                    <strong>Excelencia:</strong> Nos comprometemos con la máxima calidad en cada proyecto
                  </li>
                  <li>
                    <strong>Transparencia:</strong> Mantenemos comunicación clara y honesta
                  </li>
                  <li>
                    <strong>Colaboración:</strong> Creemos en el poder del trabajo en equipo
                  </li>
                </ul>
              </div>

              <div className="about-section">
                <h2>Nuestra Visión</h2>
                <p>
                  Ser el laboratorio de inteligencia artificial de referencia en América Latina, 
                  reconocidos por nuestra capacidad de transformar ideas complejas en soluciones simples y efectivas.
                </p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <h3>5+</h3>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🚀</div>
                <h3>50+</h3>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <h3>25+</h3>
                <p>Clientes Satisfechos</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🕐</div>
                <h3>24/7</h3>
                <p>Soporte Técnico</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Expertise />
      <Team />
    </div>
  );
};

export default About;