import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("./public/image1.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Pure Luxury in Every Thread
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            |अखंड भारत में केसर पहुंचाएंगे।
          </p>
          <a
            href="#products"
            className="inline-block px-8 py-4 text-lg font-medium text-white border-2 border-orange-500 hover:bg-orange-500 transition-colors duration-300"
          >
            Discover Our Collection
          </a>
        </div>
      </div>
    </div>
  );
}