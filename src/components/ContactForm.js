import React from 'react';

const ContactForm = ({ formData, formStatus, onInputChange, onSubmit }) => {
  const projectTypes = [
    'AI Strategy Consultation',
    'Machine Learning Development',
    'Natural Language Processing',
    'Computer Vision',
    'AI Integration',
    'Custom Solution',
    'Other'
  ];

  return (
    <div className="contact-form-container">
      <h3>Send us a Message</h3>
      
      {formStatus.success && (
        <div className="form-success">
          <div className="success-icon">✓</div>
          <h4>Message Sent Successfully!</h4>
          <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
        </div>
      )}

      {formStatus.error && (
        <div className="form-error">
          <div className="error-icon">⚠</div>
          <p>{formStatus.error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company">Company/Organization</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={onInputChange}
              placeholder="Your company name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={onInputChange}
            >
              <option value="">Select a service</option>
              {projectTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={onInputChange}
            placeholder="Brief subject of your inquiry"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onInputChange}
            placeholder="Tell us about your project, goals, and how we can help..."
            rows={6}
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className={`btn btn-primary btn-large form-submit ${formStatus.loading ? 'loading' : ''}`}
          disabled={formStatus.loading}
        >
          {formStatus.loading ? (
            <>
              <div className="spinner"></div>
              Sending Message...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;