import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Blog from '../components/Blog';
import NewsSection from '../components/NewsSection';
import TrustedBy from '../components/TrustedBy';
import Courses from '../components/Courses';

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Products />
      <Courses />
      <NewsSection />
      <TrustedBy />
      <Blog />
    </div>
  );
};

export default Home;