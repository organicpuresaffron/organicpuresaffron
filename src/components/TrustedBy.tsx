import React from 'react';
import { Award } from 'lucide-react';

const trustedOrganizations = [
  {
    id: 1,
    name: "Michelin Star Restaurants",
    description: "Used by over 50 Michelin-starred restaurants worldwide",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Luxury Hotels",
    description: "Preferred supplier for leading 5-star hotels",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Gourmet Food Retailers",
    description: "Available in premium food stores globally",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
            <div key={org.id} className="text-center">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={org.image}
                  alt={org.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-serif text-white">{org.name}</h3>
                </div>
              </div>
              <p className="text-gray-600">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}