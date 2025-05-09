import React from 'react';
import MainHero from './MainHero';
import Stats from './Stats';
import Pricing from './Princing';
import Education from './Education';

import Navbar from '../Navbar';
import OpenAcc from '../OpenAcc';
import Footer from '../Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainHero />
      <OpenAcc />
      <Stats />
      <Pricing />
      <Education />
      <OpenAcc />
      <Footer />
    </>
  );
};

export default Home;
