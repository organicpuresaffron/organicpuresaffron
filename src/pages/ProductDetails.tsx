import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { products } from '../components/Products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{product.description}</p>
            <p className="text-gray-700 mb-8">{product.details}</p>
            <div className="flex items-center justify-between mb-8">
              <span className="text-3xl font-serif text-gray-900">{product.price}</span>
              <span className="text-gray-600">Weight: {product.weight}</span>
            </div>
            <button className="btn-primary rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}