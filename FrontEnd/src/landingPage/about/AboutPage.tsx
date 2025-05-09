import React from 'react';
import AboutHero from './AboutHero';
import Team from './Team';

import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Team />
      <Footer />
    </>
  );
};

export default AboutPage;
