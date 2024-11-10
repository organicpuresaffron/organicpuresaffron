import React from 'react';

const products = [
  {
    id: 1,
    name: "Premium Grade I",
    description: "The finest saffron threads, perfect for special occasions",
    image: "https://images.unsplash.com/photo-1578866258864-cb4a29e9d9fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    details: "Our Premium Grade I saffron represents the pinnacle of quality, carefully selected and processed to preserve its exceptional aroma, flavor, and color-giving properties.",
    price: "$299.99",
    weight: "10g"
  },
  {
    id: 2,
    name: "Culinary Grade",
    description: "Ideal for everyday cooking and professional kitchens",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    details: "Perfect for professional chefs and home cooks alike, our Culinary Grade saffron delivers consistent results in all your dishes.",
    price: "$199.99",
    weight: "10g"
  },
  {
    id: 3,
    name: "Saffron Powder",
    description: "Finely ground saffron for instant flavor and color",
    image: "https://images.unsplash.com/photo-1599087052655-4c39d8102089?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    details: "Our premium saffron powder is perfect for recipes requiring instant dissolution and even distribution of flavor and color.",
    price: "$149.99",
    weight: "10g"
  },
  {
    id: 4,
    name: "Gift Collection",
    description: "Luxuriously packaged sets for special gifting",
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
            <div key={product.id} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}