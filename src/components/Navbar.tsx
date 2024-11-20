import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Flower2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="flower1.ico" alt="Flower Icon" className="h-20 w-17" />
              <span className="ml-2 text-2xl font-serif text-gray-900">आध्यात्मिक SAFFRON</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
            <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="text-gray-700 hover:text-orange-600 transition-colors">Products</a>
            <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')} className="text-gray-700 hover:text-orange-600 transition-colors">Courses</a>
            <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="text-gray-700 hover:text-orange-600 transition-colors">News</a>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            <a href="#blog" onClick={(e) => scrollToSection(e, 'blog')} className="text-gray-700 hover:text-orange-600 transition-colors">Blog</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</Link>
            <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">Products</a>
            <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">Courses</a>
            <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">News</a>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</Link>
            <a href="#blog" onClick={(e) => scrollToSection(e, 'blog')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">Blog</a>
          </div>
        </div>
      )}
    </nav>
  );
}