import React from 'react';
import PricingHero from './PricingHero';
import DiffTerms from './DiffTerms';

import Navbar from '../Navbar';
import Footer from '../Footer';

const Pricing: React.FC = () => {
  return (
    <>
      <Navbar />
      <PricingHero />
      <DiffTerms />
      <Footer />
    </>
  );
};

export default Pricing;
