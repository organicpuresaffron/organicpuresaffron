import React from 'react';
import { Link } from 'react-router-dom';

// Helper function to generate slugs from product names
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/ /g, '-')        // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '');   // Remove non-word characters
};

export const products = [
  {
    id: 1,
    name: "Saffron For Temple",
    description: "The finest saffron threads, perfect for special occasions",
    image: "/image2.jpeg",  // Correct path
    details: "Our Premium saffron represents the pinnacle of quality, carefully selected and processed to preserve its exceptional aroma, flavor, and color-giving properties.",
    price: "$299.99",
    weight: "10g"
  },
  {
    id: 2,
    name: "Organic Saffron",
    description: "Ideal for everyday cooking and professional kitchens",
    image: "/image3.jpeg",  // Correct path
    details: "Perfect for professional chefs and home cooks alike, our Culinary Grade saffron delivers consistent results in all your dishes.",
    price: "$199.99",
    weight: "10g"
  },
  {
    id: 3,
    name: "Culinary Saffron ",
    description: "Finely ground saffron for instant flavor and color",
    image: "/image4.jpeg",  // Correct path
    details: "Our premium saffron powder is perfect for recipes requiring instant dissolution and even distribution of flavor and color.",
    price: "$149.99",
    weight: "10g"
  },
  {
    id: 4,
    name: "Saffron For Gifting",
    description: "Luxuriously packaged sets for special gifting",
    image: "/image5.jpeg",  // Correct path
    details: "A carefully curated collection of our finest saffron products, presented in elegant packaging perfect for gifting.",
    price: "$399.99",
    weight: "15g"
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
