import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { products } from '../components/Products';

// Helper function to generate slugs from product names
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/ /g, '-')        // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '');   // Remove non-word characters
};

export default function ProductDetails() {
  const { slug } = useParams();  // Get slug from the URL

  // Find the product using the slug
  const product = products.find(p => generateSlug(p.name) === slug);

  // Redirect to home if the product is not found
  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="relative h-[60vh] mb-12">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-serif text-white">{product.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="h-full flex flex-col">
                <div>
                  <h2 className="text-3xl font-serif text-gray-900 mb-4">{product.name}</h2>
                  <p className="text-xl text-gray-600 mb-6">{product.description}</p>
                  <p className="text-gray-700 mb-8">{product.details}</p>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-serif text-orange-600">{product.price}</span>
                    <span className="text-gray-600">Weight: {product.weight}</span>
                  </div>
                  <button className="w-full btn-primary rounded-lg">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  