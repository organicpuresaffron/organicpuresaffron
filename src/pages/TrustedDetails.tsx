import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { trustedOrganizations } from '../components/TrustedBy';

export default function TrustedDetails() {
  const { id } = useParams();
  const org = trustedOrganizations.find(o => o.id === Number(id));

  if (!org) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      <div className="relative h-[40vh]">
        <img
          src={org.image}
          alt={org.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{org.name}</h1>
            <p className="text-xl max-w-2xl mx-auto">{org.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-orange mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">{org.content}</p>
        </div>
      </div>
    </div>
  );
}