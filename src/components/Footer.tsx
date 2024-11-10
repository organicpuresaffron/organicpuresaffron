import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Organic Pure Saffron</h3>
            <p className="text-gray-400">
              Bringing the finest quality saffron from the heart of tradition to your kitchen.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-orange-500">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500">About Us</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-orange-500">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: info@organicpuresaffron.com<br />
              Phone: +91 XXX XXX XXXX
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Organic Pure Saffron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}