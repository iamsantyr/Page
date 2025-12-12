import React, { useEffect } from 'react';
import './styles/globals.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProofPoints from './components/ProofPoints';
import Expertise from './components/Expertise';
import CaseStudies from './components/CaseStudies';
import Innovation from './components/Innovation';
import Clients from './components/Clients';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) - we'll add this dependency later
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    //   offset: 100,
    // });

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

    // Custom cursor functionality
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

      // Cursor hover effects
      const handleMouseEnter = () => {
        cursor.classList.add('hovering');
      };

      const handleMouseLeave = () => {
        cursor.classList.remove('hovering');
      };

      // Hide cursor when leaving window
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

      // Smooth scrolling for navigation links
      const initSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        });
      };

      // Add event listeners
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeaveWindow);
      window.addEventListener('scroll', handleScroll);

      // Cursor hover effects on interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .nav-link');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });

      // Initialize smooth scrolling
      initSmoothScrolling();

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

    // Initialize components
    createDataStreams();
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
        <HeroSection />
        <ProofPoints />
        <Expertise />
        <CaseStudies />
        <Innovation />
        <Clients />
        <Team />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
