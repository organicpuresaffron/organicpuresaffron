import React from 'react';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';

export const trustedOrganizations = [
  {
    id: 1,
    slug:"baps-shri-swaminarayan-mandir",
    name: "BAPS Shri Swaminarayan Mandir",
    description: "Endorsed by BAPS Shri Swaminarayan Mandir, Surendranagar, India",
    image: "https://www.baps.org//Data/Sites/1/Media/LocationImages/147BAPS_Surendranagar.jpg",
    content: "Our saffron is proudly endorsed by BAPS Shri Swaminarayan Mandir, Surendranagar, India, a symbol of purity and reverence. Recognized for its unmatched quality and consistency, our saffron is integral to the temple's sacred rituals and offerings. Trusted by this esteemed institution, our product is valued for its rich aroma, vibrant color, and exceptional purity — qualities that elevate both spiritual practices and culinary masterpieces. Whether in sacred ceremonies or world-class kitchens, our saffron stands as a testament to excellence and tradition."
  },
  {
    id: 2,
    slug: "luxury-hotels",
    name: "Luxury Hotels",
    description: "Preferred supplier for leading 5-star hotels",
    image: "/images/trusted2.jpg",
    content: "Five-star hotels across the globe choose our saffron for their signature dishes and exclusive culinary experiences. Our commitment to quality aligns perfectly with the exacting standards of luxury hospitality."
  },
  {
    id: 3,
    slug: "gourmet-retailers",
    name: "Gourmet Food Retailers",
    description: "Available in premium food stores globally",
    image: "/images/trusted3.jpg",
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
              to={`/trusted/${org.slug}`}
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