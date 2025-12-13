import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI Strategy', path: '/services' },
        { label: 'Machine Learning', path: '/services' },
        { label: 'NLP Solutions', path: '/services' },
        { label: 'Computer Vision', path: '/services' },
        { label: 'AI Integration', path: '/services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/about' },
        { label: 'Careers', path: '/contact' },
        { label: 'Blog', path: '/contact' },
        { label: 'Press', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', path: '/portfolio' },
        { label: 'White Papers', path: '/contact' },
        { label: 'Documentation', path: '/contact' },
        { label: 'Support', path: '/contact' },
        { label: 'API Reference', path: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'GitHub', url: '#', icon: '💻' },
    { name: 'Medium', url: '#', icon: '📝' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">DC</div>
            <div className="footer-text">
              <span>DualCore Intelligence Labs</span>
              <span>Transforming Ideas into Intelligent Products</span>
            </div>
          </div>

          <div className="footer-links">
            {footerSections.map((section, index) => (
              <div className="footer-column" key={index}>
                <h4>{section.title}</h4>
                {section.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex} 
                    to={link.path}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} DualCore Intelligence Labs. All rights reserved.</p>
            </div>
            
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>

            <div className="footer-legal">
              <Link to="/contact" className="legal-link">Privacy Policy</Link>
              <Link to="/contact" className="legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;