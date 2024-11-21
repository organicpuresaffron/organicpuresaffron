import React from 'react';
import NewsSection from '../components/NewsSection';

export default function NewsPage() {
  return (
    <div className="pt-20">
      <div className="relative h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Latest News</h1>
            <p className="text-xl max-w-2xl mx-auto">Stay updated with our latest developments and industry insights</p>
          </div>
        </div>
      </div>
      <NewsSection />
    </div>
  );
}