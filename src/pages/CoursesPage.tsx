import React from 'react';
import Courses from '../components/Courses';

export default function CoursesPage() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="relative h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Courses</h1>
            <p className="text-xl max-w-2xl mx-auto">Expand your knowledge with our expert-led programs</p>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <Courses />
    </div>
  );
}
