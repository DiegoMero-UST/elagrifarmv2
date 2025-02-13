'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { language, setLanguage } = useLanguage()
  const t = translations[language as keyof typeof translations]

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="p-5 md:px-10 xl:px-20 2xl:px-36">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" >
              <Image
                src="/Logo.png"
                alt="FruitsLife Logo"
                width={150}
                height={100}
                className="object-contain xl:w-48"
                priority
              />
            </Link>
          </div>

          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col h-12 w-12 justify-center items-center group"
            >
              <div
                className={`h-1 w-6 my-0.5 rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <div
                className={`h-1 w-6 my-0.5 rounded-full bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                  }`}
              />
              <div
                className={`h-1 w-6 my-0.5 rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-10 2xl:gap-20 md:text-2xl xl:text-3xl">
            <Link href="#about" className="hover:text-[#EF2D56]">{t.navbar.about}</Link>
            <Link href="#products" className="hover:text-[#EF2D56]">{t.navbar.products}</Link>
            <Link href="#contact" className="hover:text-[#EF2D56]">{t.navbar.contact}</Link>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="rounded-md hover:text-[#EF2D56] cursor-pointer"
            >
              <option value="en" className="hover:text-[#EF2D56] cursor-pointer">EN</option>
              <option value="es" className="hover:text-[#EF2D56] cursor-pointer">ES</option>
            </select>
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}
        >
          <div className="px-2 pt-2 pb-3 grid grid-cols-2">
            <div className='flex flex-col gap-5'>
              <Link
                href="#about"
                className="block rounded-md hover:bg-gray-100 text-4xl"
              >
                {t.navbar.about}
              </Link>
              <Link
                href="#products"
                className="block rounded-md hover:bg-gray-100 text-4xl"
              >
                {t.navbar.products}
              </Link>
              <Link
                href="#contact"
                className="block rounded-md hover:bg-gray-100 text-4xl"
              >
                {t.navbar.contact}
              </Link>
            </div>

            <select
              value={language}
              onChange={handleLanguageChange}
              className="self-start justify-self-end text-xl"
            >
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;