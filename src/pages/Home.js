import React from 'react';

// Components
import HeroSection from '../components/HeroSection';
import ProofPoints from '../components/ProofPoints';
import Expertise from '../components/Expertise';
import CaseStudies from '../components/CaseStudies';
import Innovation from '../components/Innovation';
import Clients from '../components/Clients';
import Team from '../components/Team';
import ContactPreview from '../components/ContactPreview';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ProofPoints />
      <Expertise />
      <CaseStudies />
      <Innovation />
      <Clients />
      <Team />
      <ContactPreview />
    </div>
  );
};

export default Home;