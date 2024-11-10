import React from 'react';
import { History, Award, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: <History className="h-8 w-8 text-orange-600" />,
    title: "Rich Heritage",
    description: "With over three generations of expertise in saffron cultivation and processing, our family business carries forward ancient traditions while embracing modern quality standards."
  },
  {
    icon: <Award className="h-8 w-8 text-orange-600" />,
    title: "Premium Quality",
    description: "Each strand of our saffron is carefully hand-picked and processed to ensure the highest quality, flavor, and aroma that discerning customers expect."
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "Community First",
    description: "We work directly with local farmers, ensuring fair wages and sustainable farming practices that benefit both the community and the environment."
  },
  {
    icon: <Leaf className="h-8 w-8 text-orange-600" />,
    title: "Sustainability",
    description: "Our commitment to organic farming and eco-friendly practices ensures that every product is as good for the planet as it is for our customers."
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Saffron fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Cultivating the world's finest saffron with passion, tradition, and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Organic Pure Saffron, we're dedicated to bringing the world's finest saffron to your table. 
            Our mission is to preserve traditional farming methods while innovating for sustainability and quality, 
            ensuring that every strand of saffron we produce meets the highest standards of excellence.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-2">Rajesh Kumar</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Head of Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-2">Priya Sharma</h3>
              <p className="text-gray-600">Head of Production</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-2">Arun Patel</h3>
              <p className="text-gray-600">Head of Quality Control</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}