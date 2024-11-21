import React from 'react';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="relative h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Blog</h1>
            <p className="text-xl max-w-2xl mx-auto">Discover stories, recipes, and insights from the world of saffron</p>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
}