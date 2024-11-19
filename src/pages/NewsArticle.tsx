// import React from 'react';
// import { useParams, Navigate } from 'react-router-dom';
// import { newsArticles } from '../components/NewsSection';

// export default function NewsArticle() {
//   // Get the 'slug' from the URL params
//   const { slug } = useParams();

//   // Find the article based on the 'slug'
//   const article = newsArticles.find(a => a.slug === slug);

//   // If the article is not found, redirect to home
//   if (!article) {
//     return <Navigate to="/" replace />;
//   }

//   return (
//     <div className="pt-20">
//       {/* Title Section with Mirrored Gradient Background */}
//       <div className="relative h-[40vh]" style={{
//         background: 'linear-gradient(to right, red 50%, brown 50%)', 
//         backgroundSize: '200% 100%', 
//         backgroundPosition: 'left bottom, right bottom'
//       }}>
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white px-4">
//             <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{article.title}</h1>
//             <div className="flex items-center justify-center space-x-4 text-lg font-light">
//               <span>{article.source}</span>
//               <span>•</span>
//               <span>{article.date}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Article Content Section */}
//       <div className="max-w-3xl mx-auto px-4 py-12">
//         <div className="prose prose-lg prose-orange mx-auto">
//           <p className="text-xl text-gray-700 leading-relaxed">{article.content}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

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
      {/* Title Section with Mirrored Gradient Background */}
      <div 
        className="relative h-[40vh]" 
        style={{
          background: 'linear-gradient(to right, red 50%, brown 50%)',
          backgroundSize: '200% 100%',
          backgroundPosition: 'left bottom, right bottom'
        }}
      >
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

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-orange mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">{article.content}</p>
        </div>
      </div>
    </div>
  );
}
