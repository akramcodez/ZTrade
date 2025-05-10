import React from 'react';
import MainHero from './MainHero';
import Stats from './Stats';
import Pricing from './Princing';
import Education from './Education';

import Navbar from '../Navbar';
import OpenAcc from '../OpenAcc';
import Footer from '../Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainHero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAcc />
      <Footer />
    </>
  );
};

export default Home;
