import React from 'react';
import { Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const trustedOrganizations = [
  {
    id: 1,
    name: "Michelin Star Restaurants",
    description: "Used by over 50 Michelin-starred restaurants worldwide",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: "Our saffron is the preferred choice for Michelin-starred chefs worldwide, who value its exceptional quality and consistency. From Paris to Tokyo, leading culinary artists trust our products for their most prestigious dishes."
  },
  {
    id: 2,
    name: "Luxury Hotels",
    description: "Preferred supplier for leading 5-star hotels",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: "Five-star hotels across the globe choose our saffron for their signature dishes and exclusive culinary experiences. Our commitment to quality aligns perfectly with the exacting standards of luxury hospitality."
  },
  {
    id: 3,
    name: "Gourmet Food Retailers",
    description: "Available in premium food stores globally",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: "Leading gourmet food retailers worldwide showcase our saffron in their carefully curated collections of premium ingredients. Our products meet the discriminating tastes of food connoisseurs and home chefs alike."
  }
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Trusted By The Best</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <div className="flex justify-center items-center mb-8">
            <Award className="h-8 w-8 text-orange-600" />
            <span className="ml-2 text-xl text-gray-600">Excellence in Every Thread</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustedOrganizations.map((org) => (
            <Link 
              key={org.id} 
              to={`/trusted/${org.id}`}
              className="group text-center"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={org.image}
                  alt={org.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-serif text-white">{org.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 group-hover:text-orange-600 transition-colors">{org.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}