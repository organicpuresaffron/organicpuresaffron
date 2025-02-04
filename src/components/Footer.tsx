import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, url: "https://www.facebook.com/profile.php?id=61572509734561" },
    { icon: <Twitter className="h-6 w-6" />, url: "https://x.com/AaswinaSaffron" },
    { icon: <Instagram className="h-6 w-6" />, url: "https://www.instagram.com/aashwina_international_saffron/" },
    { icon: <Linkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/aashwina-international-saffron-325b1b349/" },
    { icon: <MessageCircle className="h-6 w-6" />, url: "https://wa.me/8780020522" },
    { icon: <Youtube className="h-6 w-6" />, url: "https://www.youtube.com/@AASWINAINTERNATIONALSAFFRON" },

  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-serif mb-4 text-yellow-400">Aashwina International Saffron</h3>
        <p className="text-gray-300">
          Bringing the finest quality saffron from the heart of tradition to your kitchen.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-serif mb-4 text-yellow-400">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/product" className="text-gray-300 hover:text-yellow-400">Products</Link>
          </li>
          <li>
            <Link to="/courses" className="text-gray-300 hover:text-yellow-400">Courses</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-yellow-400">About Us</Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-300 hover:text-yellow-400">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-serif mb-4 text-yellow-400">Contact Us</h3>
        <p className="text-gray-300 mb-4">
          Email: aashwinainternationalsaffron@gmail.com          <br />
          Phone: +91 8780020522
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Aashwina International Saffron. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
}
