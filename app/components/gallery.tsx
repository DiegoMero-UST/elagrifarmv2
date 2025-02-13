'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].gallery;
  const [showAll, setShowAll] = useState(false);

  const images = [
    {
      id: 1,
      src: '/gallery4.png',
      alt: 'Fruit 1',
      className: 'col-span-2 row-span-3'
    },
    {
      id: 2,
      src: '/gallery2.png',
      alt: 'Fruit 2',
      className: 'col-span-2 row-span-2'
    },
    {
      id: 3,
      src: '/gallery3.png',
      alt: 'Fruit 3',
      className: 'col-span-1 row-span-2'
    },
    {
      id: 4,
      src: '/gallery6.png',
      alt: 'Fruit 4',
      className: 'col-span-2 row-span-1'
    },
    {
      id: 5,
      src: '/gallery1.png',
      alt: 'Fruit 5',
      className: 'col-span-1 row-span-1'
    }
  ];

  const mobileImages = showAll ? images : images.slice(0, 3);

  return (
    <section className="py-12 px-4 md:py-24">
      <h2 className="text-4xl font-bold text-center mb-12 xl:text-5xl 2xl:text-6xl">{t.title}</h2>
      
      {/* Desktop View (Mosaic) */}
      <div className="hidden md:grid grid-cols-5 gap-4 max-w-5xl mx-auto">
        {images.map((image) => (
          <div 
            key={image.id}
            className={`${image.className} relative overflow-hidden group rounded-lg shadow-md`}
          >
            <div className="aspect-square relative w-full h-full transition-transform duration-300 group-hover:scale-105">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View (Vertical) */}
      <div className="md:hidden">
        <div className="space-y-4">
          {mobileImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-square w-full overflow-hidden group"
            >
              <div className="w-full h-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && images.length > 3 && (
          <div className="relative mt-4">
            <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            <button
              onClick={() => setShowAll(true)}
              className="w-full py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              {t.showMore || 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
