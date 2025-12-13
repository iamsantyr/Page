import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/animations';

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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection />
      <ProofPoints />
      <Expertise />
      <CaseStudies />
      <Innovation />
      <Clients />
      <Team />
      <ContactPreview />
    </motion.div>
  );
};

export default Home;