'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].footer;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.about.title}</h3>
            <p className="text-gray-400">{t.about.description}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.contact.title}</h3>
            <div className="space-y-2 text-gray-400">
              <p>{t.contact.address}</p>
              <p>{t.contact.email}</p>
              <p>{t.contact.phone}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
