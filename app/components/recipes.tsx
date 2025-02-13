'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Recipes = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].recipes;

  return (
    <section className="py-20 px-5 md:px-10 xl:px-20 2xl:px-36 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-[#EF2D56] xl:text-6xl 2xl:text-7xl">
          {t.title}
        </h2>
        <p className="text-3xl text-center mb-12 xl:text-4xl 2xl:text-5xl">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 xl:text-3xl 2xl:text-4xl">
                  {recipe.name}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-xl font-semibold mb-2 text-[#EF2D56]">
                    {language === 'en' ? 'Ingredients' : 'Ingredientes'}:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="text-lg">{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-xl font-semibold mb-2 text-[#EF2D56]">
                    {language === 'en' ? 'Instructions' : 'Instrucciones'}:
                  </h4>
                  <p className="text-gray-600 text-lg">{recipe.instructions}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#EF2D56]">
                    {language === 'en' ? 'Benefits' : 'Beneficios'}:
                  </h4>
                  <p className="text-gray-600 text-lg">{recipe.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
