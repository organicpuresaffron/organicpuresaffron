import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      <div className="relative h-[50vh]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{course.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{course.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-8 mb-8">
            <div className="flex items-center text-gray-700">
              <Clock className="h-6 w-6 mr-2" />
              <span className="text-lg">{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <DollarSign className="h-6 w-6 mr-2" />
              <span className="text-lg">{course.price}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">What You'll Learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={course.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center btn-primary rounded-lg"
          >
            Register for this Course
          </a>
        </div>
      </div>
    </div>
  );
}