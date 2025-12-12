import React from 'react';

const Footer = () => {
  const footerLinks = {
    services: [
      { label: 'AI Consulting', href: '#ai-consulting' },
      { label: 'Neural Networks', href: '#neural-networks' },
      { label: 'Cloud Solutions', href: '#cloud-solutions' },
      { label: 'Automation', href: '#automation' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' }
    ],
    contact: [
      { label: 'Email Us', href: 'mailto:hello@dualcore.ai' },
      { label: '+1 (555) DUALCORE', href: 'tel:+1-555-DUALCORE' },
      { label: 'Schedule Meeting', href: '#contact' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">DC</div>
            <div className="footer-text">
              <span>DualCore Intelligence Labs</span>
              <span>Engineering the future of AI</span>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              {footerLinks.services.map((link, index) => (
                <a href={link.href} key={index}>{link.label}</a>
              ))}
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              {footerLinks.company.map((link, index) => (
                <a href={link.href} key={index}>{link.label}</a>
              ))}
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              {footerLinks.contact.map((link, index) => (
                <a href={link.href} key={index}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 DualCore Intelligence Labs. Built with precision engineering and cutting-edge AI.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;