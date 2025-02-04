import React from 'react';
import { Link } from 'react-router-dom';

// Helper function to generate slugs from product names
const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/ /g, '-')        // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '');   // Remove non-word characters
};

export const products = [
  {
    id: 1,
    name: "OPS Special Saffron",
    description: "Made with Vedic methods with certification",
    image: "/image1.jpeg",  // Add the correct image path
    details: "Our OPS Special saffron is carefully cultivated using ancient Vedic methods, ensuring purity and authenticity, with certification for quality.",
    price: "$399.99",
    weight: "10g"
  },
  {
    id: 2,
    name: "Live Saffron",
    description: "Saffron picked from your own hands",
    image: "/image2.jpeg",  // Add the correct image path
    details: "Experience the true connection to saffron cultivation with Live Saffron, harvested directly from your own hands for an unparalleled, personal experience.",
    price: "$249.99",
    weight: "10g"
  },
  {
    id: 3,
    name: "Aeroponic Saffron",
    description: "Made with Aeroponics farming methods with certificate",
    image: "/image3.jpeg",  // Add the correct image path
    details: "Our Aeroponic Saffron is grown using cutting-edge aeroponics farming methods, ensuring a sustainable and chemical-free product with certification.",
    price: "$349.99",
    weight: "10g"
  },
  {
    id: 4,
    name: "Fully Organic Saffron",
    description: "Saffron made with organic methods without any pesticides",
    image: "/image4.jpeg",  // Add the correct image path
    details: "This fully organic saffron is cultivated without the use of pesticides, ensuring a 100% pure and eco-friendly product.",
    price: "$279.99",
    weight: "10g"
  },
  {
    id: 5,
    name: "A1 Quality Mogra Saffron",
    description: "Saffron from Kashmiri farmers",
    image: "/image5.jpeg",  // Add the correct image path
    details: "Sourced directly from Kashmiri farmers, our A1 quality Mogra saffron is known for its vibrant color and superior flavor.",
    price: "$399.99",
    weight: "10g"
  },
  {
    id: 6,
    name: "A1 Quality Laccha Saffron",
    description: "Saffron from Kashmiri farmers",
    image: "/image6.jpeg",  // Add the correct image path
    details: "Our A1 Laccha saffron is sourced from Kashmiri farmers, known for its long threads, rich flavor, and color.",
    price: "$359.99",
    weight: "10g"
  },
  {
    id: 7,
    name: "Powder Saffron",
    description: "Powder form of saffron with same constituents",
    image: "/image7.jpeg",  // Add the correct image path
    details: "Our powder saffron provides the same aromatic qualities and potent constituents as whole threads, perfect for quick and even mixing.",
    price: "$199.99",
    weight: "10g"
  },
  {
    id: 8,
    name: "Kahwa",
    description: "Special tea made with saffron threads",
    image: "/image8.jpeg",  // Add the correct image path
    details: "Kahwa is a traditional tea made with saffron threads, offering a unique and aromatic experience that has been enjoyed for centuries.",
    price: "$149.99",
    weight: "200g"
  },
  {
    id: 9,
    name: "Marriage Mukhwas",
    description: "Mouth freshener saffron - free from nicotine",
    image: "/image9.jpeg",  // Add the correct image path
    details: "A special mouth freshener made with saffron, free from nicotine, providing a refreshing and aromatic after-meal treat.",
    price: "$99.99",
    weight: "50g"
  },
  {
    id: 10,
    name: "Saffron for Temples",
    description: "Special saffron for temples",
    image: "/image10.jpeg",  // Add the correct image path
    details: "Our special saffron for temples is handpicked and curated for religious rituals, offering the highest quality saffron for spiritual offerings.",
    price: "$149.99",
    weight: "5g"
  }


];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Collection</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id} 
              to={`/product/${generateSlug(product.name)}`}  // Use slug for URL
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
