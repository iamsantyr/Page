import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition, validateForm } from '../utils/animations';
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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="contact-page"
    >
      <div className="page-header">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ready to transform your business with AI? Let's start the conversation.
          </motion.p>
        </div>
      </div>

      <div className="contact-page-content">
        <div className="container">
          <div className="contact-layout">
            <ContactForm 
              formData={formData}
              formStatus={formStatus}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
            <ContactInfo />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;