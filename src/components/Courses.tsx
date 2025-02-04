import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Educational Programs</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          <p className="mt-4 text-xl text-black-600">Expand your knowledge with our expert-led courses</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <Link to={`/courses/${course.slug}`}>
                <div className="relative h-64">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="h-5 w-5 mr-2" />
                      1 Day Workshop (Online): {course.pricing.online}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="h-5 w-5 mr-2" />
                      1 Day Workshop (Offline): {course.pricing.offline}
                    </div>
                  </div>

                  {/* 90 Day Internship Pricing */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="h-5 w-5 mr-2" />
                      3-Month Internship: {course.pricing.internship90}
                    </div>
                  </div>

                  {/* 1 Year Internship Pricing */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="h-5 w-5 mr-2" />
                      1-Year Internship: {course.pricing.internship1Year}
                    </div>
                  </div>

                  {/* New Section: All Equipment Provided */}
                  <div className="text-gray-700 text-lg mb-6">
                    <p className="font-semibold">Note: All equipment for internships will be provided by us.</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>

              {/* Register Now Button at the Bottom */}
              <div className="bg-gray-100 p-6 text-center mt-auto">
                <a
                  href={course.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-4 text-center btn-primary rounded-lg py-2 bg-orange-600 text-white hover:bg-orange-700 transition"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
