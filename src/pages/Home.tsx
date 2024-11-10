import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Blog from '../components/Blog';
import NewsSection from '../components/NewsSection';
import TrustedBy from '../components/TrustedBy';

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Products />
      <NewsSection />
      <TrustedBy />
      <Blog />
    </div>
  );
};

export default Home;