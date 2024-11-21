import React from 'react';
import Products from '../components/Products';

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Products</h1>
            <p className="text-xl max-w-2xl mx-auto">Explore our premium saffron collection, crafted for every occasion.</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <Products />
    </div>
  );
}
