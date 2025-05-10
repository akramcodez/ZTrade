import React from 'react';
import Navbar from '../Navbar';
import ProductsHero from './ProductsHero';
import Universe from './Universe';
import Footer from '../Footer';

const Products: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProductsHero />
      <Universe />
      <Footer />
    </>
  );
};

export default Products;
