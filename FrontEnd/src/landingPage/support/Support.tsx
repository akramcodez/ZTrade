import React from 'react';
import Navbar from '../Navbar';
import SupportHero from './SupportHero';
import CreateTicket from './CreateTicket';
import Footer from '../Footer';

const Support: React.FC = () => {
  return (
    <>
      <Navbar />
      <SupportHero />
      <CreateTicket />
      <Footer />
    </>
  );
};

export default Support;
