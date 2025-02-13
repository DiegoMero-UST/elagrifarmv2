"use client";
import { translations } from '../translations';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].contact;

  return (
    <section className="py-16 bg-gray-50" id='contact'>
      <div className="container mx-auto px-5 md:px-10 xl:px-20 2xl:px-32">
        <h2 className="text-4xl font-bold text-center mb-12 xl:text-5xl 2xl:text-6xl">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <i className="fa-solid fa-phone text-4xl text-[#EF2D56]"></i>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              {t.phone.title}
            </h3>
            <p className="text-gray-600 text-center text-lg">
              {t.phone.value}
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <i className="fa-solid fa-envelope text-4xl text-[#EF2D56]"></i>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              {t.email.title}
            </h3>
            <p className="text-gray-600 text-center text-lg">
              {t.email.value}
            </p>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <i className="fa-solid fa-location-dot text-4xl text-[#EF2D56]"></i>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              {t.address.title}
            </h3>
            <p className="text-gray-600 text-center text-lg">
              {t.address.value}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-2xl mx-auto">
          <form className="space-y-6"
            action="https://formsubmit.co/55679a604f6eff68bcaef2ea86a14f77" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder={t.form.name}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF2D56] focus:border-transparent"

              />
              <input
                name="email"
                type="email"
                placeholder={t.form.email}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF2D56] focus:border-transparent"
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder={t.form.subject}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF2D56] focus:border-transparent"
            />

            <textarea
              name="message"
              placeholder={t.form.message}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF2D56] focus:border-transparent"

            />
            <button
              type="submit"
              className="w-full bg-[#EF2D56] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#D91F45] transition-colors duration-300"
            >
              {t.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
