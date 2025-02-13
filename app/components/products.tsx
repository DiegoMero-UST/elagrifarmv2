'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Products() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="py-12 px-4 md:py-24" id='products'>
      <h2 className="text-5xl font-bold text-center mb-16 xl:text-6xl 2xl:text-7xl text-[#EF2D56]">{t.products.title}</h2>
      

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 md:px-5 mx-auto xl:px-20 2xl:px-32">
        {t.products.items.map((fruit, index) => (
          <div 
            key={index}

            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={fruit.image}
                alt={fruit.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
              />
              <div className="absolute inset-0  transition-opacity duration-300" />
            </div>
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-4xl font-bold mb-4">{fruit.name}</h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">{fruit.description}</p>
              
              {/* Details that appear on hover */}
              <div className="space-y-4 text-lg text-gray-600">
                <div>
                  <p className="font-semibold mb-1">Origin:</p>
                  <p>{fruit.origin}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Benefits:</p>
                  <p>{fruit.benefits}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-8">
        {t.products.items.map((fruit, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative aspect-square">
              <Image
                src={fruit.image}
                alt={fruit.name}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">{fruit.name}</h3>
                  <p className="text-white/90 text-xl">{fruit.description}</p>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <div>
                <p className="font-semibold mb-1 text-lg">Origin:</p>
                <p className="text-lg text-gray-600">{fruit.origin}</p>
              </div>
              <div>
                <p className="font-semibold mb-1 text-lg">Benefits:</p>
                <p className="text-lg text-gray-600">{fruit.benefits}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}