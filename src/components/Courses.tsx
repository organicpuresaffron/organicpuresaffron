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
          <p className="mt-4 text-xl text-gray-600">Expand your knowledge with our expert-led courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link to={`/course/${course.slug}`}>
                <div className="relative h-64">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="h-5 w-5 mr-2" />
                      {course.price}
                    </div>
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
              <div className="px-6 pb-6">
                <a
                  href={course.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center btn-primary rounded-lg"
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