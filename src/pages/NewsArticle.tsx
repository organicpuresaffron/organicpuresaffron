import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { newsArticles } from '../components/NewsSection';

export default function NewsArticle() {
  const { slug } = useParams();
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      <div className="relative h-[50vh]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <div className="flex items-center justify-center mb-4">
              <span className="text-lg">{article.source}</span>
              <span className="mx-3">•</span>
              <span className="text-lg">{article.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{article.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-orange mx-auto">
          {article.content.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph.trim()}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  );
}