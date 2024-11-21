import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Flower2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Flower2 className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-2xl font-serif text-gray-900">AASHVINA INTERNATIONAL SAFFRON</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-1000 hover:text-orange-500 transition-colors text-xl ">Home</Link>
            <Link to="/courses" className="text-gray-1000 hover:text-orange-500 transition-colors text-xl ">Courses</Link>
            <Link to="/news" className="text-gray-1000 hover:text-orange-500 transition-colors text-xl">News</Link>
            <Link to="/about" className="text-gray-1000 hover:text-orange-500 transition-colors text-xl">About</Link>
            <Link to="/blog" className="text-gray-1000 hover:text-orange-500 transition-colors text-xl">Blog</Link>
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
            <Link to="/courses" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Courses</Link>
            <Link to="/news" className="block px-3 py-2 text-gray-700 hover:text-orange-600">News</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
}