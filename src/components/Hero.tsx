import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  description: string;
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    url: '/media3.png',
    title: 'Union Minsister Shri Parshottam Rupala harvesting saffron',
    description: 'Union Minsister Shri Parshottam Rupala harvesting saffron at our Lab '
  },
  {
    id: 2,
    type: 'video',
    url: '/video1.mp4',
    thumbnail: 'Union Minsister Shri Parshottam Rupala at Aashwina International Saffron',
    title: 'Union Minsister Shri Parshottam Rupala at Aashwina International Saffron',
    description: 'Shots from our latest vists'
  },
  {
    id: 3,
    type: 'image',
    url: '/media5.png',
    title: 'Saffron Corms Journey',
    description: 'The journey of saffron corms from our lab'
  },
  {
    id: 4,
    type: 'video',
    url: 'https://www.youtube.com/watch?v=NJ7m7umTGes',
    thumbnail: '/news6.png',
    title: 'Swarrnim University presents Aashwina Saffron',
    description: 'Thank you to Swarrnim University'
  }
];

const MediaGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goToNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIsPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const currentItem = mediaItems[currentIndex];

  const renderMedia = () => {
    if (currentItem.type === 'image') {
      return (
        <img
          src={currentItem.url}
          alt={currentItem.title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      );
    } else {
      return isPlaying ? (
        <iframe
          src={`${currentItem.url}?autoplay=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative w-full h-full">
          <img
            src={currentItem.thumbnail}
            alt={currentItem.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
              <Play className="w-10 h-10 text-black ml-1" />
            </div>
          </button>
        </div>
      );
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-32">
      <div className="relative aspect-[21/9] overflow-hidden rounded-lg shadow-xl bg-black">
        {renderMedia()}
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
          <h3 className="text-3xl font-semibold text-white mb-3">
            {currentItem.title}
          </h3>
          <p className="text-white/90 text-lg">
            {currentItem.description}
          </p>
        </div>

        {!isPlaying && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;