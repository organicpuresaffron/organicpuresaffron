import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import ProductDetails from './pages/ProductDetails';
import NewsArticle from './pages/NewsArticle';
import TrustedDetails from './pages/TrustedDetails';
import CourseDetails from './pages/CourseDetails';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/trusted/:slug" element={<TrustedDetails />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;