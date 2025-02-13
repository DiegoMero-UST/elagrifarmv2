'use client'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations].about

  return (
    <section className='p-5 flex flex-col items-center py-20 md:px-10 md:gap-10 xl:py-24 xl:px-20 2xl:px-36' id='about'>
      <h1 className='text-5xl font-bold xl:text-6xl 2xl:text-7xl text-[#EF2D56] pb-10'>{t.title}</h1>
      <div className='flex flex-col gap-5 md:flex-row xl:gap-16 pb-20'>
        <div className='flex flex-col gap-5 md:basis-1/2'>
          <h2 className='text-3xl font-bold border-b border-[#EF2D56] xl:text-4xl 2xl:text-5xl'>{t.ourStory}</h2>
          <p className='text-xl xl:text-2xl 2xl:text-3xl'>{t.paragraph1}</p>
          <p className='text-xl xl:text-2xl 2xl:text-3xl'>{t.paragraph2}</p>
        </div>
        <Image
          src="/aboutpic.jpeg"
          alt="Our store front"
          width={1000}
          height={500}
          className='rounded-xl shadow-lg object-cover md:basis-1/2 md:w-[300px]'
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center'>{t.values.title}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
          <div className='flex flex-col items-center p-6 rounded-xl bg-gray-50 shadow-md'>
            <div className='text-4xl md:text-5xl text-emerald-600 mb-4'>
              <i className='fas fa-leaf'></i>
            </div>
            <h3 className='text-2xl md:text-3xl font-bold mb-2'>{t.values.sustainability}</h3>
            <p className='text-xl md:text-2xl text-center text-gray-600'>{t.values.sustainabilityDescription}</p>
          </div>

          <div className='flex flex-col items-center p-6 rounded-xl bg-gray-50 shadow-md'>
            <div className='text-4xl md:text-5xl text-amber-500 mb-4'>
              <i className='fas fa-star'></i>
            </div>
            <h3 className='text-2xl md:text-3xl font-bold mb-2'>{t.values.quality}</h3>
            <p className='text-xl md:text-2xl text-center text-gray-600'>{t.values.qualityDescription}</p>
          </div>

          <div className='flex flex-col items-center p-6 rounded-xl bg-gray-50 shadow-md sm:col-span-2 md:col-span-1'>
            <div className='text-4xl md:text-5xl text-red-500 mb-4'>
              <i className='fas fa-heart'></i>
            </div>
            <h3 className='text-2xl md:text-3xl font-bold mb-2'>{t.values.freshness}</h3>
            <p className='text-xl md:text-2xl text-center text-gray-600'>{t.values.freshnessDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}