'use client'

import Image from 'next/image';
import Link from 'next/link';
import FloatingFruits from './FloatingFruits';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-100">
      <FloatingFruits />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <Image src="/Logo.png" alt="Logo" width={1000} height={1000} />
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl xl:text-3xl 2xl:text-4xl">
          {t.hero.description}
        </p>
        <Link href="#products">
          <button className="cursor-pointer hover:bg-gradient-to-r hover:from-[#EF2D56] bg-[#EF2D56] hover:to-[#FF8DA9] text-white font-semibold py-3 px-8 rounded-full xl:text-2xl 2xl:text-3xl">
            {t.hero.button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;