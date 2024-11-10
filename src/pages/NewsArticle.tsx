import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { newsArticles } from '../components/NewsSection';

export default function NewsArticle() {
  const { id } = useParams();
  const article = newsArticles.find(a => a.id === Number(id));

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      <div className="relative h-[40vh]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{article.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <span>{article.source}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-orange mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">{article.content}</p>
        </div>
      </div>
    </div>
  );
}