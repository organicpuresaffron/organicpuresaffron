import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Blog from '../components/Blog';
import NewsSection from '../components/NewsSection';
import TrustedBy from '../components/TrustedBy';
import Courses from '../components/Courses';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div id="home">
      <Hero />
      <Courses />
      <Products />
      <NewsSection />
      <TrustedBy />
      <Blog />
    </div>
  );
};

export default Home;