import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

// Utils
import { initAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    // Initialize custom cursor
    const initCustomCursor = () => {
      const cursor = document.getElementById('customCursor');
      if (!cursor) return;
      
      let mouseX = 0, mouseY = 0;

      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        cursor.style.opacity = '1';
      };

      const handleMouseEnter = () => {
        cursor.classList.add('hovering');
      };

      const handleMouseLeave = () => {
        cursor.classList.remove('hovering');
      };

      const handleMouseLeaveWindow = () => {
        cursor.style.opacity = '0';
      };

      // Navbar scroll effect
      const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
          if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
          } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
          }
        }
      };

      // Add event listeners
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeaveWindow);
      window.addEventListener('scroll', handleScroll);

      // Cursor hover effects on interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .nav-link, .btn');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });

      // Cleanup function
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeaveWindow);
        window.removeEventListener('scroll', handleScroll);
        interactiveElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    // Initialize animations
    initAnimations();

    // Initialize components
    const cleanupCursor = initCustomCursor();

    // Cleanup on component unmount
    return () => {
      if (cleanupCursor) cleanupCursor();
    };
  }, []);

  return (
    <div className="App">
      {/* Data Streams Background */}
      <div className="data-streams" id="dataStreams"></div>

      {/* Custom Cursor */}
      <div className="custom-cursor" id="customCursor"></div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;