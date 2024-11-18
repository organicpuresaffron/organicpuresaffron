import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

export const newsArticles = [
  {
    id: 1,
    source: "The New York Times",
    title: "The Rising Demand for Premium Saffron in Global Cuisine",
    date: "March 15, 2024",
    content: "The demand for premium saffron has seen unprecedented growth in recent years, with top chefs and home cooks alike seeking out the highest quality spices for their culinary creations...",
    image: "/images/news1.jpg"
  },
  {
    id: 2,
    source: "Forbes",
    title: "Organic Pure Saffron: Setting New Standards in Spice Industry",
    date: "March 10, 2024",
    content: "In an industry often criticized for its lack of transparency, Organic Pure Saffron has emerged as a beacon of authenticity and quality...",
    image: "/images/news2.jpg"
  },
  {
    id: 3,
    source: "Food & Wine Magazine",
    title: "How This Premium Saffron is Revolutionizing Modern Cooking",
    date: "March 5, 2024",
    content: "The culinary world is experiencing a renaissance in spice usage, with premium saffron leading the charge in innovative cooking techniques...",
    image: "/images/news3.jpg"
  }
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">In the News</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Link 
              key={article.id} 
              to={`/news/${article.id}`} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center mb-4">
                <Newspaper className="h-6 w-6 text-orange-600" />
                <span className="ml-2 text-sm text-gray-600">{article.source}</span>
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">{article.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.date}</span>
                <span className="text-orange-600 hover:text-orange-700 font-medium">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}