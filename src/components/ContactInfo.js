import React from 'react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@dualcorelabs.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Instant responses'
    },
    {
      icon: '📍',
      title: 'Office',
      value: 'San Francisco, CA',
      description: 'Visit us by appointment'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '🔗' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'GitHub', url: '#', icon: '💻' },
    { name: 'Medium', url: '#', icon: '📝' }
  ];

  return (
    <div className="contact-info-container">
      <h3>Get in Touch</h3>
      <p className="contact-info-description">
        Ready to transform your business with AI? We're here to help you every step of the way.
      </p>

      <div className="contact-methods">
        {contactMethods.map((method, index) => (
          <div key={index} className="contact-method">
            <div className="method-icon">{method.icon}</div>
            <div className="method-content">
              <h4>{method.title}</h4>
              <p className="method-value">{method.value}</p>
              <p className="method-description">{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-social">
        <h4>Follow Us</h4>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">{social.icon}</span>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="contact-hours">
        <h4>Business Hours</h4>
        <div className="hours-list">
          <div className="hour-item">
            <span className="day">Monday - Friday</span>
            <span className="time">9:00 AM - 6:00 PM EST</span>
          </div>
          <div className="hour-item">
            <span className="day">Saturday</span>
            <span className="time">10:00 AM - 4:00 PM EST</span>
          </div>
          <div className="hour-item">
            <span className="day">Sunday</span>
            <span className="time">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;