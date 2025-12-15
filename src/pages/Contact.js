import React, { useState } from 'react';
import { validateForm } from '../utils/animations';

// Components
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: '',
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateForm({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    if (!validation.isValid) {
      setFormStatus({
        loading: false,
        success: false,
        error: Object.values(validation.errors)[0],
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: null });

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({
        loading: false,
        success: true,
        error: null,
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          projectType: '',
        });
        setFormStatus({ loading: false, success: false, error: null });
      }, 3000);

    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">
            Contacta con nosotros para discutir tus proyectos y objetivos empresariales. 
            Nuestro equipo de expertos está listo para ayudarte a alcanzar el éxito.
          </p>
        </div>
      </div>

      <div className="contact-page-content">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-container">
              <ContactForm 
                formData={formData}
                formStatus={formStatus}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </div>
            <div className="contact-info-container">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;