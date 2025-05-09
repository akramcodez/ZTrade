import React from 'react';
import SignUpHero from './SignUpHero';
import Investment from './Investment';
import CreateDemat from './CreateDemat';
import BenefitsDemat from './BenifitsDemat';
import ExploreAcc from './ExploreAcc';
import FAQ from './FAQ';

import Navbar from '../Navbar';
import OpenAcc from '../OpenAcc';
import Footer from '../Footer';

const SignUp: React.FC = () => {
  return (
    <>
      <Navbar />
      <SignUpHero />
      <Investment />
      <CreateDemat />
      <BenefitsDemat />
      <ExploreAcc />
      <FAQ />
      <OpenAcc />
      <Footer />
    </>
  );
};

export default SignUp;
