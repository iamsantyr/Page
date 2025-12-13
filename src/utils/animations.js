// Animation utilities
export const initAnimations = () => {
  // Create data streams
  const createDataStreams = () => {
    const streamsContainer = document.getElementById('dataStreams');
    if (!streamsContainer) return;
    
    // Clear existing streams
    streamsContainer.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.top = Math.random() * 100 + '%';
      stream.style.height = '1px';
      stream.style.width = (50 + Math.random() * 100) + 'px';
      stream.style.animationDelay = Math.random() * 3 + 's';
      stream.style.animationDuration = (2 + Math.random() * 2) + 's';
      streamsContainer.appendChild(stream);
    }
  };

  createDataStreams();
};

// Page transition variants for Framer Motion
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

// Smooth scroll utility
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Form validation utilities
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};