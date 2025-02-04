import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import ProductDetails from './pages/ProductDetails';
import NewsPage from './pages/NewsPage';
import NewsArticle from './pages/NewsArticle';
import TrustedDetails from './pages/TrustedDetails';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProductsPage from './pages/ProductsPage';  

const App = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/product" element={<ProductsPage />} /> 
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/trusted/:slug" element={<TrustedDetails />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
